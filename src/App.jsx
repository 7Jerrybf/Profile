import Navbar from './components/Navbar'
import Orbs from './components/Orbs'
import Hero from './components/Hero'
import About from './components/About'
import Links from './components/Links'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Orbs />
      <Navbar />
      <main>
        <div className="container">
          <Hero />
          <About />
          <Links />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
