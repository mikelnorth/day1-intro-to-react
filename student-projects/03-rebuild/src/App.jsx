import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'

// Minimum: App, Header, Card (x2 with different props). Footer is the bonus.
function App() {
  return (
    <div>
      <Header title="Rebuild Challenge" />
      <main className="grid">
        <Card title="Components" value="3" />
        <Card title="Props" value="4" />
      </main>
      <Footer />
    </div>
  )
}

export default App
