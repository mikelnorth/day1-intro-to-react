import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import ExampleBlock from '../../../components/ui/ExampleBlock.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import Tree from '../../../components/ui/Tree.jsx'
import Checklist from '../../../components/ui/Checklist.jsx'

const troubleshooting = [
  { symptom: '"npm: command not found" / "node is not recognized"', cause: 'Node.js is not installed or the terminal was opened before installing.', fix: 'Install Node LTS from nodejs.org, then close and reopen the terminal.' },
  { symptom: 'PowerShell: "running scripts is disabled on this system"', cause: 'Windows execution policy blocks npm.ps1.', fix: 'Use Command Prompt / Git Bash, or run: Set-ExecutionPolicy -Scope CurrentUser RemoteSigned' },
  { symptom: 'create vite asks about "rolldown-vite" or "install and start now?"', cause: 'Newer create-vite has extra prompts.', fix: 'Rolldown: No. Install and start: Yes is fine, or say No and run the commands yourself.' },
  { symptom: '"Port 5173 is in use"', cause: 'Another dev server is still running.', fix: 'Vite picks 5174 automatically. Read the URL it prints. Stop old servers with Ctrl+C.' },
  { symptom: 'Blank white page', cause: 'A runtime error. The page rendered nothing.', fix: 'Open DevTools Console (F12). Read the first red line. Usually a missing import or export.' },
  { symptom: 'Changes do not show up', cause: 'Wrong file, file not saved, or the dev server stopped.', fix: 'Check the tab title has no dot (unsaved). Confirm the terminal still shows "VITE ready".' },
  { symptom: 'Vite error: "Node.js version X is not supported"', cause: 'Vite 8 needs Node 20.19+ or 22.12+.', fix: 'Upgrade Node (nvm install --lts) or scaffold with an older Vite template.' },
]

