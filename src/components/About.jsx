import { useEffect, useRef } from 'react'
import './About.css'

function About() {
  const aboutRef = useRef(null)

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

    const content = aboutRef.current?.querySelector('.about-content')
    if (content) observer.observe(content)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section" id="about-me" ref={aboutRef}>
      <h2 className="section-title">關於我</h2>
      <div className="about-content">
        <p className="about-text">
          我是個簡單的人。
        </p>
        <p className="about-text">
          寫程式之外，喜歡聽音樂、健身、看劇。
        </p>
        <p className="about-text highlight-text">
          相信生活跟 code 一樣，持續迭代就會變好。
        </p>
      </div>
    </section>
  )
}

export default About
