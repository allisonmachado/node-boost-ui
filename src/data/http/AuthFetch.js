import ResponseStatusMap from "../../lib/ResponseStatusMap";
import BaseFetch from "./BaseFetch";

export default class AuthFetch extends BaseFetch {
  async authenticateUser(email, password) {
    const method = 'POST';
    const headers = new Headers({ "Content-Type": "application/json" });
    const body = JSON.stringify({ email, password });

    const response = await this.fetch(
      `${this.baseUrl}/auth`,
      ResponseStatusMap.AUTH_ERROR_MAP, 
      { method, headers, body }
    );
    return response.json();
  }
}
