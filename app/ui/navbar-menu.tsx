"use client";

import { useState } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";

interface User {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

interface NavBarMenuProps {
  user: User;
}

export default function NavBarMenu({ user }: NavBarMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Bookmarks", href: "/bookmarks" },
    { name: "Sign out", href: "/signout" },
  ];

  console.log(user.name);
  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="h-10 w-10 rounded-full overflow-hidden border-2 border-gray-600 focus:border-white flex items-center justify-center"
      >
        <FaUser className="text-xl" />
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <div className="block px-4 py-2 text-sm text-gray-700">
            {user?.email}
          </div>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
