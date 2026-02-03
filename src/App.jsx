import Navbar from './components/Navbar'
import Orbs from './components/Orbs'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Skills from './components/Skills'
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
          <Stats />
          <Skills />
          <Links />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App
