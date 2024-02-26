"use server";

import { z } from "zod";
import prisma from "../db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { fetchCurrentUser } from "./data";

const FormSchema = z.object({
  title: z.string(),
  description: z.string(),
  pathToMoney: z.string(),
  mockupImages: z.string(),
});

export async function createPost(formData: FormData) {
  const user = await fetchCurrentUser();

  if (!user) {
    throw new Error("No user found");
  }

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

export async function createSubmission(formData: FormData) {
  const user = await fetchCurrentUser();
  console.log(user);
  console.log(formData);
}
