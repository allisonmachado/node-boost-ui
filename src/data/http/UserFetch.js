export default class UserFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getUsers() {
    const response = await fetch(`${this.baseUrl}/users`);
    return response.json();
  }
}