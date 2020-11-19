<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
.navbar-icon {
  color: $white;
  padding: 0.2rem 0.5rem;

  &:hover {
    color: $grey-light;
  }
}
</style>

<template>
  <b-navbar class="is-dark">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="~assets/images/logoMadera.png"
          alt="Logo Madera"
          class="img-logo-madera"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#"> Home </b-navbar-item>
      <b-navbar-item href="#"> Documentation </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#"> About </b-navbar-item>
        <b-navbar-item href="#"> Contact </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <p>
          Bonjour,
          <nuxt-link to="/" exact-active-class="is-active" class="navbar-icon">
            {{
              this.$store.state.user.username.charAt(0).toUpperCase() +
              this.$store.state.user.username.slice(1)
            }}
          </nuxt-link>
        </p>
        <nuxt-link to="/profile" exact-active-class="is-active" class="navbar-icon">
          <b-tooltip label="Votre compte" position="is-left" type="is-light">
            <b-icon icon="account" size="is-medium"></b-icon>
          </b-tooltip>
        </nuxt-link>
        <span class="navbar-icon" @click="logout">
          <b-tooltip label="Se déconnecter" position="is-left" type="is-light">
            <b-icon icon="power-standby" size="is-medium"></b-icon>
          </b-tooltip>
        </span>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation",
  methods: {
    logout() {
      try {
        this.$store.commit("user/remove", {
          user: this.$store.state.user,
        });
        this.$cookies.remove("user-params");
      } catch (e) {
        throw new Error("Impossible de se déconnecter");
      }
    },
  },
};
</script>
