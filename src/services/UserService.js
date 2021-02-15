export default class UserService {
  constructor(userFetch, userRepository) {
    this.userFetch = userFetch;
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userFetch.getUsers();
  }

  async getUser(id) {
    return this.userFetch.getUser(id);
  }

  async deleteUser(id) {
    const loggedUser = this.userRepository.getUser();
    return this.userFetch.deleteUser(id, loggedUser.accessToken);
  }

  getLoggedInUser() {
    return this.userRepository.getUser();
  }
}