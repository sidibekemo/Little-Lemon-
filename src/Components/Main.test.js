// Main.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, beforeAll, vi } from "vitest";
import Main, { initializeTimes, updateTimes } from "./Main";
import { BrowserRouter } from "react-router-dom";

// --- MOCK DE L'API ---
beforeAll(() => {
  // On simule fetchAPI sur window
  window.fetchAPI = vi.fn(() => ["17:00", "17:30", "18:00"]);

});

// --- TESTS POUR initializeTimes ---
describe("initializeTimes", () => {
  it("retourne un tableau non vide", () => {
    const times = initializeTimes();
    expect(times).toBeInstanceOf(Array);
    expect(times.length).toBeGreaterThan(0); // s'assure que le tableau n'est pas vide
  });
});

// --- TESTS POUR updateTimes ---
describe("updateTimes", () => {
  it("renvoie les heures correctes pour une date donnée", () => {
    const initialState = [];
    const action = { type: "UPDATE_TIMES", date: new Date("2025-11-28") };

    const newTimes = updateTimes(initialState, action);

    expect(newTimes).toEqual(["17:00", "17:30", "18:00"]);
    expect(window.fetchAPI).toHaveBeenCalledWith(action.date);
  });
});

// --- TESTS POUR LE RENDU DU COMPOSANT Main ---
describe("Main component", () => {
  it("affiche le formulaire avec les heures disponibles", () => {
    render(
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );

    const select = screen.getByLabelText(/Choose time/i);
    expect(select).toBeInTheDocument();
    expect(select.options.length).toBeGreaterThan(1); // option par défaut + horaires
  });
});
