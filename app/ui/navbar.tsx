import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between py-4 px-8 bg-white fixed w-full">
      <Link href="/">
        <Image src="/logo-color.png" width={50} height={60} alt="Logo" />
      </Link>
    </nav>
  );
}
