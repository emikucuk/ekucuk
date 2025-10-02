import { useState, useEffect } from 'react'
import { getProjects, sendContactForm } from './services/api'
import type { Project } from '@ekucuk/shared'

function App() {
  const [projects, setProjects] = useState<Project[]>([])
  const [backendStatus, setBackendStatus] = useState<string>('Checking...')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<string>('')

  useEffect(() => {
    // Backend health check
    fetch('/api/health')
      .then(res => res.json())
      .then(data => {
        if (data.isSuccessful) {
          setBackendStatus('✅ Backend Connected!')
        }
      })
      .catch(() => setBackendStatus('❌ Backend Not Running'))

    // Fetch projects
    getProjects().then(response => {
      if (response.isSuccessful && Array.isArray(response.result)) {
        setProjects(response.result)
      } else {
        setProjects([])
      }
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await sendContactForm(formData)
    
    if (response.isSuccessful) {
      setFormStatus('✅ Message sent!')
      setFormData({ name: '', email: '', message: '' })
    } else {
      setFormStatus(`❌ ${response.error?.message}`)
    }
  }
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }

  return (
    <div className="app" style={containerStyle}>
      <h1>🚀 Portfolio - Monorepo Demo</h1>
      
      <div className="status">
        <p><strong>Backend Status:</strong> {backendStatus}</p>
      </div>

      <section className="projects">
        <h2>📁 Projects</h2>
        {projects.length > 0 ? (
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <strong>{project.title}</strong> - {project.tech}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading projects...</p>
        )}
      </section>

      <section className="contact">
        <h2>📧 Contact Form</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
          <button type="submit">Send</button>
        </form>
        {formStatus && <p>{formStatus}</p>}
      </section>
    </div>
  )
}

export default App
