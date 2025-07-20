"use client";
import data from "@/public/data.json";
import React from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import ReviewSummary from "@/components/ui/chart";
import ReviewCard from "@/components/reviewCard";

const DoctorDetailPage = () => {
  const params = useParams();
  const { doctorId } = params;

  const doctor = data?.find((doc) => doc?.id === parseInt(doctorId));

  return (
    <div className="mx-25 mt-12">
      <div className="flex flex-row items-center mb-8">
        <Image
          src={doctor.image}
          width={128}
          height={128}
          className="rounded-full"
        />
        <div className="ml-4">
          <h1 className="text-2xl font-bold">{doctor.name}</h1>
          <p className="text-lg text-gray-600">{doctor.Specialty}</p>
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <p>overview</p>
        <p>Reviews</p>
        <p>availability</p>
      </div>
      <div className=" w-full h-[1px] bg-gray-300 mt-2 mb-8"></div>
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-5 mb-8">{doctor.about}</p>

      <h1 className="text-2xl font-bold mb-3 ">Education</h1>
      <div className="flex flex-row gap-13 mb-8">
        <div>
          <p className="text-gray-500">Medical School</p>
          <p>{doctor.education}</p>
        </div>
        <div>
          <p className="text-gray-500">Fellowship</p>
          <p>{doctor.Fellowship}</p>
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-3 ">Reviews</h1>
      <ReviewSummary reviews={doctor.reviews} />

      <div>
        {doctor.reviews.map((review, index) => (
          <ReviewCard key={index} reviews={[review]} />
        ))}
      </div>

      <button className="border-gray-300 bg-[#E5EDF5] p-3 rounded-2xl">See all reviews</button>
      
    </div>
  );
};

export default DoctorDetailPage;
