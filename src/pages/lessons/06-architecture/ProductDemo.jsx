import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import { OutlineProvider, OutlineToggle, Boundary } from '../../../components/ui/boundaries.jsx'

// The architecture-exercise tree, built with Day 1 tools only: components and props.
// Three hardcoded ProductCard tags on purpose. Lists come later.
function Navbar({ brand }) {
  return (
    <Boundary name="Navbar" color="sky">
      <nav className="flex items-center justify-between rounded bg-slate-900 text-white px-4 py-2 text-sm">
        <span className="font-semibold">{brand}</span>
        <span className="space-x-4 text-slate-300">
          <span>Home</span>
          <span>Shop</span>
          <span>Cart</span>
        </span>
      </nav>
    </Boundary>
  )
}

function ProductCard({ name, price, emoji }) {
  return (
    <Boundary name="ProductCard" color="emerald">
      <div className="rounded-lg border border-slate-200 bg-white p-3 text-center">
        <div className="text-3xl">{emoji}</div>
        <p className="font-medium text-slate-900 mt-1 text-sm">{name}</p>
        <p className="text-slate-600 text-sm">${price}</p>
      </div>
    </Boundary>
  )
}

function ProductList() {
  return (
    <Boundary name="ProductList" color="amber" className="p-2">
      <div className="grid grid-cols-3 gap-3">
        <ProductCard name="Headphones" price="59" emoji="🎧" />
        <ProductCard name="Keyboard" price="89" emoji="⌨️" />
        <ProductCard name="Monitor" price="249" emoji="🖥️" />
      </div>
    </Boundary>
  )
}

function Footer({ company }) {
  return (
    <Boundary name="Footer" color="rose">
      <footer className="text-center text-xs text-slate-500 py-2">
        © {new Date().getFullYear()} {company}
      </footer>
    </Boundary>
  )
}

function App() {
  return (
    <Boundary name="App" color="indigo" className="p-3 space-y-5">
      <Navbar brand="GadgetShop" />
      <ProductList />
      <Footer company="GadgetShop Inc." />
    </Boundary>
  )
}

export default function ProductDemo() {
  return (
    <OutlineProvider defaultOn>
      <DemoSurface title="Navbar / ProductList / ProductCard x3 / Footer" actions={<OutlineToggle />}>
        <App />
      </DemoSurface>
    </OutlineProvider>
  )
}
