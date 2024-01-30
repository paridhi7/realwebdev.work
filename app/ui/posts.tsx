import { Post as PostType } from "@prisma/client";
import Post from "./post";

export default async function Posts({ posts }: { posts: PostType[] }) {
  return (
    <div className="space-y-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
