# 01 — react-day1 (reference solution)

Where students' first project should be by the end of Lesson 4.

```bash
npm install
npm run dev
```

## The progression during class

**Lesson 2 (clean slate), `src/App.jsx`:**

```jsx
function App() {
  return <h1>Hello React</h1>
}

export default App
```

**Lesson 3 (one parent + curly braces), `src/App.jsx`:**

```jsx
const name = 'Ada'

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Welcome, {name}</p>
      <ul>
        <li>A personal dashboard</li>
        <li>A recipe collection</li>
        <li>A game score tracker</li>
      </ul>
    </div>
  )
}

export default App
```

**Lesson 4 (one component per file):** what is in `src/` now.

```
App
 ├ Header
 ├ MainContent
 └ Footer
```
