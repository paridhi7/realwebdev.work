"use client";

import { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import useOutsideClick from "./hooks/outside-click";

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
  const menuRef = useRef<HTMLDivElement>(null);

  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  const menuItems = [
    { name: "Dashboard", href: "/dashboard" },
    // { name: "Bookmarks", href: "/bookmarks" },
    { name: "Create Post", href: "/new" },
    { name: "Sign out", href: "/signout" },
  ];

  const imageDisplay = user?.image ? (
    <img
      src={user?.image}
      alt="Profile pic"
      className="h-10 w-10 rounded-full border-2 border-gray-600 focus:border-white"
    />
  ) : (
    <div className="h-10 w-10 rounded-full border-2 border-gray-600 focus:border-white flex items-center justify-center">
      <FaUser className="text-xl" />
    </div>
  );

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center"
      >
        {imageDisplay}
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <div className="block px-4 py-2 text-sm text-gray-700 border-b">
            {user?.name}
          </div>
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-100 hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
