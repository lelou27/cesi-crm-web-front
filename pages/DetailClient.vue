<template>
  <section class="middle">
   <div hidden>{{ recup() }}</div>
    <div class="title">Détail client</div>
    <div class="columns">
      <div class="column is-7">
        <section class="form">
          <form action="" method="post" @submit="submitForm">
            <div v-if="errors.length" class="errors">
              <b-notification
                v-for="error in errors"
                aria-close-label="Close notification"
                role="alert"
                type="is-danger"
              >
                {{ error }}
              </b-notification>
            </div>

            <b-field>
              Nom ou raison sociale
              <b-input
                id="name_id"
                v-model="name"
                disabled
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Nom ou raison sociale"
                required
                rounded
                type="text"
                @icon-right-click="() => (this.name = '')"
              >
              </b-input>
            </b-field>

            <b-field>
              Adresse mail
              <b-input
                id="mail_id"
                v-model="mail"
                disabled
                icon="email"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Adresse mail"
                required
                rounded
                type="email"
                @icon-right-click="() => (this.mail = '')"
              >
              </b-input>
            </b-field>

            <b-field>
              Numéro de téléphone
              <b-input
                id="phone_id"
                v-model="phone"
                disabled
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Numéro de téléphone"
                required
                rounded
                type="tel"
                @icon-right-click="() => (this.phone = '')"
              >
              </b-input>
            </b-field>

            <b-field>
              Adresse
              <b-input
                id="address_id"
                v-model="address"
                disabled
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Adresse"
                required
                rounded
                type="text"
                @icon-right-click="() => (this.address = '')"
              >
              </b-input>
            </b-field>

            <b-field>
              Code postal
              <b-input
                id="postalcode_id"
                v-model="postalCode"
                disabled
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Code postal"
                required
                rounded
                type="text"
                @icon-right-click="() => (this.postalcode = '')"
              >
              </b-input>
            </b-field>

            <b-field>
              Ville
              <b-input
                id="city_id"
                v-model="city"
                disabled
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Ville"
                required
                rounded
                type="text"
                @icon-right-click="() => (this.city = '')"
              >
              </b-input>
            </b-field>

            <b-field>
              Pays
              <b-input
                id="country_id"
                v-model="country"
                disabled
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Pays"
                required
                rounded
                type="text"
                @icon-right-click="() => (this.country = '')"
              >
              </b-input>
            </b-field>
            <div class="columns">
              <div class="column is-4">
                <b-field>
                  <b-button id="edit_btn" v-on:click="disabled(true)"
                  >Modifier
                  </b-button
                  >
                </b-field>
              </div>
              <div class="column is-4">
                <b-field>
                  <b-button
                    id="cancel_btn"
                    style="visibility: hidden"
                    v-on:click="disabled(false)"
                  >Annuler
                  </b-button
                  >
                </b-field>
              </div>
              <div class="column is-4">
                <b-field>
                  <b-input
                    id="validate_btn"
                    style="visibility: hidden;"
                    type="submit"
                  ></b-input>
                </b-field>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="column is-5">
        <div>
          <b-table :columns="quoteColumns" :data="quoteList"></b-table>
        </div>
        <div>
          <b-table :columns="billColumns" :data="billList"></b-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getClient } from "@/services/ClientService";

export default {
  name: "DetailClient",
  data() {
    return {
      name: "test",
      mail: null,
      phone: null,
      address: null,
      postalCode: null,
      city: null,
      country: null,
      quoteList: [
        { devis: "02/05/2020" },
        { devis: "03/05/2020" },
        { devis: "04/05/2020" },
        { devis: "03/06/2020" },
        { devis: "03/07/2020" },
        { devis: "03/08/2020" }
      ],
      quoteColumns: [
        {
          field: "devis",
          label: "Devis"
        }
      ],
      billList: [
        { facture: "02/05/2020" },
        { facture: "03/05/2020" },
        { facture: "04/05/2020" },
        { facture: "03/06/2020" },
        { facture: "03/07/2020" },
        { facture: "03/08/2020" }
      ],
      billColumns: [
        {
          field: "facture",
          label: "Facture"
        }
      ],
      errors: []
    };
  },
  methods: {
    disabled(bool) {
      document.getElementById("name_id").disabled = !bool;
      document.getElementById("mail_id").disabled = !bool;
      document.getElementById("phone_id").disabled = !bool;
      document.getElementById("address_id").disabled = !bool;
      document.getElementById("postalcode_id").disabled = !bool;
      document.getElementById("city_id").disabled = !bool;
      document.getElementById("country_id").disabled = !bool;
      document.getElementById("edit_btn").style.visibility = bool
        ? "hidden"
        : "visible";
      document.getElementById("cancel_btn").style.visibility = bool
        ? "visible"
        : "hidden";
      document.getElementById("validate_btn").style.visibility = bool
        ? "visible"
        : "hidden";
    },
    async submitForm(event) {
      if (!this.username) {
        this.errors = [];
        this.errors.push("Veuillez renseigner votre nom d'utilisateur");
      }
      // this.$axios.$post()
      await console.log("ok");

      event.preventDefault();
    },
    async recup() {
      var url_id = window.location.search.substring(1).split("id=")[1];
      await Promise.resolve(getClient(url_id))
        .then(value => {
          this.name = value.first_name;
          this.mail = value.mail;
          this.phone = value.phone;
          this.address = value.address;
          this.postalCode = value.postal_code;
          this.city = value.city;
          this.country = value.country;
        });
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
tbody div {
  overflow: scroll;
  height: 20vh;
  min-width: 40vw;
}

td {
  padding: 0.5em 0;
}

.logo-madera {
  margin: 2rem;
  max-width: 20%;
}
.errors {
  width: 50%;
  margin-left: 25%;
  margin-bottom: 1rem;
  padding: 0;
}
</style>
