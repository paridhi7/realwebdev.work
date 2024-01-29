// utils/fetchPosts.ts
import prisma from "@/app/db";

export async function fetchPosts() {
  const posts = await prisma.post.findMany();
  return posts;
}
