export interface ApiResponse<T> {
  result: T;
  isSuccessful: boolean;
  error: {
    code: string;
    message: string;
  } | null;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  website: string;
  message: string;
}

export interface Project {
  id: number;
  title: string;
  description?: string;
  tech: string;
}

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface ApiRequestParams<TResponse = any, TBody = any> {
  method: HttpMethod
  sourceUrl: string
  body?: TBody
  headers?: Record<string, string>
  params?: Record<string, any>
  onSuccess?: (data: TResponse) => void
  onError?: (error: { code: string; message: string }) => void
  onFinally?: () => void
}