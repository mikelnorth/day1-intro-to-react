import ProductCard from './ProductCard.jsx'

// ProductList owns the data and passes it down one level. App never talks to ProductCard.
function ProductList() {
  return (
    <main className="grid">
      <ProductCard name="Headphones" price="59" emoji="🎧" />
      <ProductCard name="Keyboard" price="89" emoji="⌨️" />
      <ProductCard name="Monitor" price="249" emoji="🖥️" />
    </main>
  )
}

export default ProductList
