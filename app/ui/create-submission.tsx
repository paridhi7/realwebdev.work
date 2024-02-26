"use client";

import { Button } from "./button";
import { createSubmission } from "../lib/actions";
import { useState } from "react";

export default function Form({ postId }: { postId: string }) {
  const updateSubmissionWithPostId = createSubmission.bind(null, postId);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  const closeForm = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="container">
      <button
        onClick={toggleFormVisibility}
        className="mt-4 px-8 py-2 bg-slate-700 text-white rounded hover:bg-slate-500 transition duration-300"
      >
        + Create a Submission
      </button>
      {isFormVisible && (
        <form action={updateSubmissionWithPostId} className="mt-8">
          <div className="rounded-md bg-gray-50 p-4 md:p-6">
            <div className="mb-4">
              <input
                id="githubUrl"
                name="githubUrl"
                type="url"
                placeholder="Add a link to your code on Github"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                id="appUrl"
                name="appUrl"
                type="url"
                placeholder="Add a link of your deployed application"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                required
              />
            </div>
            <div className="mb-4">
              <input
                id="loomUrl"
                name="loomUrl"
                type="url"
                placeholder="Add a link to your demo Loom (optional)"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end gap-4">
            <button
              type="button"
              onClick={closeForm}
              className="px-8 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 text-sm transition duration-300"
            >
              Cancel
            </button>
            <Button type="submit" className="px-8">
              Submit
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
