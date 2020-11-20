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

caption,
td {
  padding: 5px 5px;
  border: 1px solid #363636;
}

select {
  outline: none;
}

.custom-dropdown {
  font-size: inherit;
  padding: 0.5em;
  margin: 0;
  border: none;
  outline: none;
  text-align-last: center;
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

.interaction {
  padding-top: 0.8%;
  width: 3%;
}

.Valider {
  background-image: url("/assets/images/valider.jpg");
  background-size: contain;
  outline: none;
  border-radius: 100%;
}

.inter_img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 2px solid black;
}

.inter_img:hover {
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
      <caption>
        Devis
      </caption>
      <tr v-for="mod in modules">
        <td>
          <p class="custom-dropdown">{{ mod.nomModule }}</p>
        </td>
        <td>
          <p class="custom-dropdown">
            {{
              mod.nomGamme
                ? mod.nomGamme
                : "lolololololololololololololololololo"
            }}
          </p>
        </td>
        <td class="Quantite">
          <b-field>
            <b-numberinput
              v-model="mod.quantite"
              type="is-dark"
              size="is-small"
              max="15"
              min="1"
              @input="changeQte(mod)"
            ></b-numberinput>
          </b-field>
        </td>
        <td class="interaction">
          <img class="inter_img" src="~/assets/images/Modifier.png" />
          <img
            @click="delLine(mod)"
            class="inter_img"
            src="~/assets/images/Supprimer.png"
          />
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: "TableDevis",
  props: ["modules"],
  date() {
    return {
      test: null
    }
  },
  methods: {
    delLine(mod) {
      this.$emit("removeModuleToStore", mod);
    },

    changeQte(mod) {
      mod.quantite++;
    },
  },
};
</script>
