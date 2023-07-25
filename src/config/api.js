import axios from "axios";

export const createAPIEndPoint = (endpoint) => {
  // const BASE_URL = "https://api.everlybeauty.ca/api";
  const BASE_URL = "https://8246-103-125-71-8.ngrok-free.app/api";
  let token = localStorage.getItem("Token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  console.log(BASE_URL, "baseUrl");

  let url = BASE_URL + "/" + endpoint + "/";
  console.log(url, "endpoint check");

  return {
    fetchAll: () =>
      axios.get(
        url,
        token !== null && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    create: (newRecord) =>
      axios.post(
        url,
        newRecord,
        token !== null && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    fetchById: (id) =>
      axios.get(
        url + id,
        token !== null && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    delete: (id) =>
      axios.delete(
        url + id,
        token !== null && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    fetchFiltered: (params) =>
      axios.get(
        url,
        params,
        token !== null && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    update: (id, updatedRecord) =>
      axios.patch(
        url + id,
        updatedRecord,
        token !== null && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
  };
};
