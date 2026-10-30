// Props are inputs. Card never decides what it shows; its parent does.
function Card({ title, value, label }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{value}</p>
      <small>{label}</small>
    </div>
  )
}

export default Card
