import { setFavorite, loginRequest, logoutRequest } from '../index'
import movieMock from '../../__mocks__/movieMock'

describe('Redux actions test', () => {
  it('Should calls set favorite action and verify the payload', () => {
    const payload = movieMock
    const expected = {
      type: 'SET_FAVORITE',
      payload,
    }
    expect(setFavorite(payload)).toEqual(expected)
  })

  it('Should calls the login request action ', () => {
    const payload = { email: 'test@test.com', password: 'secret' }
    const expected = {
      type: 'LOGIN_REQUEST',
      payload,
    }
    expect(loginRequest(payload)).toEqual(expected)
  })

  it('Should calls the logout request action ', () => {
    const payload = {}
    const expected = {
      type: 'LOGOUT_REQUEST',
      payload,
    }
    expect(logoutRequest(payload)).toEqual(expected)
  })
})
