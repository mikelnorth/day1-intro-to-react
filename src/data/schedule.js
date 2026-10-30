// Minute offsets from the start of class. Total: 180 minutes.
export const schedule = [
  { start: 0,   end: 10,  title: 'Welcome & setup check',               to: '/',                kind: 'talk' },
  { start: 10,  end: 30,  title: 'Why React? Declarative vs imperative', to: '/why-react',       kind: 'talk' },
  { start: 30,  end: 50,  title: 'Create the project & tour it',        to: '/setup',           kind: 'wedo' },
  { start: 50,  end: 70,  title: 'Your first component & JSX rules',    to: '/first-component', kind: 'talk' },
  { start: 70,  end: 80,  title: 'Break',                               to: null,               kind: 'break' },
  { start: 80,  end: 95,  title: 'Breaking UI into components',         to: '/components',      kind: 'talk' },
  { start: 95,  end: 110, title: 'Exercise: Header / Main / Footer',    to: '/components',      kind: 'youdo' },
  { start: 110, end: 125, title: 'Props',                               to: '/props',           kind: 'talk' },
  { start: 125, end: 150, title: 'Exercise: Dashboard with props',      to: '/props',           kind: 'youdo' },
  { start: 150, end: 160, title: 'Architecture exercise (discussion)',  to: '/architecture',    kind: 'wedo' },
  { start: 160, end: 175, title: 'Rebuild challenge (closed book)',     to: '/architecture',    kind: 'youdo' },
  { start: 175, end: 180, title: "Reflection & what's next",            to: '/wrap-up',         kind: 'talk' },
]

export function fmt(minutes) {
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return `${h}:${String(m).padStart(2, '0')}`
}

export function blockAt(elapsedMinutes) {
  return schedule.find((b) => elapsedMinutes >= b.start && elapsedMinutes < b.end) ?? null
}

export function blockAfter(block) {
  if (!block) return null
  const i = schedule.indexOf(block)
  return schedule[i + 1] ?? null
}
