/**
 * Project Routes
 * Proje ile ilgili endpoint'ler
 */

import express from 'express'
import projectController from '../controllers/projectController.js'

const router = express.Router()

// GET /api/projects - Tüm projeleri getir
router.get('/', projectController.getAllProjects)

// GET /api/projects/:id - ID'ye göre proje getir
router.get('/:id', projectController.getProjectById)

// POST /api/projects - Yeni proje oluştur
router.post('/', projectController.createProject)

export default router

