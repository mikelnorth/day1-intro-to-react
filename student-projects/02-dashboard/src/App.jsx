import Header from './components/Header.jsx'
import StatsGrid from './components/StatsGrid.jsx'
import Footer from './components/Footer.jsx'

// 5 components: App, Header, StatsGrid, Card (used 3x), Footer.
function App() {
  return (
    <div>
      <Header title="Sales Dashboard" subtitle="Overview for this month" />
      <StatsGrid />
      <Footer company="Acme Analytics" />
    </div>
  )
}

export default App
