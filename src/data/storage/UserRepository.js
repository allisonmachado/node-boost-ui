import jwt_decode from "jwt-decode";

import { ACCESS_TOKEN_KEY } from '../../lib/Constants'

export default class UserRepository {
  getUser() {
    try {
      const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
      if (!accessToken) {
        return null;
      }
      return this._decodeUser(accessToken);
    } catch (error) {
      console.error(`Error while trying to fetch user info via jwt: `, error);
    }
  }

  _decodeUser(token) {
    const user = jwt_decode(token);
    delete user.iat;
    user.accessToken = token;
    return user;
  }
}