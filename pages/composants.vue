<style lang="css">
html {
	font-family: BlinkMacSystemFont, -apple-system, sans-serif;
	overflow-y: hidden !important;
	/*background-color :#ECECEC;*/
}
.boutons {
	grid-column: 2;
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 1vh;
	margin: auto;
}
.ComboLongueur {
	grid-row: 3;
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}
.saisie {
	display: grid;
	grid-column: 1;
	grid-template-rows: 1fr 1fr 1fr 1fr;
	grid-row-gap: 1vh;
	height: 33vh;
	padding: 10px;
	font-weight: bold;
	padding-top: 0;
	padding-bottom: 0;
	margin: auto;
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
	display: grid;
	/*grid-template-rows: 1fr 1fr 1fr;*/
	grid-template-columns: 1fr 1fr 1fr;
	grid-row-gap: 1vh;
	height: 40vh;
}
.inputCom {
	grid-row: 1;
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}
.CombosDimensions {
	grid-row: 2;
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}
.ComboSurface {
	grid-row: 4;
	margin-top: auto;
	margin-bottom: auto;
	text-align: left !important;
}
.Valider {
	grid-row :1;
	grid-column: 2;
	background-color: green;
}
.Modifier {
	grid-row :2;
	grid-column: 2;
	background-color: orange;
}
.Supprimer {
	grid-row :3;
	grid-column: 2;
	background-color: red;
}
.TableComposants {
	grid-column: 3;
	width: 100%;
	text-align: center;
	padding: 10px;
	font-weight: bold;
	height: 33vh;
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
}
table td {
	text-align: center;
	border: 2px solid grey;
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
</style>
<template>
	<html>
		<head>
			<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
		</head>
		<div class="conteneurGeneral">
			<div class="titleComposants">
				<span class="titleComposants">Composants</span>
			</div>
			<div class="conteneurComposants">
				<div class="saisie">
					<div class="inputCom">
						<span class="titleInputComposant">Nom du composant : </span><input class="inputComposant">
					</div>
					<div class="CombosDimensions">
						<label for="com-section">Section : </label>
						<select id="com-section">
							<option>Pute</option>
							<option>Mégapute</option>
						</select>
					</div>
					<div class="ComboLongueur">	
						<label for="com-longueur">Longueur en cm : </label>
						<select id="com-longueur">
							<option>Pute</option>
							<option>Mégapute</option>
						</select>
					</div>
					<div class="ComboSurface">
						<label for="com-surface">Surface en m² : </label>
						<select id="com-surface">
							<option>Pute</option>
							<option>Mégapute</option>
						</select>
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
	</html>
</template>

<script>
</script>