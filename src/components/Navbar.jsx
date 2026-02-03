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
          <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>關於</a></li>
          <li><a href="#skills" onClick={(e) => handleClick(e, '#skills')}>技能</a></li>
          <li><a href="#links" onClick={(e) => handleClick(e, '#links')}>作品</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>聯繫</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
