/**
 * Contact Controller
 * İletişim formu endpoint'lerini yönetir
 */

import { successResponse, errorResponse } from '@ekucuk/shared'
import contactService from '../services/contactService.js'

class ContactController {
  /**
   * POST /api/contact
   * İletişim formu gönderir
   */
  async sendContactForm(req, res) {
    try {
      const result = await contactService.sendContactForm(req.body)
      res.json(successResponse(result))
    } catch (error) {
      res.status(400).json(
        errorResponse('CONTACT_FORM_ERROR', error.message)
      )
    }
  }

  /**
   * GET /api/contact (Admin için)
   * Tüm iletişim formlarını getirir
   */
  async getAllContacts(req, res) {
    try {
      const contacts = await contactService.getAllContacts()
      res.json(successResponse(contacts))
    } catch (error) {
      res.status(500).json(
        errorResponse('FETCH_CONTACTS_ERROR', error.message)
      )
    }
  }
}

export default new ContactController()

