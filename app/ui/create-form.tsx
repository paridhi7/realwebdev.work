"use client";

import Link from "next/link";
import { Button } from "./button";
import { createPost } from "../lib/actions";
import { useState } from "react";

export default function Form() {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form action={createPost} className="pt-32 px-6 md:px-12">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        <div className="text-lg font-bold mb-8">Create Post</div>
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
            Rough Mockup Image *
          </label>
          <input
            type="file"
            id="mockupImages"
            name="mockupImages"
            className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
            required
            onChange={handleFileChange}
          />
        </div>
        {imagePreviewUrl && (
          <div className="mt-4">
            <img
              src={imagePreviewUrl}
              alt="Preview"
              className="max-w-60 max-h-40"
            />
          </div>
        )}
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
