import { useState, useEffect } from 'react'
import type { Project } from '@ekucuk/shared'

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])

  useEffect(() => {
    // TODO: Fetch from API using shared types
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.isSuccessful) {
          setProjects(data.result)
        }
      })
      .catch(err => console.error('Error fetching projects:', err))
  }, [])

  return (
    <div className="projects-page">
      <div className="page-header">
        <h1>📁 Projects Management</h1>
        <button className="btn-primary">+ Create Project</button>
      </div>

      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p className="tech-stack">{project.tech}</p>
            {project.description && <p>{project.description}</p>}
            <div className="card-actions">
              <button className="btn-sm">Edit</button>
              <button className="btn-sm btn-danger">Delete</button>
            </div>
          </div>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="empty-state">
          <p>No projects found. Create your first project!</p>
        </div>
      )}
    </div>
  )
}

export default Projects

