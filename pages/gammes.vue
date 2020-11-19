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
      <span>
        <b-dropdown aria-role="list">
          <button class="button is-dark" slot="trigger" slot-scope="{ active }">
            <span class="titleCombo">Module</span>
            <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
          </button>
          <b-dropdown-item aria-role="listitem">Section 1</b-dropdown-item>
        </b-dropdown>

        <b-button type="is-dark"><i class="fa fa-plus"></i></b-button>
        <b-button type="is-dark"><i class="fa fa-minus"></i></b-button>
      </span>
      <b-table
        class="tableModules"
        :data="dataModules"
        :columns="columnsModules"
      ></b-table>
    </div>

    <div class="boutons">
      <b-button type="is-success" @click="createGamme"
        ><i class="fa fa-check"></i
      ></b-button>
      <b-button type="is-warning"> <i class="fa fa-edit"></i> </b-button>
      <b-button type="is-danger"><i class="fa fa-minus-circle"></i></b-button>
    </div>
    <div v-if="gammes">
      <b-table class="tableGammes" :data="gammes" :columns="columns"></b-table>
    </div>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";

export default {
  data() {
    return {
      gammes: null,
      dataModules: [{ nomModule: "Nullos" }, { nomModule: "Lourd" }],
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
      } catch (e) {
        this.formError = e.message;
      }
    },
  },

  async fetch() {
    this.loading = true;
    try {
      this.gammes = await this.$axios.$get(`${API_URL}/gamme/all`);
    } catch (e) {
      this.error = e;
    }
  },
};
</script>
