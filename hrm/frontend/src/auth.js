const ACCESS_TOKEN_KEY = 'hrm-token'

export function getAccessToken() {
  return typeof localStorage === 'undefined'
    ? null
    : localStorage.getItem(ACCESS_TOKEN_KEY)
}

export function setAccessToken(token) {
  localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export function clearAccessToken() {
  localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export function isAuthenticated() {
  return Boolean(getAccessToken())
}
