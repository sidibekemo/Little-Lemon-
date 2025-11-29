import React, { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";

function initializeTimes() {
  return window.fetchAPI(new Date());
}

function updateTimes(state, action) {
  if (action.type === "UPDATE_TIMES") {
    return window.fetchAPI(action.date); // renvoie un tableau d'heures
  }
  return state;
}

export default function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  const submitForm = (formData) => {
    const success = window.submitAPI(formData);
    if (success) {
      navigate("/confirmed");
    } else {
      alert("Échec de l’envoi ❌");
    }
  };

  return (
    <div>
      <h1>Little Lemon Reservation</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}
