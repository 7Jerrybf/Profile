import Terminal from './Terminal'
import './Hero.css'

function Hero() {
  return (
    <section className="hero hero-grid" id="about">
      <div className="hero-content">
        <p className="greeting">Hello, World</p>
        <h1>
          後端新血<br />
          持續<span className="highlight">進化中</span>
        </h1>
        <p className="hero-description">
          2026 應屆畢業生，專注後端開發。
          善用 AI 工具加速開發流程。
          每天都比昨天更強一點。
        </p>
        <a href="#links" className="cta-btn">
          看看我的作品
          <span className="iconify" data-icon="mdi:arrow-right"></span>
        </a>
      </div>
      <Terminal />
    </section>
  )
}

export default Hero
