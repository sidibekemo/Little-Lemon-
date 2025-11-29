export default function Testimonials() {
  const reviews = [
    { name:"Marie", text:"Un déjeuner incroyable ! Très frais et délicieux." },
    { name:"Thomas", text:"Ambiance parfaite, plats savoureux, j’adore !" },
    { name:"Aminata", text:"Le dessert au citron est juste WAOUH." }
  ];

  return (
    <section className="booking-section">
      <h2>Avis des clients</h2>

      <div style={{ marginTop:"1rem" }}>
        {reviews.map((r,i) => (
          <p key={i} style={{
            fontSize:"1.05rem",
            marginBottom:"0.8rem",
            background:"#fff",
            padding:"0.75rem 1rem",
            borderRadius:"12px",
            boxShadow:"0 4px 10px rgba(0,0,0,.07)"
          }}>
            <strong>{r.name}</strong> : {r.text}
          </p>
        ))}
      </div>
    </section>
  );
}
