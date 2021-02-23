import ClientError from "../../lib/ClientError";

export default class UserFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getUsers() {
    const response = await fetch(`${this.baseUrl}/users`);
    return response.json();
  }

  async getUser(id) {
    const response = await fetch(`${this.baseUrl}/users/${id}`);
    return response.json();
  }

  async createUser(user, accessToken) {
    const method = 'POST';
    const headers = new Headers({
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    });
    const body = JSON.stringify(user);

    const response = await fetch(`${this.baseUrl}/users`, { method, headers, body });

    if (!response.ok || response.status !== 201) {
      throw new ClientError(response.status, {
        "error": "Bad Request",
        "message": "Double check all mandatory fields and correct email format",
      })
    }
    return response.json();
  }

  async deleteUser(id, accessToken) {
    const method = 'DELETE';
    const headers = new Headers({ "Authorization": `Bearer ${accessToken}` });
    await fetch(`${this.baseUrl}/users/${id}`, { method, headers });
  }
}
