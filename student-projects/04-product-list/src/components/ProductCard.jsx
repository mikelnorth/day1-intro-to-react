function ProductCard({ name, price, emoji }) {
  return (
    <div className="card">
      <p style={{ fontSize: '2rem', margin: 0 }}>{emoji}</p>
      <h2>{name}</h2>
      <p>${price}</p>
    </div>
  )
}

export default ProductCard
