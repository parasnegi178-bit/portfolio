import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React', level: 80 },
        { name: 'TypeScript', level: 75 },
      ],
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 80 },
        { name: 'Java', level: 70 },
        { name: 'SQL', level: 85 },
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'VS Code', level: 90 },
        { name: 'Database Management', level: 75 },
        { name: 'API Development', level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="additional-skills">
          <h3 className="additional-title">Additional Competencies</h3>
          <div className="skills-tags">
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Data Structures</span>
            <span className="skill-tag">Algorithms</span>
            <span className="skill-tag">Object-Oriented Programming</span>
            <span className="skill-tag">Responsive Design</span>
            <span className="skill-tag">RESTful APIs</span>
            <span className="skill-tag">Agile Methodology</span>
            <span className="skill-tag">Team Collaboration</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
