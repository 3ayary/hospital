"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "..";
import { useState } from "react";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchValue.trim() !== "") {
        router.push(`/doctors?query=${encodeURIComponent(searchValue)}`);
      }
    }
  };

  return (
    <nav className="border-b-1 items-center bg-white border-gray-300 h-15 w-full mb-7 flex px-8 sticky top-0 z-10 ">
      <Image
        src={"/logo.svg"}
        width={131}
        height={23}
        className="items-center"
        alt="Logo"
      />

      <div className="flex mx-12 gap-10 items-center text-md">
        <Link href="/">
          <button className="cursor-pointer">Home</button>
        </Link>
        <Link href="/Services">
          <button className="cursor-pointer">Services</button>
        </Link>
        <Link href="/doctors">
          <button className="cursor-pointer">Doctors</button>
        </Link>
        <Link href="https://3ayary.vercel.app" target="_balnk">
          <button className="cursor-pointer">Contact</button>
        </Link>
      </div>

      <div className="flex flex-row h-fit gap-7 ml-auto">
        <div className="border-1 border-gray-300 bg-[#E5EDF5] text-black rounded-xl">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 ml-1 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="p-2 rounded-md w-30 focus:w-45 duration-200 focus:outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
        <Link href={"/doctors"}>
          <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white p-2 rounded-xl px-3 hover:opacity-90 font-semibold text-sm">
            Find Doctor
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
