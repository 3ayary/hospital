import DoctorCard from "@/components/doctorCard";
import FilterButton from "@/components/filterButton";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen px-[150]">
      <div className="flex flex-col my-10 gap-5">
        <h1 className="text-5xl font-extrabold ">Find a Doctor</h1>
        <p>Search for doctors by specialty, availability, or name.</p>
      </div>

      <div className=" border-1 border-gray-300 mb-5 bg-[#E5EDF5]  text-black rounded-xl">
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
            placeholder="Search  by doctor name"
            className="p-2 rounded-md w-full focus:outline-none "
          />
        </div>
      </div>
      <h1 className="font-semibold text-xl my-4 mx-2">Filters</h1>
      <div className="flex flex-row gap-5">
        <FilterButton
          options={[
            "Cardiologist",
            "Dermatologist",
            "Neurologist",
            "Pediatrician",
          ]}
        />
        <FilterButton
          options={[
            "Cardiologist",
            "Dermatologist",
            "Neurologist",
            "Pediatrician",
          ]}
        />
      </div>
      <div className="">
        <h1 className="text-2xl font-bold my-5">Doctors</h1>
        <div className="flex flex-col gap-7 mb-5">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </div>
  );
};

export default page;
