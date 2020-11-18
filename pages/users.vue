<style lang="scss" scoped>
.title {
  width: 100%;
  text-align: center;

  h1 {
    font-weight: bold;
    margin: 2rem;
  }
}

.text-center {
  text-align: center;
  margin: 1rem;
}
</style>

<template>
  <section class="users">
    <div class="title">
      <h1>Utilisateurs</h1>
    </div>

    <div class="users">
      <div v-if="users === null && !error">
        <b-loading
          :is-full-page="false"
          v-model="isLoading"
          :can-cancel="true"
        ></b-loading>
      </div>
      <div v-else-if="error">
        <b-notification
          type="is-danger"
          :closable="false"
          class="text-center"
          role="alert">
          {{ error.message }}
        </b-notification>
      </div>
      <div v-else>
        <UsersTable :users="users" />
      </div>
    </div>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";

export default {
  data() {
    return {
      users: null,
      isLoading: false ,
      showModal: false,
      formProps: {
        email: "evan@you.com",
        password: "testing",
      },
      selected: null,
      error: null
    };
  },
  async fetch() {
    this.isLoading = true;
    if (this.users === null) {
      try {
        this.users = await this.$axios.$get(`${API_URL}/user/all`);
      } catch (e) {
        e.message = "Impossible de récupérer les données";
        this.error = e;
      }
    }
    this.isLoading = false;
  },
};
</script>
