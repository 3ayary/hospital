import Image from "next/image";
import Link from "next/link";
import data from "@/public/data.json";
const DoctorSection = () => {
  const departments = data;

  return (
    <section className="w-[1060px]">
      <h1 className="font-semibold text-xl my-7 mx-2">Featured Doctors</h1>

      <div className="flex flex-row gap-13 flex-wrap  justify-center ">
        {departments?.map((doctor) => (
          <Link
            href={`/doctors/${doctor.id}`}
            key={doctor.id}
            className="flex flex-col items-center"
          >
            <div>
              <Image
                src={doctor?.image}
                width={280}
                height={280}
                className="rounded-full"
              />
              <div className="flex flex-col justify-center my-1">
                <h1 className="text-center">{doctor?.name}</h1>
                <p className="text-center text-gray-500 text-sm">
                  {doctor?.Specialty}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h1 className="text-5xl font-extrabold my-10 text-center hover:text-blue-950">
        <Link href={"/doctors"}>Explore More Doctors</Link>
      </h1>
    </section>
  );
};

export default DoctorSection;
