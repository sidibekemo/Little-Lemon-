export default function Menu() {
  const items = [
    { name: "Greek Salad", price: "$12.99" },
    { name: "Bruschetta", price: "$8.50" },
    { name: "Grilled Fish", price: "$16.50" },
    { name: "Lemon Dessert", price: "$5.99" }
  ];

  return (
    <section className="booking-section">
      <h2>Menu du Restaurant</h2>

      <ul style={{ marginTop:"1rem", lineHeight:"1.8" }}>
        {items.map((item, i) => (
          <li key={i} style={{ fontSize:"1.1rem" }}>
            {item.name} — <strong>{item.price}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
