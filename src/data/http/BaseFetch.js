import ConnectivityError from "../../lib/ConnectivityError";

export default class BaseFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetch(url, options = undefined) {
    try {
      return await fetch(url, options);
    } catch (e) {
      throw new ConnectivityError("It was not possible to communicate with our servers. Please, try again later.");
    }
  }
}
