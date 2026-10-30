import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import { OutlineProvider, OutlineToggle, Boundary } from '../../../components/ui/boundaries.jsx'

// The exact Header / WelcomeMessage / App example from the lesson, with optional
// component outlines so students can see where each component starts and ends.
function Header() {
  return (
    <Boundary name="Header" color="sky">
      <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
    </Boundary>
  )
}

function WelcomeMessage() {
  return (
    <Boundary name="WelcomeMessage" color="emerald">
      <p className="text-sm text-slate-700">Welcome to your dashboard</p>
    </Boundary>
  )
}

function App() {
  return (
    <Boundary name="App" color="indigo" className="p-3 space-y-4">
      <Header />
      <WelcomeMessage />
    </Boundary>
  )
}

export default function DashboardDemo() {
  return (
    <OutlineProvider defaultOn>
      <DemoSurface title="Three components, one page" actions={<OutlineToggle />}>
        <App />
      </DemoSurface>
    </OutlineProvider>
  )
}
