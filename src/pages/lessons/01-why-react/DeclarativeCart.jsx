import { useState } from 'react'

// The React way. Both places that show the count read the same variable, so they can
// never disagree. (useState is a Day 2 topic; today, only point out that we never
// touch the DOM.)
export default function DeclarativeCart() {
  const [count, setCount] = useState(0)

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="font-semibold text-slate-700">My Shop</span>
        <span className="rounded-full bg-indigo-100 text-indigo-800 px-2 py-0.5 text-xs">
          {count} items
        </span>
      </div>
      <p className="text-[11px] uppercase tracking-wider text-slate-500">Items in cart</p>
      <p className="text-5xl font-bold text-slate-900 tabular-nums">{count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="text-xs rounded bg-indigo-600 text-white px-3 py-1.5 hover:bg-indigo-700"
      >
        Add item
      </button>
    </div>
  )
}
