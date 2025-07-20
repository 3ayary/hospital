// components/BookingForm.js
'use client'; // if using Next.js 13/14 App Router

import { useState } from 'react';

export default function BookForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-2 mb-8 w-200"
    >

      <div className="mb-4">
        <label className="block mb-1 font-medium">Full name</label>
        <input
          type="text"
          name="fullName"
          placeholder="fullname"
          className="w-full p-3 bg-blue-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.fullName}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4 ">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="w-full p-3 bg-blue-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-medium">Phone number</label>
        <input
          type="tel"
          name="phone"
          placeholder="phone number"
          className="w-full p-3 bg-blue-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 font-medium">Reason for visit</label>
        <select
          name="reason"
          className="w-full p-3 bg-blue-50 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={formData.reason}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="checkup">General Checkup</option>
          <option value="consultation">Consultation</option>
          <option value="emergency">Emergency</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 rounded font-semibold hover:bg-blue-600 transition"
      >
        Book appointment
      </button>
    </form>
  );
}
