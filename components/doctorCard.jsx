import Image from "next/image";
import React from "react";

const DoctorCard = ({doctorsData}) => {
  const departments = [
    {
      name: "Dr.Amelia Harper",
      image: "/DrAmelia Harper.jpg",
      Specialty: "Cardiologist",
    },
    {
      name: "Dr.Ethan Carter",
      image: "/DrEthan Carter.jpg",
      Specialty: "Neurologist",
    },
    {
      name: "Dr.Olivia Bennett",
      image: "/DrOlivia Bennett.jpg",
      Specialty: "Pediatrician",
    },
  ];
  return (
    <div className="flex flex-row w-fit ">
      <div>
        <Image
          src={departments[0]?.image}
          width={80}
          height={80}
          className="rounded-full mr-4"
        />
      </div>

      <div className="flex flex-col  w-[960px]">
        <h2>{departments[0]?.name}</h2>
        <p className="text-gray-500 flex flex-row">
          {
            "Dr. Emily Carter is a board-certified cardiologist with over 10 years of experience in treating heart conditions."
          }
        </p>
        <p className="text-gray-500 flex flex-row">{departments[0]?.Specialty}</p>
      </div>
      <button className="border-gray-300 bg-[#E5EDF5] text-black rounded-md self-center w-[115px] h-[32px] text-sm cursor-pointer hover:bg-[#c8d7e6] ">View Profile</button>
    </div>
  );
};

export default DoctorCard;
