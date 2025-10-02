/**
 * Error Handler Middleware
 * Global hata yönetimi
 */

import { errorResponse } from '@ekucuk/shared'

/**
 * 404 Not Found Handler
 */
export const notFoundHandler = (req, res, next) => {
  res.status(404).json(
    errorResponse('NOT_FOUND', `Route ${req.originalUrl} not found`)
  )
}

/**
 * Global Error Handler
 */
export const globalErrorHandler = (err, req, res, next) => {
  console.error('Error:', err)

  const statusCode = err.statusCode || 500
  const message = err.message || 'Internal Server Error'

  res.status(statusCode).json(
    errorResponse(err.code || 'INTERNAL_ERROR', message)
  )
}

/**
 * Async Handler Wrapper
 * Async fonksiyonlardaki hataları yakalar
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

