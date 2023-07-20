import axios from "axios";

const BASE_URL = process.env.BASE_URL;
export const createAPIEndPoint = (endpoint) => {
  console.log(endpoint, "endpoint check");
  let url = BASE_URL + endpoint + "/";
  return {
    fetchAll: () => axios.get(url),
    create: (newRecord) => axios.post(url, newRecord),
    fetchById: (id) => axios.get(url + id),
    delete: (id) => axios.delete(url + id),
    fetchFiltered: (params) => axios.get(url, params),
    update: (id, updatedRecord) => axios.patch(url + id, updatedRecord),
  };
};
