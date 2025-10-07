/**
 * Routes Index
 * Tüm route'ları merkezi bir yerden yönetir
 */

import express from 'express'
import healthRoutes from './healthRoutes.js'
import projectRoutes from './projectRoutes.js'
import contactRoutes from './contactRoutes.js'
import technologyRoutes from './technologyRoutes.js'

const router = express.Router()

// Route mounting
router.use('/health', healthRoutes)
router.use('/projects', projectRoutes)
router.use('/contact', contactRoutes)
router.use('/technologies', technologyRoutes)

export default router

