"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Hero = () => {
  const router = useRouter();
  const [doctorName, setDoctorName] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    const queryParams = [];

    if (doctorName.trim() !== "")
      queryParams.push(`name=${encodeURIComponent(doctorName)}`);
    if (specialty.trim() !== "" && specialty !== "Select Specialty") {
      queryParams.push(`specialty=${encodeURIComponent(specialty)}`);
    }

    const queryString = queryParams.join("&");
    router.push(`/doctors?${queryString}`);
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
        <h1 className="text-5xl font-extrabold mb-2">
          Your Health, Our Priority
        </h1>
        <p className="text-md">
          Book now with the most qualified physicians with international
          experience in all disciplines
        </p>

        <form
          onSubmit={handleSearch}
          className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-md mt-4 max-w-5xl mx-auto border border-gray-200"
        >
          <div class="border-l h-12"></div>
          <div className="flex items-center gap-2 w-1/3">
            <span>
              <span class="">
                <svg
                  width="25"
                  height="25"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="ltr:mr-4 rtl:ml-4 fill-blue-300"
                >
                  <path d="M447.1 112c-34.2.5-62.3 28.4-63 62.6-.5 24.3 12.5 45.6 32 56.8V344c0 57.3-50.2 104-112 104-60 0-109.2-44.1-111.9-99.2C265 333.8 320 269.2 320 192V36.6c0-11.4-8.1-21.3-19.3-23.5L237.8.5c-13-2.6-25.6 5.8-28.2 18.8L206.4 35c-2.6 13 5.8 25.6 18.8 28.2l30.7 6.1v121.4c0 52.9-42.2 96.7-95.1 97.2-53.4.5-96.9-42.7-96.9-96V69.4l30.7-6.1c13-2.6 21.4-15.2 18.8-28.2l-3.1-15.7C107.7 6.4 95.1-2 82.1.6L19.3 13C8.1 15.3 0 25.1 0 36.6V192c0 77.3 55.1 142 128.1 156.8C130.7 439.2 208.6 512 304 512c97 0 176-75.4 176-168V231.4c19.1-11.1 32-31.7 32-55.4 0-35.7-29.2-64.5-64.9-64zm.9 80c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"></path>
                </svg>
              </span>
            </span>
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-black self-start ml-1">
                Specialty
              </label>
              <select
                className="text-black font-semibold bg-transparent outline-none border-none w-full"
                onChange={(e) => setSpecialty(e.target.value)}
              >
                <option selected disabled>
                  Select Specialty
                </option>
                <option>Cardiologist</option>
                <option>Neurologist</option>
                <option>Oncologist</option>
                <option>Pediatrician</option>
              </select>
            </div>
          </div>
          <div class="border-l h-12"></div>
          <div className="flex items-center gap-2 w-1/3">
            <span class="text-xl text-black">
              <svg
                width="28"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="ltr:mr-4 rtl:ml-4 fill-blue-300"
              >
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path>
              </svg>
            </span>
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-black self-start ml-1">
                Doctor Name
              </label>
              <input
                type="text"
                placeholder="Enter Doctor Name"
                className="text-black font-semibold bg-transparent outline-none border-none w-full"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
              />
            </div>
          </div>
          <div class="border-l h-12"></div>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-300 to-blue-500 text-white font-semibold px-6 py-2 rounded-md hover:opacity-90"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
