"use client";

import { signOut } from "next-auth/react";

const SignOutButton = () => {
  return (
    <button
      className="bg-slate-600 px-4 py-2 text-white hover:bg-slate-500"
      onClick={() => signOut({ callbackUrl: "/" })}
      type="button"
    >
      Yes, sign out
    </button>
  );
};

export default SignOutButton;
