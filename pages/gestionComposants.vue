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
  flex-direction: row;
  margin-right: 2em;
  margin-top: 5%;

  .field {
    width: 50%;
  }

  .select {
    width: 15vw;
  }

  .dropdown-item {
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
    font-size: 1.5rem;
    color: #fff;

    &:hover {
      background-color: $grey-dark;
    }
  }
}
.tableComposants {
  margin-top: 5%;
}
</style>
<template>
  <section class="page">
    <div class="title text-center">
      <h1 class="text-center">Composants</h1>
    </div>
    <div v-if="error">
      <b-notification
        type="is-danger"
        :closable="false"
        class="text-center"
        role="alert"
      >
        {{ error.message }}
      </b-notification>
    </div>
    <div class="saisie">
      <b-field class="titleInputComposant">
        <b-input
          placeholder="Nom du composant"
          v-model="nomComposant"
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

      <b-select
        aria-role="list"
        v-model="caracteristique"
        placeholder="Caractéristiques"
      >
        <option v-for="carac in dataCarac">
          {{ carac.nomCaracteristique }}
        </option>
      </b-select>

      <b-select
        aria-role="list"
        v-model="uniteMesure"
        placeholder="Unité d'usage"
      >
        <option v-for="unite in dataUnite">{{ unite.uniteMesure }}</option>
      </b-select>
    </div>

    <div class="boutons">
      <b-button type="is-success" @click="insertComposant"
        ><i class="fa fa-check"></i
      ></b-button>
      <b-button type="is-danger" @click="deleteComposant"><i class="fa fa-minus-circle"></i></b-button>
    </div>
    <div v-if="data !== null">
      <b-table
        class="tableComposants"
        :data="data"
        :columns="columns"
        :selected.sync="selected"
        focusable
      ></b-table>
    </div>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";
export default {
  data() {
    return {
      nomComposant: null,
      uniteMesure: null,
      caracteristique: null,
      data: null,
      dataUnite: null,
      selected: null,
      columns: [
        {
          field: "nomComposant",
          label: "Nom du composant",
        },
        {
          field: "nomCaracteristique",
          label: "Caractéristiques",
        },
        {
          field: "unité",
          label: "Unité d'usage",
        },
      ],
      dataCarac: null,
      error: null,
      loading: null,
    };
  },

  async fetch() {
    loading: true;
    try {
      this.dataUnite = await this.$axios.$get(`${API_URL}/unite`);
      this.dataCarac = await this.$axios.$get(`${API_URL}/caracteristique`);
      this.data = await this.$axios.$get(`${API_URL}/composant`);
    } catch (e) {
      this.error = e;
    }
    loading: false;
  },
  methods: {
    insertComposant() {
      this.$axios.$post(`${API_URL}/composant`, {
        nomComposant: this.nomComposant,
        unité: this.uniteMesure,
        nomCaracteristique: this.caracteristique,
      });
      const composantObj = {
        nomComposant: this.nomComposant,
        unité: this.uniteMesure,
        nomCaracteristique: this.caracteristique,
      } 
      this.data.push(composantObj);
    },
    deleteComposant(){
      const deleteComposantApi = async () => {
        try {
            await this.$axios.$delete(`${API_URL}/composant/${this.selected._id}`);
            this.data = await this.$axios.$get(`${API_URL}/composant`);
        } catch (e) {
          return new Error("Impossible de supprimer le composant.");
        }
      };
        this.$buefy.dialog.confirm({
          message: 'Voulez-vous supprimer ce composant?',
          onConfirm: () => {
            try {
              this.$buefy.toast.open({
                message: "Suppression effectuée",
                type: "is-success",
              });
              deleteComposantApi();
            }
            catch(e) {
              this.$buefy.toast.open({
                message: e.message,
                type: "is-danger",
              });
            }
          }
        })
    }
  },
};
</script>
