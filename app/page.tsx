import { RoughNotation } from "react-rough-notation";
import { fetchPosts } from "./lib/data";
import Posts from "./ui/posts";
import NavBar from "./ui/navbar";
import Footer from "./ui/footer";

export default async function Home() {
  const posts = await fetchPosts();
  return (
    <main className="flex min-h-screen flex-col items-center px-24 pb-24">
      <NavBar />
      <div className="text-center pt-40 max-w-6xl border-b-2 border-orange-400 border-dashed pb-44">
        <h1 className="text-5xl font-bold">
          Unique side project ideas you can{" "}
          <RoughNotation type="highlight" show={true} color="#f9629f">
            <span>build</span>
          </RoughNotation>{" "}
          to showcase your{" "}
          <RoughNotation type="underline" show={true} color="orange">
            <span>skills and earn money</span>
          </RoughNotation>
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600">
          That todo list app isn&apos;t going to get you your next job.
        </p>
        <p className="text-xl leading-8 text-gray-600">
          Build real projects to standout from the herd in the current job
          market.
        </p>
        <p className="text-xl leading-8 text-gray-600 mb-20">
          (Or earn enough to break free?)
        </p>
        <Posts posts={posts} />
      </div>
      <Footer />
    </main>
  );
}
