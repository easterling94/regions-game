import { DEV_URL, PROD_URL } from './project_consts';

class API {
  async testIfBackendAvailable() {
    try {
      return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.ok)
    }
    catch {

    }
  };
  async getRegions() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}

const api = new API();

export default api;