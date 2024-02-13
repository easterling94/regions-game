import { URL } from './project_consts';

class API {
  url: string;
  constructor(url: string) {
    this.url = url;
  }
  getRegions() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }
}

const api = new API(URL);

export default api;