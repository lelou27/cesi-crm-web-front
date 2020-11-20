<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.text-center {
  text-align: center;
}

.tableComposants{
  height: 200px;
}

.title {
  margin-top: 5%;
}

.titleInputModule{
  width: 100%;
}

.saisie {
  margin-right: 2em;
  margin-top: 2%;
}

.boutons {
  width: 50%;
  margin-left: 25%;
  text-align: center;
  margin-top: 2%;

  .button {
    width: 10%;
    height: 8vh;
    width: 4vw;
    height: 8vh;
    font-size: 1.5rem;
    color: #fff;

    &:hover {
      background-color: $grey-dark;
    }
  }
}

.tableGammes {
  margin-top: 5%;
}

.menuComp{
  margin-top: 5%;
}
</style>
<template>
  <section class="page">
    <div v-if="modules === null && !error">
      <b-loading
        :is-full-page="false"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
    </div>
    <div class="title text-center">
      <h1 class="text-center">Modules</h1>
    </div>
    <div class="columns">
      <div class="column is-half">
        <div class="saisie">
          <b-field class="titleInputModule" v-if="module">
            <b-input
              placeholder="Nom du module"
              v-model="module.nomModule"
              type="text"
              icon="account"
              icon-right="close-circle"
              icon-right-clickable
              icon-right-click="close-circle"
              required
              rounded
            >
            </b-input>
          </b-field>
        </div>

        <div class="menuComp">
          <b-field>
            <b-select
              placeholder="Gamme"
              size="is-default"
              v-model="module.nomGamme"
              expanded>
              <option v-for="gamme in dataGammes">{{gamme.nomGamme}}</option>
            </b-select>
          </b-field>
          <b-field>
            <b-select
              placeholder="Composant"
              size="is-default"
              v-model="composantSelected"
              required
              expanded>
              <option v-for="item in dataComposants" :value="item._id">{{item.nomComposant}}</option>
            </b-select>
          </b-field>
          <span>
            <b-button type="is-dark" @click="addComposant"><i class="fa fa-plus"></i></b-button>
            <b-button type="is-dark"><i class="fa fa-minus"></i></b-button>
          </span>
        </div>
      </div>
      <div class="column is-half">
        <b-table
          class="tableComposants"
          :data="module.composants"
          :columns="columnsComposants"
        ></b-table>
      </div>
    </div>
    <div class="boutons">
      <b-button type="is-success" @click="createModule"><i class="fa fa-check"></i></b-button>
      <b-button type="is-warning"> <i class="fa fa-edit"></i> </b-button>
      <b-button type="is-danger"><i class="fa fa-minus-circle"></i></b-button>
    </div>
    <b-table class="tableGammes" :data="modules" :columns="columnsModule"></b-table>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";
export default {
  data() {
    return {
      formError: null,
      loading: false,
      error: null,
      modules: [],
      composantSelected: null,
      gammeSelected: null,
      module: {
        nomModule: "",
        nomGamme: "",
        composants: []
      },
      columnsModule: [
        {
          field: "nomModule",
          label: "Nom du module",
        },
      ],
      dataGammes: [],
      dataComposants: [],
      columnsComposants: [
        {
          field: "nomComposant",
          label: "Nom du composant",
        },
      ],
    };
  },
  methods: {
    async createModule(event) {
      event.preventDefault();

      this.formError = null;
      if (!this.module.nomModule) {
        this.formError = "Tout les champs sont requis";
      }

      try {
        await this.$axios.$post(`${API_URL}/module`, this.module);
        this.modules.push(this.module);
      } catch (e) {
        this.formError = e.message;
      }
    },

    addComposant(){
      console.log(this.composantSelected)
      const composant = this.dataComposants.filter((comp) => this.composantSelected === comp._id)[0]
      console.log(composant)
      this.module.composants.push(composant)
    }
  },

  async fetch() {
    try {
      this.loading = true;
      this.modules = await this.$axios.$get(`${API_URL}/module/all`);
      this.dataComposants = await this.$axios.$get(`${API_URL}/composant`);
      this.dataGammes = await this.$axios.$get(`${API_URL}/gamme/all`);
    } catch (e) {
      this.error = e;
    }
  }
};
</script>
