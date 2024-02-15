import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

import LoginButton from "../ui/login-button";

export default async function LoginPage() {
  const session = await getServerSession(options);

  if (session) {
    redirect("/");
  } else {
    return (
      <div className="flex flex-col items-center justify-center gap-8 bg-white p-10 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex flex-col items-center">
          <p className="text-xl  my-4">
            See what others are building in the world right now
          </p>
          <LoginButton />
        </div>
      </div>
    );
  }
}
