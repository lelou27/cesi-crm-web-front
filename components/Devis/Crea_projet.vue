<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

  table td:not([align]), table th:not([align]) {
    text-align: inherit;
    padding: 1%;
  }

  .DivButton {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  table{
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    margin-top: 5%;
    width: 50%;
  }

  section {
    width: 100%;
  }

  .labelName{
    padding-top: 2.5%;
    text-align: left;
  }

  .Label {
    width: 30%;
  }

  .SelectClient {
    width : 200%;
  }

  .button{
    margin-top: 3%;
    width: 50%;
  }
</style>

<template>
  <section>
    <table>
      <tr>
        <td>
          <b-field label="Nom du projet :" class="labelName">
          </b-field>
        </td>
        <td>
          <b-input rounded></b-input>
        </td>
      </tr>
      <tr>
        <td class="Label">
          <b-field label="Référence du projet : " class="labelName">
          </b-field>
        </td>
        <td>
          <b-input rounded></b-input>
        </td>
      </tr>
      <tr>
        <td class="Label">
          <b-field label="Client : " class="labelName">
          </b-field>
        </td>
        <td>
          <b-select placeholder="Selectionner un client" rounded expanded>
            <option value="flint">Flint</option>
            <option value="silver">Silver</option>
          </b-select>
        </td>
      </tr>
      <tr>
        <td class="Label">
          <b-field label="Date : " class="labelName">
          </b-field>
        </td>
        <td>
          <b-datepicker
            placeholder="Selectionner une Date"
            :min-date="minDate"
            :max-date="maxDate" rounded>
          </b-datepicker>
        </td>
      </tr>
    </table>
  <div class="DivButton">
    <b-button type="is-dark" size="is-large" class="button">Valider</b-button>
  </div>
  </section>
</template>

<script>
export default {
  name: "CreaProjet",

  data() {
    const today = new Date()

    return {
      date: new Date(),
      minDate: new Date(today.getFullYear() - 80, today.getMonth(), today.getDate()),
      maxDate: new Date(today.getFullYear() + 30, today.getMonth(), today.getDate())
    }
  }
};
</script>
