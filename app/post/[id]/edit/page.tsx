import { fetchPostById } from "@/app/lib/data";
import EditPostForm from "@/app/ui/dashboard/edit-posts-form";

export default async function Page({ params }: { params: { id: string } }) {
  const post = await fetchPostById(params.id);
  return <>{post && <EditPostForm post={post} />}</>;
}
