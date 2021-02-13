export default class UserService {
  constructor(authFetch, authRepository, userRepository) {
    this.authFetch = authFetch;
    this.authRepository = authRepository;
    this.userRepository = userRepository;
  }

  async authenticateUser(email, password) {
    const { auth: accessJwt } = await this.authFetch.authenticateUser(email, password);
    this.authRepository.saveAccessToken(accessJwt);
    return this.userRepository.getUser();
  }

  async quitUser() {
    this.authRepository.deleteAccessToken()
  }
}
