<style>
.navbar-item {
  padding: 0.3rem 0.5rem;
}
</style>

<template>
  <div v-if="user.username">
    <Navigation />

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
  <div v-else>
    <Authentication />
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      if (
        !this.$store.state.user.username &&
        this.$cookies.get("user-params")
      ) {
        this.$store.commit("user/addUser", {
          username: this.$cookies.get("user-params").username,
          access_token: this.$cookies.get("user-params").access_token,
        });
      }
      return this.$store.state.user;
    },
  },
  data() {
    return {
      items: [
        {
          title: "Home",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Inspire",
          icon: "lightbulb",
          to: { name: "inspire" },
        },
        {
          title: "Ajouter un client",
          icon: "plus",
          to: { name: "AddClient" },
        },
      ],
    };
  },
};
</script>
