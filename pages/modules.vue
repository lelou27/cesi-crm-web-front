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
  flex-direction: justify-content;
  margin-right: 2em;
  margin-top: 5%;

  .field {
    width: 50%;
  }

  .btnCombo{
  	width: 15vw;
  }

  .mesure {
  	width: 25%;
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
    color: #FFF;

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
    <div class="title text-center">
      <h1 class="text-center">Modules</h1>
    </div>

    <div class="saisie">
      <b-field class="titleInputModule">
        <b-input
          placeholder="Nom du module"
          v-model="name"
          type="text"
          icon="account"
          icon-right="close-circle"
          icon-right-clickable
          @icon-right-click="clearName"
          required
          rounded
        >
        </b-input>
      </b-field>
       <span>
	      <b-dropdown aria-role="list">
	        <button class="button is-dark btnCombo" slot="trigger" slot-scope="{ active }">
	          <span class="caracCombo">Caractéristiques</span>
	          <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
	        </button>
	        <b-dropdown-item aria-role="listitem">Hauteur-Longueur</b-dropdown-item>
	      </b-dropdown>
	      <b-dropdown aria-role="list">
	        <button class="button is-dark btnCombo" slot="trigger" slot-scope="{ active }">
	          <span class="unitéCombo">Unité d'usage</span>
	          <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
	        </button>
	        <b-dropdown-item aria-role="listitem">Mètre linéaire</b-dropdown-item>
	      </b-dropdown>
  		</span>
    </div>
    <div class="saisie">
  			<b-dropdown aria-role="list">
	        <button class="button is-dark btnCombo" slot="trigger" slot-scope="{ active }">
	          <span class="unitéCombo">Composants</span>
	          <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
	        </button>
	        <b-dropdown-item aria-role="listitem">Mur en bois</b-dropdown-item>
	      </b-dropdown>
	      <b-field class="titleInputMesure mesure">
	        <b-input
	          placeholder="Mesure"
	          v-model="name"
	          type="text"
	          icon="account"
	          icon-right="close-circle"
	          icon-right-clickable
	          @icon-right-click="clearName"
	          required
	          rounded
	        >
	        </b-input>
      	  </b-field>
      	  <span>
		    <b-button type="is-dark"><i class="fa fa-plus"></i></b-button>
		    <b-button type="is-dark"><i class="fa fa-minus"></i></b-button>
		  </span>
  		<b-table class="tableComposants" :data="dataComposants" :columns="columnsComposants"></b-table>
    </div>
    <div class="boutons">
      <b-button type="is-success"><i class="fa fa-check"></i></b-button>
      <b-button type="is-warning"> <i class="fa fa-edit"></i> </b-button>
      <b-button type="is-danger"><i class="fa fa-minus-circle"></i></b-button>
    </div>
    <b-table class="tableGammes" :data="data" :columns="columns"></b-table>
  </section>
</template>

<script>
	export default {
        data() {
            return {
                data: [
                    { 'nomModule': 'Nullos', 'caractéristiques': 'Hauteur-Longueur', 'unitéUsage' : 'm²'},
                    { 'nomModule': 'Bof', 'caractéristiques': 'Hauteur-Longueur', 'unitéUsage' : 'm²'},
                    { 'nomModule': 'Joli module <3', 'caractéristiques': 'Hauteur-Longueur', 'unitéUsage' : 'm²'},
                ],
                dataComposants: [
                    { 'nomComposant': 'Composant 1' },
                    { 'nomComposant': 'Composant 2' },
                ],
                columns: [
                    {
                        field: 'nomModule',
                        label: 'Nom du module',
                    },
                    {
                        field: 'caractéristiques',
                        label: 'Caractéristiques',
                    },
                    {
                        field: 'unitéUsage',
                        label: 'Unité d\'usage',
                    }
                ],
                columnsComposants: [
                	{
                		field: 'nomComposant',
                		label: 'Nom du composant',
                	}
                ]
            }
        },
    }
</script>
