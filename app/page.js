import { Hero , Departments ,DoctorSection } from "@/components";

export default function Home() {
  return (
   <main className="flex min-h-screen flex-col  items-center ">
    
    <Hero />
    <Departments/>  
    <DoctorSection/>
    
   </main>
  );
}
