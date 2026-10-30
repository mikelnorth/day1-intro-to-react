# Day 1 — Introduction to React + Components

An interactive teaching app for the **Day 1: Introduction to React + Components** lesson
(3-hour class). Built with Vite + React 19 + Tailwind v4, vanilla JavaScript.

Every lesson page follows **I do / We do / You do** so you can demo, work the next step
with the class, then hand off independent practice. A **class timer** in the sidebar
tracks the 3-hour agenda.

## What's in this folder

| Path | What it is |
|---|---|
| `src/` | The teaching app (run it on the projector) |
| `LESSON-PLAN.md` | Minute-by-minute instructor script with talking points and checkpoints |
| `STUDENT-HANDOUT.md` | One-page cheat sheet to share with students (setup commands, JSX rules, exercises) |
| `student-projects/` | Reference solutions for the three exercises, as plain Vite projects |

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173.

```bash
npm run build    # production build
npm run lint     # eslint
```

## What's covered (and what is deliberately not)

| Page | Concept | What students do |
|---|---|---|
| Home | Plan, objectives, 3-hour schedule | Pre-flight checklist, scope guardrails |
| 1. Why React? | Declarative vs imperative, UI = f(state) | Side-by-side cart demo where the imperative one forgets an update |
| 2. Setup | `npm create vite@latest`, project tour, how React runs | Everyone creates `react-day1` together; troubleshooting table |
| 3. First Component | function, return, export default, JSX rules | Hello React, break the one-parent rule on purpose, error decoder |
| 4. Components | Composition, component tree, one file per component | Exercise: Header / MainContent / Footer |
| 5. Props | Inputs, destructuring, read-only, one-way data flow | Live props playground; Exercise: Dashboard (≥4 components, props, no duplicate code) |
| 6. Architecture | What should be reusable? | Navbar / ProductList / ProductCard tree with reveal answers; closed-book rebuild challenge |
| 7. Wrap-up | Reflection, Virtual DOM (high level), exit ticket | Five reflection questions with model answers; "What's next: State and Interactivity" |

**Not covered today, on purpose:** `useState`, events, `.map` lists, conditional
rendering, sharing state. Those are later days. The two places the app uses state
(the Lesson 1 declarative demo and the Lesson 5 props playground) are labelled as
instructor-only teaching tricks.

## react.dev alignment

Day 1 maps onto the docs' **Describing the UI** chapter. Each lesson page has a
"Follow along in the docs" card linking the matching page:

- Lesson 1 → [Quick Start](https://react.dev/learn)
- Lesson 2 → [Build a React App from Scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- Lesson 3 → [Your First Component](https://react.dev/learn/your-first-component), [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx), [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- Lesson 4 → [Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components), [Understanding Your UI as a Tree](https://react.dev/learn/understanding-your-ui-as-a-tree)
- Lesson 5 → [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- Lesson 6 → [Thinking in React](https://react.dev/learn/thinking-in-react), steps 1–2 only

## Project layout

```
src/
├── App.jsx                        # sidebar + router + class timer
├── main.jsx
├── index.css                      # Tailwind entry
├── data/schedule.js               # the 3-hour agenda (drives Home table + timer)
├── components/
│   ├── ClassTimer.jsx
│   └── ui/
│       ├── LessonShell.jsx
│       ├── ExampleBlock.jsx       # I do / We do / You do blocks
│       ├── ConceptCallout.jsx
│       ├── CodeBlock.jsx
│       ├── DemoSurface.jsx
│       ├── DocsLink.jsx           # "Follow along in the docs" card
│       ├── Checklist.jsx          # interactive success checklist
│       ├── RevealCard.jsx         # question with hidden model answer
│       ├── Tree.jsx               # monospace component-tree diagram
│       ├── Note.jsx
│       └── boundaries.jsx         # "Show component boundaries" outline toggle
└── pages/
    ├── Home.jsx
    └── lessons/
        ├── 01-why-react/          # ImperativeCart vs DeclarativeCart demo
        ├── 02-setup/
        ├── 03-first-component/    # JSX rules, error decoder
        ├── 04-components/         # DashboardDemo with outlines
        ├── 05-props/              # PropsPlayground
        ├── 06-architecture/       # ProductDemo with outlines
        └── 07-wrap-up/
```

## Stack

- **Vite** 8, **React** 19, **Tailwind CSS** v4, **react-router-dom** 7
