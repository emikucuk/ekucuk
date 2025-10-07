/**
 * @typedef {import('@ekucuk/shared').Technology} Technology
 */

class TechnologyModel {
  /**
   * @param {Technology} technologyData
   */
  constructor(technologyData) {
    this.id = technologyData.id;
    this.title = technologyData.title;
    this.image = technologyData.image;
    this.order = technologyData.order;
    this.createdAt = technologyData.createdAt || new Date();
  }

  /**
   * @param {Technology} technologyData
   * @returns {boolean}
   */
  static validate(technologyData) {
    if (!technologyData) {
      return false;
    }

    // Required fields
    if (!technologyData.title || technologyData.title.trim() === '') {
      return false;
    }

    if (!technologyData.image || technologyData.image.trim() === '') {
      return false;
    }

    // Order should be a number
    if (typeof technologyData.order !== 'number' || technologyData.order < 0) {
      return false;
    }

    return true;
  }

  /**
   * @param {Technology} technologyData
   * @returns {{isValid: boolean, errors: string[]}}
   */
  static validateWithErrors(technologyData) {
    const errors = [];

    if (!technologyData) {
      errors.push('Technology data is required');
      return { isValid: false, errors };
    }

    if (!technologyData.title || technologyData.title.trim() === '') {
      errors.push('Title is required');
    }

    if (!technologyData.image || technologyData.image.trim() === '') {
      errors.push('Image URL is required');
    }

    if (typeof technologyData.order !== 'number' || technologyData.order < 0) {
      errors.push('Order must be a positive number');
    }

    return {
      isValid: errors.length === 0,
      errors
    };
  }
}

export default TechnologyModel;
