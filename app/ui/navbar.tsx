import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white fixed w-full">
      <Link href="/">
        <Image src="/logo-color.png" width={50} height={60} alt="Logo" />
      </Link>
      <div>
        <a
          href="/new"
          className="rounded-md bg-indigo-600 px-4 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Post
        </a>
      </div>
    </nav>
  );
}
