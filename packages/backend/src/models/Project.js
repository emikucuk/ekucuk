/**
 * Project Model
 * Veri yapısını ve validasyonlarını tanımlar
 */

export class Project {
  constructor({ id, title, tech, description }) {
    this.id = id
    this.title = title
    this.tech = tech
    this.description = description || null
  }

  /**
   * Validation - Project verilerini doğrular
   */
  static validate(data) {
    const errors = []

    if (!data.title || data.title.trim() === '') {
      errors.push('Title is required')
    }

    if (!data.tech || data.tech.trim() === '') {
      errors.push('Tech is required')
    }

    return {
      isValid: errors.length === 0,
      errors
    }
  }
}

