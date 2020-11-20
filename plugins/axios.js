import { ROUTE_AUTH } from "@/components/Auth/authConstants";
export default function ({ $axios, store, redirect }) {
  $axios.onRequest((config) => {
    if (!config.url.includes(ROUTE_AUTH)) {
      if (store.state.user.access_token) {
        $axios.setToken(store.state.user.access_token, "Bearer");
      } else if (window.$nuxt.$cookies.get("user-params")) {
        $axios.setToken(
          window.$nuxt.$cookies.get("user-params").access_token,
          "Bearer"
        );
      }
    }
  });
  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 401) {
      window.$nuxt.$cookies.remove("user-params");
      store.commit("user/remove", store.state.user.username);
    }
  });
}
