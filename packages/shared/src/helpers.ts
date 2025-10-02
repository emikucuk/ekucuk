import type { ApiResponse } from './types.js';

/**
 * Creates a successful API response
 * @template T
 * @param {T} result - The result data
 * @returns {ApiResponse<T>} Successful API response
 */
export function successResponse<T>(result: T): ApiResponse<T> {
  return {
    result,
    isSuccessful: true,
    error: null
  };
}

/**
 * Creates an error API response
 * @param {string} code - Error code
 * @param {string} message - Error message
 * @returns {ApiResponse<null>} Error API response
 */
export function errorResponse(code: string, message: string): ApiResponse<null> {
  return {
    result: null,
    isSuccessful: false,
    error: { code, message }
  };
}

