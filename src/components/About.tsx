import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-intro">
              I'm a dedicated BCA student at Graphic Era Hill University, Bhimtal with a passion for creating innovative digital solutions. My journey in computer science has equipped me with a strong foundation in programming and software development.
            </p>
            <p className="about-detail">
              I enjoy tackling challenging problems and building applications that make a difference. Whether it's developing web applications, exploring new technologies, or collaborating on exciting projects, I'm always eager to learn and grow.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">BCA</div>
                <div className="stat-label">Degree Program</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2026</div>
                <div className="stat-label">Expected Graduation</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>

          <div className="about-info">
            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3>Education</h3>
              <p className="institution">Graphic Era Hill University</p>
              <p className="degree">Bachelor of Computer Applications</p>
              <p className="details">Pursuing comprehensive education in computer science, programming, and software development</p>
            </div>

            <div className="info-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Interests</h3>
              <ul className="interests-list">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Database Management</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
