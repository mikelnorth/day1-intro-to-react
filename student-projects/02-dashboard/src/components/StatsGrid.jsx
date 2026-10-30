import Card from './Card.jsx'

// Three Card tags on purpose. Rendering a list from an array is a later lesson.
function StatsGrid() {
  return (
    <main className="grid">
      <Card title="Users" value="1,200" label="this month" />
      <Card title="Revenue" value="$20,000" label="this quarter" />
      <Card title="Orders" value="312" label="this week" />
    </main>
  )
}

export default StatsGrid
