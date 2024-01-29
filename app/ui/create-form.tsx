"use client";

import Link from "next/link";
import { Button } from "./button";
import { createPost } from "../lib/actions";

export default function Form() {
  return (
    <form action={createPost}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="mb-4">
          <label htmlFor="title" className="mb-2 block text-sm font-medium">
            Title *
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="New project idea here..."
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="mb-2 block text-sm font-medium"
          >
            Details *
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Add a description that includes the core features and workings of the project"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="pathToMoney"
            className="mb-2 block text-sm font-medium"
          >
            Path to making $100 *
          </label>
          <textarea
            id="pathToMoney"
            name="pathToMoney"
            placeholder="Write the easiest way you think this idea could make atleast a $100"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mockupImages"
            className="mb-2 block text-sm font-medium"
          >
            Rough Mockup Image
          </label>
          <input
            type="file"
            id="mockupImages"
            name="mockupImages"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            required
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Post</Button>
      </div>
    </form>
  );
}
