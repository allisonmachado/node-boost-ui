import ResponseStatusMap from "../../lib/ResponseStatusMap";

export default class UserFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getUsers() {
    const response = await fetch(`${this.baseUrl}/users`);
    ResponseStatusMap.assertSuccess(response, ResponseStatusMap.DEFAULT_ERROR_MAP);

    return response.json();
  }

  async getUser(id) {
    const response = await fetch(`${this.baseUrl}/users/${id}`);
    ResponseStatusMap.assertSuccess(response, ResponseStatusMap.DEFAULT_ERROR_MAP);

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
    ResponseStatusMap.assertSuccess(response, ResponseStatusMap.DEFAULT_ERROR_MAP);

    return response.json();
  }

  async updateUser(user, accessToken) {
    const method = 'PUT';
    const headers = new Headers({
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    });
    const body = JSON.stringify({ name: user.name, surname: user.surname, password: user.password });

    const response = await fetch(`${this.baseUrl}/users/${user.id}`, { method, headers, body });
    ResponseStatusMap.assertSuccess(response, ResponseStatusMap.DEFAULT_ERROR_MAP);
  }

  async deleteUser(id, accessToken) {
    const method = 'DELETE';
    const headers = new Headers({ "Authorization": `Bearer ${accessToken}` });
    const response = await fetch(`${this.baseUrl}/users/${id}`, { method, headers });
    ResponseStatusMap.assertSuccess(response, ResponseStatusMap.DEFAULT_ERROR_MAP);
  }
}
