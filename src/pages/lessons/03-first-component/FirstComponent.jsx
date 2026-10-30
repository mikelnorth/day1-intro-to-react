import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'
import JsxPlayground from './JsxPlayground.jsx'

const concepts = [
  { title: 'return', body: 'Controls what appears on screen. A component is a function; whatever it returns is what React draws.' },
  { title: 'export default', body: 'Makes this component available to other files. main.jsx can only import App because App.jsx exports it.' },
  { title: 'JSX', body: 'Lets you write HTML-looking markup inside JavaScript. It is not a string and it is not HTML. It compiles to JavaScript.' },
]

const rules = [
  { rule: 'Return one parent element', bad: '<h1>Hi</h1>\n<p>There</p>', good: '<div>\n  <h1>Hi</h1>\n  <p>There</p>\n</div>', why: 'A function can only return one value. Wrap siblings in a div, or an empty <>…</> fragment.' },
  { rule: 'Use className, not class', bad: '<p class="intro">', good: '<p className="intro">', why: 'class is a reserved word in JavaScript. React warns: "Invalid DOM property class".' },
  { rule: 'Close every tag', bad: '<img src={url}>\n<br>', good: '<img src={url} />\n<br />', why: 'JSX is stricter than HTML. Self-closing tags need the slash.' },
  { rule: 'Curly braces for JavaScript', bad: '<p>Hello name</p>', good: '<p>Hello {name}</p>', why: 'Anything inside { } is a JavaScript expression: variables, math, function calls.' },
  { rule: 'camelCase attributes', bad: '<button onclick=…\n<label for=…', good: '<button onClick=…\n<label htmlFor=…', why: 'Attributes become JavaScript property names. (onClick itself is Day 2.)' },
  { rule: 'Parentheses for multi-line return', bad: 'return\n  <div>…</div>', good: 'return (\n  <div>…</div>\n)', why: 'A line break right after return returns undefined. Nothing renders and there is no error.' },
]

const errors = [
  { msg: 'Adjacent JSX elements must be wrapped in an enclosing tag', cause: 'Two sibling elements returned side by side.', fix: 'Wrap them in a <div> or <>…</>.' },
  { msg: 'The requested module \'/src/App.jsx\' does not provide an export named \'default\'', cause: 'Forgot export default App.', fix: 'Add export default App at the bottom of the file.' },
  { msg: 'Uncaught ReferenceError: Header is not defined', cause: 'Used <Header /> without defining or importing it.', fix: 'Define the function in this file or import it from its file.' },
  { msg: 'Warning: Invalid DOM property `class`. Did you mean `className`?', cause: 'Copied HTML into JSX.', fix: 'Find-and-replace class= with className=.' },
  { msg: 'Unterminated JSX contents', cause: 'A tag was never closed.', fix: 'Check every opening tag has a closing tag or a trailing />.' },
  { msg: 'Blank page, no error at all', cause: 'Multi-line return without parentheses, or the component returns nothing.', fix: 'Wrap the JSX in parentheses right after return.' },
  { msg: '<header> shows as an empty bar, not your component', cause: 'Lowercase component name. React treats <header /> as the HTML tag.', fix: 'Capitalize: function Header() and <Header />.' },
]

function Hello() {
  return <h1 className="text-2xl font-bold text-slate-900">Hello React</h1>
}

