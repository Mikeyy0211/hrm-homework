const API_BASE_URL = import.meta.env.VITE_API_URL ?? ''

function unwrap(payload) {
  return payload && typeof payload === 'object' && 'data' in payload
    ? payload.data
    : payload
}

async function readResponse(response) {
  const payload = await response.json().catch(() => null)
  if (!response.ok) {
    throw new Error(payload?.message ?? 'Yêu cầu thất bại.')
  }
  return unwrap(payload)
}

export async function login(credentials) {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  })

  return readResponse(response)
}
