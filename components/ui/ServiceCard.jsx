"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const icons = {
  hospital: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 32 32"
    >
      <path d="M29 28h-1V16a1 1 0 0 0-1-1h-6V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v25H3a1 1 0 0 0 0 2h26a1 1 0 0 0 0-2zm-3-11v11h-5V17zM15 28h-5v-5.95h5zm2 0v-6.95a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7H6V4h13v24zm-4.5-17a1 1 0 0 1-1-1V9h-1a1 1 0 0 1 0-2h1V6a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-1 1zm-.5 3a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm5 0a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm-5 3a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1zm5 0a1 1 0 0 1-1 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1z" />
    </svg>
  ),
  medicine: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8"
      viewBox="0 0 48 48"
    >
      <g data-name="04-medicine">
        <path d="M42.5 47H12a1 1 0 0 1-.707-.293l-3-3 1.414-1.414L12.414 45H42.5a1.5 1.5 0 0 0 0-3H31a1 1 0 0 1-.707-.293l-4-4 1.414-1.414L31.414 40H42.5a3.5 3.5 0 0 1 0 7z" />
        <path d="M28.5 38H20v-2h8.5a1.5 1.5 0 0 0 0-3H23a1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1h-8.586l-2.707 2.707-1.414-1.414 3-3A1 1 0 0 1 12 28h9a3 3 0 0 1 3 3h4.5a3.5 3.5 0 0 1 0 7z" />
        <path d="M7 48H1a1 1 0 0 1-1-1V27a1 1 0 0 1 1-1h6a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3zm-5-2h5a1 1 0 0 0 1-1V29a1 1 0 0 0-1-1H2z" />
        <path d="M4 30h2v2H4zM17 14h-2V8a3 3 0 0 1 3-3h8v2h-8a1 1 0 0 0-1 1z" />
        <path d="M13 26h-2V16a3 3 0 0 1 3-3h12v2H14a1 1 0 0 0-1 1zM16 9h10v2H16z" />
        <path d="M25 26h-2v-6H12v-2h12a1 1 0 0 1 1 1zM40 16h-4a1 1 0 0 1-1-1v-2h-2a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h2V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-1 1zm-3-2h2v-2a1 1 0 0 1 1-1h2V9h-2a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1h-2v2h2a1 1 0 0 1 1 1zM35 24h2v14h-2z" />
        <path d="M32 25a1 1 0 0 1-1-1v-4a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-7.586l-4.707 4.707A1 1 0 0 1 32 25zM31 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h1a1 1 0 0 1 1 1v2.586l3.293-3.293A1 1 0 0 1 37 18h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM5 1h2v6H5z" />
        <path d="M3 3h6v2H3zM5 9h2v8H5zM5 19h2v2H5zM42 22h2v6h-2z" />
        <path d="M40 24h6v2h-6zM42 30h2v4h-2zM42 36h2v2h-2z" />
      </g>
    </svg>
  ),
  ambulance: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-[38px] h-[38px]"
    >
      <path d="M44 34V16H19v17.95" />
      <circle cx="35" cy="34" r="3" />
      <circle cx="13" cy="34" r="3" />
      <path d="M19 25v-7h-7.4a2.23 2.23 0 0 0-2.11 1.52L8 24l-2 3v7" />
      <path d="M32 21v6" />
      <path d="M35 24h-6" />
      <path d="M6 27h13" />
      <path d="M10 34H6" />
      <path d="M44 34h-6" />
      <path d="M32 34H16" />
    </svg>
  ),
  bed: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 130 130"
      fill="currentColor"
      className="w-[38px] h-[38px]"
    >
      {/* الطبقة الخلفية للـ Bold */}
      <path
        d="M117.833 63.913h-8.745a1.749 1.749 0 0 0-1.75 1.75v10.573a11.282 11.282 0 0 0-7.83-3.161h-48.96a5.586 5.586 0 0 0 .419-2.121v-1.42a5.627 5.627 0 0 0-5.621-5.621H28.338a5.627 5.627 0 0 0-5.621 5.621v1.42a5.579 5.579 0 0 0 .836 2.935 11.35 11.35 0 0 0-3.636 2.346V51.75a1.749 1.749 0 0 0-1.75-1.75h-8a1.749 1.749 0 0 0-1.75 1.75v54.491a1.75 1.75 0 0 0 1.75 1.75h8a1.75 1.75 0 0 0 1.75-1.75v-8.465h87.421v8.465a1.75 1.75 0 0 0 1.75 1.75h8.745a1.75 1.75 0 0 0 1.75-1.75V65.663a1.749 1.749 0 0 0-1.75-1.75zm-91.616 5.621a2.123 2.123 0 0 1 2.121-2.121h17.008a2.123 2.123 0 0 1 2.121 2.121v1.42a2.123 2.123 0 0 1-2.121 2.121H28.338a2.123 2.123 0 0 1-2.121-2.121zm1.529 7.041h71.762a7.839 7.839 0 0 1 7.83 7.83v1.8H19.917v-1.8a7.838 7.838 0 0 1 7.829-7.83zm-11.329 27.916h-4.5V53.5h4.5v50.991zm3.5-10.215v-4.57h87.421v4.57zm96.166 10.215h-5.245V67.413h5.245z"
        className="text-black opacity-40 blur-[0.5px]" // تأثير ظل خفيف
      />
      {/* الطبقة الأصلية فوق */}
      <path d="M117.833 63.913h-8.745a1.749 1.749 0 0 0-1.75 1.75v10.573a11.282 11.282 0 0 0-7.83-3.161h-48.96a5.586 5.586 0 0 0 .419-2.121v-1.42a5.627 5.627 0 0 0-5.621-5.621H28.338a5.627 5.627 0 0 0-5.621 5.621v1.42a5.579 5.579 0 0 0 .836 2.935 11.35 11.35 0 0 0-3.636 2.346V51.75a1.749 1.749 0 0 0-1.75-1.75h-8a1.749 1.749 0 0 0-1.75 1.75v54.491a1.75 1.75 0 0 0 1.75 1.75h8a1.75 1.75 0 0 0 1.75-1.75v-8.465h87.421v8.465a1.75 1.75 0 0 0 1.75 1.75h8.745a1.75 1.75 0 0 0 1.75-1.75V65.663a1.749 1.749 0 0 0-1.75-1.75zm-91.616 5.621a2.123 2.123 0 0 1 2.121-2.121h17.008a2.123 2.123 0 0 1 2.121 2.121v1.42a2.123 2.123 0 0 1-2.121 2.121H28.338a2.123 2.123 0 0 1-2.121-2.121zm1.529 7.041h71.762a7.839 7.839 0 0 1 7.83 7.83v1.8H19.917v-1.8a7.838 7.838 0 0 1 7.829-7.83zm-11.329 27.916h-4.5V53.5h4.5v50.991zm3.5-10.215v-4.57h87.421v4.57zm96.166 10.215h-5.245V67.413h5.245z" />
    </svg>
  ),
};

