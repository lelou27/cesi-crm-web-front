<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
.selecFinition {
  margin-bottom: 10%;
}

.tableModele {
  margin-top: 23px;
  outline: none;

  height: auto;
  max-height: 50vh;
  overflow-y: scroll;
}

h1 {
  font-weight: bold;
}

#container {
  margin-top: 5%;
}

#tableCoupe {
  padding-top: 85px;
}

#menuFinition {
  padding-top: 85px;
}

.table-model {
  div {
    height: auto;
  }
}

.b-table .table-wrapper.has-sticky-header {
  height: auto;
}
</style>

<template>
  <div>
    <div class="errors" v-if="error !== null">
      <div class="column is-full">
        <b-notification
          key="error"
          type="is-danger m-3"
          :closable="false"
          role="alert"
        >
          {{ error }}
        </b-notification>
      </div>

      <div v-if="gammes === null && !error">
        <b-loading
          :is-full-page="false"
          v-model="loading"
          :can-cancel="true"
        ></b-loading>
      </div>
    </div>

    <div class="columns is-full" id="container">
      <div class="column is-one-third">
        <b-select
          placeholder="Selectionner une Gamme"
          size="is-medium"
          v-model="gammesSelected"
          expanded
          @input="changeGameSelected"
        >
          <option v-for="gamme in gammes" :value="gamme._id">
            {{ gamme.nomGamme }}
          </option>
        </b-select>

        <b-table
          v-if="gammesSelected && modulesToDisplay"
          :data="modulesToDisplay"
          :columns="columns1"
          class="tableModele"
          :selected.sync="selectedModele"
          narrowed
          bordered
          focusable
        ></b-table>
      </div>

      <!--      <div class="column is-one-third" id="menuFinition">-->
      <!--        <h1>Type de remplissage :</h1>-->
      <!--        <b-select-->
      <!--          placeholder="Selectionner un Modèle"-->
      <!--          size="is-medium"-->
      <!--          class="selecFinition"-->
      <!--          expanded-->
      <!--        >-->
      <!--          <option value="flint">Flint</option>-->
      <!--          <option value="silver">Silver</option>-->
      <!--        </b-select>-->
      <!--        <h1>Finition intérieure :</h1>-->
      <!--        <b-select-->
      <!--          placeholder="Selectionner un Modèle"-->
      <!--          size="is-medium"-->
      <!--          class="selecFinition"-->
      <!--          expanded-->
      <!--        >-->
      <!--          <option value="flint">Flint</option>-->
      <!--          <option value="silver">Silver</option>-->
      <!--        </b-select>-->
      <!--        <h1>Finition extérieure :</h1>-->
      <!--        <b-select-->
      <!--          placeholder="Selectionner un Modèle"-->
      <!--          size="is-medium"-->
      <!--          class="selecFinition"-->
      <!--          expanded-->
      <!--        >-->
      <!--          <option value="flint">Flint</option>-->
      <!--          <option value="silver">Silver</option>-->
      <!--        </b-select>-->
      <!--      </div>-->
      <!--      <div class="column is-one-third" id="tableCoupe">-->
      <!--        <b-table-->
      <!--          :data="data2"-->
      <!--          :columns="columns2"-->
      <!--          :selected.sync="selectedCoupe"-->
      <!--          narrowed-->
      <!--          bordered-->
      <!--          focusable-->
      <!--          :sticky-header="stickyHeaders"-->
      <!--        ></b-table>-->
      <!--      </div>-->
    </div>

    <div class="columns">
      <div class="column is-12">
        <b-button
          class="button is-primary"
          :loading="loading"
          :disabled="selectedModele === null"
          @click="addModuleToStore"
        >
          Ajouter au devis
        </b-button>
      </div>
    </div>
    <div class="columns">
      <div class="column is-12">
        <TableDevis
          :modules="this.$store.state.devis.modules"
          @removeModuleToStore="removeModuleToStore"
        />
      </div>
    </div>
    <div class="columns">
      <div class="column is-12 has-text-right pr-6">
        <b-button
          class="button is-success"
          :loading="sendDevisLoading"
          :disabled="this.$store.state.devis.modules.length === 0"
          @click="sendDevis"
        >
          Envoyer le devis
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { API_URL } from "@/constants/contants";
import TableDevis from "@/components/Devis/Table_Module";

export default {
  name: "SelecGamme",
  components: {
    TableDevis,
  },
  data() {
    return {
      gammes: null,
      loading: false,
      error: null,
      gammesSelected: null,
      modulesToDisplay: null,
      selectedModele: null,
      sendDevisLoading: false,

      data1: [
        { name: "Bronze" },
        { name: "Argent" },
        { name: "Gold" },
        { name: "Platine" },
        { name: "Diamant" },
        { name: "Diamant" },
        { name: "Diamant" },
        { name: "Diamant" },
        { name: "Diamant" },
      ],

      data2: [
        { name: "Coupe de principe 1" },
        { name: "Coupe de principe 2" },
        { name: "Coupe de principe 3" },
        { name: "Coupe de principe 4" },
        { name: "Coupe de principe 5" },
        { name: "Coupe de principe 6" },
        { name: "Coupe de principe 7" },
        { name: "Coupe de principe 8" },
        { name: "Coupe de principe 9" },
      ],

      selectedCoupe: null,
      columns1: [
        {
          field: "nomModule",
          label: "Nom module",
        },
      ],

      columns2: [
        {
          field: "name",
          label: "Coupe de principe",
        },
      ],
    };
  },
  methods: {
    changeGameSelected(event) {
      const test = this.gammes.filter((g) => {
        return g._id === this.gammesSelected;
      });
      this.modulesToDisplay = test[0].modules;
    },
    async addModuleToStore() {
      this.selectedModele.quantite = 1;
      this.$store.commit("devis/addModules", this.selectedModele);
    },
    async removeModuleToStore(moduleToRemove) {
      this.$store.commit("devis/removeModule", moduleToRemove);
    },
    async sendDevis() {
      this.sendDevisLoading = true;
      this.error = null;
      try {
        const old_date = this.$store.state.devis.dateDevis;
        this.$store.state.devis.dateDevis = this.$moment(
          this.$store.state.devis
        ).format("DD/MM/YYYY");

        await this.$axios.$post(`${API_URL}/devis`, this.$store.state.devis);

        this.$buefy.notification.open({
          message: "Devis créé",
          type: "is-success",
        });
        this.$store.state.devis.dateDevis = old_date;

        await this.resetStore();

        await this.$router.push("/crea_projet");
      } catch (e) {
        this.error = "Impossible d'envoyer le devis.";
      }
      this.sendDevisLoading = false;
    },
    async resetStore() {
      this.$store.state.nomProjet = null;
      this.$store.state.referenceProjet = null;
      this.$store.state.client = null;
      this.$store.state.dateDevis = null;
      this.$store.state.modules = [];
    },
  },
  async fetch() {
    this.loading = true;
    this.error = null;
    try {
      this.gammes = await this.$axios.$get(`${API_URL}/gamme/all`);
    } catch (e) {
      this.error = "Impossible de récupérer les gammes";
    }
    this.loading = false;
  },
};
</script>
