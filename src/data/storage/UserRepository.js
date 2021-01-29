import jwt_decode from "jwt-decode";


export default class UserRepository {
  getUser() {
    try {
      const accessToken = localStorage.getItem('user-access-token');
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