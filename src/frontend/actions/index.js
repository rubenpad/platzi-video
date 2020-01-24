import axios from 'axios'

export function setFavorite(payload) {
  return {
    type: 'SET_FAVORITE',
    payload,
  }
}

export function deleteFavorite(payload) {
  return {
    type: 'DELETE_FAVORITE',
    payload,
  }
}

export function loginRequest(payload) {
  return {
    type: 'LOGIN_REQUEST',
    payload,
  }
}

export function logoutRequest(payload) {
  return {
    type: 'LOGOUT_REQUEST',
    payload,
  }
}

export function signupRequest(payload) {
  return {
    type: 'SIGNUP_REQUEST',
    payload,
  }
}

export function getVideo(payload) {
  return {
    type: 'GET_VIDEO',
    payload,
  }
}

export function handleError(payload) {
  return { type: 'HANDLE_ERROR', payload }
}

export function registerUser(payload, redirectUrl) {
  return dispatch => {
    axios
      .post('/auth/sign-up', payload)
      .then(({ data }) => dispatch(signupRequest(data)))
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => handleError(error))
  }
}

export function loginUser({ email, password }, redirectUrl) {
  return dispatch => {
    axios({
      url: '/auth/sign-in',
      method: 'post',
      auth: {
        username: email,
        password,
      },
    })
      .then(({ data }) => {
        document.cookie = `email=${data.user.email}`
        document.cookie = `name=${data.user.name}`
        document.cookie = `id=${data.user.id}`
        dispatch(loginRequest(data.user))
      })
      .then(() => {
        window.location.href = redirectUrl
      })
      .catch(error => handleError(error))
  }
}

export function setUserMovie({ movie }) {
  const movieId = movie.id
  return dispatch => {
    axios({
      url: 'user-movies',
      method: 'post',
      data: { movieId },
    })
      .then(() => {
        return dispatch(setFavorite({ ...movie }))
      })
      .catch(error => dispatch(handleError(error)))
  }
}

export function deleteUserMovie(movieId) {
  return dispatch => {
    axios({
      url: `user-movies/${movieId}`,
      method: 'delete',
    })
      .then(() => dispatch(deleteFavorite(movieId)))
      .catch(error => dispatch(handleError(error)))
  }
}
