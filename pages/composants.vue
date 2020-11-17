<style lang="scss" scoped>
@import "~bulma/sass/utilities/_all";

.text-center {
  text-align: center;
}

.saisie {
  display: flex;
  flex-direction: row;
  margin-right: 2em;

  .field {
    width: 50%;
  }

  justify-content: space-between;
}

.boutons {
  width: 50%;
  margin-left: 25%;
  text-align: center;

  .button {
    width: 10%;
    height: 15vh;
    font-size: 1.5rem;
    color: #FFF;

    &:hover {
      background-color: $grey-dark;
    }
  }
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
  </section>

  <!--  	<div class="conteneurGeneral">-->
  <!--  		<div class="conteneurComposants">-->
  <!--  			-->
  <!--  			<div class="TableComposants">-->
  <!--  				<table>-->
  <!--  					<caption class="titleTable">-->
  <!--  						<strong>Composants :</strong>-->
  <!--  					</caption>-->
  <!--  					<tr class="entetes">-->
  <!--  						<td>Nature</td><td>Caractéristiques</td><td>Unité d'usage</td>-->
  <!--  					</tr>-->
  <!--  					<tr>-->
  <!--  						<td>Bois</td><td>A chier</td><td>Cm</td>-->
  <!--  					</tr>-->
  <!--  					<tr>-->
  <!--  						<td>Métal</td><td>Franchement solide</td><td>M</td>-->
  <!--  					</tr>-->
  <!--  					<tr>-->
  <!--  						<td>Métal</td><td>Franchement solide</td><td>M</td>-->
  <!--  					</tr>-->
  <!--  				</table>-->
  <!--  			</div>-->
  <!--  		</div>-->
  <!--  	</div>-->
</template>

<script></script>
