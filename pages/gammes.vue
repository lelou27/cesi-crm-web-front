<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.text-center {
  text-align: center;
}

.title {
  margin-top: 5%;
}

.saisie {
  display: flex;
  //flex-direction: justify-content;
  margin-right: 2em;
  margin-top: 5%;

  .field {
    width: 50%;
  }

  .smallButtons {
    width: 2.5vw;
  }

  .modulesSelect{
    display: flex;
    justify-content: space-between;
    width: 15vw;
  }

  justify-content: space-between;
}

.boutons {
  width: 50%;
  margin-left: 25%;
  text-align: center;
  margin-top: 5%;

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
</style>
<template>
  <section class="page">
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

    <div v-if="gammes === null && !error">
      <b-loading
        :is-full-page="false"
        v-model="loading"
        :can-cancel="true"
      ></b-loading>
    </div>

    <div class="title text-center">
      <h1 class="text-center">Gammes</h1>
    </div>
    <div class="saisie" v-if="gamme">
      <b-field class="titleInputComposant">
        <b-input
          placeholder="Nom de la gamme"
          v-model="gamme.nomGamme"
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
      <div class="modulesSelect">
        <b-select
          aria-role="list"
          v-model="nomModule"
          placeholder="Modules"
          class="selectModules"
        >
          <option v-for="module in modulesList">
            {{ module.nomModule }}
          </option>
        </b-select>
        <span>
          <b-button type="is-dark" @click="insertModule"><i class="fa fa-plus"></i></b-button>
          <b-button type="is-dark" @click="removeModule"><i class="fa fa-minus"></i></b-button>
        </span>
      </div>
      <div v-if="dataModules !== null">
      <b-table
        class="tableModules"
        :data="dataModules"
        :columns="columnsModules"
        :selected.sync="selected2"
      focusable></b-table>
    </div>
    </div>

    <div class="boutons">
      <b-button type="is-success" @click="createGamme"
        ><i class="fa fa-check"></i
      ></b-button>
      <b-button type="is-danger" @click="deleteGamme"><i class="fa fa-minus-circle"></i></b-button>
    </div>
    <div v-if="gammes">
      <b-table class="tableGammes" :data="gammes" :columns="columns" :selected.sync="selected" focusable></b-table>
    </div>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";

export default {
  data() {
    return {
      gammes: null,
      selected: null,
      modulesList: null,
      dataModules: [],
      nomModule: null,
      selected2: null,
      columns: [
        {
          field: "nomGamme",
          label: "Nom de la gamme",
        },
      ],
      columnsModules: [
        {
          field: "nomModule",
          label: "Nom du module",
        },
      ],
      gamme: {
        nomGamme: "",
      },
      module: {
        nomModule: "",
      },
      formError: null,
      loading: false,
      error: null,
      name: null,
    };
  },

  methods: {
    async createGamme(event) {
      event.preventDefault();

      this.formError = null;
      if (!this.gamme.nomGamme) {
        this.formError = "Tout les champs sont requis";
      }

      try {
        await this.$axios.$post(`${API_URL}/gamme`, this.gamme);
        await this.$router.push("gammes");
        this.gammes.push(this.gamme);
      } catch (e) {
        this.formError = e.message;
      }
    },
    deleteGamme(){
      const deleteGammeApi = async () => {
        try {
            console.log(this.selected._id)
            await this.$axios.$delete(`${API_URL}/gamme/${this.selected._id}`);
            this.gammes = await this.$axios.$get(`${API_URL}/gamme/all`);
        } catch (e) {
          return new Error("Impossible de supprimer la gamme.");
        }
      };
        this.$buefy.dialog.confirm({
          message: 'Voulez-vous supprimer cette gamme?',
          onConfirm: () => {
            try {
              this.$buefy.toast.open({
                message: "Suppression effectuée",
                type: "is-success",
              });
              deleteGammeApi();
            }
            catch(e) {
              this.$buefy.toast.open({
                message: e.message,
                type: "is-danger",
              });
            }
          }
        })
    },
    insertModule(){
      const moduleAdd = { nomModule: this.nomModule }
      this.dataModules.push(moduleAdd)
    },
    removeModule(){
      const moduleAdd = { nomModule: this.selected2.nomModule}
      this.dataModules = this.dataModules.filter((data) => data.nomModule !== this.selected2.nomModule)
    }
  },

  async fetch() {
    this.loading = true;
    try {
      this.gammes = await this.$axios.$get(`${API_URL}/gamme/all`);
      this.modulesList = await this.$axios.$get(`${API_URL}/module/all`)
    } catch (e) {
      this.error = e;
    }
  },
  
};
</script>
