import Terminal from './Terminal'
import './Hero.css'

function Hero() {
  return (
    <section className="hero hero-grid" id="about">
      <div className="hero-content">
        <p className="greeting">Hello, World</p>
        <h1>
          軟體新血<br />
          持續<span className="highlight">進化中</span>
        </h1>
        <p className="hero-description">
          2026 應屆畢業生。
          熱愛寫程式，善用 AI 工具加速開發流程。
          每天都比昨天更強一點。
        </p>
      </div>
      <Terminal />
    </section>
  )
}

export default Hero