export default function FirstComponent() {
  return (
    <LessonShell
      number="3"
      title="Your first component"
      subtitle="A React component is a JavaScript function that returns markup. That is the entire definition. Everything else today is detail."
      minutes="20"
    >
      <ConceptCallout title="React runs your function and renders what it returns.">
        <p>
          Students already know functions. Lean on that: <code className="px-1 bg-slate-200 rounded">greet(name)</code> returns a string;{' '}
          <code className="px-1 bg-slate-200 rounded">App()</code> returns UI. React is the thing that calls App.
        </p>
      </ConceptCallout>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Before React code: a plain function</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="JavaScript you already know">{`function greet(name) {
  return "Hello " + name
}

greet("Ada")   // -> "Hello Ada"`}</CodeBlock>
          <CodeBlock label="A React component is the same shape">{`function App() {
  return <h1>Hello</h1>
}

// React calls App() for you and
// puts the result on the page.`}</CodeBlock>
        </div>
        <Note tone="sky" title="Say it this way">
          <ul className="list-disc list-inside space-y-1">
            <li>Functions <strong>run</strong>. <code className="px-1 bg-white rounded border border-sky-200">return</code> sends a value back.</li>
            <li>A component is a function whose return value is UI instead of a string or number.</li>
            <li>You never call <code className="px-1 bg-white rounded border border-sky-200">App()</code> yourself. You hand it to React in main.jsx and React calls it.</li>
          </ul>
        </Note>
      </section>

      <DocsLink title="Your First Component" href="https://react.dev/learn/your-first-component">
        Same three steps as below: export the component, define the function, add markup.
        The "Pitfall" box about capital letters is worth reading aloud.
      </DocsLink>

      <ExampleBlock
        variant="ido"
        title="Demo: Hello React, line by line"
        description="Type it, do not paste it. Three lines, three ideas: function, return, export default."
        minutes="5"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="src/App.jsx">{`function App() {
  return <h1>Hello React</h1>
}

export default App`}</CodeBlock>
          <DemoSurface title="What the browser shows">
            <Hello />
          </DemoSurface>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {concepts.map((c) => (
            <div key={c.title} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="font-mono text-sm font-semibold text-indigo-700">{c.title}</p>
              <p className="text-sm text-slate-700 mt-1 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
        <Note tone="sky" title="Prove export default matters">
          <p>
            Delete the <code className="px-1 bg-white rounded border border-sky-200">export default App</code> line and save. The page goes blank
            and the console says the module "does not provide an export named 'default'". Put it back. Students now know what that error means forever.
          </p>
        </Note>
      </ExampleBlock>

      <DocsLink title="Writing Markup with JSX" href="https://react.dev/learn/writing-markup-with-jsx">
        The docs' "Rules of JSX" section is the source for the table below. Their HTML-to-JSX
        converter link is handy when students paste in old HTML.
      </DocsLink>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">The rules of JSX</h2>
        <div className="space-y-3">
          {rules.map((r) => (
            <div key={r.rule} className="rounded-xl border border-slate-200 bg-white overflow-hidden">
              <div className="px-5 py-3 border-b border-slate-100 flex items-baseline justify-between gap-4">
                <p className="font-semibold text-slate-900">{r.rule}</p>
                <p className="text-xs text-slate-500 text-right">{r.why}</p>
              </div>
              <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                <div className="px-5 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-rose-600 font-semibold mb-1">Breaks</p>
                  <pre className="font-mono text-xs text-slate-800 whitespace-pre-wrap">{r.bad}</pre>
                </div>
                <div className="px-5 py-3">
                  <p className="text-[10px] uppercase tracking-widest text-emerald-600 font-semibold mb-1">Works</p>
                  <pre className="font-mono text-xs text-slate-800 whitespace-pre-wrap">{r.good}</pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ExampleBlock
        variant="wedo"
        title="Together: break the one-parent rule on purpose"
        description="Add a <p> under the <h1>, save, and read the error together. Then fix it two ways."
        minutes="5"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <CodeBlock label="1. This fails">{`function App() {
  return (
    <h1>Hello React</h1>
    <p>Welcome</p>
  )
}`}</CodeBlock>
          <CodeBlock label="2. Fix with a div">{`function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Welcome</p>
    </div>
  )
}`}</CodeBlock>
          <CodeBlock label="3. Fix with a fragment">{`function App() {
  return (
    <>
      <h1>Hello React</h1>
      <p>Welcome</p>
    </>
  )
}`}</CodeBlock>
        </div>
        <Note tone="amber" title="Why one parent?">
          <p>
            Because a function can only return one value. <code className="px-1 bg-white rounded border border-amber-200">return a, b</code> is not
            a thing. The div (or fragment) is the one value, and it holds the rest. A fragment is a wrapper that leaves no extra element in the page.
          </p>
        </Note>
      </ExampleBlock>

      <DocsLink title="JavaScript in JSX with Curly Braces" href="https://react.dev/learn/javascript-in-jsx-with-curly-braces">
        "Curly braces are a window into JavaScript." Show the docs' two places you can use them: text inside a tag, and attribute values.
      </DocsLink>

      <ExampleBlock
        variant="ido"
        title="Demo: curly braces are a window into JavaScript"
        description="Anything between { } is evaluated. Variables, math, method calls. This is how data gets onto the screen, and it is exactly what props will use next."
        minutes="3"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="App.jsx">{`const name = "Ada"
const year = new Date().getFullYear()
const skills = 3

function App() {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>2 + 2 = {2 + 2}</p>
      <p>Shouting: {name.toUpperCase()}</p>
      <p>The year is {year}</p>
      <p>You know {skills} React concepts so far.</p>
    </div>
  )
}`}</CodeBlock>
          <JsxPlayground />
        </div>
      </ExampleBlock>

      <ExampleBlock
        variant="youdo"
        title="Practice: your intro card (5 minutes)"
        description="In App.jsx, under Hello React, add a short intro about yourself. Use at least one variable in curly braces and one list."
        minutes="5"
      >
        <Checklist
          items={[
            'A <p> with your name, where the name comes from a const in curly braces',
            'A <ul> with three <li> items: things you want to build with React',
            'Everything is wrapped in a single parent element',
            'No red errors in the browser console',
            'Stretch: show the current year using new Date().getFullYear()',
          ]}
        />
      </ExampleBlock>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Error decoder</h2>
        <p className="text-sm text-slate-600">
          Put this on the projector during exercises. Every one of these will happen today.
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">You see</th>
                <th className="px-4 py-3 font-semibold">It means</th>
                <th className="px-4 py-3 font-semibold">Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {errors.map((e) => (
                <tr key={e.msg}>
                  <td className="px-4 py-3 font-mono text-xs text-rose-800 align-top">{e.msg}</td>
                  <td className="px-4 py-3 align-top">{e.cause}</td>
                  <td className="px-4 py-3 align-top">{e.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </LessonShell>
  )
}
