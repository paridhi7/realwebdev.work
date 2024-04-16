import { fetchCommentsByCurrentUser } from "@/app/lib/data";
import Comment from "../../ui/comment";
import Link from "next/link";
import {
  DeleteSubmission,
  UpdateSubmission,
} from "@/app/ui/dashboard/submissions/buttons";

export default async function Submissions() {
  const comments = await fetchCommentsByCurrentUser();
  if (comments.length === 0) {
    return <div className="font-bold text-lg">No submissions yet!</div>;
  }
  return (
    <div className="flex flex-wrap gap-4">
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="flex flex-col align-middle justify-center mb-8"
        >
          <Link
            href={`/post/${comment.post.id}`}
            className="mb-2 text-center font-semibold hover:underline"
          >
            {comment.post.title.length > 47
              ? `${comment.post.title.substring(0, 44)}...`
              : comment.post.title}
          </Link>
          <Comment comment={comment} />
          <div className="flex justify-end gap-2 whitespace-nowrap px-6 text-sm">
            <UpdateSubmission comment={comment} />
            <DeleteSubmission id={comment.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
