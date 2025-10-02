/**
 * Express Backend Server
 * Katmanlı mimari ile yapılandırılmış
 */

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routes from './routes/index.js'
import { notFoundHandler, globalErrorHandler } from './middlewares/errorHandler.js'

// Environment variables
dotenv.config()

// Express app
const app = express()
const PORT = process.env.PORT || 5001

// Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Request logging (development)
if (process.env.NODE_ENV !== 'production') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`)
    next()
  })
}

// API Routes
app.use('/api', routes)

// Error Handlers
app.use(notFoundHandler)
app.use(globalErrorHandler)

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`)
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`)
})

