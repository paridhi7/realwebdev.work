"use server";

import { z } from "zod";
import prisma from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

const FormSchema = z.object({
  title: z.string(),
  description: z.string(),
  pathToMoney: z.string(),
  mockupImages: z.string(),
});

export async function createPost(formData: FormData) {
  const session = await getServerSession(options);
  if (!session?.user?.email) {
    throw new Error("User email is required");
  }
  const email = session.user.email;
  const name = session.user.name ?? "";
  const image = session.user.image ?? "";

  const user = await prisma.user.upsert({
    where: { email: email },
    update: {},
    create: {
      email: email,
      name: name,
      image: image,
    },
  });

  const file = formData.get("mockupImages") as File | null;
  let mockupImagesBase64: string | null = null;

  if (file) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    mockupImagesBase64 = buffer.toString("base64");
  }

  const { title, description, pathToMoney, mockupImages } = FormSchema.parse({
    title: formData.get("title"),
    description: formData.get("description"),
    pathToMoney: formData.get("pathToMoney"),
    mockupImages: mockupImagesBase64,
  });

  await prisma.post.create({
    data: {
      title: title,
      description: description,
      pathToMoney: pathToMoney,
      mockupImages: mockupImages,
      authorId: user.id,
    },
  });

  revalidatePath("/");
  redirect("/");
}
