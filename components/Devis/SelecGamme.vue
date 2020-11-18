<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";
  .selecFinition {
    margin-bottom: 10%;
  }

  .tableModele {
    margin-top: 23px;
    outline: none;
  }

  h1 {
    font-weight:bold;
  }

  #container{
    margin-top: 5%;
  }

  #tableCoupe{
    padding-top: 85px;
  }

  #menuFinition{
    padding-top: 85px;
  }
</style>

<template>
  <div class="columns is-full" id="container">
    <div class="column is-one-third">
      <b-select
        placeholder="Selectionner une Gamme" size="is-medium" expanded>
        <option value="flint">Flint</option>
        <option value="silver">Silver</option>
      </b-select>
      <b-table :data="data1" :columns="columns1" class="tableModele" :selected.sync="selectedModele" :sticky-header="stickyHeaders" narrowed bordered focusable></b-table>
    </div>
    <div class="column is-one-third" id="menuFinition">
      <h1>Type de remplissage :</h1>
      <b-select
        placeholder="Selectionner un Modèle"
        size="is-medium"
        class="selecFinition"
        expanded>
        <option value="flint">Flint</option>
        <option value="silver">Silver</option>
      </b-select>
      <h1>Finition intérieure :</h1>
      <b-select
        placeholder="Selectionner un Modèle"
        size="is-medium"
        class="selecFinition"
        expanded>
        <option value="flint">Flint</option>
        <option value="silver">Silver</option>
      </b-select>
      <h1>Finition extérieure :</h1>
      <b-select
        placeholder="Selectionner un Modèle"
        size="is-medium"
        class="selecFinition"
        expanded>
        <option value="flint">Flint</option>
        <option value="silver">Silver</option>
      </b-select>
    </div>
    <div class="column is-one-third" id="tableCoupe">
      <b-table :data="data2" :columns="columns2" :selected.sync="selectedCoupe" narrowed bordered focusable :sticky-header="stickyHeaders"></b-table>
    </div>
    </div>
</template>

<script>
  export default {
    name: "SelecGamme",

    data() {
      return {
        data1: [
          { 'name': 'Bronze' },
          { 'name': 'Argent' },
          { 'name': 'Gold' },
          { 'name': 'Platine' },
          { 'name': 'Diamant' },
          { 'name': 'Diamant' },
          { 'name': 'Diamant' },
          { 'name': 'Diamant' },
          { 'name': 'Diamant' }
        ],

        data2: [
          { 'name': 'Coupe de principe 1' },
          { 'name': 'Coupe de principe 2' },
          { 'name': 'Coupe de principe 3' },
          { 'name': 'Coupe de principe 4' },
          { 'name': 'Coupe de principe 5' },
          { 'name': 'Coupe de principe 6' },
          { 'name': 'Coupe de principe 7' },
          { 'name': 'Coupe de principe 8' },
          { 'name': 'Coupe de principe 9' }
        ],

        selectedModele: null,
        selectedCoupe: null,
        stickyHeaders: true,
        columns1: [
          {
            field: 'name',
            label: 'Modèle',
          }
        ],

        columns2: [
          {
            field: 'name',
            label: 'Coupe de principe',
          }
        ]
      }
    }
  }
</script>
