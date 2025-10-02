/**
 * Contact Service
 * İletişim formu ile ilgili business logic
 */

import { Contact } from '../models/Contact.js'

class ContactService {
  constructor() {
    // İleride veritabanına kaydedilebilir
    this.contacts = []
  }

  /**
   * İletişim formu gönderir
   */
  async sendContactForm(contactData) {
    try {
      // Validation
      const validation = Contact.validate(contactData)
      
      if (!validation.isValid) {
        throw new Error(validation.errors.join(', '))
      }

      // Contact nesnesi oluştur
      const contact = new Contact(contactData)

      // Kaydet (şimdilik memory'de, ileride DB'ye)
      this.contacts.push(contact)

      // Burada email gönderme işlemi yapılabilir
      // await emailService.send(contact)

      console.log('Contact form received:', {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        website: contact.website,
        subject: contact.subject,
        message: contact.message,
        createdAt: contact.createdAt
      })

      return {
        message: 'Message sent successfully!',
        id: this.contacts.length
      }
    } catch (error) {
      throw error
    }
  }

  /**
   * Tüm iletişim formlarını getirir (admin için)
   */
  async getAllContacts() {
    return this.contacts
  }
}

export default new ContactService()

