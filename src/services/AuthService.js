export default class UserService {
  constructor(authFetch) {
    this.authFetch = authFetch;
  }

  async authenticateUser(email, password) {
    return this.authFetch.authenticateUser(email, password);
  }
}