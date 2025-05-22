import SearchInput from "@/components/custom/search-input";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 shadow-sm z-50 bg-slate-100/50 backdrop-blur-2xl  flex items-center justify-between py-2 px-10">
      <div className="flex items-center justify-center">
        <Link className="flex items-center" href="/">
          <Image src={"/ring_logo.png"} alt="logo" width={50} height={50} />
          <p className="font-bold text-2xl text-blue-500">/Blog</p>
        </Link>
      </div>
      <div className="w-[60%]">
        <SearchInput />
      </div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
