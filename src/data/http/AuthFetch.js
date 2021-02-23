import ClientError from "../../lib/ClientError";
import StatusCode from "../../lib/StatusCode";

export default class AuthFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async authenticateUser(email, password) {
    const method = 'POST';
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify({ email, password });

    const response = await fetch(`${this.baseUrl}/auth`, { method, headers, body });

    if (response.status === 400) throw new ClientError(response.status, "Invalid email or password")
    if (!response.ok || !StatusCode.isSuccess(response.status)) throw new Error("An error occurred, please try again later")

    return response.json();
  }
}