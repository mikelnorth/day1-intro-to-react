// A variable in curly braces: the "JavaScript in JSX" idea from Lesson 3.
const name = 'Ada'

function MainContent() {
  return (
    <main>
      <h2>Welcome, {name}</h2>
      <p>This page is built from three components: Header, MainContent, and Footer.</p>
      <p>Things I want to build with React:</p>
      <ul>
        <li>A personal dashboard</li>
        <li>A recipe collection</li>
        <li>A game score tracker</li>
      </ul>
    </main>
  )
}

export default MainContent
