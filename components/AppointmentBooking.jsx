import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function AppointmentBooking() {
  const [selectedDate, setSelectedDate] = useState(null);



  const handleBooking = () => {
    if (!selectedDate) return alert("Please select a date");
    alert(`Appointment booked for ${selectedDate.toLocaleString()}`);
    // Send to backend: API call here
  };
  const today = new Date();

  const minTime = new Date();
  minTime.setHours(5, 0); // 5:00 AM

  const maxTime = new Date();
  maxTime.setHours(20, 0); // 8:00 PM

  return (
    <div className=" w-70">
      <h2 className="text-lg font-bold mb-2">Choose Appointment Time</h2>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        showTimeSelect
        dateFormat="MMMM d, yyyy h:mm aa"
        minDate={today}
        minTime={minTime}
        maxTime={maxTime}
        timeIntervals={30} // optional: time slot every 30 minutes
        className="border rounded p-2 w-full"
      />
       
    </div>
  );
}
