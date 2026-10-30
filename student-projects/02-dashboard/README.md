# 02 — dashboard (reference solution)

Solution for the Lesson 5 "Dashboard" exercise.

Requirements: use components, use props, no duplicate code, at least 4 components.

```
App
 ├ Header        title, subtitle
 ├ StatsGrid
 │   ├ Card      title, value, label
 │   ├ Card
 │   └ Card
 └ Footer        company
```

```bash
npm install
npm run dev
```

Grading notes:

- The same `Card.jsx` is used three times. Three separate `UsersCard` / `RevenueCard` files is the most common miss.
- Every component is capitalized and lives in its own file under `src/components/`.
- `label` is the "We do" third prop; leaving it off a Card renders nothing, no crash.
