// BookingForm.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll } from "vitest";
import BookingForm from "./BookingForm";

beforeAll(() => {
  // On simule window.fetchAPI
  window.fetchAPI = vi.fn((date) => {
    const result = [];
    for (let i = 0; i < 24; i++) {
      const hour = i.toString().padStart(2, "0");
      result.push(`${hour}:00`);
      result.push(`${hour}:30`);
    }
    return result;
  });

  // On simule submitAPI
  window.submitAPI = vi.fn((formData) => true);
});

describe("BookingForm", () => {
  const mockDispatch = vi.fn();
  const mockSubmitForm = vi.fn();

  it("affiche le select avec toutes les demi-heures", () => {
    render(
      <BookingForm
        availableTimes={window.fetchAPI(new Date())}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const select = screen.getByLabelText(/Choose time/i);
    expect(select).toBeInTheDocument();

    // Vérifie que toutes les demi-heures sont présentes (48 créneaux)
    expect(select.options.length).toBe(49); // +1 pour l'option "Select a time"
    expect(select.options[1].value).toBe("00:00");
    expect(select.options[48].value).toBe("23:30");
  });

  it("met à jour la date et l'heure quand l'utilisateur sélectionne", () => {
    render(
      <BookingForm
        availableTimes={window.fetchAPI(new Date())}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-11-30" } });
    expect(mockDispatch).toHaveBeenCalledWith({
      type: "UPDATE_TIMES",
      date: new Date("2025-11-30"),
    });

    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeSelect, { target: { value: "12:30" } });
    expect(timeSelect.value).toBe("12:30");
  });

  it("empêche la soumission si la date ou l'heure n'est pas choisie", () => {
    render(
      <BookingForm
        availableTimes={window.fetchAPI(new Date())}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const form = screen.getByRole("form");
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
    
    fireEvent.submit(form);
    expect(alertMock).toHaveBeenCalledWith(
      "Veuillez sélectionner une date et une heure."
    );

    alertMock.mockRestore();
  });

  it("appelle submitForm avec les bonnes données si tout est rempli", () => {
    render(
      <BookingForm
        availableTimes={window.fetchAPI(new Date())}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/Choose date/i);
    fireEvent.change(dateInput, { target: { value: "2025-11-30" } });

    const timeSelect = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeSelect, { target: { value: "12:30" } });

    const form = screen.getByRole("form");
    fireEvent.submit(form);

    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: "2025-11-30",
      resTime: "12:30",
    });
  });
});
