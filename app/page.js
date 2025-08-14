import { Hero , Departments ,ServiceSection } from "@/components";
import DoctorSection from "@/components/ui/DoctorsSection";
export default function Home() {
  return (
   <main className="flex min-h-screen flex-col  items-center ">
    
    <Hero />
    <Departments/>  
    <ServiceSection/>
    <DoctorSection/>
   </main>
  );
}
