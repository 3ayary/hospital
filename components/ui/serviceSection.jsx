import Image from "next/image";
import Link from "next/link";
import data from "@/public/data.json";
import ServiceCard from "./ServiceCard";
const serviceSection = () => {
  const departments = data;

  return (
    <section className="w-[1060px] mb-3 ">
   
<ServiceCard/>

    </section>
  );
};

export default serviceSection;
