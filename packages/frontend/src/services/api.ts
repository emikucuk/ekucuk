import type { ApiResponse, Project } from '@ekucuk/shared';

const API_BASE_URL = import.meta.env.DEFAULT_API_URL || 'http://localhost:5001';

export const api = {
  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    return response.json();
  },

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },
};

// Example usage functions
export const getProjects = () => api.get<Project[]>('/api/projects');
export const sendContactForm = (data: { name: string; email: string; message: string }) =>
  api.post('/api/contact', data);

