import Navbar from './components/Navbar.jsx'
import ProductList from './components/ProductList.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar brand="GadgetShop" />
      <ProductList />
      <Footer company="GadgetShop Inc." />
    </div>
  )
}

export default App
