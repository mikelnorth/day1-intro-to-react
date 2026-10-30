import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import PropsPlayground from './PropsPlayground.jsx'

export default function PropsLesson() {
  return (
    <LessonShell
      number="5"
      title="Props: inputs to a component"
      subtitle="A component without props always renders the same thing. Props let the parent pass data in, so one component can be used many times with different content."
      minutes="40"
    >
      <ConceptCallout title="Props are to components what arguments are to functions.">
        <p>
          <code className="px-1 bg-slate-200 rounded">greet("Ada")</code> passes an argument.{' '}
          <code className="px-1 bg-slate-200 rounded">&lt;Card title="Users" /&gt;</code> passes a prop.
          Inside the component, props arrive as one object. Most people destructure it right in the parameter list.
        </p>
      </ConceptCallout>

      <DocsLink title="Passing Props to a Component" href="https://react.dev/learn/passing-props-to-a-component">
        The docs' two-step recipe is the one to teach: (1) pass props to the child JSX, (2) read them inside the child. Skip the "children" and "forwarding with spread" sections today.
      </DocsLink>

      <ExampleBlock
        variant="ido"
        title="Demo: the Card component"
        description="Write Card with two props. Use it twice with different values. Then edit the props live with the playground so students see data flowing in."
        minutes="10"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="src/components/Card.jsx">{`function Card({ title, value }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}

export default Card`}</CodeBlock>
          <CodeBlock label="src/App.jsx">{`import Card from './components/Card.jsx'

function App() {
  return (
    <div>
      <Card title="Users" value="1200" />
      <Card title="Revenue" value="$20,000" />
    </div>
  )
}

export default App`}</CodeBlock>
        </div>
        <PropsPlayground />
        <Note tone="sky" title="Talking points">
          <ul className="list-disc list-inside space-y-1">
            <li>Point at the attribute <code className="px-1 bg-white rounded border border-sky-200">title="Users"</code>, then at <code className="px-1 bg-white rounded border border-sky-200">{'{title}'}</code> inside Card. Same name, that is the connection.</li>
            <li>Props flow <strong>down</strong>: parent to child. App decides the values; Card just displays them. This is "one-way data flow".</li>
            <li>The playground inputs are a teaching trick (they use Day 2 state). Students only need to see: new prop value in, new card out.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Two ways to read props</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="props object (what is really happening)">{`function Card(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.value}</p>
    </div>
  )
}`}</CodeBlock>
          <CodeBlock label="destructured (what you will see everywhere)">{`function Card({ title, value }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}`}</CodeBlock>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          Show the first version once so the curly braces in the parameter list are not magic. Then use the second for the rest of the course.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Props are read-only</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Never do this">{`function Card({ title, value }) {
  title = title.toUpperCase()   // don't reassign props
  return <h2>{title}</h2>
}`}</CodeBlock>
          <CodeBlock label="Do this instead">{`function Card({ title, value }) {
  const heading = title.toUpperCase()   // derive a new value
  return <h2>{heading}</h2>
}`}</CodeBlock>
        </div>
        <Note tone="rose" title="Why">
          <p>
            A component receives props; it does not own them. The parent owns them. If a child could change them, the parent's data and the child's screen would disagree, which is exactly the bug from Lesson 1. If a component needs data that changes, that is state. Day 2.
          </p>
        </Note>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Strings vs. everything else</h2>
        <CodeBlock label="Quotes for string literals, curly braces for any JavaScript value">{`<Card title="Users" value="1200" />        // both strings
<Card title="Users" value={1200} />        // value is a number
<Card title={"Users"} value={1200} />      // also fine, braces with a string inside
<Card title={label} value={count * 2} />   // variables and expressions`}</CodeBlock>
        <p className="text-sm text-slate-600">
          Today string props are enough. Mention the braces form so it is not a surprise tomorrow.
        </p>
      </section>

      <ExampleBlock
        variant="wedo"
        title="Together: add a third prop"
        description="Give Card a `label` prop that renders as a small caption under the value, like 'this month'. Students call out each step."
        minutes="5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="Card.jsx">{`function Card({ title, value, label }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
      <small>{label}</small>
    </div>
  )
}`}</CodeBlock>
          <CodeBlock label="App.jsx">{`<Card title="Users" value="1200" label="this month" />
<Card title="Revenue" value="$20,000" label="this quarter" />`}</CodeBlock>
        </div>
        <Note tone="amber" title="Ask">
          <ul className="list-disc list-inside space-y-1">
            <li>What shows up if you forget to pass <code className="px-1 bg-white rounded border border-amber-200">label</code>? (Nothing. undefined renders as nothing. No crash.)</li>
            <li>How many files did we touch to add a feature to every card? (One: Card.jsx. That is the win over copy-paste.)</li>
          </ul>
        </Note>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Exercise: Dashboard (25 minutes)"
        description="Create a NEW Vite project called dashboard. Build a dashboard page with a Header, a main area of stat cards, and a Footer. Requirements: use components, use props, no duplicate code, at least 4 components."
        minutes="25"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Tree caption="Suggested tree (5 components). Three Card tags, one Card file.">{`App
 ├ Header          title prop
 ├ StatsGrid
 │   ├ Card        title, value
 │   ├ Card        title, value
 │   └ Card        title, value
 └ Footer          year or company prop`}</Tree>
          <CodeBlock label="Terminal">{`cd ..                     # out of react-day1
npm create vite@latest dashboard
#  React, JavaScript
cd dashboard
npm install
npm run dev`}</CodeBlock>
        </div>
        <Checklist
          items={[
            'New Vite project named dashboard, starter files cleaned out',
            'At least 4 components, each in its own file under src/components/',
            'Header takes at least one prop (e.g. title) and displays it',
            'Card takes title and value props; the same Card file is used 3+ times with different data',
            'Footer takes a prop (e.g. company or year)',
            'No copy-pasted markup: if two things look the same, they are the same component',
            'Component names are capitalized and match their file names',
            'Console has no errors or warnings',
            'Stretch: add a third prop to Card (label, icon emoji, or color) and use it',
            'Stretch: add a Sidebar or Nav component with links',
          ]}
        />
        <Note tone="emerald" title="Instructor: what to look for while walking the room">
          <ul className="list-disc list-inside space-y-1">
            <li>Students who hardcode "Users" inside Card instead of passing it in. Ask: "how would you make a Revenue card?"</li>
            <li>Students who make UsersCard, RevenueCard, OrdersCard as three files. Same question.</li>
            <li>Students asking how to loop over the cards. Say "Day 4, rendering lists. Three tags is correct today."</li>
            <li>Finished early? Point them at the stretch items, then at the Architecture page.</li>
          </ul>
        </Note>
      </ExampleBlock>
    </LessonShell>
  )
}
