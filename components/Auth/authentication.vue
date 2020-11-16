<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

body {
  background-color: $white-ter;
  height: 100vh;
}
.auth-middle {
  .field {
    width: 50%;
    margin-left: 25%;
  }

  .auth-form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
}

.logo-madera {
  margin: 2rem;
  max-width: 20%;
}

.submit-button {
  .control {
    width: 15%;
    margin-left: 85%;
  }
}

.errors {
  width: 50%;
  margin-left: 25%;
  margin-bottom: 1rem;
  padding: 0;
}
</style>

<template>
  <section class="auth-middle">
    <img
      src="~assets/images/logoMadera.png"
      alt="Logo de l'entreprise Madera"
      class="logo-madera"
    />
    <section class="auth-form">
      <form action="" method="post" @submit="submitForm">
        <div class="errors" v-if="errors.length">
          <b-notification
            v-for="error in errors"
            type="is-danger"
            aria-close-label="Close notification"
            role="alert"
          >
            {{ error }}
          </b-notification>
        </div>

        <b-field>
          <b-input
            placeholder="Nom d'utilisateur"
            v-model="username"
            type="text"
            icon="account"
            icon-right="close-circle"
            icon-right-clickable
            @icon-right-click="clearUsername"
            required
            rounded
          >
          </b-input>
        </b-field>

        <b-field>
          <b-input
            placeholder="Mot de passe"
            v-model="password"
            icon="lock-question"
            type="password"
            value="iwantmytreasure"
            password-reveal
            required
            rounded
          >
          </b-input>
        </b-field>

        <b-field class="submit-button">
          <b-input type="submit"> </b-input>
        </b-field>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  name: "Authentication",
  data() {
    return {
      username: null,
      password: null,
      errors: [],
    };
  },
  methods: {
    clearUsername() {
      this.username = "";
    },
    async submitForm(event) {
      if (!this.username) {
        this.errors.push("Veuillez renseigner votre nom d'utilisateur");
      }

      if (!this.password) {
        this.errors.push("Veuillez renseigner votre mot de passe");
      }

      // this.$axios.$post()
      await console.log("ok");

      event.preventDefault();
    },
  },
};
</script>
