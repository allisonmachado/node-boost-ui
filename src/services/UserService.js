export default class UserService {
  constructor(userFetch, userRepository) {
    this.userFetch = userFetch;
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userFetch.getUsers();
  }

  async getUser(id) {
    const user = await this.userFetch.getUser(id);
    return { ...user, password: '' }
  }

  async deleteUser(id) {
    const loggedUser = this.userRepository.getUser();
    return this.userFetch.deleteUser(id, loggedUser?.accessToken);
  }

  async createUser(user) {
    const loggedUser = this.userRepository.getUser();
    return this.userFetch.createUser(user, loggedUser?.accessToken);
  }

  async updateUser(user) {
    const loggedUser = this.userRepository.getUser();
    return this.userFetch.updateUser(user, loggedUser?.accessToken);
  }

  getLoggedInUser() {
    return this.userRepository.getUser();
  }
}