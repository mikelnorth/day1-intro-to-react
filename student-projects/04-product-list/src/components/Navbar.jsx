function Navbar({ brand }) {
  return (
    <header>
      <h1>{brand}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Shop</a>
        <a href="#">Cart</a>
      </nav>
    </header>
  )
}

export default Navbar
