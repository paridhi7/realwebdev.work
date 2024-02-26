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
    where: { id: id },
    include: {
      author: true,
    },
  });
  return post;
}

export async function fetchCurrentUser() {
  const session = await getServerSession(options);
  if (!session || !session.user?.email) return null;
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return user;
}

export async function fetchCommentsByPostId(postId: string) {
  const comments = await prisma.comment.findMany({
    where: {
      postId: postId,
    },
    orderBy: {
      createdAt: "asc",
    },
    include: {
      user: true,
    },
  });
  return comments;
}
