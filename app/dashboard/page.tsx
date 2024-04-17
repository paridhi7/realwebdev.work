import { fetchPostsByCurrentUser } from "../lib/data";
import { DeletePost, UpdatePost } from "../ui/dashboard/buttons";
import Post from "../ui/post";

export default async function Dashboard() {
  const posts = await fetchPostsByCurrentUser();
  if (posts.length === 0) {
    return <div className="font-bold text-lg">No posts yet!</div>;
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="flex flex-col h-full">
          <div className="flex-grow h-full">
            <Post post={post} />
          </div>
          <div className="flex justify-end gap-2 whitespace-nowrap px-6 py-4 text-sm">
            <UpdatePost id={post.id} />
            <DeletePost id={post.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
