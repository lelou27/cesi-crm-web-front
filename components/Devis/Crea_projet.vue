<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.DivButton {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.button {
  margin-top: 3%;
  width: 50%;
}

.form-devis {
  width: 60%;
  margin-left: 19%;
}
</style>

<template>
  <section>
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

    <div v-if="clients === null && !error">
      <b-loading
        :is-full-page="false"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
    </div>

    <div v-if="clients !== null && error === null">
      <div class="form-devis">
        <div class="errors" v-if="formError !== null">
          <b-notification
            key="error"
            type="is-danger m-3"
            :closable="false"
            role="alert"
          >
            {{ formError }}
          </b-notification>
        </div>

        <b-field label="Nom du projet" label-position="on-border" class="mt-6">
          <b-input
            type="text"
            rounded
            v-model="devis.nomProjet"
            required
          ></b-input>
        </b-field>

        <b-field
          label="Référence du projet"
          label-position="on-border"
          class="mt-5"
        >
          <b-input
            type="text"
            rounded
            v-model="devis.referenceProjet"
            required
          ></b-input>
        </b-field>

        <b-field
          label="Client"
          class="mt-5"
          required
          label-position="on-border"
        >
          <b-select
            placeholder="Selectionner un client"
            rounded
            expanded
            v-model="devis.client"
            required
            horizontal
          >
            <option v-for="cli in clients" :value="cli._id" :key="cli._id">
              {{ cli.first_name }}
            </option>
          </b-select>
        </b-field>

        <b-field label="Date " class="mt-5" label-position="on-border">
          <b-datepicker
            placeholder="Selectionner une Date"
            rounded
            v-model="devis.dateSelected"
          >
          </b-datepicker>
        </b-field>
      </div>

      <div class="DivButton">
        <b-button
          type="is-dark"
          size="is-large"
          class="button"
          @click="createDevis"
        >
          Valider
        </b-button>
      </div>
    </div>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";

export default {
  name: "CreaProjet",

  data() {
    const today = new Date();

    return {
      clients: null,
      minDate: new Date(
        today.getFullYear() - 80,
        today.getMonth(),
        today.getDate()
      ),
      maxDate: new Date(
        today.getFullYear() + 30,
        today.getMonth(),
        today.getDate()
      ),
      devis: {
        nomProjet: "",
        referenceProjet: "",
        client: null,
        dateDevis: null,
        dateSelected: null,
      },
      formError: null,
      loading: false,
      error: null,
    };
  },
  methods: {
    async createDevis(event) {
      event.preventDefault();
      this.formError = null;
      if (
        !this.devis.client ||
        (!this.devis.dateDevis && !this.devis.nomProjet) ||
        !this.devis.referenceProjet
      ) {
        this.formError = "Tout les champs sont requis";
      }

      const dateFormated = this.$moment(this.devis.dateSelected).format(
        "DD/MM/YYYY"
      );

      this.devis.dateDevis = dateFormated;
      try {
        await this.$axios.$post(`${API_URL}/devis`, this.devis);
        await this.$router.push("selec_gamme");
      } catch (e) {
        this.formError = e.message;
      }
    },
  },
  async fetch() {
    this.loading = true;
    try {
      this.clients = await this.$axios.$get(`${API_URL}/client`);
    } catch (e) {
      this.error = e;
    }
  },
};
</script>
