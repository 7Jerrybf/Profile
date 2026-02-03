import { useEffect, useRef } from 'react'
import './Links.css'

function Links() {
  const linksRef = useRef(null)

  const links = [
    {
      href: 'https://github.com/7Jerrybf',
      icon: 'mdi:github',
      title: 'GitHub',
      description: '開源專案與程式碼倉庫。'
    },
    {
      href: 'https://www.linkedin.com/in/jerry-chih-06374a1b4/',
      icon: 'mdi:linkedin',
      title: 'LinkedIn',
      description: '完整履歷與職涯經歷。'
    },
    {
      href: 'https://docs.google.com/document/d/e/2PACX-1vTE5dVTYjDjgylPM4G97T5QCGxBZ8_B6Etw-sf6KcRE7KMWsEuWNW7zp3wxw5fzHQ/pub',
      icon: 'mdi:file-document-outline',
      title: '線上履歷',
      description: 'word 格式，隨時更新。'
    },
    {
      href: 'https://www.instagram.com/7bf.exe/',
      icon: 'mdi:instagram',
      title: 'Instagram',
      description: '日常與生活碎片。'
    },
    {
      href: 'https://open.spotify.com/user/316l5c7iwqqea6buobyhyor2wxxa?si=e26ab3f5e5cb4958',
      icon: 'mdi:spotify',
      title: 'Spotify',
      description: '我的音樂品味。'
    },
    {
      href: 'https://discord.com/users/7bf',
      icon: 'mdi:discord',
      title: 'Discord',
      description: '我的 Discord。'
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const cards = linksRef.current?.querySelectorAll('.link-card')
    cards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const handleMouseMove = (e, card) => {
    const rect = card.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    card.style.setProperty('--mouse-x', `${x}%`)
    card.style.setProperty('--mouse-y', `${y}%`)
  }

  return (
    <section className="links-section" id="links" ref={linksRef}>
      <h2 className="section-title">外部連結</h2>
      <div className="links-grid">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="link-card"
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          >
            <span className="iconify link-icon" data-icon={link.icon}></span>
            <span className="arrow iconify" data-icon="mdi:arrow-top-right"></span>
            <h3>{link.title}</h3>
            <p>{link.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default Links
