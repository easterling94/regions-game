import { TEST_URL, DEV_URL, PROD_URL } from './project_consts';

class API {
  async getRegionsDev() {
      return await fetch(DEV_URL)
      .then(response => response.json())
  };

  async getRegionsProd() {
    return await fetch(PROD_URL)
      .then(response => response.json())
  }
}

const api = new API();

export default api;