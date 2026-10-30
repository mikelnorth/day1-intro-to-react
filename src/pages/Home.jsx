import { Link } from 'react-router-dom'
import ConceptCallout from '../components/ui/ConceptCallout.jsx'
import DocsLink from '../components/ui/DocsLink.jsx'
import { schedule, fmt } from '../data/schedule.js'

const objectives = [
  'Explain what React is and why it exists.',
  'Tell the difference between declarative and imperative code.',
  'Describe what a React component is (a function that returns UI).',
  'Read and write basic JSX, including the one-parent rule.',
  'Explain what return does in a component.',
  'Explain what export default does and import a component into another file.',
  'Pass data into a component with props and explain why props are read-only.',
]

const lessonCards = [
  { to: '/why-react', title: '1. Why React?', tag: 'The problem', desc: 'Manual DOM updates get messy. Declarative UI: describe what, let React handle how.' },
  { to: '/setup', title: '2. Setup & Project Tour', tag: 'Hands on', desc: 'Create a Vite project together, tour the files, see how main.jsx loads App.' },
  { to: '/first-component', title: '3. Your First Component', tag: 'Core concept', desc: 'Function, return, export default, JSX, and the errors you will hit on day one.' },
  { to: '/components', title: '4. Components & Composition', tag: 'Building blocks', desc: 'Split one big component into small ones. Draw the component tree.' },
  { to: '/props', title: '5. Props', tag: 'Inputs', desc: 'Pass data into components. One Card, many uses. Dashboard exercise.' },
  { to: '/architecture', title: '6. Architecture & Challenge', tag: 'Judgment', desc: 'What should be reusable? Then a closed-book rebuild challenge.' },
  { to: '/wrap-up', title: '7. Wrap-up & Reflection', tag: 'Consolidate', desc: 'Reflection questions with model answers, exit ticket, what Day 2 brings.' },
]

const kindStyles = {
  talk: 'bg-indigo-100 text-indigo-700',
  wedo: 'bg-amber-100 text-amber-800',
  youdo: 'bg-emerald-100 text-emerald-800',
  break: 'bg-slate-100 text-slate-600',
}
const kindLabel = { talk: 'Teach', wedo: 'We do', youdo: 'You do', break: 'Break' }

const preflight = [
  'Node.js 20+ installed (node --version). Vite 8 needs Node 20.19+ or 22.12+.',
  'A code editor (VS Code recommended) with a terminal open.',
  'A modern browser with DevTools (you will use the Console tab today).',
  'Students can run npm --version without errors.',
  'Windows students: if npm scripts are blocked in PowerShell, use Command Prompt or VS Code\'s terminal with "cmd".',
  'Have this app running on the projector and react.dev open in another tab.',
]

const mistakes = [
  'Writing class instead of className',
  'Returning two sibling elements without a wrapper (one-parent rule)',
  'Lowercase component names (<header /> renders an HTML tag, not your component)',
  'Forgetting export default, then "does not provide an export named default"',
  'Forgetting to import a component, then "X is not defined"',
  'Multi-line return without parentheses, which returns nothing',
  'Not closing self-closing tags: <img>, <br>, <input> must be <img />, etc.',
  'Editing the wrong file and wondering why nothing changes',
]

