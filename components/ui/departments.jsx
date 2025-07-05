import Image from "next/image";

const Departments = () => {
  const departments = [
    {
      name: "Cardiology",
      image: "/Cardiology.jpg",
    },
    {
      name: "Neurology",
      image: "/Neurology.jpg",
    },
    {
      name: "Pediatrics",
      image: "/Pediatrics.jpg",
    },
    {
      name: "Oncology",
      image: "/Oncology.jpg",
    },
    {
      name: "Orthopedics",
      image: "/Orthopedics.jpg",
    },
  ];

  return (
    <section className="w-[1060px]">
      <h1 className="font-semibold text-xl my-7 mx-2">Departments</h1>

      <div className="flex flex-row gap-13 flex-wrap justify-center ">
        {departments?.map((img) => (
          <div>
            <Image
              src={img?.image}
              width={160}
              height={160}
              className="rounded-xl"
            />
            <h1 className="my-2 mx-1">{img?.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Departments;
