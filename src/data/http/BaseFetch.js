import ConnectivityError from "../../lib/ConnectivityError";
import ResponseStatusMap from "../../lib/ResponseStatusMap";

export default class BaseFetch {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  async fetch(url, errorMapper, options = undefined) {
    let response;
    try {
      response = await fetch(url, options);
    } catch (e) {
      throw new ConnectivityError("It was not possible to communicate with our servers. Please, try again later.");
    }
    ResponseStatusMap.assertSuccess(response, errorMapper);
    return response;
  }
}
