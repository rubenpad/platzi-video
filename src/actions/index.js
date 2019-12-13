export function setFavorite(payload) {
  return {
    type: 'SET_FAVORITE',
    payload,
  };
}

export function deleteFavorite(payload) {
  return {
    type: 'DELETE_FAVORITE',
    payload,
  };
}

export function loginRequest(payload) {
  return {
    type: 'LOGIN_REQUEST',
    payload,
  };
}

export function logoutRequest(payload) {
  return {
    type: 'LOGOUT_REQUEST',
    payload,
  };
}

export function signupRequest(payload) {
  return {
    type: 'SIGNUP_REQUEST',
    payload,
  };
}
