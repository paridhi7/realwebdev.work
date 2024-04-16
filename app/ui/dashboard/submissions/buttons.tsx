"use client";

import { useRef, useState } from "react";
import { deleteSubmission, updateSubmission } from "@/app/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import useOutsideClick from "../../hooks/outside-click";
import { CommentWithUserAndPost } from "@/types";

export function UpdateSubmission({
  comment,
}: {
  comment: CommentWithUserAndPost;
}) {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const editModalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(editModalRef, () => setIsEditModalOpen(false));

  const updateSubmissionWithId = updateSubmission.bind(null, comment.id);

  return (
    <>
      <button
        onClick={() => setIsEditModalOpen(true)}
        className="rounded-md border p-2 hover:bg-gray-100"
      >
        <span className="sr-only">Edit</span>
        <PencilIcon className="w-5" />
      </button>
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-lg w-4/12" ref={editModalRef}>
            <form
              action={async (formData) => {
                await updateSubmissionWithId(formData);
                setIsEditModalOpen(false);
              }}
            >
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="githubUrl"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Github URL *
                  </label>
                  <input
                    id="githubUrl"
                    name="githubUrl"
                    type="url"
                    defaultValue={comment.githubUrl}
                    placeholder="Add a link to your code on Github"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="appUrl"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    App URL *
                  </label>
                  <input
                    id="appUrl"
                    name="appUrl"
                    type="url"
                    defaultValue={comment.appUrl}
                    placeholder="Add a link of your deployed application"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="loomUrl"
                    className="mb-2 block text-sm font-medium text-gray-400"
                  >
                    Loom URL
                  </label>
                  <input
                    id="loomUrl"
                    name="loomUrl"
                    type="url"
                    defaultValue={comment.loomUrl || ""}
                    placeholder="Add a link to your demo Loom (optional)"
                    className="peer block w-full rounded-md border border-gray-200 py-2 pl-2 text-sm outline-2 placeholder:text-gray-500"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  onClick={() => setIsEditModalOpen(false)}
                  className="px-4 py-2 rounded text-white bg-gray-500 w-24"
                >
                  Cancel
                </button>
                <button
                  className="px-4 py-2 rounded text-white bg-pink-500 w-24"
                  type="submit"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export function DeleteSubmission({ id }: { id: string }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(modalRef, () => setIsModalOpen(false));

  const deleteSubmissionWithId = deleteSubmission.bind(null, id);

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
          <div className="bg-white p-8 rounded-lg" ref={modalRef}>
            <p className="font-bold text-lg">
              Are you sure you want to delete this submission?
            </p>
            <div className="flex justify-end space-x-2 pt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 rounded text-white bg-gray-500"
              >
                Cancel
              </button>
              <form action={deleteSubmissionWithId}>
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
