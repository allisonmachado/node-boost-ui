/**
 * Should expose only static pure functions.
 */
export class Environment {
  static getScheme() {
    return process.env.REACT_APP_SCHEME;
  }

  static getUserInfo() {
    return process.env.REACT_APP_USERINFO;
  }
  
  static getHost() {
    return process.env.REACT_APP_HOST;
  }

  static getPort() {
    return process.env.REACT_APP_PORT;
  }

  static getBackendApi() {
    let url = `${this.getScheme()}`;
    if (this.getUserInfo()) {
      url += `${this.getUserInfo()}@`;
    }
    url += `${this.getHost()}`;
    if (this.getPort()) {
      url += `:${this.getPort()}`;
    }
    return url;
  }
}
