import prisma from "@/app/db";
import { getServerSession } from "next-auth/next";
import { options } from "../api/auth/[...nextauth]/options";

export async function fetchPosts() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });
  return posts;
}

export async function fetchPostById(id: string) {
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
    include: {
      author: true,
    },
  });
  return post;
}

export async function upsertUser(userData: {
  name?: string;
  email: string;
  image?: string;
}) {
  const user = await prisma.user.upsert({
    where: { email: userData.email },
    update: {
      name: userData.name,
      image: userData.image,
    },
    create: {
      email: userData.email,
      name: userData.name,
      image: userData.image,
    },
  });

  return user;
}

export async function fetchCurrentUser() {
  const session = await getServerSession(options);
  if (!session || !session.user?.email) return null;
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return user;
}
