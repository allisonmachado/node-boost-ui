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

  getLoggedInUser() {
    return this.userRepository.getUser();
  }
}