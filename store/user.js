import axios from "axios";
import { API_URL } from "@/constants/contants";

export const state = () => ({ username: null, access_token: null, role: null });

export const mutations = {
  async addUser(state, user) {
    state.username = user.username;
    state.access_token = user.access_token;
    state.role = user.role;
  },
  remove(state, username) {
    if (state.username === username) {
      state.username = "";
      state.access_token = "";
    }
  },
};
