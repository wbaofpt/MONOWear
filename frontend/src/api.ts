export type ApiError = { message: string };
const request = async <T>(path: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(path, { headers: { 'Content-Type': 'application/json', ...(options?.headers || {}) }, ...options });
  const body = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error((body as ApiError).message || 'Có lỗi xảy ra, vui lòng thử lại.');
  return body as T;
};
export const api = {
  products: () => request('/api/products'),
  product: (id: number) => request(`/api/products/${id}`),
  register: (payload: { name: string; email: string; password: string }) => request('/api/auth/register', { method: 'POST', body: JSON.stringify(payload) }),
  login: (payload: { email: string; password: string }) => request('/api/auth/login', { method: 'POST', body: JSON.stringify(payload) }),
  createOrder: (payload: { customerName: string; phone: string; address: string; total: number }) => request('/api/orders', { method: 'POST', body: JSON.stringify(payload) }),
  trackOrder: (id: string) => request(`/api/orders/${encodeURIComponent(id)}`),
  contact: (payload: { name: string; email: string; message: string }) => request('/api/contact', { method: 'POST', body: JSON.stringify(payload) }),
  subscribe: (email: string) => request('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) }),
};
