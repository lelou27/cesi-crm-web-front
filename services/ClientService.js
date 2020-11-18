import { API_URL, ROUTE_GET_CLIENT } from "@/constants/contants";

import axios from "axios";

export const getClient = async (id) => {
  try {

    let client;
    try {
      client = await axios.get(`${API_URL}${ROUTE_GET_CLIENT}/` + id);
    } catch (e) {
      throw new Error("Les identifiants ne sont pas corrects");
    }
    if (client.data == []) {
      document.location.href = "http://localhost:3000";
    }
    return client.data;
  } catch (e) {
    throw e;
  }
};
