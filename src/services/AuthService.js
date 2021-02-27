export default class UserService {
  constructor(authFetch, authRepository) {
    this.authFetch = authFetch;
    this.authRepository = authRepository;
  }

  async authenticateUser(email, password) {
    const { auth: accessJwt } = await this.authFetch.authenticateUser(email, password);
    this.authRepository.saveAccessToken(accessJwt);
    return this.getAuthenticatedUser();
  }

  async quitUser() {
    this.authRepository.deleteAccessToken();
  }

  getAuthenticatedUser() {
    return this.authRepository.getAuthenticatedUser();
  }
}
