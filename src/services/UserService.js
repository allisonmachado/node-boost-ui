export default class UserService {
  constructor(userRepository) {
    this.userRepository = userRepository;
  }

  async getUsers() {
    return this.userRepository.getUsers();
  }
}