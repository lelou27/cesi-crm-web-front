<template>
  <section class="middle">
    <div class="title">Ajout d'un client</div>
        <form action="" method="post" @submit="submitForm" class="form">
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
            Nom ou raison sociale
            <b-input
              placeholder="Nom ou raison sociale"
              v-model="name"
              type="text"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="() => (this.name = '')"
              required
              rounded
            >
            </b-input>
          </b-field>

          <b-field>
            Adresse mail
            <b-input
              placeholder="Adresse mail"
              v-model="mail"
              type="email"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="() => (this.mail = '')"
              required
              rounded
            >
            </b-input>
          </b-field>

          <b-field>
            Numéro de téléphone
            <b-input
              placeholder="Numéro de téléphone"
              v-model="phone"
              type="tel"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="() => (this.phone = '')"
              required
              rounded
            >
            </b-input>
          </b-field>

          <b-field>
            Adresse
            <b-input
              placeholder="Adresse"
              v-model="address"
              type="text"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="() => (this.address = '')"
              required
              rounded
            >
            </b-input>
          </b-field>

          <b-field>
            Code postal
            <b-input
              placeholder="Code postal"
              v-model="postalcode"
              type="text"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="() => (this.postalcode = '')"
              required
              rounded
            >
            </b-input>
          </b-field>

          <b-field>
            Ville
            <b-input
              placeholder="Ville"
              v-model="city"
              type="text"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="() => (this.city = '')"
              required
              rounded
            >
            </b-input>
          </b-field>

          <b-field>
            Pays
            <b-input
              placeholder="Pays"
              v-model="country"
              type="text"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              @icon-right-click="() => (this.country = '')"
              required
              rounded
            >
            </b-input>
          </b-field>

          <b-field class="submit-button">
            <b-input type="submit"></b-input>
          </b-field>
        </form>
  </section>
</template>

<script>
export default {
  name: "addClient",
  data() {

    return {
      name: null,
      mail: null,
      phone: null,
      address: null,
      postalcode: null,
      city: null,
      country: null,
      errors: [],
    };
  },
  methods: {
    async submitForm(event) {
      if (!this.username) {
        this.errors.push("Veuillez renseigner votre nom d'utilisateur");
      }
      console.log(this);

      event.preventDefault();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.title {
  text-align: center;
}

body {
  background-color: $white-ter;
  height: 100vh;
}

.middle {
  .field {
    width: 50%;
    margin-left: 25%;
  }

  .form {
    display: flex;

    justify-content: center;
    flex-direction: column;
  }
}

.submit-button {
  .control {
    width: 20%;
    margin-left: 80%;
  }
}

.errors {
  width: 50%;
  margin-left: 25%;
  margin-bottom: 1rem;
  padding: 0;
}
</style>
