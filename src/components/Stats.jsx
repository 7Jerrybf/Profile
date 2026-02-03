import { useEffect, useRef } from 'react'
import './Stats.css'

function Stats() {
  const statsRef = useRef(null)

  const stats = [
    { number: '5+', label: '年開發經驗' },
    { number: '30+', label: '完成專案數量' },
    { number: '∞', label: '學習的熱情' }
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

    const cards = statsRef.current?.querySelectorAll('.stat-card')
    cards?.forEach(card => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats stats-grid" ref={statsRef}>
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </section>
  )
}

export default Stats
