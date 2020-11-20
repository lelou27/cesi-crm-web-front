export const state = () => ({ username: null, access_token: null, role: null });

export const mutations = {
  async addUser(state, user) {
    state.username = user.username;
    state.access_token = user.access_token;
    state.role = user.role;
  },
  remove(state, user) {
    console.log(user);
    if (state.username === user.user.username) {
      state.username = "";
      state.access_token = "";
      state.role = "";
    }
  },
};
