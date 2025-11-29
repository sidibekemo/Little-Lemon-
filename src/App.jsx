import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Hero from "./Components/Hero";
import Specials from "./Components/Specials";
import BookingPage from "./Components/BookingPage";

import Menu from "./Components/Menu";          // NEW
import About from "./Components/About";        // NEW
import Testimonials from "./Components/Testimonials"; // NEW

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>

          {/* Home */}
          <Route path="/" element={
            <>
              <Hero />
              {/* <Specials /> */}
            </>
          } />

          {/* Réservation */}
          <Route path="/booking" element={<BookingPage />} />

          {/* Nouveaux */}
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/reviews" element={<Testimonials />} />
          <Route path="/specials" element={<Specials/>} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}
