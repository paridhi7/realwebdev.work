import { Post as PostType } from "@prisma/client";
import { formatDistanceToNow } from "date-fns";

const Post = ({ post }: { post: PostType }) => {
  // Placeholder data for user's profile picture and name
  const userProfilePic = "/path-to-default-profile-pic.jpg"; // Replace with actual path
  const userName = "Username"; // Replace with actual user name once authentication is added

  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 mb-4">
      <div className="flex items-start mb-4">
        <img
          src={userProfilePic}
          alt="User profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div className="flex flex-col items-start w-full">
          <div className="font-semibold">{userName}</div>
          <div className="text-gray-500 text-sm">{formattedDate}</div>
          <h3 className="text-xl font-bold my-4">{post.title}</h3>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <span className="text-gray-700 text-sm mr-2">▲</span>
                <span className="text-gray-700 text-sm">
                  {post.upvotes} Upvotes
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 text-sm mr-2">💬</span>
                <span className="text-gray-700 text-sm">
                  {/* {post.commentsCount} Comments */}0 Comments
                </span>
              </div>
            </div>
            <div>
              <button aria-label="Bookmark post">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 3v17l7-5 7 5V3z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
