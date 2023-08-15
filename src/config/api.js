import axios from "axios";
import { endPoints } from "./endpoints";

export const BASE_URL = "http://192.168.0.145:80/api";
export const createAPIEndPoint = (
  endpoint,
  isPopulated = false,
  populateArgument = "*",
  id = null
) => {
  // const BASE_URL = "https://api.everlybeauty.ca/api";
  // const BASE_URL = "https://8246-103-125-71-8.ngrok-free.app/api";

  let token =
    typeof localStorage !== "undefined" && localStorage.getItem("Token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  let url = BASE_URL + "/" + endpoint + "/";
  // let authUrl = BASE_URL + '/auth/' + endpoint + '/'

  return {
    forgotPassword: (email) =>
      axios.post(`${BASE_URL}/auth/forgot-password`, { email }),

    resetPassword: (code, password, passwordConfirmation) =>
      axios.post(`${BASE_URL}/auth/reset-password`, {
        code,
        password,
        passwordConfirmation,
      }),

    fetchAllWithToken: () =>
      axios.get(
        isPopulated ? `${url}?populate=${populateArgument}` : url,
        token !== null && {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      ),
    fetchAll: () =>
      axios.get(isPopulated ? `${url}?populate=${populateArgument}` : url),
    create: (newRecord) => axios.post(url, newRecord),
    createWithToken: (newRecord) =>
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
      axios.put(
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
