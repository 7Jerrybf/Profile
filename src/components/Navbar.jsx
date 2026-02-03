import './Navbar.css'

function Navbar() {
  const handleClick = (e, targetId) => {
    e.preventDefault()
    const target = document.querySelector(targetId)
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">&lt;<span>/</span>&gt;</div>
        <ul className="nav-links">
          <li>7bf's Space</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
