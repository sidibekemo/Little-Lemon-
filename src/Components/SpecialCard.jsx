export default function SpecialCard({ image, title, price, description }) {
  return (
    <article className="card">
      <img src={image} alt={title} />
      <div className="card-body">
        <div className="card-header-line">
          <span className="card-title">{title}</span>
          <span className="card-price">{price}</span>
        </div>
        <p className="card-description">{description}</p>
        <div className="card-footer">Commander →</div>
      </div>
    </article>
  );
}
