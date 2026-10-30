# React Day 1 — Cheat Sheet

## What React is

A JavaScript library for building user interfaces out of **components**.

**UI = f(state).** You describe what the screen should look like for some data. React
updates the page. That is *declarative*. Writing `document.querySelector("#count").innerText = 5`
everywhere is *imperative*: you say how, step by step, and forget one step eventually.

## Create a project

```bash
npm create vite@latest my-app     # choose React, then JavaScript
cd my-app
npm install
npm run dev                       # open the Local: URL it prints
```

Leave `npm run dev` running. `Ctrl+C` stops it. Open a second terminal if you need one.

## How React runs

```
index.html  ->  main.jsx            ->  App.jsx          ->  what you see
<div id="root">  render(<App />)        return <h1>…</h1>
```

## Your first component

```jsx
function App() {
  return <h1>Hello React</h1>
}

export default App
```

| Keyword | What it does |
|---|---|
| `function App()` | A component is a function. Name starts with a **capital letter**. |
| `return` | Whatever you return is what appears on screen. |
| `export default` | Lets other files `import` this component. |

## Rules of JSX

| Rule | Breaks | Works |
|---|---|---|
| Return **one** parent | `<h1/>` `<p/>` side by side | wrap in `<div>…</div>` or `<>…</>` |
| `className`, not `class` | `<p class="x">` | `<p className="x">` |
| Close every tag | `<img src={u}>` `<br>` | `<img src={u} />` `<br />` |
| `{ }` for JavaScript | `<p>Hello name</p>` | `<p>Hello {name}</p>` |
| camelCase attributes | `onclick`, `for` | `onClick`, `htmlFor` |
| Multi-line return needs `( )` | `return` + newline | `return (` … `)` |

Inside `{ }` you can put any expression: `{name}`, `{2 + 2}`, `{name.toUpperCase()}`,
`{new Date().getFullYear()}`.

## Components: small pieces, nested

```jsx
// src/components/Header.jsx
function Header() {
  return <h1>Dashboard</h1>
}
export default Header

// src/App.jsx
import Header from './components/Header.jsx'

function App() {
  return (
    <div>
      <Header />
      <p>Welcome to your dashboard</p>
    </div>
  )
}
export default App
```

```
App
 ├ Header
 └ (paragraph)
```

One component per file. File name = component name. Our own files are imported with `./`.

## Props: inputs to a component

```jsx
// src/components/Card.jsx
function Card({ title, value }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{value}</p>
    </div>
  )
}
export default Card

// src/App.jsx
<Card title="Users" value="1200" />
<Card title="Revenue" value="$20,000" />
```

- Props are like function arguments. The parent passes them as attributes.
- `{ title, value }` in the parameter list is destructuring `props.title`, `props.value`.
- Props flow **down**, parent to child. **Props are read-only**: never reassign them.
- Strings go in quotes: `title="Users"`. Anything else goes in braces: `value={1200}`.

## Error decoder

| You see | Fix |
|---|---|
| Adjacent JSX elements must be wrapped… | Wrap siblings in `<div>` or `<>…</>` |
| …does not provide an export named 'default' | Add `export default App` |
| Header is not defined | Import it: `import Header from './components/Header.jsx'` |
| Invalid DOM property `class` | Use `className` |
| Unterminated JSX contents | Close the tag |
| Blank page, no error | Put `( )` around a multi-line return |
| `<header>` shows an empty bar | Capitalize your component name |

Blank page? Open DevTools (F12) → Console → read the **first** red line.

## Today's exercises

1. **Basic components** (in `react-day1`): `Header`, `MainContent`, `Footer`, each in
   its own file under `src/components/`, rendered by `App` inside one parent.
2. **Dashboard** (new project `dashboard`): Header, stat cards, Footer. Use components,
   use props, no duplicate code, at least 4 components. One `Card` file used 3+ times.
3. **Rebuild challenge** (new project `rebuild`, closed book): App, Header with a prop,
   Card used twice with different props.

## Reflection

- What is a React component?
- What does `return` do?
- What are props?
- Why break UI into components?
- What is declarative programming?

## Read on react.dev

- [Quick Start](https://react.dev/learn)
- [Describing the UI](https://react.dev/learn/describing-the-ui) (the chapter today came from)
- [Your First Component](https://react.dev/learn/your-first-component)
- [Importing and Exporting Components](https://react.dev/learn/importing-and-exporting-components)
- [Writing Markup with JSX](https://react.dev/learn/writing-markup-with-jsx)
- [JavaScript in JSX with Curly Braces](https://react.dev/learn/javascript-in-jsx-with-curly-braces)
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
- [Thinking in React](https://react.dev/learn/thinking-in-react), steps 1 and 2

**Next class:** State & Interactivity. Make the UI dynamic, understand re-rendering,
build interactive apps.
