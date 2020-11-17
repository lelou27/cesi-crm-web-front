<style lang="css" scoped>
html {
	font-family: BlinkMacSystemFont, -apple-system, sans-serif;
	overflow-y: scroll;
	background-color :#ECECEC;
} 

/*.saisie {
	padding: 10px;
	font-weight: bold;
	padding-top: 0;
	padding-bottom: 0;
	margin: auto;
}*/
/*.boutons {
	margin: auto;
}*/

/*.inputCom {
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}*/
/*.CombosDimensions {
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}
.ComboLongueur {
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}
.ComboSurface {
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}*/
/*.Valider {
	background-color: green;
}
.Modifier {
	background-color: orange;
}
.Supprimer {
	background-color: red;
}

.titleComposants {
	margin: auto;
	font-size: 34px;
	display: block;
	margin-bottom: 10vh;
	margin-top: 8vh !important;
	font-weight: bold;
}
.conteneurGeneral {
	text-align: center;
	vertical-align: middle;
	display: block;
	padding-top: 4vh;
	font-size: 18px;
}
.conteneurComposants {
	display: block !important;
	height: 100vh;
}

.TableComposants {
	text-align: center;
	padding: 10px;
	font-weight: bold;
	margin: auto;
}
.titleTable {
	margin-bottom: 2vh !important;
	font-size: 18px;
}
button {
	height: 70px;
	width: 70px;
	margin: auto;
	color: white;
	font-size: 30px;
	border: none;
}
table {
	width: 100%;
	border: none;
}
table td {
	text-align: center;
	border-bottom: 2px solid grey;
	padding: 10px;
}
table tr {
	height: 3vh;
	padding: 10px;
}

.entetes {
	background-color : #363636;
	color: white;
}
.is-primary {
	width: 10vw !important;
	background-color: #363636 !important;
}*/

.inputCom {
	width: 50%;
}

.saisie {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}
</style>
<template>
	<div class="conteneurGeneral">
		<div class="titleComposants">
			<span class="titleComposants">Composants</span>
		</div>
		<div class="conteneurComposants">
			<div class="saisie">
				<div class="inputCom">
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
				</div>
				<div class="CombosDimensions">
					<b-dropdown aria-role="list" class="comboDimension">
			            <button class="button is-primary" slot="trigger" slot-scope="{ active }">
			                <span class="titleCombo">Section</span>
			                <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
			            </button>
			            <b-dropdown-item aria-role="listitem">Section 1</b-dropdown-item>
			        </b-dropdown>
				</div>
				<div class="ComboLongueur">	
					<b-dropdown aria-role="list" class="comboDimension">
			            <button class="button is-primary" slot="trigger" slot-scope="{ active }">
			                <span>Longueur</span>
			                <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
			            </button>

			            <b-dropdown-item aria-role="listitem">Section 1</b-dropdown-item>
			        </b-dropdown>
				</div>
				<div class="ComboSurface">
					<b-dropdown aria-role="list" class="comboDimension">
			            <button class="button is-primary" slot="trigger" slot-scope="{ active }">
			                <span>Surface en m²</span>
			                <b-icon :icon="active ? 'menu-up' : 'menu-down'"></b-icon>
			            </button>

			            <b-dropdown-item aria-role="listitem">Section 1</b-dropdown-item>
			        </b-dropdown>
				</div>
			</div>
			<div class="boutons">
				<button class="Valider">
					<i class="fa fa-check"></i>
				</button>
				<button class="Modifier">
					<i class="fa fa-edit"></i>
				</button>
				<button class="Supprimer">
					<i class="fa fa-minus-circle"></i>
				</button>
			</div>
			<div class="TableComposants">
				<table>
					<caption class="titleTable">
						<strong>Composants :</strong>
					</caption>
					<tr class="entetes">
						<td>Nature</td><td>Caractéristiques</td><td>Unité d'usage</td>
					</tr>
					<tr>
						<td>Bois</td><td>A chier</td><td>Cm</td>
					</tr>
					<tr>
						<td>Métal</td><td>Franchement solide</td><td>M</td>
					</tr>
					<tr>
						<td>Métal</td><td>Franchement solide</td><td>M</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
</script>