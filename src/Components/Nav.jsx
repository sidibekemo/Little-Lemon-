import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/specials">Spéciaux</Link></li>
        <li><Link to="/booking">Réservation</Link></li>
        <li><Link to="/about">À propos</Link></li>
      </ul>
    </nav>
  );
}
