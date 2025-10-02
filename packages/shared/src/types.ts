export interface ApiResponse<T> {
    result: T;
    isSuccessful: boolean;
    error: {
      code: string;
      message: string;
    } | null;
  }
  
export interface Project {
  id: number;
  title: string;
  description?: string;
  tech: string;
}