export default class UserService {
  constructor(userFetch, userRepository) {
    this.userFetch = userFetch;
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userFetch.getUsers();
  }

  getLoggedInUser() {
    return this.userRepository.getUser();
  }
}