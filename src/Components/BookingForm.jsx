import React, { useState } from "react";
import "./Booking.css";

function BookingForm({ availableTimes = [], dispatch, submitForm }) {   // FIX ici
  const [date, setDate] = useState("");
  const [resTime, setResTime] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    dispatch({
      type: "UPDATE_TIMES",
      date: new Date(newDate),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!date || !resTime || numberOfPeople < 1) {
      alert("Veuillez remplir tous les champs correctement.");
      return;
    }

    const formData = { date, resTime, numberOfPeople };
    submitForm(formData);
  };

  return (
    <form
      style={{ display: "grid", width: "250px", gap: "20px" }}
      onSubmit={handleSubmit}
      aria-label="Booking Form"
    >
      <fieldset>
        <legend>Réserver une table</legend>

        <label htmlFor="date">Choose date</label>
        <input
          type="date"
          id="date"
          value={date}
          required
          min={new Date().toISOString().split("T")[0]}
          onChange={handleDateChange}
          aria-required="true"
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={resTime}
          required
          aria-required="true"
          onChange={(e) => setResTime(e.target.value)}
        >
          <option value="">Select a time</option>

          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="people">Number of people</label>
        <input
          type="number"
          id="people"
          value={numberOfPeople}
          required
          aria-required="true"
          min={1}
          onChange={(e) => setNumberOfPeople(e.target.value)}
        />

        <button type="submit" aria-label="On Click">
          Book Now
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;
