import axios from "axios";

export const createAPIEndPoint = (endpoint) => {
  const BASE_URL = "https://api.everlybeauty.ca/api";
  console.log(BASE_URL, "baseUrl");

  let url = BASE_URL + "/" + endpoint + "/";
  console.log(url, "endpoint check");
  return {
    fetchAll: () => axios.get(url),
    create: (newRecord) => axios.post(url, newRecord),
    fetchById: (id) => axios.get(url + id),
    delete: (id) => axios.delete(url + id),
    fetchFiltered: (params) => axios.get(url, params),
    update: (id, updatedRecord) => axios.patch(url + id, updatedRecord),
  };
};
