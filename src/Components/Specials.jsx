import SpecialCard from "./SpecialCard";

export default function Specials() {
  const items = [
    {
      image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9",
      title: "Greek Salad",
      price: "$12.99",
      description: "Salade fraîche, feta, olive, tomate, concombre..."
    },
    {
      image: "https://images.unsplash.com/photo-1553163147-622ab57e93c7",
      title: "Bruschetta",
      price: "$8.50",
      description: "Pain grillé, tomate, basilic, huile d'olive..."
    },
    {
      image: "https://images.unsplash.com/photo-1604908176957-4f126ba3d1f2",
      title: "Lemon Dessert",
      price: "$5.99",
      description: "Crème au citron maison, fraîche et légère."
    }
  ];

  return (
    <section>
      <div className="section-title">
        <h2>Nos Spéciaux</h2>
        <span>Cette semaine</span>
      </div>

      <div className="card-grid">
        {items.map((dish, index) => (
          <SpecialCard key={index} {...dish} />
        ))}
      </div>
    </section>
  );
}
