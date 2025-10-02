/**
 * Health Controller
 * Health check endpoint'ini yönetir
 */

import { successResponse } from '@ekucuk/shared'

class HealthController {
  /**
   * GET /api/health
   * Backend durumunu kontrol eder
   */
  checkHealth(req, res) {
    try {
      const healthData = {
        status: 'OK',
        message: 'Backend is running!',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
      }

      res.json(successResponse(healthData))
    } catch (error) {
      res.status(500).json(errorResponse('HEALTH_CHECK_ERROR', error.message))
    }
  }
}

export default new HealthController()

