export default class AuthRepository {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async authenticateUser(email, password) {
    const method = 'POST';
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify({ email, password });

    const response = await fetch(`${this.baseUrl}/auth`, { method, headers, body });
    return response.json();
  }
}