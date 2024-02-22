// utils/fetchPosts.ts
import prisma from "@/app/db";

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
