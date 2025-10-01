// instance.post('/posts', {})

export const api = {
  get: (url: string, options?: Omit<RequestInit, 'method'>) => {
    return fetch(`${import.meta.env.VITE_BACKEND_URL}/api${url}`, {
      method: 'GET',
      ...options,
    })
  },
  post: (url: string, options?: Omit<RequestInit, 'method'>) => {
    return fetch(`${import.meta.env.VITE_BACKEND_URL}/api${url}`, {
      method: 'POST',
      ...options,
      headers: {
        'Content-type': 'application/json',
        ...options?.headers,
      },
    })
  },
  put: (url: string, options?: Omit<RequestInit, 'method'>) => {
    return fetch(`${import.meta.env.VITE_BACKEND_URL}/api${url}`, {
      method: 'PUT',
      ...options,
      headers: {
        'Content-type': 'application/json',
        ...options?.headers,
      },
    })
  },
  delete: (url: string, options?: Omit<RequestInit, 'method'>) => {
    return fetch(`${import.meta.env.VITE_BACKEND_URL}/api${url}`, {
      method: 'DELETE',
      ...options,
    })
  },
}
