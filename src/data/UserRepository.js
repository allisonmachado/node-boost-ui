export default class UserRepository {
  async getUsers() {
    const response = await fetch('http://localhost:8080/users');
    return response.json();
  }
}