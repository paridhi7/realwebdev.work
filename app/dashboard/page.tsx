import { fetchPostsByCurrentUser } from "../lib/data";
import Post from "../ui/post";

export default async function Dashboard() {
  const posts = await fetchPostsByCurrentUser();
  if (posts.length === 0) {
    return <div className="font-bold text-lg">No posts yet!</div>;
  }
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
