import { useState } from 'react'
import DemoSurface from '../../../components/ui/DemoSurface.jsx'
import CodeBlock from '../../../components/ui/CodeBlock.jsx'

// The lesson's Card component, verbatim apart from styling.
function Card({ title, value }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
      <h2 className="text-xs uppercase tracking-wider text-slate-500 font-semibold">{title}</h2>
      <p className="text-2xl font-bold text-slate-900 mt-1">{value}</p>
    </div>
  )
}

// Instructor-only controls. The inputs feed props into <Card />; the JSX below updates
// live so students see "data in the tag -> data on the screen".
export default function PropsPlayground() {
  const [title, setTitle] = useState('Users')
  const [value, setValue] = useState('1200')

  return (
    <div className="space-y-4">
      <DemoSurface title="Change the props, watch the card">
        <div className="grid gap-4 md:grid-cols-2 items-start">
          <div className="space-y-3 text-sm">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">title prop</span>
              <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 w-full rounded border border-slate-300 px-2 py-1.5 font-mono text-sm"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold">value prop</span>
              <input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="mt-1 w-full rounded border border-slate-300 px-2 py-1.5 font-mono text-sm"
              />
            </label>
          </div>
          <Card title={title} value={value} />
        </div>
      </DemoSurface>
      <CodeBlock label="The JSX that produces the card above">{`<Card title="${title}" value="${value}" />`}</CodeBlock>
      <DemoSurface title="One component, three uses">
        <div className="grid gap-3 sm:grid-cols-3">
          <Card title="Users" value="1200" />
          <Card title="Revenue" value="$20,000" />
          <Card title="Orders" value="312" />
        </div>
      </DemoSurface>
    </div>
  )
}
