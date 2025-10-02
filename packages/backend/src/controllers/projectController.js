/**
 * Project Controller
 * Proje endpoint'lerini yönetir
 */

import { successResponse, errorResponse } from '@ekucuk/shared'
import projectService from '../services/projectService.js'

class ProjectController {
  /**
   * GET /api/projects
   * Tüm projeleri getirir
   */
  async getAllProjects(req, res) {
    try {
      const projects = await projectService.getAllProjects()
      res.json(successResponse(projects))
    } catch (error) {
      res.status(500).json(
        errorResponse('FETCH_PROJECTS_ERROR', error.message)
      )
    }
  }

  /**
   * GET /api/projects/:id
   * ID'ye göre proje getirir
   */
  async getProjectById(req, res) {
    try {
      const { id } = req.params
      const project = await projectService.getProjectById(id)
      res.json(successResponse(project))
    } catch (error) {
      res.status(404).json(
        errorResponse('PROJECT_NOT_FOUND', error.message)
      )
    }
  }

  /**
   * POST /api/projects
   * Yeni proje oluşturur
   */
  async createProject(req, res) {
    try {
      const project = await projectService.createProject(req.body)
      res.status(201).json(successResponse(project))
    } catch (error) {
      res.status(400).json(
        errorResponse('CREATE_PROJECT_ERROR', error.message)
      )
    }
  }
}

export default new ProjectController()

