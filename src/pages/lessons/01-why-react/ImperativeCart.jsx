import { useEffect, useRef } from 'react'

// Deliberately written the "before React" way: build the HTML by hand, then reach into
// the DOM to update it. Note the bug: the badge in the header is never updated.
export default function ImperativeCart() {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    host.innerHTML = `
      <div class="space-y-3">
        <div class="flex items-center justify-between text-sm">
          <span class="font-semibold text-slate-700">My Shop</span>
          <span id="badge" class="rounded-full bg-slate-200 px-2 py-0.5 text-xs">0 items</span>
        </div>
        <p class="text-[11px] uppercase tracking-wider text-slate-500">Items in cart</p>
        <p id="count" class="text-5xl font-bold text-slate-900 tabular-nums">0</p>
        <button id="add" class="text-xs rounded bg-slate-800 text-white px-3 py-1.5 hover:bg-slate-900">Add item</button>
      </div>`

    let count = 0
    const button = host.querySelector('#add')
    const onClick = () => {
      count = count + 1
      host.querySelector('#count').innerText = count
      // Forgot this line. Classic.
      // host.querySelector('#badge').innerText = count + ' items'
    }
    button.addEventListener('click', onClick)
    return () => {
      button.removeEventListener('click', onClick)
      host.innerHTML = ''
    }
  }, [])

  return <div ref={hostRef} />
}