export default function Setup() {
  return (
    <LessonShell
      number="2"
      title="Set up your React app"
      subtitle="Everyone creates the same project, at the same time. Nobody writes React until every screen shows the Vite + React starter page."
      minutes="20"
    >
      <ConceptCallout title="main.jsx loads App, and App renders the UI.">
        <p>
          That one sentence is the whole startup story. index.html has an empty div.
          main.jsx tells React to render App into it. Everything you see comes out of App.
        </p>
      </ConceptCallout>

      <DocsLink title="Build a React app from scratch (Vite)" href="https://react.dev/learn/build-a-react-app-from-scratch">
        The docs recommend a framework for production, but for learning they show exactly
        this Vite setup. Point students here if they want the "why Vite" background.
      </DocsLink>

      <ExampleBlock
        variant="wedo"
        title="Together: create the project"
        description="Type these one at a time. Wait for the whole room at each step. Students say the output out loud so you catch problems early."
        minutes="10"
      >
        <CodeBlock label="Terminal">{`npm create vite@latest react-day1
#   Select a framework:  React
#   Select a variant:    JavaScript
#   (if asked) Use rolldown-vite?  No
#   (if asked) Install and start now?  No  (we'll do it by hand once)

cd react-day1
npm install
npm run dev`}</CodeBlock>
        <Note tone="amber" title="Checkpoints (ask for thumbs up at each)">
          <ol className="list-decimal list-inside space-y-1">
            <li>A folder named <code className="px-1 bg-white rounded border border-amber-200">react-day1</code> exists and you are inside it.</li>
            <li><code className="px-1 bg-white rounded border border-amber-200">npm install</code> finished and a <code className="px-1 bg-white rounded border border-amber-200">node_modules</code> folder appeared.</li>
            <li>The terminal prints <strong>VITE ready</strong> and a <strong>Local: http://localhost:5173/</strong> URL.</li>
            <li>The browser shows the spinning Vite + React logos and a "count is 0" button.</li>
          </ol>
        </Note>
        <Note tone="slate" title="Terminal survival tips">
          <ul className="list-disc list-inside space-y-1">
            <li>Leave <code className="px-1 bg-white rounded border border-slate-200">npm run dev</code> running. Open a second terminal if you need one.</li>
            <li>Ctrl+C stops the dev server. Up arrow repeats the last command.</li>
            <li>Open the folder in VS Code: <code className="px-1 bg-white rounded border border-slate-200">code .</code> (Mac: install the "code" command from the VS Code command palette first).</li>
          </ul>
        </Note>
      </ExampleBlock>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Project tour</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Tree caption="Files you touch today are App.jsx and main.jsx. Ignore the rest for now.">{`react-day1/
 ├ index.html        <- the one HTML page. Has <div id="root">
 ├ package.json      <- project name, scripts, dependencies
 ├ vite.config.js    <- dev server config (leave it alone)
 ├ node_modules/     <- installed packages (never edit, never commit)
 ├ public/           <- static files served as-is
 └ src/
    ├ main.jsx       <- entry point: renders <App /> into #root
    ├ App.jsx        <- your first component
    ├ App.css        <- styles for App (we'll delete these)
    ├ index.css      <- global styles
    └ assets/        <- images imported by code`}</Tree>
          <div className="space-y-3">
            <CodeBlock label="src/main.jsx (as generated)">{`import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)`}</CodeBlock>
            <Tree caption="How React runs.">{`index.html  ->  main.jsx  ->  App.jsx  ->  what you see
 #root          render(<App/>)   return <h1>…`}</Tree>
          </div>
        </div>
        <Note tone="sky" title="Talking points for the tour">
          <ul className="list-disc list-inside space-y-1">
            <li>Open index.html. Find <code className="px-1 bg-white rounded border border-sky-200">&lt;div id="root"&gt;&lt;/div&gt;</code>. It is empty. React fills it.</li>
            <li>Open main.jsx. Read it top to bottom: import React tools, import App, render App into root. Do not explain StrictMode beyond "a dev-only safety net".</li>
            <li>Open App.jsx. It is a function. It returns markup. Change the text "Vite + React" to your name, save, watch the browser update without a refresh.</li>
            <li>Point out the capital A in <code className="px-1 bg-white rounded border border-sky-200">&lt;App /&gt;</code>. That matters in Lesson 4.</li>
          </ul>
        </Note>
      </section>

      <ExampleBlock
        variant="wedo"
        title="Together: clean slate"
        description="Strip the starter down so students own every line on screen. Do this slowly; it is the first time they edit a React file."
        minutes="5"
      >
        <ol className="list-decimal list-inside text-sm text-slate-700 space-y-1">
          <li>Delete <code className="px-1 bg-slate-100 rounded">src/App.css</code> and <code className="px-1 bg-slate-100 rounded">src/assets/react.svg</code>.</li>
          <li>Replace everything in <code className="px-1 bg-slate-100 rounded">src/index.css</code> with a couple of base rules (below), or empty it.</li>
          <li>Replace everything in <code className="px-1 bg-slate-100 rounded">src/App.jsx</code> with the Hello React component.</li>
          <li>Save. The browser should show a plain "Hello React" heading.</li>
        </ol>
        <div className="grid gap-4 md:grid-cols-2">
          <CodeBlock label="src/App.jsx">{`function App() {
  return <h1>Hello React</h1>
}

export default App`}</CodeBlock>
          <CodeBlock label="src/index.css (optional, keeps things readable)">{`body {
  margin: 0;
  font-family: system-ui, sans-serif;
  padding: 2rem;
}`}</CodeBlock>
        </div>
        <Checklist
          title="Everyone should have"
          items={[
            'A running dev server at localhost:5173 (or the port Vite printed)',
            'App.jsx containing only the Hello React component',
            'App.css deleted and its import line removed from App.jsx',
            'The browser showing "Hello React" and the Console showing no red errors',
          ]}
        />
      </ExampleBlock>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Troubleshooting table</h2>
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <table className="w-full text-sm">
            <thead className="bg-slate-50 text-slate-600 text-left">
              <tr>
                <th className="px-4 py-3 font-semibold">Symptom</th>
                <th className="px-4 py-3 font-semibold">Likely cause</th>
                <th className="px-4 py-3 font-semibold">Fix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {troubleshooting.map((row) => (
                <tr key={row.symptom}>
                  <td className="px-4 py-3 font-medium text-slate-900 align-top">{row.symptom}</td>
                  <td className="px-4 py-3 align-top">{row.cause}</td>
                  <td className="px-4 py-3 align-top">{row.fix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </LessonShell>
  )
}
