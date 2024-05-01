import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/api/auth/[...nextauth]/options";
import LoginButton from "./login-button";
import NavBarMenu from "./navbar-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default async function NavBar() {
  const session = await getServerSession(options);

  return (
    <nav className="flex items-center justify-between py-4 px-8 md:px-16 bg-white fixed w-full z-50">
      <Link href="/">
        <Image src="/logo-color.png" width={50} height={60} alt="Logo" />
      </Link>
      <div className="flex items-center justify-center gap-4">
        <a
          href="https://github.com/paridhi7/realwebdev.work"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="text-gray-800 hover:text-black cursor-pointer w-8 h-8 hidden md:inline-flex"
          />
        </a>

        <Link
          href="/new"
          className="hidden md:inline-flex rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Post
        </Link>

        {!session ? (
          <LoginButton />
        ) : (
          <>{session?.user && <NavBarMenu user={session.user} />}</>
        )}
      </div>
    </nav>
  );
}
