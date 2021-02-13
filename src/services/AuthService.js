export default class UserService {
  constructor(authFetch) {
    this.authFetch = authFetch;
  }

  async authenticateUser(email, password) {
    // TODO: Save user storage jwt info
    return this.authFetch.authenticateUser(email, password);
  }

  async quitUser() {
    // TODO: Clear user storage jwt info
  }
}