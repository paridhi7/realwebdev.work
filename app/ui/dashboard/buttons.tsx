"use client";

import { useRef, useState } from "react";
import { deletePost } from "@/app/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import useOutsideClick from "../hooks/outside-click";

export function UpdatePost({ id }: { id: string }) {
  return (
    <Link
      href={`/post/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}

export function DeletePost({ id }: { id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => setIsModalOpen(false));

  const deletePostWithId = deletePost.bind(null, id);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-4" />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div
            className="bg-white px-4 py-8 md:p-8 rounded-lg md:w-auto w-11/12"
            ref={modalRef}
          >
            <p className="font-bold text-sm md:text-lg text-wrap">
              Are you sure you want to delete this project idea? 🥹
            </p>
            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded text-white bg-gray-500"
              >
                Cancel
              </button>
              <form action={deletePostWithId}>
                <button className="px-4 py-2 rounded text-white bg-red-500">
                  Confirm
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
