import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed nav top-0 py-4 px-10 left-0 w-full bg-black0/50 flex justify-between items-center">
      <Image src={"/Logo.png"} alt="Logo" height={40} width={40} sizes="100%" />
      <div className="md:flex hidden gap-4 text-white1 items-center">
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
