<style lang="scss" scoped></style>

<template>
  <div>
    <div class="errors" v-if="error !== null">
      <b-notification
        key="error"
        type="is-danger m-3"
        :closable="false"
        role="alert"
      >
        {{ error.message }}
      </b-notification>
    </div>

    <div v-if="user === null && !error">
      <b-loading
        :is-full-page="false"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
    </div>

    <section v-if="user !== null" class="columns mt-5">
      <div class="column is-8 w-100 user-description">
        <p class="has-text-centered">
          Bonjour
          <span class="has-text-weight-bold"
            >{{ user.prenom }} {{ user.nom }}</span
          >.
        </p>
        <p class="mt-5 has-text-justified">
          Votre nom d'utilisateur est
          <span class="has-text-weight-bold">{{ user.username }}</span>
        </p>
        <p class="mt-5 has-text-justified">
          Votre email est
          <span class="has-text-weight-bold">{{ user.email }}</span>
        </p>

        <p class="mt-5 has-text-justified">
          Vous êtes inscrit depuis le :
          <span class="tag is-success">
            {{ new Date(user.createdAt).toLocaleDateString() }}
          </span>
        </p>

        <p class="mt-5 has-text-justified">
          La dernière mise à jour de votre profil était le :
          <span class="tag is-warning">
            {{ new Date(user.updatedAt).toLocaleDateString() }}
          </span>
        </p>
      </div>
      <div class="column is-2 is-offset-1 has-text-centered">
        <b-icon icon="account" size="is-large"></b-icon>
      </div>
    </section>

    <div class="columns">
      <div class="column is-12 has-text-centered mt-5">
        <nuxt-link to="/" exact-active-class="is-active" class="navbar-icon">
          <button class="button is-dark">
            <b-icon icon="home"></b-icon>
            <span>Retour à l'accueil</span>
          </button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import { API_URL } from "@/constants/contants";

export default {
  name: "profile",
  data() {
    return {
      error: null,
      loading: null,
      user: null,
    };
  },
  async fetch() {
    this.loading = true;
    try {
      this.user = await this.$axios.$get(
        `${API_URL}/user/${this.$store.state.user.username}`
      );
    } catch (e) {
      this.error = e;
    }
  },
};
</script>
