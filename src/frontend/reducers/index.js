function reducer(state, action) {
  switch (action.type) {
    case 'SET_FAVORITE':
      if (state.library.some(item => item.id === action.payload.id)) {
        return {
          ...state,
        }
      }
      return {
        ...state,
        library: [...state.library, action.payload],
      }

    case 'DELETE_FAVORITE':
      return {
        ...state,
        library: state.library.filter(
          movie => movie.id !== action.payload
        ),
      }

    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: { ...action.payload },
      }

    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      }

    case 'SIGNUP_REQUEST':
      return {
        ...state,
        user: action.payload,
      }

    case 'GET_VIDEO':
      return {
        ...state,
        playing:
          state.trends
            .concat(state.originals)
            .find(item => item.id === Number(action.payload)) || [],
      }

    default:
      return state
  }
}

export default reducer
