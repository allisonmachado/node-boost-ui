import ClientError from "../../lib/ClientError";
import StatusCode from "../../lib/StatusCode";

export default class UserFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async getUsers() {
    const response = await fetch(`${this.baseUrl}/users`);

    if (response.status === 401) throw new ClientError(response.status, "User needs to be authenticated to perform this action")
    if (response.status === 403) throw new ClientError(response.status, "User is not authorized to perform this action")
    if (!response.ok || !StatusCode.isSuccess(response.status)) throw new Error("An error occurred, please try again later")

    return response.json();
  }

  async getUser(id) {
    const response = await fetch(`${this.baseUrl}/users/${id}`);

    if (response.status === 401) throw new ClientError(response.status, "User needs to be authenticated to perform this action")
    if (response.status === 403) throw new ClientError(response.status, "User is not authorized to perform this action")
    if (!response.ok || !StatusCode.isSuccess(response.status)) throw new Error("An error occurred, please try again later")

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

    if (response.status === 400) throw new ClientError(response.status, "Verify all mandatory fields and formats")
    if (response.status === 401) throw new ClientError(response.status, "User needs to be authenticated to perform this action")
    if (response.status === 403) throw new ClientError(response.status, "User is not authorized to perform this action")
    if (response.status === 409) throw new ClientError(response.status, "The email provided is not unique in the system")
    if (!response.ok || !StatusCode.isSuccess(response.status)) throw new Error("An error occurred, please try again later")

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

    if (response.status === 400) throw new ClientError(response.status, "Verify all mandatory fields and formats")
    if (response.status === 401) throw new ClientError(response.status, "User needs to be authenticated to perform this action")
    if (response.status === 403) throw new ClientError(response.status, "User is not authorized to perform this action")
    if (!response.ok || !StatusCode.isSuccess(response.status)) throw new Error("An error occurred, please try again later")
  }

  async deleteUser(id, accessToken) {
    const method = 'DELETE';
    const headers = new Headers({ "Authorization": `Bearer ${accessToken}` });
    const response = await fetch(`${this.baseUrl}/users/${id}`, { method, headers });

    if (response.status === 400) throw new ClientError(response.status, "Verify all mandatory fields and formats")
    if (response.status === 401) throw new ClientError(response.status, "User needs to be authenticated to perform this action")
    if (response.status === 403) throw new ClientError(response.status, "User is not authorized to perform this action")
    if (!response.ok || !StatusCode.isSuccess(response.status)) throw new Error("An error occurred, please try again later")
  }
}
