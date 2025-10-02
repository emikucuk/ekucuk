/**
 * Project Service
 * Business logic ve veri işlemleri
 */

import { Project } from '../models/Project.js'

class ProjectService {
  constructor() {
    // Şu an için in-memory data, ileride DB'ye bağlanabilir
    this.projects = [
      { id: 1, title: 'Portfolio Website', tech: 'React, Express' },
      { id: 2, title: 'E-commerce App', tech: 'React, Node.js' },
      { id: 3, title: 'Task Manager', tech: 'React, MongoDB, Express' },
      { id: 4, title: 'Blog Website', tech: 'React, Node.js' },
      { id: 5, title: 'Chat Application', tech: 'React, Node.js' }
    ]
  }

  /**
   * Tüm projeleri getirir
   */
  async getAllProjects() {
    try {
      // Burada DB sorgusu yapılabilir
      // const projects = await ProjectModel.find()
      
      return this.projects.map(p => new Project(p))
    } catch (error) {
      throw new Error(`Error fetching projects: ${error.message}`)
    }
  }

  /**
   * ID'ye göre proje getirir
   */
  async getProjectById(id) {
    try {
      const project = this.projects.find(p => p.id === parseInt(id))
      
      if (!project) {
        throw new Error('Project not found')
      }

      return new Project(project)
    } catch (error) {
      throw error
    }
  }

  /**
   * Yeni proje ekler
   */
  async createProject(projectData) {
    try {
      const validation = Project.validate(projectData)
      
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '))
      }

      const newProject = new Project({
        id: this.projects.length + 1,
        ...projectData
      })

      this.projects.push(newProject)
      return newProject
    } catch (error) {
      throw error
    }
  }
}

export default new ProjectService()

