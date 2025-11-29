import React from 'react';
import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <div>
      <h1>Réservez votre table</h1>
      <p>Remplissez le formulaire ci-dessous pour réserver votre table.</p>
      <BookingForm />
      <p>Merci de votre réservation !</p>
    </div>
  );
}

export default BookingPage;
