<template>
  <section class="middle">
    <img
      src="~assets/images/logoMadera.png"
      alt="Logo de l'entreprise Madera"
      class="logo-madera"
    />
    <div class="title"> Ajout d'un client</div>
    <div class="columns">
      <div class="column is-7">
        <section class="form">
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
              Nom ou raison sociale
              <b-input
                placeholder="Nom ou raison sociale"
                v-model="name"
                type="text"
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                @icon-right-click="() => this.name = ''"
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
                @icon-right-click="() => this.mail = ''"
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
                @icon-right-click="() => this.phone = ''"
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
                @icon-right-click="() => this.address = ''"
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
                @icon-right-click="() => this.postalcode = ''"
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
                @icon-right-click="() => this.city = ''"
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
                @icon-right-click="() => this.country = ''"
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
      </div>
      <div class="column is-5">
        <table border="1">
          <thead>
          <tr>
            <th>Client</th>
            <th>Ville</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td colspan="2">
              <div class="scrollit">
                <table width="100%">
                  <tr>
                    <td>Jean</td>
                    <td>Paris</td>
                  </tr>
                  <tr>
                    <td>Tonton</td>
                    <td>Berlin</td>
                  </tr>
                  <tr>
                    <td>César</td>
                    <td>Rome</td>
                  </tr>
                  <tr>
                    <td>Ragnar</td>
                    <td>Cattégat</td>
                  </tr>
                  <tr>
                    <td>Tyrion</td>
                    <td>King's Landing</td>
                  </tr>
                  <tr>
                    <td>Hitman</td>
                    <td>Moscou</td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "CaddClient",
  data() {
    return {
      name: null,
      mail: null,
      phone: null,
      address: null,
      postalcode: null,
      city: null,
      country: null,
      errors: []
    };
  },
  methods: {
    clearUsername() {
      console.log(this);
      this.postalcode = "";
    },
    async submitForm(event) {
      if (!this.username) {
        this.errors.push("Veuillez renseigner votre nom d'utilisateur");
      }
      // this.$axios.$post()
      await console.log("ok");

      event.preventDefault();
    }
  }
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

tbody div {
  overflow: scroll;
  height: 50vh;
  min-width: 40vw;
}

td {
  padding: 1em 0;
  text-align: center !important;
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



