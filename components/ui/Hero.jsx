'use client';
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault(); // منع الريلود
    if (searchValue.trim() !== '') {
      router.push(`/doctors?query=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <div className="relative w-fit h-fit">
      <Image
        src="/heroImage.jpg"
        alt="Hero background"
        width={1028}
        height={580}
        className="rounded-2xl"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
        <h1 className="text-5xl font-extrabold mb-2">Your Health, Our Priority</h1>
        <p className="text-md">
          Find the best doctors and book appointments with ease.
        </p>

        <form
          className="mt-4 flex h-13 bg-white text-black rounded-xl"
          onSubmit={handleSearch}
        >
          <div className="flex items-center gap-2 p-2">
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
              placeholder="Search for doctors by name or specialty"
              className="p-2 rounded-md w-85 focus:outline-none"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-blue-400 flex h-7 self-center font-semibold text-md mr-1 p-5 rounded-xl items-center ml-1 hover:bg-blue-300"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
