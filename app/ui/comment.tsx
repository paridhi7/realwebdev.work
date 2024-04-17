import type { CommentWithUser } from "@/types";
import { FaUser } from "react-icons/fa";

export default function Comment({ comment }: { comment: CommentWithUser }) {
  const userProfilePic = comment.user.image;
  const userName = comment.user.name;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(comment.createdAt));

  return (
    <div className="flex flex-col align-middle text-left justify-center border-violet-400 border-2 rounded-md mb-4 px-4 py-2">
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
        <div className="ml-2 text-gray-700 text-sm"> • {formattedDate}</div>
      </div>
      <div className="flex flex-wrap md:flex-nowrap items-center mb-4 gap-2 md:gap-0 md:space-x-4">
        <a
          href={comment.githubUrl}
          className="w-full text-center px-8 py-2 text-sm md:text-lg md:w-auto border border-cyan-600 rounded-md text-cyan-600 bg-white hover:underline"
        >
          Github URL 🚀
        </a>
        <a
          href={comment.appUrl}
          className="w-full text-center px-8 py-2 text-sm md:text-lg md:w-auto border border-pink-600 rounded-md text-pink-600 bg-white hover:underline"
        >
          Live App 🤩
        </a>
        {comment.loomUrl && (
          <a
            href={comment.loomUrl}
            className="w-full text-center px-8 py-2 text-sm md:text-lg md:w-auto border border-emerald-600 rounded-md text-emerald-600 bg-white hover:underline"
          >
            Demo Video 🎥
          </a>
        )}
      </div>
    </div>
  );
}
