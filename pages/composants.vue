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
    <div class="title text-center">
      <h1 class="text-center">Composants</h1>
    </div>

    <div class="saisie">
      <b-field class="titleInputComposant">
        <b-input
          placeholder="Nom du composant"
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

      <b-dropdown aria-role="list">
        <button class="button is-dark" slot="trigger" slot-scope="{ active }">
          <span class="titleCombo">Section</span>
          <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
        </button>
        <b-dropdown-item aria-role="listitem">Section 1</b-dropdown-item>
      </b-dropdown>

      <b-dropdown aria-role="list">
        <button class="button is-dark" slot="trigger" slot-scope="{ active }">
          <span>Longueur</span>
          <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
        </button>

        <b-dropdown-item aria-role="listitem">Section 1</b-dropdown-item>
      </b-dropdown>
      <b-dropdown aria-role="list" class="comboDimension">
        <button class="button is-dark" slot="trigger" slot-scope="{ active }">
          <span>Surface en m²</span>
          <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
        </button>

        <b-dropdown-item aria-role="listitem">Section 1</b-dropdown-item>
      </b-dropdown>
    </div>

    <div class="boutons">
      <b-button type="is-success"><i class="fa fa-check"></i></b-button>
      <b-button type="is-warning"> <i class="fa fa-edit"></i> </b-button>
      <b-button type="is-danger"><i class="fa fa-minus-circle"></i></b-button>
    </div>
    <b-table class="tableComposants" :data="data" :columns="columns"></b-table>
  </section>
</template>

<script>
	export default {
        data() {
            return {
                data: [
                    { 'nature': 'bois', 'caractéristiques': 'Plutôt fragile comme Touchard', 'unitéUsage': 'bite/m²'},
                    { 'nature': 'métal', 'caractéristiques': 'Dur comme Lelou27pro', 'unitéUsage': 'pectoraldroit/cm²'},
                    { 'nature': 'moisissure', 'caractéristiques': 'Vermoulu comme ce diable de Benjamin', 'unitéUsage': 'champignon/kg'}
                ],
                columns: [
                    {
                        field: 'nature',
                        label: 'Nature',
                    },
                    {
                        field: 'caractéristiques',
                        label: 'Caractéristiques',
                    },
                    {
                        field: 'unitéUsage',
                        label: 'Unité d\'usage',
                    }
                ]
            }
        }
    }
</script>
