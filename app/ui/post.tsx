import type { PostWithAuthor } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

const Post = ({ post }: { post: PostWithAuthor }) => {
  const userProfilePic = post.author.image;
  const userName = post.author.name;

  const formattedDate = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
  });

  return (
    <div className="flex flex-col bg-white shadow-lg rounded-lg p-6 mb-4">
      <div className="flex items-center mb-4">
        {userProfilePic ? (
          <img
            src={userProfilePic}
            alt="User profile picture"
            className="w-10 h-10 rounded-full"
          />
        ) : (
          <div className="h-10 w-10 rounded-full border-2 border-gray-600 focus:border-white flex items-center justify-center">
            <FaUser className="text-xl" />
          </div>
        )}
        <div className="ml-2 text-gray-700">{userName}</div>
      </div>
      {post.mockupImages && (
        <div className="mb-4">
          <Image
            src={`data:image/jpeg;base64,${post.mockupImages}`}
            width={320}
            height={180}
            alt="Project mockup"
            className="rounded-lg"
          />
        </div>
      )}
      <h3 className="text-xl font-bold text-left">{post.title}</h3>
      <div className="text-gray-500 text-sm mb-4 text-left">
        {formattedDate}
      </div>
      <div className="flex justify-between items-center mt-auto">
        <div className="flex items-center">
          <span className="text-gray-700 text-sm mr-2">▲</span>
          <span className="text-gray-700 text-sm mr-4">
            {post.upvotes} Upvotes
          </span>
          <span className="text-gray-700 text-sm mr-2">💬</span>
          <span className="text-gray-700 text-sm">
            {/* {post.commentsCount} Comments */}0 Comments
          </span>
        </div>
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
  );
};

export default Post;
