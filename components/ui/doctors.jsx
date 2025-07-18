import Image from "next/image";
import Link from "next/link";

const DoctorSection = () => {
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
    <section className="w-[1060px]">
      <h1 className="font-semibold text-xl my-7 mx-2">Featured Doctors</h1>

      <div className="flex flex-row gap-13 flex-wrap  justify-center ">
        {departments?.map((img) => (
          <div>
            <Image
              src={img?.image}
              width={280}
              height={280}
              className="rounded-full"
            />
            <div className="flex flex-col justify-center my-1">
              <h1 className="text-center">{img?.name}</h1>
              <p className="text-center text-gray-500 text-sm">{img?.Specialty}</p>
            </div>
          </div>
        ))}
      </div>
     
         <h1 className="text-5xl font-extrabold my-10 text-center hover:text-blue-950">
 <Link href={'/doctors'}>
        Explore More Doctors
         </Link>
      </h1>
     
    
    </section>
  );
};

export default DoctorSection;
