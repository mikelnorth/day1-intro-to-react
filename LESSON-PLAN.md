# Day 1 — Introduction to React + Components: Lesson Plan (3 hours)

## Learning objectives

By the end of class students can:

1. Explain what React is and why it exists.
2. Tell the difference between declarative and imperative code.
3. Describe a React component as a function that returns UI.
4. Read and write basic JSX, including the one-parent rule.
5. Explain what `return` does in a component.
6. Explain what `export default` does and import a component from another file.
7. Pass data into a component with props and explain why props are read-only.

## Scope guardrails

Today is **describing UI only**. No `useState`, no events, no `.map`, no sharing data
between siblings. When a student asks "how do I make the button do something?", the
answer is "Day 2: State & Interactivity." Hardcode three cards; the repetition is the
point.

## Before class

- [ ] Node.js 20+ on every machine (`node --version`). Vite 8 needs 20.19+ or 22.12+.
- [ ] VS Code (or any editor) with an integrated terminal.
- [ ] Browser DevTools open on the Console tab during exercises.
- [ ] Windows: know the PowerShell execution-policy workaround (use cmd, or `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`).
- [ ] Teaching app running on the projector (`npm run dev` in this folder), react.dev open in a second tab.
- [ ] `STUDENT-HANDOUT.md` shared (print, LMS, or chat).
- [ ] Optional: pre-warm the npm cache on the classroom machines by scaffolding one Vite project.

## Schedule

| Time | Min | Block | Mode | App page |
|---|---|---|---|---|
| 0:00 – 0:10 | 10 | Welcome & setup check | Teach | Home |
| 0:10 – 0:30 | 20 | Why React? Declarative vs imperative | Teach | 1 |
| 0:30 – 0:50 | 20 | Create the project & tour it | We do | 2 |
| 0:50 – 1:10 | 20 | Your first component & JSX rules | Teach | 3 |
| 1:10 – 1:20 | 10 | Break | | |
| 1:20 – 1:35 | 15 | Breaking UI into components | Teach | 4 |
| 1:35 – 1:50 | 15 | Exercise: Header / Main / Footer | You do | 4 |
| 1:50 – 2:05 | 15 | Props | Teach | 5 |
| 2:05 – 2:30 | 25 | Exercise: Dashboard with props | You do | 5 |
| 2:30 – 2:40 | 10 | Architecture exercise (discussion) | We do | 6 |
| 2:40 – 2:55 | 15 | Rebuild challenge (closed book) | You do | 6 |
| 2:55 – 3:00 | 5 | Reflection & what's next | Teach | 7 |

Flex: if behind, cut the dashboard exercise to 15 min and drop the "We do: third prop".
If ahead, extend the rebuild challenge and have early finishers build the ProductList tree.

---

## 0:00 – 0:10 Welcome & setup check

- Names, what people have built before, what they want to build.
- Everyone runs `node --version` and `npm --version`. Fix machines now, not at 0:35.
- Show the objectives. Say the scope guardrail out loud: "Today nothing on the screen
  changes. Tomorrow it does."

## 0:10 – 0:30 Why React? (App page 1)

**Key idea:** UI = f(state). The UI is based on data; when data changes, the UI updates.

1. **Before React (3 min).** `document.querySelector("#count").innerText = 5`. As apps
   grew this got hard to debug, scale, maintain. Everyone who has written jQuery nods.
2. **Demo: the same cart two ways (8 min).** Click "Add item" on both panels. The
   imperative version's header badge never updates because one line was forgotten. The
   React version shows `{count}` in two places and cannot drift. Say: "On the left you
   write HOW. On the right you write WHAT." Do **not** explain `useState` or `onClick`;
   say "Day 2" and move on.
3. **Imperative vs declarative table (3 min).** Taxi analogy: directions vs destination.
4. **We do: how or what? (4 min).** Four reveal cards. Read each line aloud, class votes.
5. **Key features + the numbers (2 min).** JSX, one-way data flow, ecosystem,
   cross-platform. 16M+ downloads, 180k+ stars, 9k+ companies, 95%+ satisfaction.

