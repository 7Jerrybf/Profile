import { useEffect, useRef } from 'react'
import './Skills.css'

function Skills() {
  const skillsRef = useRef(null)

  const skills = [
    { icon: 'logos:javascript', name: 'JavaScript / TypeScript' },
    { icon: 'logos:react', name: 'React' },
    { icon: 'logos:nodejs-icon', name: 'Node.js' },
    { icon: 'logos:python', name: 'Python' },
    { icon: 'logos:docker-icon', name: 'Docker' },
    { icon: 'logos:postgresql', name: 'PostgreSQL' }
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

    const tags = skillsRef.current?.querySelectorAll('.skill-tag')
    tags?.forEach(tag => observer.observe(tag))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="skills-section" id="skills" ref={skillsRef}>
      <h2 className="section-title">技術棧</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            <span className="iconify" data-icon={skill.icon}></span>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
