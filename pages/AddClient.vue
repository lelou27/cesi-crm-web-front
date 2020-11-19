<template>
  <section class="middle">
    <div class="title">
      <h1>Ajout d'un client</h1>
    </div>
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
      <div class="buttons">
      <b-button size="is-medium"
                tag="router-link"
                icon-left="plus"
                to="/listClient"
                type="is-info">
          Liste Client
        </b-button>
      <b-field class="submit-button">
        <b-input type="submit"
                 tag="router-link"
                 to="/listClient"></b-input>
      </b-field>
      </div>
    </form>
  </section>
</template>

<script>
import { API_URL, ROUTE_CREATE_CLIENT } from "@/constants/contants";

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
      event.preventDefault();
      try {
        const data_post = {
          first_name: this.name,
          mail: this.mail,
          phone: this.phone,
          address: this.address,
          postal_code: this.postalcode,
          city: this.city,
          country: this.country,
        };

        try {
          await this.$axios.post(`${API_URL}${ROUTE_CREATE_CLIENT}`, data_post);
          this.$router.push('/listClient')
        } catch (e) {
          throw e;
        }
      } catch (e) {
        this.errors.push(e.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.title {
  width: 100%;
  text-align: center;
}
.title h1 {
  font-weight: bold;
  margin: 2rem;
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
