/**
 * Health Routes
 * Health check endpoint'leri
 */

import express from 'express'
import healthController from '../controllers/healthController.js'

const router = express.Router()

// GET /api/health
router.get('/', healthController.checkHealth)

export default router

