import DemoSurface from '../../../components/ui/DemoSurface.jsx'

// Live output for the "JavaScript in JSX with curly braces" section.
const name = 'Ada'
const year = new Date().getFullYear()
const skills = 3

export default function JsxPlayground() {
  return (
    <DemoSurface title="This box is rendered by the code on the left">
      <div className="space-y-1 text-sm text-slate-800">
        <h2 className="text-lg font-semibold">Hello, {name}!</h2>
        <p>2 + 2 = {2 + 2}</p>
        <p>Shouting: {name.toUpperCase()}</p>
        <p>The year is {year}</p>
        <p>You know {skills} React concepts so far.</p>
      </div>
    </DemoSurface>
  )
}
