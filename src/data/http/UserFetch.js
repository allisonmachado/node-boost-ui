import ResponseStatusMap from "../../lib/ResponseStatusMap";
import BaseFetch from "./BaseFetch";

export default class UserFetch extends BaseFetch {
  constructor(baseUrl) {
    super(baseUrl + '/users', ResponseStatusMap.DEFAULT_ERROR_MAP);
  }

  async getUsers() {
    const response = await this.fetch({});
    return response.json();
  }

  async getUser(id) {
    const response = await this.fetch({ path: `/${id}` });
    return response.json();
  }

  async createUser(user, accessToken) {
    const method = 'POST';
    const headers = new Headers({
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    });
    const body = JSON.stringify(user);

    const response = await this.fetch({ options: { method, headers, body } });

    return response.json();
  }

  async updateUser(user, accessToken) {
    const method = 'PUT';
    const headers = new Headers({
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json"
    });
    const body = JSON.stringify({
      name: user.name, surname: user.surname, password: user.password
    });

    await this.fetch({
      path: `/${user.id}`,
      options: { method, headers, body }
    });
  }

  async deleteUser(id, accessToken) {
    const method = 'DELETE';
    const headers = new Headers({ "Authorization": `Bearer ${accessToken}` });

    await this.fetch({
      path: `/${id}`,
      options: { method, headers }
    });
  }
}