export default function Home() {
  return (
    <article className="space-y-10">
      <header className="border-b border-slate-200 pb-6">
        <p className="text-xs uppercase tracking-widest text-indigo-600 font-semibold">
          Instructor guide · 3 hours
        </p>
        <h1 className="text-4xl font-bold text-slate-900 mt-1">
          Day 1 &mdash; Introduction to React + Components
        </h1>
        <p className="text-slate-600 mt-3 text-base leading-relaxed max-w-3xl">
          Today students go from zero to a working React app made of{' '}
          <strong>components</strong> that accept <strong>props</strong>. Nothing changes
          on screen yet: no state, no events. That is Day 2. Day 1 is about describing UI.
        </p>
      </header>

      <ConceptCallout title="UI = f(state)">
        <p>
          The UI is a function of data. You describe what the screen should look like for a
          given set of data, and React draws it. When the data changes, React redraws.
        </p>
        <p className="text-slate-600">
          Today we only write the <em>f</em>: components that take inputs (props) and return
          UI. Tomorrow the data starts changing.
        </p>
      </ConceptCallout>

      <DocsLink title="Describing the UI (react.dev chapter)" href="https://react.dev/learn/describing-the-ui">
        Day 1 maps almost one-to-one onto this chapter: Your First Component, Importing and
        Exporting Components, Writing Markup with JSX, JavaScript in JSX with Curly Braces, and
        Passing Props to a Component. Each lesson page links to its section.
      </DocsLink>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">3-hour schedule</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Time</th>
                <th className="px-4 py-3 font-semibold">Min</th>
                <th className="px-4 py-3 font-semibold">Block</th>
                <th className="px-4 py-3 font-semibold">Mode</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {schedule.map((b) => (
                <tr key={b.start} className={b.kind === 'break' ? 'bg-slate-50/60' : ''}>
                  <td className="px-4 py-2.5 font-mono text-slate-700 whitespace-nowrap">
                    {fmt(b.start)} – {fmt(b.end)}
                  </td>
                  <td className="px-4 py-2.5 text-slate-500 tabular-nums">{b.end - b.start}</td>
                  <td className="px-4 py-2.5 text-slate-800">
                    {b.to ? (
                      <Link to={b.to} className="hover:text-indigo-700 hover:underline">
                        {b.title}
                      </Link>
                    ) : (
                      b.title
                    )}
                  </td>
                  <td className="px-4 py-2.5">
                    <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${kindStyles[b.kind]}`}>
                      {kindLabel[b.kind]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-slate-500">
          Use the class timer in the sidebar. The two exercises are the flex: cut the dashboard
          exercise to 15 minutes if you are behind, extend the rebuild challenge if you are ahead.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Learning objectives</h2>
        <ul className="space-y-2">
          {objectives.map((o, i) => (
            <li key={i} className="flex gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 leading-relaxed">
              <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-100 text-indigo-700 text-xs font-semibold flex items-center justify-center mt-0.5">
                {i + 1}
              </span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Lesson flow</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {lessonCards.map((l) => (
            <Link key={l.to} to={l.to} className="group rounded-xl border border-slate-200 bg-white px-5 py-4 hover:border-indigo-400 hover:shadow transition">
              <p className="text-[11px] uppercase tracking-widest text-indigo-600 font-semibold">{l.tag}</p>
              <p className="text-lg font-semibold text-slate-900 mt-0.5 group-hover:text-indigo-700">{l.title}</p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Before class: pre-flight checklist</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {preflight.map((p) => (
            <li key={p} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
              {p}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-900 mb-3">Day-one mistakes to watch for</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {mistakes.map((m) => (
            <li key={m} className="rounded-md border border-rose-200 bg-rose-50/60 px-3 py-2 text-sm text-rose-900">
              {m}
            </li>
          ))}
        </ul>
        <p className="mt-2 text-xs text-slate-500">
          Lesson 3 has an "error decoder" table that pairs each of these with the exact message
          students will see.
        </p>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white px-5 py-4">
        <h2 className="text-lg font-semibold text-slate-900">Scope guardrails for today</h2>
        <p className="text-sm text-slate-700 mt-1 leading-relaxed">
          Students will ask "how do I make the button do something?" The answer is{' '}
          <strong>Day 2: State &amp; Interactivity</strong>. Rendering lists with{' '}
          <code className="px-1 bg-slate-100 rounded">.map</code> and sharing data between
          siblings come later too. Hardcode three cards today; that repetition is the point,
          and it sets up the motivation for lists and state.
        </p>
      </section>
    </article>
  )
}
