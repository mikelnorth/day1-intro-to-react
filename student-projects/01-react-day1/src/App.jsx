import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

// Lesson 3 ended with everything in this one file (see README for that version).
// Lesson 4 splits it into three components, one per file.
function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
