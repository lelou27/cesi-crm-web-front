<template>
  <section class="middle">
    <div class="title">
      <h1>Détail client</h1>
    </div>
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
                :disabled="disabled"
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
                :disabled="disabled"
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
                :disabled="disabled"
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
                :disabled="disabled"
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
                :disabled="disabled"
                icon="account"
                icon-right="close-circle"
                icon-right-clickable
                placeholder="Code postal"
                required
                rounded
                type="text"
                @icon-right-click="() => (this.postalCode = '')"
              >
              </b-input>
            </b-field>

            <b-field>
              Ville
              <b-input
                id="city_id"
                v-model="city"
                :disabled="disabled"
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
                :disabled="disabled"
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
              <div class="buttons">
                <div class="column is-4">
                  <b-button
                    id="edit_btn"
                    @click="disabled_fields"
                    :disabled="!disabled"
                  >
                    Modifier
                  </b-button>
                </div>
                <div class="column is-4">
                  <b-button
                    id="cancel_btn"
                    :disabled="disabled"
                    @click="disabled_fields"
                  >
                    Annuler
                  </b-button>
                </div>
                <div class="column is-4">
                  <b-input
                    id="validate_btn"
                    :disabled="disabled"
                    type="submit"
                  ></b-input>
                </div>
              </div>
            </div>
            <div class="columns">
              <div class="buttons">
                <div class="column is-6">
                  <b-button tag="router-link" to="/listClient">
                    Liste Client
                  </b-button>
                </div>
                <div class="column is-6">
                  <b-button @click="deleteUser"> Supprimer Client </b-button>
                </div>
              </div>
            </div>
          </form>
        </section>
      </div>
      <div class="column is-5">
        <div v-if="devis && devis.length > 0">
          <b-table
            :columns="devisColumns"
            :data="devis"
            checkable
            :is-row-checkable="(row) => haveNotFacture(row)"
            :checked-rows.sync="checkedDevis"
          ></b-table>
          <b-button
            class="button is-primary mt-2"
            :loading="loadingCreateFacture === true"
            :disabled="checkedDevis.length === 0 || loadingCreateFacture"
            @click="generateFactures"
          >
            Générer les factures
          </b-button>
        </div>
        <div v-if="factures && factures.length > 0">
          <b-table
            :columns="facturesColumns"
            :data="factures"
            :selected.sync="selectedRowFacture"
            @click="downloadPdf"
          ></b-table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { API_URL, ROUTE_GET_CLIENT } from "@/constants/contants";

