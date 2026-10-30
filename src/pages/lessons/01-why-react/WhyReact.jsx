import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import ImperativeCart from './ImperativeCart.jsx'
import DeclarativeCart from './DeclarativeCart.jsx'

const features = [
  { title: 'JSX syntax', desc: 'Write HTML-like markup directly in JavaScript for cleaner, more intuitive UI code.' },
  { title: 'One-way data flow', desc: 'Data flows down from parent to child components, which makes changes predictable.' },
  { title: 'Rich ecosystem', desc: 'Huge community, tooling, libraries, and learning resources.' },
  { title: 'Cross-platform', desc: 'React Native brings the same component model to mobile apps.' },
]

const stats = [
  { n: '16M+', label: 'Monthly npm downloads' },
  { n: '180k+', label: 'GitHub stars' },
  { n: '9k+', label: 'Companies using it in production' },
  { n: '95%+', label: 'Developer satisfaction in recent surveys' },
]

export default function WhyReact() {
  return (
    <LessonShell
      number="1"
      title="Why React exists"
      subtitle="React is a JavaScript library for building user interfaces. Before we write any, students should feel the problem it solves."
      minutes="20"
    >
      <ConceptCallout title="UI = f(state). The UI is based on data; when data changes, the UI updates.">
        <p>
          React asks you to describe <em>what</em> the screen should look like for some data.
          It takes care of <em>how</em> to update the page. That split is the whole idea.
        </p>
      </ConceptCallout>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Before React</h2>
        <p className="text-sm text-slate-700 leading-relaxed">
          Developers updated the DOM by hand. Every time data changed, someone had to remember
          every place on the page that showed it.
        </p>
        <CodeBlock label="Before React (imperative)">{`document.querySelector("#count").innerText = 5`}</CodeBlock>
        <ul className="grid gap-2 sm:grid-cols-3">
          {['Hard to debug', 'Hard to scale', 'Hard to maintain'].map((t) => (
            <li key={t} className="rounded-md border border-rose-200 bg-rose-50/60 px-3 py-2 text-sm text-rose-900 font-medium">
              {t}
            </li>
          ))}
        </ul>
        <p className="text-sm text-slate-700 leading-relaxed">
          React solves this by using <strong>components</strong>, updating the UI{' '}
          <strong>automatically</strong>, and making the UI <strong>predictable</strong>.
        </p>
      </section>

      <ExampleBlock
        variant="ido"
        title="Demo: the same cart, two ways"
        description="Click 'Add item' on both. The imperative version forgets to update the header badge. The React version cannot forget, because both spots render from the same data."
        minutes="8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <DemoSurface title="Imperative (vanilla DOM)">
            <ImperativeCart />
          </DemoSurface>
          <DemoSurface title="Declarative (React)">
            <DeclarativeCart />
          </DemoSurface>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Imperative: you say HOW">{`let count = 0

button.addEventListener("click", () => {
  count = count + 1
  document.querySelector("#count").innerText = count
  // forgot: document.querySelector("#badge")
  //           .innerText = count + " items"
})`}</CodeBlock>
          <CodeBlock label="Declarative: you say WHAT">{`function Cart() {
  // Day 2 preview: count is data that can change
  const [count, setCount] = useState(0)

  return (
    <div>
      <span>{count} items</span>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add item
      </button>
    </div>
  )
}`}</CodeBlock>
        </div>
        <Note tone="sky" title="Talking points">
          <ul className="list-disc list-inside space-y-1">
            <li>Left: you control every step. You tell the browser which element to find and what to change.</li>
            <li>Right: you describe the UI. <code className="px-1 bg-white rounded border border-sky-200">{'{count}'}</code> appears twice; React keeps both in sync.</li>
            <li>Do not explain <code className="px-1 bg-white rounded border border-sky-200">useState</code> or <code className="px-1 bg-white rounded border border-sky-200">onClick</code> yet. Say "that is Day 2" and move on. Today: we never touch the DOM.</li>
            <li>Ask: in a real app with 40 places that show the cart count, which version would you rather maintain?</li>
          </ul>
        </Note>
      </ExampleBlock>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Imperative vs. declarative</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold w-40"></th>
                <th className="px-4 py-3 font-semibold">Imperative (How)</th>
                <th className="px-4 py-3 font-semibold">Declarative (What)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">You write</td>
                <td className="px-4 py-3 font-mono text-xs">const el = document.querySelector("#count")<br />el.innerText = 5</td>
                <td className="px-4 py-3 font-mono text-xs">&lt;p&gt;{'{count}'}&lt;/p&gt;</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Who updates the page</td>
                <td className="px-4 py-3">You, every time, everywhere</td>
                <td className="px-4 py-3">React</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Analogy</td>
                <td className="px-4 py-3">Giving a driver turn-by-turn directions</td>
                <td className="px-4 py-3">Telling a taxi the destination</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-slate-900">Risk</td>
                <td className="px-4 py-3">Forget one update and the UI lies</td>
                <td className="px-4 py-3">UI always matches the data</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <ExampleBlock
        variant="wedo"
        title="Together: spot the imperative code"
        description="Read each line aloud and ask: is this saying HOW or WHAT?"
        minutes="4"
      >
        <div className="grid gap-3 md:grid-cols-2">
          <RevealCard question={'el.style.display = "none"'} label="How or what?">
            <p><strong>How.</strong> You are reaching in and changing one property on one element.</p>
          </RevealCard>
          <RevealCard question={'<p>Welcome back, {name}</p>'} label="How or what?">
            <p><strong>What.</strong> A description of the output for a given <code>name</code>. No instructions about updating.</p>
          </RevealCard>
          <RevealCard question={'list.appendChild(newItem)'} label="How or what?">
            <p><strong>How.</strong> A step in a procedure. If the list is also shown in a sidebar, you have to remember to update that too.</p>
          </RevealCard>
          <RevealCard question={'<Card title="Users" value="1200" />'} label="How or what?">
            <p><strong>What.</strong> "There is a card here, with this title and value." We will write this exact line in Lesson 5.</p>
          </RevealCard>
        </div>
      </ExampleBlock>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Key features of React</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl border border-slate-200 bg-white px-5 py-4">
              <p className="font-semibold text-slate-900">{f.title}</p>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Why React? (the numbers)</h2>
        <div className="grid gap-3 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.n} className="rounded-xl border border-slate-200 bg-white px-4 py-4 text-center">
              <p className="text-2xl font-bold text-indigo-700">{s.n}</p>
              <p className="text-xs text-slate-600 mt-1 leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          React offers efficient rendering, a maintainable code structure, and a thriving
          community. Regular updates keep it at the forefront of web development.
        </p>
      </section>

      <DocsLink title="Quick Start" href="https://react.dev/learn">
        The first page of the docs covers everything we do today in ten minutes. Worth
        showing the "Creating and nesting components" section on the projector.
      </DocsLink>
    </LessonShell>
  )
}
