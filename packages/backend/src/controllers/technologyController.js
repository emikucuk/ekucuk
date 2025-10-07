import technologyService from '../services/technologyService.js';
import { successResponse, errorResponse } from '@ekucuk/shared';

class TechnologyController {
  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  static async getAllTechnologies(req, res, next) {
    try {
      const technologies = await technologyService.getAllTechnologies();
      res.json(successResponse(technologies));
    } catch (error) {
      next(error);
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  static async getTechnologyById(req, res, next) {
    try {
      const { id } = req.params;
      const technology = await technologyService.getTechnologyById(parseInt(id));
      
      if (technology) {
        res.json(successResponse(technology));
      } else {
        res.status(404).json(errorResponse('NOT_FOUND', 'Technology not found'));
      }
    } catch (error) {
      next(error);
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  static async createTechnology(req, res, next) {
    try {
      const newTechnology = await technologyService.createTechnology(req.body);
      res.status(201).json(successResponse(newTechnology));
    } catch (error) {
      res.status(400).json(errorResponse('VALIDATION_ERROR', error.message));
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  static async updateTechnology(req, res, next) {
    try {
      const { id } = req.params;
      const updatedTechnology = await technologyService.updateTechnology(parseInt(id), req.body);
      res.json(successResponse(updatedTechnology));
    } catch (error) {
      if (error.message === 'Technology not found') {
        res.status(404).json(errorResponse('NOT_FOUND', error.message));
      } else {
        res.status(400).json(errorResponse('VALIDATION_ERROR', error.message));
      }
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  static async deleteTechnology(req, res, next) {
    try {
      const { id } = req.params;
      const result = await technologyService.deleteTechnology(parseInt(id));
      res.json(successResponse(result));
    } catch (error) {
      if (error.message === 'Technology not found') {
        res.status(404).json(errorResponse('NOT_FOUND', error.message));
      } else {
        next(error);
      }
    }
  }

  /**
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  static async updateTechnologyOrder(req, res, next) {
    try {
      const { orderUpdates } = req.body;
      
      if (!orderUpdates || !Array.isArray(orderUpdates)) {
        return res.status(400).json(
          errorResponse('VALIDATION_ERROR', 'orderUpdates must be an array')
        );
      }

      // Validate each update
      for (const update of orderUpdates) {
        if (!update.id || typeof update.order !== 'number') {
          return res.status(400).json(
            errorResponse('VALIDATION_ERROR', 'Each update must have id and order fields')
          );
        }
      }

      const updatedTechnologies = await technologyService.updateTechnologyOrder(orderUpdates);
      res.json(successResponse(updatedTechnologies));
    } catch (error) {
      next(error);
    }
  }

  /**
   * Alfabetik sıralama ve ID atama işlemi
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   * @param {import('express').NextFunction} next
   */
  static async sortTechnologiesAlphabeticallyAndAssignIds(req, res, next) {
    try {
      const result = await technologyService.sortTechnologiesAlphabeticallyAndAssignIds();
      
      if (result.isSuccessful) {
        res.json({
          result: result.result,
          isSuccessful: result.isSuccessful,
          error: result.error
        });
      } else {
        res.status(400).json({
          result: result.result,
          isSuccessful: result.isSuccessful,
          error: result.error
        });
      }
    } catch (error) {
      next(error);
    }
  }
}

export default TechnologyController;
