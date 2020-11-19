<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.text-center {
  text-align: center;
}

.title {
	margin-top: 5%;
}
.conteneur {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.saisie {
  display: flex;
  flex-direction: row;
  margin-right: 2em;
  margin-top: 5%;

  .field {
    width: 100%;
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
    color: #FFF;

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
    
    <div class="conteneur">


      <div class="Unités">
        <div class="title text-center">
          <h1 class="text-center">Unités</h1>
          <div class="saisie">
            <b-field class="titleInputComposant">
            <b-input
              placeholder="Nom de l'unité"
              v-model="nomUnite"
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
          <div class="boutons">
            <b-button type="is-success" @click="insertUnite"
              ><i class="fa fa-check"></i
            ></b-button>
            <b-button type="is-danger" @click="deleteUnite"><i class="fa fa-minus-circle"></i></b-button>
          </div>
        </div>
          <div v-if="dataUnites !== null">
            <b-table
              class="tableComposants"
              :data="dataUnites"
              :columns="columnsUnites"
              :selected.sync="selected"
              focusable
            ></b-table>
          </div>
      </div>






      <div class="Caractéristiques">
        <div class="title text-center">
          <h1 class="text-center">Caractéristiques</h1>
          <div class="saisie">
            <b-field class="titleInputComposant">
            <b-input
              placeholder="Nom de la caractéristique"
              v-model="nomCaracteristique"
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
          <div class="boutons">
            <b-button type="is-success" @click="insertCaracteristique"
              ><i class="fa fa-check"></i
            ></b-button>
            <b-button type="is-danger" @click="deleteCaracteristique"><i class="fa fa-minus-circle"></i></b-button>
          </div>
        </div>
        <div v-if="dataCaracteristiques !== null">
            <b-table
              class="tableComposants"
              :data="dataCaracteristiques"
              :columns="columnsCaracteristiques"
              :selected.sync="selected"
              focusable
            ></b-table>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";
	export default {
        data() {
            return {
                nomUnite: null,
                nomCaracteristique: null,
                dataCaracteristiques: null,
                dataUnites: null,
                selected: null,
                selected2: null,
                columnsUnites: [
                    {
                        field: 'uniteMesure',
                        label: 'Nom de l\'unité',
                    }
                ],
                columnsCaracteristiques: [
                    {
                        field: 'nomCaracteristique',
                        label: 'Nom de la caractéristique',
                    }
                ],
                error: null,
                loading: null
            }
        },

        async fetch(){
          // this.loading = true;
            try {
              this.dataCaracteristiques = await this.$axios.$get(`${API_URL}/caracteristique`);
              this.dataUnites = await this.$axios.$get(`${API_URL}/unite`);
            }
            catch(e) {
              this.error = e;
            }
            // this.loading = false;
        },
        methods: {
        }
        
    }
</script>
