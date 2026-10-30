import LessonShell from '../../../components/ui/LessonShell.jsx'
import ConceptCallout from '../../../components/ui/ConceptCallout.jsx'
import Note from '../../../components/ui/Note.jsx'
import DocsLink from '../../../components/ui/DocsLink.jsx'
import RevealCard from '../../../components/ui/RevealCard.jsx'
import Tree from '../../../components/ui/Tree.jsx'

const vdomSteps = [
  { n: 1, title: 'Something changes', desc: 'Component data is updated (props today; state from Day 2).' },
  { n: 2, title: 'Virtual DOM update', desc: 'React builds a new virtual copy of the DOM reflecting the change.' },
  { n: 3, title: 'Diffing', desc: 'React compares the new virtual DOM with the previous one.' },
  { n: 4, title: 'Minimal DOM updates', desc: 'Only the parts that actually changed are written to the real page.' },
]

const docsToday = [
  { title: 'Quick Start', href: 'https://react.dev/learn' },
  { title: 'Creating a React App', href: 'https://react.dev/learn/creating-a-react-app' },
  { title: 'Build a React App from Scratch', href: 'https://react.dev/learn/build-a-react-app-from-scratch' },
  { title: 'Describing the UI', href: 'https://react.dev/learn/describing-the-ui' },
  { title: 'Your First Component', href: 'https://react.dev/learn/your-first-component' },
  { title: 'Importing and Exporting Components', href: 'https://react.dev/learn/importing-and-exporting-components' },
  { title: 'Writing Markup with JSX', href: 'https://react.dev/learn/writing-markup-with-jsx' },
  { title: 'JavaScript in JSX with Curly Braces', href: 'https://react.dev/learn/javascript-in-jsx-with-curly-braces' },
  { title: 'Passing Props to a Component', href: 'https://react.dev/learn/passing-props-to-a-component' },
  { title: 'Understanding Your UI as a Tree', href: 'https://react.dev/learn/understanding-your-ui-as-a-tree' },
  { title: 'Thinking in React (steps 1 and 2 only)', href: 'https://react.dev/learn/thinking-in-react' },
]

const docsLater = [
  { title: 'Conditional Rendering', href: 'https://react.dev/learn/conditional-rendering' },
  { title: 'Rendering Lists', href: 'https://react.dev/learn/rendering-lists' },
  { title: 'Keeping Components Pure', href: 'https://react.dev/learn/keeping-components-pure' },
]

export default function WrapUp() {
  return (
    <LessonShell
      number="7"
      title="Wrap-up & reflection"
      subtitle="Five questions, said out loud, in students' own words. Reveal the model answers only after the room has tried."
      minutes="5"
    >
      <ExampleWrapper />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Reflection: discuss the following</h2>
        <div className="grid gap-3 md:grid-cols-2">
          <RevealCard question="What is a React component?">
            <p>A JavaScript function that returns UI (JSX). React calls it and draws what it returns. Its name starts with a capital letter and you use it like a tag.</p>
          </RevealCard>
          <RevealCard question="What does return do?">
            <p>It sends the component's UI back to React. Whatever you return is what appears on screen. Return exactly one parent element.</p>
          </RevealCard>
          <RevealCard question="What are props?">
            <p>Inputs to a component, like arguments to a function. The parent passes them as attributes; the child reads them from one object. They are read-only.</p>
          </RevealCard>
          <RevealCard question="Why break UI into components?">
            <p>Reuse (one Card, many uses), isolation (fix Header in one file), and readability (App reads like an outline of the page). Teams can work on different components at once.</p>
          </RevealCard>
          <RevealCard question="What is declarative programming?">
            <p>Describing what the UI should look like for some data, instead of writing step-by-step instructions for how to change the page. React handles the how.</p>
          </RevealCard>
          <RevealCard question="Bonus: what does export default do?">
            <p>It makes the component available to other files. Without it, main.jsx cannot import App and the page goes blank.</p>
          </RevealCard>
        </div>
      </section>

      <ConceptCallout title="What's next: State and Interactivity" eyebrow="Day 2 preview">
        <p>Make your UI dynamic. Understand re-rendering. Build interactive applications.</p>
        <p className="text-slate-600">
          Today's components always show the same thing for the same props. Next time, components get their own data that can change, and the button from Lesson 1 finally does something.
        </p>
        <Tree caption="The four-step loop we will spend Day 2 on. Today was step 2 only.">{`1  Initialize state     set up the component's data
2  Render UI            display based on current data   <- Day 1 lives here
3  Update state         change data when events occur
4  Re-render            UI updates to reflect new state`}</Tree>
      </ConceptCallout>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Virtual DOM (high level only)</h2>
        <p className="text-sm text-slate-600">
          Students do not need the internals yet. One slide's worth, to answer "how does React know what to update?"
        </p>
        <div className="grid gap-3 sm:grid-cols-4">
          {vdomSteps.map((s) => (
            <div key={s.n} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
              <p className="text-xs font-semibold text-indigo-700">Step {s.n}</p>
              <p className="font-semibold text-slate-900 mt-0.5">{s.title}</p>
              <p className="text-sm text-slate-600 mt-1 leading-snug">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Exit ticket (2 minutes, on paper or in chat)</h2>
        <Note tone="slate">
          <ol className="list-decimal list-inside space-y-1">
            <li>Write a component called <code className="px-1 bg-white rounded border border-slate-200">Greeting</code> that takes a <code className="px-1 bg-white rounded border border-slate-200">name</code> prop and returns an h1 saying hello to that name.</li>
            <li>Write the line of JSX that uses it with the name "Sam".</li>
            <li>One thing from today that is still fuzzy.</li>
          </ol>
        </Note>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Practice before next class</h2>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            'Rebuild the dashboard from scratch one more time, with different data (a weather page, a sports scoreboard, a music library).',
            'Read "Your First Component" and "Passing Props to a Component" on react.dev and do the challenges at the bottom of each page.',
            'Take any webpage you like and draw its component tree on paper. Mark which boxes would be reused.',
            'Bring one question about something a React app does that you cannot build yet. Most of them will be answered on Day 2.',
          ].map((t) => (
            <li key={t} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 leading-relaxed">
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">react.dev map for today</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-cyan-200 bg-cyan-50/40 px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-cyan-700 font-semibold">Covered today</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {docsToday.map((d) => (
                <li key={d.href}>
                  <a href={d.href} target="_blank" rel="noreferrer" className="text-slate-800 hover:text-cyan-800 hover:underline">
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-slate-200 bg-white px-5 py-4">
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">Same chapter, later days</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {docsLater.map((d) => (
                <li key={d.href}>
                  <a href={d.href} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-indigo-700 hover:underline">
                    {d.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-slate-500 leading-relaxed">
              Fine for students to read ahead, but nothing today depends on them.
            </p>
          </div>
        </div>
        <DocsLink title="Describing the UI: chapter overview" href="https://react.dev/learn/describing-the-ui">
          If you only share one link with students after class, share this one.
        </DocsLink>
      </section>
    </LessonShell>
  )
}

// Small reminder box at the top of the page.
function ExampleWrapper() {
  return (
    <Note tone="sky" title="How to run the last five minutes">
      <ul className="list-disc list-inside space-y-1">
        <li>Everyone closes their editor. Questions are answered from memory, not by reading code.</li>
        <li>Cold-call gently: pick a card, ask one student, ask a second to add to it, then reveal.</li>
        <li>End with the exit ticket. Read a few tomorrow morning to decide what to re-teach.</li>
      </ul>
    </Note>
  )
}
