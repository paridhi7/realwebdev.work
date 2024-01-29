import { Post } from "@prisma/client";

export default async function Posts({ posts }: { posts: Post[] }) {
  return (
    <ul className="pl-4">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
