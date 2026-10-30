import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import DashboardDemo from './DashboardDemo.jsx'

export default function Components() {
  return (
    <LessonShell
      number="4"
      title="Breaking UI into components"
      subtitle="React applications are built from reusable, isolated pieces called components. Instead of one big function, you write small ones and nest them."
      minutes="30"
    >
      <ConceptCallout title="Components are the building blocks. You compose them like Lego.">
        <p>
          Each component is independent and does one job. App does not know how Header is
          built; it just places <code className="px-1 bg-slate-200 rounded">&lt;Header /&gt;</code> where a header should go.
        </p>
      </ConceptCallout>

      <ExampleBlock
        variant="ido"
        title="Demo: one big component becomes three small ones"
        description="Start with everything in App. Cut the <h1> out into Header, the <p> into WelcomeMessage, then use them as tags. Toggle the outlines to show the boundaries."
        minutes="8"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="src/App.jsx">{`function Header() {
  return <h1>Dashboard</h1>
}

function WelcomeMessage() {
  return <p>Welcome to your dashboard</p>
}

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
    </div>
  )
}

export default App`}</CodeBlock>
          <div className="space-y-4">
            <DashboardDemo />
            <Tree caption="The component tree. App is the root; Header and WelcomeMessage are its children.">{`App
 ├ Header
 └ WelcomeMessage`}</Tree>
          </div>
        </div>
        <Note tone="sky" title="Talking points">
          <ul className="list-disc list-inside space-y-1">
            <li>A component name <strong>must start with a capital letter</strong>. Lowercase means "HTML tag" to React.</li>
            <li>You use a component like a tag: <code className="px-1 bg-white rounded border border-sky-200">&lt;Header /&gt;</code>. Self-closing, because it has nothing inside.</li>
            <li>Only one component per file gets <code className="px-1 bg-white rounded border border-sky-200">export default</code>. The others are helpers unless you move them out.</li>
            <li>Draw the tree on the whiteboard every time. Students should be able to draw it from the code and write the code from the tree.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <DocsLink title="Importing and Exporting Components" href="https://react.dev/learn/importing-and-exporting-components">
        The docs move Gallery and Profile into their own files, exactly the move we make next. Their table of default vs named exports is a good screenshot for the handout.
      </DocsLink>

      <ExampleBlock
        variant="wedo"
        title="Together: one component per file"
        description="Move Header into src/components/Header.jsx and import it. This is the habit that scales. Narrate every step: create file, move function, export, import, use."
        minutes="7"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="src/components/Header.jsx">{`function Header() {
  return <h1>Dashboard</h1>
}

export default Header`}</CodeBlock>
          <CodeBlock label="src/App.jsx">{`import Header from './components/Header.jsx'

function WelcomeMessage() {
  return <p>Welcome to your dashboard</p>
}

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
    </div>
  )
}

export default App`}</CodeBlock>
        </div>
        <Note tone="amber" title="As you build">
          <ul className="list-disc list-inside space-y-1">
            <li>Create the <code className="px-1 bg-white rounded border border-amber-200">src/components/</code> folder first. One file per component, file name matches component name.</li>
            <li>The import path starts with <code className="px-1 bg-white rounded border border-amber-200">./</code> because it is a file we wrote, not a package. Compare with <code className="px-1 bg-white rounded border border-amber-200">import {'{ StrictMode }'} from 'react'</code> in main.jsx.</li>
            <li>Forget the import on purpose once. "Header is not defined." Now they know that one too.</li>
            <li>Ask the class to do WelcomeMessage themselves. Walk the room.</li>
          </ul>
        </Note>
      </ExampleBlock>

      <DocsLink title="Understanding Your UI as a Tree" href="https://react.dev/learn/understanding-your-ui-as-a-tree">
        The render tree diagrams here are the same ├ └ trees we draw. Skip the module dependency tree section for now.
      </DocsLink>

      <ExampleBlock
        variant="youdo"
        title="Exercise: build basic components (15 minutes)"
        description="In your react-day1 project, build a page out of three components: Header, Main content, and Footer. Each in its own file."
        minutes="15"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Tree caption="Target tree. Name the main one MainContent (or Main); a lowercase main would be the HTML tag.">{`App
 ├ Header
 ├ MainContent
 └ Footer`}</Tree>
          <Tree caption="Target files.">{`src/
 ├ App.jsx
 └ components/
    ├ Header.jsx
    ├ MainContent.jsx
    └ Footer.jsx`}</Tree>
        </div>
        <Checklist
          items={[
            'Header.jsx returns a <header> with a site title (<h1>) and a <nav> with three links',
            'MainContent.jsx returns a <main> with a heading and a paragraph or two',
            'Footer.jsx returns a <footer> with a copyright line',
            'Each file has exactly one export default',
            'App.jsx imports all three and renders them inside one parent element',
            'Stretch: Footer shows the current year with {new Date().getFullYear()}',
            'Stretch: add a Sidebar component and place it next to MainContent',
          ]}
        />
        <Note tone="emerald" title="Reflection while you work">
          <ul className="list-disc list-inside space-y-1">
            <li>Why is it useful that Header lives in its own file?</li>
            <li>If you wanted the same Header on a second page, what would you do?</li>
            <li>What would break if you named the file header.jsx and the function header?</li>
          </ul>
        </Note>
      </ExampleBlock>
    </LessonShell>
  )
}