Checkpoint: a student can say in one sentence what "declarative" means.

## 0:30 – 0:50 Create the project & tour it (App page 2)

**Key idea:** main.jsx loads App, App renders the UI.

1. **We do: create the project (10 min).** One command at a time, wait for the room:
   ```
   npm create vite@latest react-day1     # React, JavaScript. Rolldown: No.
   cd react-day1
   npm install
   npm run dev
   ```
   Thumbs up at each checkpoint: folder exists → node_modules exists → "VITE ready" →
   browser shows the spinning logos.
2. **Tour (5 min).** index.html has an empty `#root`. main.jsx renders `<App />` into
   it. App.jsx is a function that returns markup. Change "Vite + React" to your name,
   save, no refresh needed. Point out the capital A in `<App />`.
3. **We do: clean slate (5 min).** Delete App.css and the react.svg. Empty index.css (or
   paste the three-line body rule). Replace App.jsx with:
   ```jsx
   function App() {
     return <h1>Hello React</h1>
   }

   export default App
   ```
   Troubleshooting table is on the page: npm not found, PowerShell policy, port in use,
   blank page, changes not showing, unsupported Node.

Checkpoint: every screen shows "Hello React", console has no red.

## 0:50 – 1:10 Your first component & JSX rules (App page 3)

**Key idea:** React runs your function and renders what it returns.

1. **Functions refresher (3 min).** `greet(name)` returns a string. `App()` returns UI.
   You never call `App()`; React does, because main.jsx handed it over.
2. **I do: Hello React line by line (5 min).** Type it, don't paste. Three ideas:
   `function` (a component is a function), `return` (controls what appears on screen),
   `export default` (lets other files use it). Delete the export line, save, read the
   error together, put it back.
3. **Rules of JSX (5 min).** One parent. `className` not `class`. Close every tag.
   Curly braces for JavaScript. camelCase attributes. Parentheses for multi-line return.
4. **We do: break the one-parent rule on purpose (4 min).** Add a `<p>` beside the
   `<h1>`. Read "Adjacent JSX elements must be wrapped". Fix with a `<div>`, then show
   the `<>…</>` fragment. Why: a function can only return one value.
5. **I do: curly braces (3 min).** `{name}`, `{2 + 2}`, `{name.toUpperCase()}`,
   `{new Date().getFullYear()}`. "Curly braces are a window into JavaScript."
6. **You do (fold into the first 5 min of the exercise block if short on time):** intro
   card with a variable in braces and a three-item list, all in one parent.

Put the **error decoder** table on the projector for the rest of the day.

## 1:10 – 1:20 Break

## 1:20 – 1:35 Breaking UI into components (App page 4)

**Key idea:** Components are the building blocks; you compose them.

1. **I do (8 min).** Start with everything in App. Cut the `<h1>` into `Header`, the
   `<p>` into `WelcomeMessage`, use them as tags. Toggle "Show component boundaries" on
   the demo. Draw the tree on the whiteboard:
   ```
   App
    ├ Header
    └ WelcomeMessage
   ```
   Capital letter rule: lowercase means HTML tag.
2. **We do: one component per file (7 min).** Create `src/components/Header.jsx`, move
   the function, `export default Header`, `import Header from './components/Header.jsx'`.
   Forget the import once on purpose: "Header is not defined." Class does
   WelcomeMessage themselves.

## 1:35 – 1:50 Exercise: Header / Main / Footer (App page 4, You do)

In `react-day1`: `Header`, `MainContent`, `Footer`, each in its own file, rendered by
App inside one parent. Header has an `<h1>` and a `<nav>` with three links. Footer has a
copyright line. Stretch: current year via `{new Date().getFullYear()}`; a Sidebar.

Walk the room. Watch for: lowercase file/function names, missing `export default`,
missing imports, two roots in App. Reference: `student-projects/01-react-day1`.

## 1:50 – 2:05 Props (App page 5)

**Key idea:** Props are to components what arguments are to functions.

