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
            Léandre
          </nuxt-link>
        </p>
        <nuxt-link to="/" exact-active-class="is-active" class="navbar-icon">
          <b-icon icon="account" size="is-medium"> </b-icon>
        </nuxt-link>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
