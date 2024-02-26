import { Post, User, Comment } from "@prisma/client";

export type PostWithAuthor = Post & {
  author: User;
};

export type CommentWithUser = Comment & {
  user: User;
};