1. **I do: Card (10 min).**
   ```jsx
   function Card({ title, value }) {
     return (
       <div>
         <h2>{title}</h2>
         <p>{value}</p>
       </div>
     )
   }
   ```
   Use it twice: `<Card title="Users" value="1200" />`, `<Card title="Revenue" value="$20,000" />`.
   Then the props playground: type in the inputs, watch the card and the JSX line change.
   Point from the attribute to the `{title}` inside Card. Props flow **down**.
2. **Two ways to read props (2 min).** `props.title` once so destructuring isn't magic.
3. **Props are read-only (2 min).** Never reassign; derive a new value. If a component
   needs data that changes, that is state. Day 2.
4. **We do: add a third prop `label` (3 min, cut if behind).** One file changed, every
   card updated. Forgetting to pass it renders nothing, no crash.

## 2:05 – 2:30 Exercise: Dashboard (App page 5, You do)

New Vite project `dashboard`. Header, a main area of stat cards, Footer.

Requirements: use components, use props, no duplicate code, at least 4 components.

Suggested tree: App → Header(title) · StatsGrid → Card×3(title, value) · Footer(company).

Watch for: "Users" hardcoded inside Card; three card files instead of one; students
asking how to loop (say "later, three tags is correct today"). Reference:
`student-projects/02-dashboard`. Early finishers: third prop, Sidebar, then page 6.

## 2:30 – 2:40 Architecture exercise (App page 6, We do)

```
App
 ├ Navbar
 ├ ProductList
 │   ├ ProductCard
 │   ├ ProductCard
 │   └ ProductCard
 └ Footer
```

Ask before revealing: What should be reusable? (ProductCard.) What is a component? How
many files? (5.) Who passes props to ProductCard? (ProductList.) Why three tags, not a
loop? (Later lesson.) Where would a cart count in the Navbar come from? (State, Day 3;
hold it.) Open react.dev "Thinking in React" and read **step 1** together; step 2 is what
they built today; stop there.

## 2:40 – 2:55 Rebuild challenge (App page 6, You do)

Close and save previous work. New project `rebuild`, **closed book**: App, Header
(title prop), Card used twice with different props. Bonus: Footer, the ProductList tree.
Call time at 10, 5, 1 minute. Show of hands at the end: finished minimum? got a bonus?
Reference: `student-projects/03-rebuild` and `04-product-list`.

## 2:55 – 3:00 Reflection & what's next (App page 7)

Editors closed. Cold-call, then reveal model answers:

- What is a React component? *A function that returns UI; React calls it.*
- What does `return` do? *Sends the UI back to React; one parent element.*
- What are props? *Inputs, like function arguments; passed down; read-only.*
- Why break UI into components? *Reuse, isolation, readability.*
- What is declarative programming? *Describe what, not how; React handles updates.*

Virtual DOM in one breath: new virtual tree → diff against old → update only what
changed. Students don't need more yet.

**What's next: State and Interactivity.** Make the UI dynamic, understand re-rendering,
build interactive apps. The 4-step loop (initialize state → render → update state →
re-render); today was step 2.

**Exit ticket:** write a `Greeting` component that takes a `name` prop; write the JSX
that uses it with "Sam"; one thing still fuzzy.

**Practice:** rebuild the dashboard with different data; read "Your First Component"
and "Passing Props to a Component" on react.dev and do their challenges; draw the
component tree of any website.

---

## Error decoder (keep visible during exercises)

| You see | It means | Fix |
|---|---|---|
| Adjacent JSX elements must be wrapped in an enclosing tag | Two siblings returned | Wrap in `<div>` or `<>…</>` |
| …does not provide an export named 'default' | Forgot `export default` | Add it at the bottom |
| Uncaught ReferenceError: Header is not defined | Not imported/defined | Import it or define it |
| Invalid DOM property `class`. Did you mean `className`? | Copied HTML | `className` |
| Unterminated JSX contents | Unclosed tag | Close it or add `/>` |
| Blank page, no error | Multi-line `return` without `( )` | Add parentheses |
| `<header>` renders an empty HTML tag | Lowercase component name | Capitalize it |
