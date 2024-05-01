import type { PostWithAuthor } from "@/types";
import Post from "./post";

export default async function Posts({ posts }: { posts: PostWithAuthor[] }) {
  return (
    <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
