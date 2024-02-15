import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

import SignOutButton from "../ui/signout-button";

const SignOutPage = async () => {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/");
  } else {
    return (
      <div>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold">
            Are you sure you want to sign out?
          </h1>
          <SignOutButton />
        </div>
      </div>
    );
  }
};

export default SignOutPage;
