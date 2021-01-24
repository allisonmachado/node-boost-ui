export default class UserService {
  constructor(authRepository) {
    this.authRepository = authRepository;
  }

  async authenticateUser(email, password) {
    return this.authRepository.authenticateUser(email, password);
  }
}