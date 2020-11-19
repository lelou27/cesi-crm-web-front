<style lang="scss">
aside.section {
  padding-right: 0.3rem;
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
import Authentication from "~/components/Auth/Authentification";
export default {
  components: {
    Authentication,
  },

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
          title: "Accueil",
          icon: "home",
          to: { name: "index" },
        },
        {
          title: "Menu des produits",
          icon: "lightbulb",
          to: { name: "menuProduits" },
        },
        {
          title: "Gammes",
          icon: "window-restore",
          to: { name: "gammes" },
        },
        {
          title: "Composants",
          icon: "tools",
          to: { name: "gestionComposants" },
        },
        {
          title: "Modules",
          icon: "border-all",
          to: { name: "modules" },
        },
        {
          title: "Devis",
          icon: "file-document-edit-outline",
          to: { name: "crea_projet" },
        },
        {
          title: "Utilisateurs",
          icon: "account",
          to: { name: "users" },
        },
        {
          title: "Client",
          icon: "account-cash",
          to: { name: "ListClient" },
        },
      ],
    };
  },
};
</script>
