import { ACCESS_TOKEN_KEY } from '../../lib/Constants'

export default class UserRepository {
  saveAccessToken(jwt) {
    localStorage.setItem(ACCESS_TOKEN_KEY, jwt)
  }

  deleteAccessToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
  }
}