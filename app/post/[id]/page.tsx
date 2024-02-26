import { fetchPostById } from "@/app/lib/data";
import Form from "@/app/ui/create-submission";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
// import { PostWithAuthor } from "@/types";

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await fetchPostById(params.id);
  if (!post) {
    return <div>Page Not Found!</div>;
  }

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(new Date(post.createdAt));
  const userProfilePic = post.author.image;
  const userName = post.author.name;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between align-middle gap-8">
        <div className="flex justify-center">
          <Image
            src={`data:image/jpeg;base64,${post.mockupImages}`}
            width={500}
            height={250}
            alt="Mockup Image"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col align-middle text-left justify-center w-1/2">
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
            <div className="ml-8 text-gray-700 text-sm"> • {formattedDate}</div>
          </div>
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <p className="text-lg">{post.description}</p>
          <div className="my-4">
            <h2 className="text-lg font-semibold">Path to $100</h2>
            <p>{post.pathToMoney}</p>
          </div>
        </div>
      </div>
      <hr className="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10"></hr>
      <div className="text-xl font-bold">Submissions ⬇️</div>
      <div>
        <Form />
      </div>
    </div>
  );
}
