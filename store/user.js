import axios from "axios";
import { API_URL } from "@/constants/contants";

export const state = () => ({ username: null, access_token: null });

export const mutations = {
  addUser(state, user) {
    state.username = user.username;
    state.access_token = user.access_token
  },
  remove(state, username) {
    if (state.username === username) {
      state.username = "";
      state.access_token = "";
    }
  },
};
