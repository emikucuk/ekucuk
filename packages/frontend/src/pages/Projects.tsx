import { useState, useEffect } from 'react'
import type { Project } from '@ekucuk/shared'
import { apiRequest } from '../services/api'
import { useTranslationService } from '../i18n/useTranslationService';
import { resourcesMap } from '../resources/translations';

const Projects = () => {
  const { t } = useTranslationService();
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    apiRequest<Project[]>({
      method: 'GET',
      sourceUrl: '/api/projects',
      onSuccess: (data) => {
        setProjects(data)
      },
      onError: (error) => {
        console.error('Projects yüklenemedi:', error.message)
      },
      onFinally: () => {
        setLoading(false)
      }
    })
  }, [])

  return (
    <div className="max-w-7xl animate-fadeIn">
      <div className="mb-4">
        <span className="text-4xl mr-2">📁</span>
        <span className="text-4xl font-semibold text-blue-600 dark:text-blue-500">
          {t(resourcesMap.projects.title)}
        </span>
      </div>
      
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="text-lg text-gray-600 dark:text-gray-300">Loading projects...</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">
                {project.tech}
              </p>
              {project.description && (
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Projects

