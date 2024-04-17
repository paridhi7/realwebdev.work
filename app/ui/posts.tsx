import type { PostWithAuthor } from "@/types";
import Post from "./post";

export default async function Posts({ posts }: { posts: PostWithAuthor[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
