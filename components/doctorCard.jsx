import Image from "next/image";
import Link from "next/link";
import React from "react";

const DoctorCard = (doctorData) => {
  console.log(doctorData["doctorsData"]);
 const doctor = doctorData["doctorsData"];
  return (
    <div className="flex flex-row w-fit ">
      <div>
        <Image
          src={doctor?.image}
          width={80}
          height={80}
          className="rounded-full mr-4"
        />
      </div>

      <div className="flex flex-col  w-[960px]">
        <h2>{doctor?.name}</h2>
        <p className="text-gray-500 flex flex-row">
          {
          doctor?.about
          }
        </p>
        <p className="text-gray-500 flex flex-row">{doctor?.Specialty}</p>
      </div>
      <button className="border-gray-300 bg-[#E5EDF5] text-black rounded-md self-center w-[115px] h-[32px] text-sm cursor-pointer hover:bg-[#c8d7e6] ">
        <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
      </button>
    </div>
  );
};

export default DoctorCard;
