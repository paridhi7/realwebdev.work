import { fetchCommentsByPostId, fetchPostById } from "@/app/lib/data";
import Form from "@/app/ui/create-submission";
import { FaUser } from "react-icons/fa";
import Comment from "../../ui/comment";
import ImageViewer from "@/app/ui/post/image-viewer";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPostById(params.id);
  if (!post) {
    return <div>Page Not Found!</div>;
  }
  const comments = await fetchCommentsByPostId(params.id);

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(post.createdAt));
  const userProfilePic = post.author.image;
  const userName = post.author.name;

  return (
    <div className="container mx-auto px-2 py-40 md:px-4 md:py-44">
      <div className="flex flex-col md:flex-row justify-start align-middle gap-8">
        {post.mockupImages && (
          <div className="flex justify-center">
            <ImageViewer mockupImages={post.mockupImages} />
          </div>
        )}
        <div
          className={`flex flex-col align-middle text-left justify-center ${
            post.mockupImages ? "md:w-2/5" : "md:w-full"
          }`}
        >
          <div className="flex items-center mb-4">
            {userProfilePic ? (
              <img
                src={userProfilePic}
                alt="User profile picture"
                className="w-8 h-8 rounded-full"
              />
            ) : (
              <div className="h-10 w-10 rounded-full border-2 border-gray-600 focus:border-white flex items-center justify-center">
                <FaUser className="text-xl" />
              </div>
            )}
            <div className="ml-2 text-gray-700 text-sm">{userName}</div>
            <div className="ml-2 md:ml-8 text-gray-700 text-sm">
              {" "}
              • {formattedDate}
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-lg whitespace-pre-wrap">{post.description}</p>
          <div className="my-4">
            <h2 className="text-lg font-semibold">Path to $100</h2>
            <p className="whitespace-pre-wrap">{post.pathToMoney}</p>
          </div>
        </div>
      </div>
      <hr className="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
      <div className="text-xl font-bold">Submissions ⬇️</div>
      <div>
        <Form postId={post.id} />
      </div>
      <div className="pt-12 flex flex-wrap gap-4">
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
