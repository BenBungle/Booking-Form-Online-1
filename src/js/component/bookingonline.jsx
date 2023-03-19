import React, { useState } from "react";

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      selectedDate,
      selectedTime,
      selectedService,
      name,
      email,
      phoneNumber,
    });
  };

  return (
    <div className="booking-form">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={handleTimeChange}
          required
        />

        <label htmlFor="service">Service</label>
        <select
          id="service"
          value={selectedService}
          onChange={handleServiceChange}
          required
        >
          <option value="">Select a Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Manicure">Manicure</option>
          <option value="Pedicre">Pedicure</option>
        </select>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phoneNumber}
          onChange={(event) => setPhoneNumber(event.target.value)}
          required
        />

        <input tpye="submit" value="Book Now" />
      </form>
    </div>
  );
};

export default BookingForm;
