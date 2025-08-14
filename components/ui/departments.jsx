import Image from "next/image";
import Link from "next/link";
const Departments = () => {
  const departments = [
    {
      name: "Cardiology",
      image: "/Cardiology.jpg",
      link: "/doctors?specialty=Cardiologist",
    },
    {
      name: "Neurology",
      image: "/Neurology.jpg",
      link: "/doctors?specialty=Neurologist",
    },
    {
      name: "Pediatrics",
      image: "/Pediatrics.jpg",
      link: "/doctors?specialty=Pediatrician",
    },
    {
      name: "Oncology",
      image: "/Oncology.jpg",
      link: "/doctors?specialty=Oncologist",
    },
    {
      name: "Orthopedics",
      image: "/Orthopedics.jpg",
      link: "/doctors?specialty=Orthopedist",
    },
  ];

  return (
    <section className="w-[1060px]">
      <h1 className="font-semibold text-3xl border-b-2 inline-block text-[#1d2d50] my-7 mx-2">Departments</h1>

      <div className="flex flex-row gap-13 flex-wrap justify-center ">
        {departments?.map((img) => (
          <Link href={img.link}>
            <Image
              src={img?.image}
              width={160}
              height={160}
              className="rounded-xl"
            />
            <h1 className="my-2 mx-1">{img?.name}</h1>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Departments;
