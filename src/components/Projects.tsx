import './Projects.css'

function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with shopping cart, payment integration, and user authentication.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Task Management App',
      description: 'A productivity application for managing tasks, projects, and team collaboration with real-time updates.',
      technologies: ['TypeScript', 'React', 'Firebase', 'Material-UI'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Weather Dashboard',
      description: 'An interactive weather application displaying real-time weather data and forecasts with beautiful visualizations.',
      technologies: ['JavaScript', 'React', 'API Integration', 'Chart.js'],
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Social Media Clone',
      description: 'A social networking platform with posts, comments, likes, and user profiles.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Blog Platform',
      description: 'A content management system for creating and publishing blog posts with markdown support.',
      technologies: ['Next.js', 'TypeScript', 'Supabase', 'TailwindCSS'],
      image: 'https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Portfolio Generator',
      description: 'A tool for developers to create custom portfolio websites with various templates and themes.',
      technologies: ['React', 'CSS', 'JavaScript', 'Vite'],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            A collection of projects showcasing my skills and creativity
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button className="btn-view">View Project</button>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
