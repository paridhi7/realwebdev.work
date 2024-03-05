"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

export default function DashboardMenu() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex pt-32 px-16">
      <nav>
        <ul className="list-none flex gap-5">
          <li>
            <Link href="/dashboard" passHref>
              <div
                className={clsx(
                  "transition-colors duration-300 text-lg py-2 rounded-md",
                  isActive("/dashboard")
                    ? "text-pink-500 underline"
                    : "text-black",
                )}
              >
                Posts
              </div>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/submissions" passHref>
              <div
                className={clsx(
                  "transition-colors duration-300 text-lg py-2 rounded-md",
                  isActive("/dashboard/submissions")
                    ? "text-pink-500 underline"
                    : "text-black",
                )}
              >
                Submissions
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
