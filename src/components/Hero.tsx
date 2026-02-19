import './Hero.css'

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">Hello, I'm</div>
            <h1 className="hero-title">Paras Negi</h1>
            <h2 className="hero-subtitle">BCA Student & Aspiring Developer</h2>
            <p className="hero-description">
              Passionate about technology and software development. Currently pursuing Bachelor of Computer Applications at Graphic Era Hill University, building modern web applications and exploring new technologies.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={scrollToContact}>
                Get In Touch
              </button>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <circle cx="100" cy="100" r="90" fill="#e0e7ff" />
                <circle cx="100" cy="80" r="30" fill="#6366f1" />
                <ellipse cx="100" cy="150" rx="50" ry="60" fill="#6366f1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-indicator">
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
