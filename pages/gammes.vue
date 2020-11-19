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
    <div class="title text-center">
      <h1 class="text-center">Gammes</h1>
    </div>

    <div class="saisie">
      <b-field class="titleInputComposant">
        <b-input
          placeholder="Nom de la gamme"
          v-model="name"
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
        { nomGamme: "Nullos", modules: "Module1" },
        { nomGamme: "Bof", modules: "Module2" },
        { nomGamme: "Lourd", modules: "Module3" },
      ],
      dataModules: [{ nomModule: "Nullos" }, { nomModule: "Lourd" }],
      columns: [
        {
          field: "nomGamme",
          label: "Nom de la gamme",
        },
        {
          field: "modules",
          label: "Modules",
        },
      ],
      columnsModules: [
        {
          field: "nomModule",
          label: "Nom du module",
        },
      ],
      name: null,
    };
  },
};
</script>
