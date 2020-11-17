<style lang="scss" scoped>
  @import "~bulma/sass/utilities/_all";
  section {
    text-align: center;
    padding-right: 3%;
  }

  table {
    border: 2px solid #363636;
    border-radius: 3px;
    background-color: #fff;
    width: 100%;
    margin-top: 2%;
  }

  caption {
    background-color: #363636;
    color: rgba(255, 255, 255, 0.66);
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  td {
    width: 10%;
  }

  caption,td {
    padding: 5px 5px;
    border: 1px solid #363636;
  }

  select {
    outline: none;
  }

  .custom-dropdown{
    font-size: inherit;
    padding: .5em;
    margin: 0;
    border: none;
    outline: none;
    text-align-last:center;
    width: 100%;
    margin: 0;
  }

  button {
    width: 30px;
    height: 30px;
  }

  .Quantite {
    padding-top: 1%;
    width: 2%;
  }

  .interaction{
    padding-top: 0.8%;
    width: 3%;
  }

  .Valider{
    background-image:url("/assets/images/valider.jpg");
    background-size: contain;
    outline:none;
    border-radius:100%;
  }

  .inter_img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
    border: 2px solid black;
  }

  .inter_img:hover{
    border: 4px solid black;
  }

  .Ajout {
    width: 80px;
    height: 80px;
    border-radius: 100%;
  }

  .Ajout:hover {
    width: 76px;
    height: 76px;
    border-radius: 100%;
  }

  .Ajouter_Module {
    margin-top: 2%;
  }

</style>

<template>
  <section>
    <table class="table">
      <caption>Devis</caption>
      <tr v-for="nbLine in nbLines">
        <td>
          <select class="custom-dropdown">
            <option disabled selected>Selectionner un Module</option>
            <option v-for="module in modules">{{ module }}</option>
          </select>
        </td>
        <td>
          <select class="custom-dropdown">
            <option disabled selected>Selectionner une Gamme</option>
            <option v-for="gamme in gammes">{{ gamme }}</option>
          </select>
        </td>
        <td class="Quantite">
          <b-field>
            <b-numberinput v-model="number" type="is-dark" size="is-small" max="15" min="1" v-bind:content="Lines[nbLine-1]" v-bind:value="Lines[nbLine-1]" :id="nbLine" v-on:input="changeQte(nbLine)"></b-numberinput>
          </b-field>
        </td>
        <td class="interaction">
          <img class="inter_img" src="~/assets/images/valider.jpg">
          <img class="inter_img" src="~/assets/images/Modifier.png">
          <img class="inter_img" src="~/assets/images/Supprimer.png" @click="delLine">
        </td>
      </tr>
    </table>
    <div class="Ajouter_Module">
      <img class="Ajout" src="~/assets/images/Ajouter.png" @click="addLine">
    </div>
  </section>
</template>

<script>
export default {
  name : "Table",
  data() {
    return {
      modules: ["Module 1", "Module 2"],
      gammes: ["Gamme 1", "Gamme 2"],
      nbLines: 1,
      number: 0,
    Lines: [1]
    }

  },
  methods: {
    addLine() {
      this.nbLines++;
      this.Lines.push(1);
      console.log(this.Lines)
    },

    delLine(){
      this.nbLines--;
    },

    changeQte(index){
      this.Lines[index-1]++;
      console.log(this.Lines)
      console.log(index)
    }
  }
}
</script>
