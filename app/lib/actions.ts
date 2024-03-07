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

const UpdatePost = z.object({
  title: z.string(),
  description: z.string(),
  pathToMoney: z.string(),
  mockupImages: z.string().optional(),
});

const CommentSchema = z.object({
  githubUrl: z.string(),
  appUrl: z.string(),
  loomUrl: z.string().optional(),
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

export async function createSubmission(postId: string, formData: FormData) {
  const user = await fetchCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const { githubUrl, appUrl, loomUrl } = CommentSchema.parse({
    githubUrl: formData.get("githubUrl"),
    appUrl: formData.get("appUrl"),
    loomUrl: formData.get("loomUrl"),
  });

  await prisma.comment.create({
    data: {
      githubUrl: githubUrl,
      appUrl: appUrl,
      loomUrl: loomUrl,
      postId: postId,
      userId: user.id,
    },
  });

  revalidatePath(postId);
  redirect(postId);
}

export async function updatePost(postId: string, formData: FormData) {
  const file = formData.get("mockupImages");
  console.log("hi", file);
  let mockupImagesBase64: string | null = null;

  if (file && file instanceof File && file.size > 0) {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    mockupImagesBase64 = buffer.toString("base64");
  }

  const updatePayload = UpdatePost.parse({
    title: formData.get("title"),
    description: formData.get("description"),
    pathToMoney: formData.get("pathToMoney"),
  });

  if (mockupImagesBase64 !== null) {
    updatePayload.mockupImages = mockupImagesBase64;
  }

  await prisma.post.update({
    where: {
      id: postId,
    },
    data: updatePayload,
  });

  revalidatePath(`/post/${postId}`);
  redirect(`/post/${postId}`);
}
