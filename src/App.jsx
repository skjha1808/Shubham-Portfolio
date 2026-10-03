import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App