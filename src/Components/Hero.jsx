export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Un restaurant familial méditerranéen proposant des recettes traditionnelles
          avec une touche moderne.
        </p>
        <a className="btn btn-primary" href="/booking">
          Réserver une table
        </a>
      </div>

      <div className="hero-image-wrapper">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
          alt="Restaurant Little Lemon"
        />
      </div>
    </section>
  );
}