export default {
  name: "DetailClient",
  data() {
    return {
      name: "test",
      mail: null,
      phone: null,
      address: null,
      postalCode: null,
      disabled: true,
      city: null,
      country: null,
      factures: null,
      devis: null,
      checkedDevis: [],
      selectedRowFacture: {},
      loadingCreateFacture: false,
      facturesColumns: [
        {
          field: "createdAt",
          label: "Date facture",
          width: "100%",
          centered: true,
        },
      ],
      devisColumns: [
        {
          field: "createdAt",
          label: "Date devis",
          width: "50%",
          centered: true,
        },
        {
          field: "updatedAt",
          label: "Date de dernière modification",
          width: "50%",
          centered: true,
        },
      ],
      errors: [],
    };
  },
  //méthode qui premet de récupérer un client durant le chargement de la page
  async fetch() {
    try {
      const client = await this.$axios.$get(
        `${API_URL}${ROUTE_GET_CLIENT}/${this.$route.query.id}`
      );
      this.name = client.first_name;
      this.mail = client.mail;
      this.phone = client.phone;
      this.address = client.address;
      this.postalCode = client.postal_code;
      this.city = client.city;
      this.country = client.country;

      this.factures = await this.$axios.$get(
        `${API_URL}/facture/all/${client._id}`
      );
      if (this.factures.length > 0) {
        this.factures.forEach(
          (f) => (f.createdAt = this.$moment(f.createdAt).format("DD/MM/YYYY"))
        );
        this.selectedRowFacture = this.factures[0];
      }

      this.devis = await this.$axios.$get(`${API_URL}/devis/all/${client._id}`);

      if (this.devis.length > 0) {
        this.devis.forEach((d) => {
          d.createdAt = this.$moment(d.createdAt).format("DD/MM/YYYY");
          d.updatedAt = this.$moment(d.updatedAt).format("DD/MM/YYYY");
        });
      }
    } catch (e) {
      throw e;
    }
  },
  methods: {
    //méthode qui permet de supprimer un client avec une modal de confirmation et revoie vers liste devis
    deleteUser() {
      const deleteClientApi = async () => {
        try {
          await this.$axios.$delete(
            `${API_URL}${ROUTE_GET_CLIENT}/${this.$route.query.id}`
          );
        } catch (e) {
          return new Error("Impossible de supprimer l'utilsateur.");
        }
      };
      this.$buefy.dialog.confirm({
        message: `Voulez-vous vraiment supprimer le client ?`,
        onConfirm: () => {
          try {
            this.$buefy.toast.open({
              message: "Suppression effectuée",
              type: "is-success",
            });
            deleteClientApi();
            this.$router.push("/listClient");
          } catch (e) {
            this.$buefy.toast.open({
              message: e.message,
              type: "is-danger",
            });
          }
        },
      });
    },
    //méthode qui permet de désactiver les champs et qui remet à jour les champs
    async disabled_fields() {
      this.disabled = !this.disabled;
      try {
        const client = await this.$axios.$get(
          `${API_URL}${ROUTE_GET_CLIENT}/${this.$route.query.id}`
        );
        this.name = client.first_name;
        this.mail = client.mail;
        this.phone = client.phone;
        this.address = client.address;
        this.postalCode = client.postal_code;
        this.city = client.city;
        this.country = client.country;
      } catch (e) {
        throw e;
      }
    },
    //méthode qui permet de mettre à jour un client et revoie vers liste devis
    async submitForm(event) {
      event.preventDefault();

      try {
        const data_post = {
          first_name: this.name,
          mail: this.mail,
          phone: this.phone,
          address: this.address,
          postal_code: this.postalCode,
          city: this.city,
          country: this.country,
        };
        await this.$axios.$put(
          `${API_URL}${ROUTE_GET_CLIENT}/${this.$route.query.id}`,
          data_post
        );
        this.$router.push("/listClient");
      } catch (e) {
        this.errors.push(e.message);
      }
    },
    haveNotFacture(row) {
      let enabled = true;
      if (this.factures && this.factures.length > 0) {
        this.factures.forEach((f) => {
          if (f.devis === row._id) {
            enabled = false;
          }
        });
      }

      return enabled;
    },
    downloadPdf() {
      if (this.selectedRowFacture.filename) {
        this.$axios({
          url: `${API_URL}/facture/download/${this.selectedRowFacture.filename}`,
          method: "GET",
          responseType: "blob", // important
        }).then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute(
            "download",
            `factureClient_${
              this.selectedRowFacture.client.first_name
            }_${this.$moment(
              this.selectedRowFacture.createdAt,
              "YYYY-MM-DD"
            ).format("DD_MM_YYYY")}.pdf`
          );
          document.body.appendChild(link);
          link.click();
        });
      }
    },
    async generateFactures() {
      this.loadingCreateFacture = true;
      await this.checkedDevis.forEach(async (d) => {
        await this.$axios.$get(`${API_URL}/facture/generateFacture/${d._id}`);
      });
      
      this.loadingCreateFacture = false;
      this.factures = await this.$axios.$get(
        `${API_URL}/facture/all/${this.$route.query.id}`
      );
      if (this.factures.length > 0) {
        this.factures.forEach(
          (f) => (f.createdAt = this.$moment(f.createdAt).format("DD/MM/YYYY"))
        );
        this.selectedRowFacture = this.factures[0];
      }

      this.loadingCreateFacture = false;
      this.factures = await this.$axios.$get(
        `${API_URL}/facture/all/${this.$route.query.id}`
      );
      if (this.factures.length > 0) {
        this.factures.forEach(
          (f) => (f.createdAt = this.$moment(f.createdAt).format("DD/MM/YYYY"))
        );
        this.selectedRowFacture = this.factures[0];
      }
      this.checkedDevis = [];
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

.width100 {
  width: 100%;
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
