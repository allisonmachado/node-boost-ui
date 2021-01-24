import ClientError from "../lib/ClientError";

export default class AuthRepository {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async authenticateUser(email, password) {
    const method = 'POST';
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify({ email, password });

    const response = await fetch(`${this.baseUrl}/auth`, { method, headers, body });

    if (!response.ok || response.status !== 200) {
      throw new ClientError(response.status, {
        "error": "Bad Request",
        "message": "Invalid email or password",
      })
    }
    return response.json();
  }
}