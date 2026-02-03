import Terminal from './Terminal'
import './Hero.css'

function Hero() {
  return (
    <section className="hero hero-grid" id="about">
      <div className="hero-content">
        <p className="greeting">Hello, World</p>
        <h1>
          我寫程式<br />
          也寫<span className="highlight">故事</span>
        </h1>
        <p className="hero-description">
          軟體工程師，熱愛把複雜變簡單。
          深信好的程式碼是一種藝術。
          用邏輯思考，用創意解題。
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
