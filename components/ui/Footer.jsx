"use client";

export default function Footer() {
  return (
    <footer className=" border-1 bg-[#f5f7ff] border-gray-400 shadow-2xl text-[#1a1a1a] py-10 mt-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <h1 className="text-2xl text-gray-700 border-b-2 border-gray-500 mb-2">Andalusia</h1>
          <p className="text-sm">
            Our goal is the health care and safety of our patients by raising the level of services and using the latest technologies in the world
          </p>
         
        </div>

        {/* Site Content */}
        <div>
          <h2 className="font-bold text-lg mb-2">Site Content</h2>
          <div className="h-1 w-12 bg-blue-300 mb-4"></div>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Oncology</li>
            <li>Doctors</li>
            <li>Offers</li>
            <li>Our News</li>
            <li>Homecare</li>
            <li>Blog</li>
            <li>Contact Us</li>
            <li>Blog Map</li>
          </ul>
        </div>

        {/* Contacts Info */}
        <div>
          <h2 className="font-bold text-lg mb-2">Contacts Info</h2>
          <div className="h-1 w-12 bg-blue-300 mb-4"></div>
          <div className="text-sm space-y-4">
            <p className="flex items-start gap-2">
         
              6 Dr Sayed Fahmy, Ezbet Saad, Sidi Gaber, Alexandria Governorate, Egypt
            </p>
            <p className="flex items-center gap-2">
          
              contactus@andalusiagroup.net
            </p>
            <p className="flex items-center gap-2">

              16781
            </p>
          </div>
        </div>

        {/* Subscribe Form */}
        <div>
          <h2 className="font-bold text-lg mb-2">Subscribe Now To The Mailing List</h2>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded mt-2"
          />
          <button className="bg-blue-300 text-white px-4 py-2 mt-3 rounded w-full hover:bg-[#a17c46]">
            Subscribe
          </button>

          {/* Map Embed */}
          <div className="mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d681.7682390299112!2d30.999447960651832!3d30.811259602953356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1753742704196!5m2!1sar!2seg"
              width="100%"
              height="200"
              className="rounded"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
}