const services = [
  {
    title: "Outpatient Clinics",
    description:
      "Our outpatient clinics (45 clinics in Alexandria and 18 in Cairo) cover all medical and surgical specialties...",
    icon: icons.hospital,
    link: "/services/outpatient",
  },
  {
    title: "Emergency Department",
    description:
      "To make a difference in your life and the lives of your loved ones, we present Andalusia Hospital Emergency Department...",
    icon: icons.ambulance,
    link: "/services/emergency",
  },
  {
    title: "Intensive Care Unit",
    description:
      "The Intensive Care Unit (ICU) is well-equipped to treat critically ill or unstable patients with the utmost care...",
    icon: icons.bed,
    link: "/services/icu",
  },
  {
    title: "Outpatient Clinics",
    description:
      "Our outpatient clinics (45 clinics in Alexandria and 18 in Cairo) cover all medical and surgical specialties...",
    icon: icons.medicine,
    link: "/services/outpatient",
  },
  {
    title: "Emergency Department",
    description:
      "To make a difference in your life and the lives of your loved ones, we present Andalusia Hospital Emergency Department...",
    icon: icons.ambulance,
    link: "/services/emergency",
  },
  {
    title: "Intensive Care Unit",
    description:
      "The Intensive Care Unit (ICU) is well-equipped to treat critically ill or unstable patients with the utmost care...",
    icon: icons.bed,
    link: "/services/icu",
  },
];



const ServiceCard = () => {
  return (
    <section className="max-w-[1060px] mx-auto my-14 mb-15 relative">
      <h2 className="text-3xl font-bold mb-6 border-b-2 inline-block text-[#1d2d50]">
        Our Services
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl border p-6 shadow-sm h-full flex flex-col justify-between">
              <div>
                <div className="bg-[#d3defe] p-4 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-[#1d2d50]">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2 line-clamp-3">
                  {service.description}
                </p>
              </div>
              <a
                href={service.link}
                className="text-blue-700 font-medium mt-4 inline-flex items-center hover:underline"
              >
                read more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ServiceCard;
