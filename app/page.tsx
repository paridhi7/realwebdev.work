import { RoughNotation } from "react-rough-notation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-center pt-20 max-w-6xl">
        <h1 className="text-5xl font-bold">
          Unique side project ideas you can{" "}
          <RoughNotation type="highlight" show={true} color="#f9629f">
            <span>build</span>
          </RoughNotation>{" "}
          to showcase your{" "}
          <RoughNotation type="underline" show={true} color="orange">
            <span>web development skills</span>
          </RoughNotation>
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600">
          That todo list app isn&apos;t going to get you your next job.
        </p>
        <p className="text-xl leading-8 text-gray-600">
          Build real projects to standout from the herd in the current job
          market.
        </p>
      </div>
    </main>
  );
}
