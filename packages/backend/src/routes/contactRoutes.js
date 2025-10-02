/**
 * Contact Routes
 * İletişim formu endpoint'leri
 */

import express from 'express'
import contactController from '../controllers/contactController.js'

const router = express.Router()

// POST /api/contact - İletişim formu gönder
router.post('/', contactController.sendContactForm)

// GET /api/contact - Tüm iletişim formlarını getir (Admin)
router.get('/', contactController.getAllContacts)

export default router

