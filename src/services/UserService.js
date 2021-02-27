export default class UserService {
  constructor(userFetch, authRepository) {
    this.userFetch = userFetch;
    this.authRepository = authRepository;
  }

  async getUsers() {
    return this.userFetch.getUsers();
  }

  async getUser(id) {
    const user = await this.userFetch.getUser(id);
    return { ...user, password: '' }
  }

  async deleteUser(id) {
    const loggedUser = this.authRepository.getAuthenticatedUser();
    return this.userFetch.deleteUser(id, loggedUser?.accessToken);
  }

  async createUser(user) {
    const loggedUser = this.authRepository.getAuthenticatedUser();
    return this.userFetch.createUser(user, loggedUser?.accessToken);
  }

  async updateUser(user) {
    const loggedUser = this.authRepository.getAuthenticatedUser();
    return this.userFetch.updateUser(user, loggedUser?.accessToken);
  }

  getLoggedInUser() {
    return this.authRepository.getAuthenticatedUser();
  }
}