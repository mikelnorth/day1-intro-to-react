import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home.jsx'
import WhyReact from './pages/lessons/01-why-react/WhyReact.jsx'
import Setup from './pages/lessons/02-setup/Setup.jsx'
import FirstComponent from './pages/lessons/03-first-component/FirstComponent.jsx'
import Components from './pages/lessons/04-components/Components.jsx'
import PropsLesson from './pages/lessons/05-props/PropsLesson.jsx'
import Architecture from './pages/lessons/06-architecture/Architecture.jsx'
import WrapUp from './pages/lessons/07-wrap-up/WrapUp.jsx'
import ClassTimer from './components/ClassTimer.jsx'

const lessons = [
  { to: '/', label: 'Home / Plan', end: true },
  { to: '/why-react', label: '1. Why React?' },
  { to: '/setup', label: '2. Setup & Project Tour' },
  { to: '/first-component', label: '3. Your First Component' },
  { to: '/components', label: '4. Components & Composition' },
  { to: '/props', label: '5. Props' },
  { to: '/architecture', label: '6. Architecture & Challenge' },
  { to: '/wrap-up', label: '7. Wrap-up & Reflection' },
]

function Sidebar() {
  return (
    <aside className="w-72 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur px-5 py-6 overflow-y-auto">
      <div className="mb-6">
        <p className="text-xs uppercase tracking-widest text-slate-500">Day 1</p>
        <h1 className="text-lg font-semibold text-slate-900 leading-tight">
          Introduction to React + Components
        </h1>
      </div>
      <nav className="flex flex-col gap-1">
        {lessons.map((lesson) => (
          <NavLink
            key={lesson.to}
            to={lesson.to}
            end={lesson.end}
            className={({ isActive }) =>
              `block rounded-md px-3 py-2 text-sm transition ${
                isActive
                  ? 'bg-indigo-600 text-white font-medium shadow-sm'
                  : 'text-slate-700 hover:bg-slate-100'
              }`
            }
          >
            {lesson.label}
          </NavLink>
        ))}
      </nav>
      <div className="mt-6">
        <ClassTimer />
      </div>
      <div className="mt-4 rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600 leading-relaxed">
        Each lesson follows an{' '}
        <span className="font-semibold text-slate-900">I do / We do / You do</span>{' '}
        pattern. Demo the first, work the second together, let students try the third.
      </div>
    </aside>
  )
}

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto px-8 py-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/why-react" element={<WhyReact />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/first-component" element={<FirstComponent />} />
            <Route path="/components" element={<Components />} />
            <Route path="/props" element={<PropsLesson />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/wrap-up" element={<WrapUp />} />
          </Routes>
        </div>
      </main>
    </div>
  )
}

export default App
