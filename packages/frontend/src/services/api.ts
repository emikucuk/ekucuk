import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'
import type { ApiResponse, ApiRequestParams } from '@ekucuk/shared'

const API_BASE_URL = import.meta.env.DEFAULT_API_URL || 'http://localhost:5001'

export const apiRequest = async <TResponse = any, TBody = any>({
  method,
  sourceUrl,
  body,
  headers = {},
  params = {},
  onSuccess,
  onError,
  onFinally,
}: ApiRequestParams<TResponse, TBody>): Promise<ApiResponse<TResponse>> => {
  try {
    const config: AxiosRequestConfig = {
      method,
      url: `${API_BASE_URL}${sourceUrl}`,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      params,
      data: body,
    }

    const response = await axios(config)
    const apiResponse: ApiResponse<TResponse> = response.data

    // Başarılı durumda callback'i çağır
    if (apiResponse.isSuccessful && onSuccess) {
      onSuccess(apiResponse.result)
    }

    // Hata durumunda callback'i çağır
    if (!apiResponse.isSuccessful && onError && apiResponse.error) {
      onError(apiResponse.error)
    }

    return apiResponse
  } catch (error) {
    let errorResponse: ApiResponse<TResponse>

    if (axios.isAxiosError(error) && error.response) {
      errorResponse = error.response.data
    } else {
      // Network veya diğer hatalar için
      errorResponse = {
        result: null as any,
        isSuccessful: false,
        error: {
          code: 'NETWORK_ERROR',
          message: error instanceof Error ? error.message : 'Bilinmeyen hata',
        },
      }
    }

    // Hata callback'ini çağır
    if (onError && errorResponse.error) {
      onError(errorResponse.error)
    }

    return errorResponse
  } finally {
    // Her durumda finally callback'ini çağır
    if (onFinally) {
      onFinally()
    }
  }
}

