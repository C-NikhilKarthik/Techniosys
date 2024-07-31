import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 p-2 px-4 left-0 w-full bg-color0 flex justify-between items-center">
      <div></div>
      <div className="flex gap-4 text-white1 items-center">
        <Link
          href={"/"}
          className="after:block after:w-0 after:bg-red0 after:h-[2px] after:rounded hover:after:w-full after:transition-all after:duration-300"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="after:block after:w-0 after:bg-red0 after:h-[2px] after:rounded hover:after:w-full after:transition-all after:duration-300"
        >
          Team
        </Link>
        <Link
          href={"/"}
          className="after:block after:w-0 after:bg-red0 after:h-[2px] after:rounded hover:after:w-full after:transition-all after:duration-300"
        >
          Standings
        </Link>
        <Link
          href={"/"}
          className="after:block after:w-0 after:bg-red0 after:h-[2px] after:rounded hover:after:w-full after:transition-all after:duration-300"
        >
          Announcements
        </Link>
      </div>
    </nav>
  );
}
