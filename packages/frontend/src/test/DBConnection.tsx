import type { Project } from '@ekucuk/shared'
import React, { useEffect, useState } from 'react'
import { apiRequest } from '../services/api'

export const DBConnection = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [backendStatus, setBackendStatus] = useState<string>('Checking...')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formStatus, setFormStatus] = useState<string>('')

  useEffect(() => {
    // Backend health check
    apiRequest({
      method: 'GET',
      sourceUrl: '/api/health',
      onSuccess: () => {
        setBackendStatus('✅ Backend Connected!')
      },
      onError: () => {
        setBackendStatus('❌ Backend Not Running')
      }
    })

    // Fetch projects
    apiRequest<Project[]>({
      method: 'GET',
      sourceUrl: '/api/projects',
      onSuccess: (data) => {
        setProjects(data)
      },
      onError: () => {
        setProjects([])
      }
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    apiRequest({
      method: 'POST',
      sourceUrl: '/api/contact',
      body: formData,
      onSuccess: () => {
        setFormStatus('✅ Message sent!')
        setFormData({ name: '', email: '', message: '' })
      },
      onError: (error) => {
        setFormStatus(`❌ ${error.message}`)
      }
    })
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
