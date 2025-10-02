/**
 * Contact Model
 * İletişim form verilerinin yapısını tanımlar
 */

export class Contact {
  constructor({ name, email, phone, subject, website, message }) {
    this.name = name
    this.email = email
    this.phone = phone
    this.subject = subject
    this.website = website
    this.message = message
    this.createdAt = new Date()
  }

  /**
   * Validation - Contact form verilerini doğrular
   */
  static validate(data) {
    const errors = []

    if (!data.name || data.name.trim() === '') {
      errors.push('Name is required')
    }

    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push('Valid email is required')
    }

    if (!data.message || data.message.trim() === '') {
      errors.push('Message is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }

  /**
   * Email validasyonu
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
}

