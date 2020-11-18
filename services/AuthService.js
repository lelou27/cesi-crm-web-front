import { API_URL } from "@/constants/contants";

import axios from "axios";
import {ROUTE_AUTH} from "@/components/Auth/authConstants";

export const logUser = async (username, password) => {
  try {
    const params = {
      username: username,
      password: password,
    };
    let login;
    try {
      login = await axios.post(`${API_URL}${ROUTE_AUTH}`, params);
    } catch (e) {
      throw new Error("Les identifiants ne sont pas corrects");
    }

    if (!(login.status === 201)) {
      throw new Error("Impossible de connecter cet utilisateur");
    }

    if (!login.data.access_token) {
      throw new Error("Impossible de connecter cet utilisateur");
    }

    return login.data.access_token;
  } catch (e) {
    throw e;
  }
};
