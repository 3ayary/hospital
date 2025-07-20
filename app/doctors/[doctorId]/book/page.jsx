"use client";
import React from "react";
import { useParams } from "next/navigation";
import data from "@/public/data.json";
import AppointmentBooking from "@/components/AppointmentBooking";
import BookForm from "@/components/ui/BookForm";
const page = () => {
  const params = useParams();
  const { doctorId } = params;

  const doctor = data?.find((doc) => doc?.id === parseInt(doctorId));

  console.log(doctor);
  return (
    <div className="mx-25 mt-12">
      <div>
        <h1 className="text-4xl font-bold my-5">Book appointment</h1>
        <p className="text-lg text-gray-600 mb-5">
          Please select a time slot and provide your information to book an
          appointment with {doctor.name}.
        </p>
      </div>

      <div className="flex flex-col gap-5">
        <AppointmentBooking />
        <h1 className="text-xl font-bold mb-2">
          Your information
        </h1>

<BookForm/>



      </div>
    </div>
  );
};

export default page;
