import { API_URL } from "@/constants/contants";

import axios from "axios";

export const logUser = async (username, password) => {
  try {
    const params = {
      username: username,
      password: password,
    };
    let login;
    try {
      login = await axios.post(`${API_URL}/auth/login`, params);
    } catch (e) {
      throw new Error("Les identifiants ne sont pas corrects");
    }

    if (!(login.status === 200)) {
      throw new Error("Impossible de conncter cet utilisateur");
    }

    if (!login.data.access_token) {
      throw new Error("Impossible de conncter cet utilisateur");
    }

    return login.data.access_token;
  } catch (e) {
    throw e;
  }
};
