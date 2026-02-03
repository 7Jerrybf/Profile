import './Footer.css'

function Footer() {
  const socialLinks = [
    { href: 'https://github.com/7Jerrybf', icon: 'mdi:github' },
    { href: 'https://linkedin.com/in/yourusername', icon: 'mdi:linkedin' },
    { href: 'https://twitter.com/yourusername', icon: 'mdi:twitter' }
  ]

  return (
    <footer id="contact">
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">用熱情與程式碼打造 © 2026</p>
          <div className="social-links">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                <span className="iconify" data-icon={link.icon}></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
