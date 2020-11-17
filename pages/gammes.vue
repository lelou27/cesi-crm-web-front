<style lang="css" scoped>
html {
	font-family: BlinkMacSystemFont, -apple-system, sans-serif;
	overflow-y: hidden !important;
	/*background-color :#ECECEC;*/
}
.boutonsGammes {
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
	grid-template-rows: 1fr 1fr 1fr;
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
.inputGamme {
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
.ValiderGammes {
	grid-row :1;
	grid-column: 2;
	background-color: green;
}
.ModifierGammes {
	grid-row :2;
	grid-column: 2;
	background-color: orange;
}
.SupprimerGammes {
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

.smallButton {
	height: 40px;
	width: 40px;
	background-color: #363636;
}
.btnModule {
	margin-top: 1vh;
}

.itemModules {
	font-weight: normal;
	border-bottom: 1px solid #363636;
	padding-left: 1vw;
}
.listModules {
	border: 1px solid #363636;
	border-bottom: none;
}
</style>
<template>
	<html>
		<head>
			<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
		</head>
		<div class="conteneurGeneral">
			<div class="titleComposants">
				<span class="titleComposants">Gammes</span>
			</div>
			<div class="conteneurComposants">
				<div class="saisie">
					<div class="inputGamme">
						<span class="titleInputGamme">Nom de la gamme : </span><input class="inputComposant">
					</div>
					<div class="CombosDimensions">
						<label for="com-section">Module : </label>
						<select id="com-section">
							<option>Pute</option>
							<option>Mégapute</option>
						</select>
						<div class="btnModule">
							<button class="smallButton"><i class="fa fa-plus"></i></button>
							<button class="smallButton"><i class="fa fa-minus"></i></button>
						</div>
					</div>
					<div class="ComboLongueur">
						<label for="com-module">Modules sélectionnés : </label>
						<ul id="com-module" class="listModules">
							<li class="itemModules">Pute</li>
							<li class="itemModules">Mégapute</li>
						</ul>
					</div>
				</div>
				<div class="boutonsGammes">
					<button class="ValiderGammes">
						<i class="fa fa-check"></i>
					</button>
					<button class="ModifierGammes">
						<i class="fa fa-edit"></i>
					</button>
					<button class="SupprimerGammes">
						<i class="fa fa-minus-circle"></i>
					</button>
				</div>
				<div class="TableComposants">
					<table>
						<caption class="titleTable">
							<strong>Gammes :</strong>
						</caption>
						<tr class="entetes">
							<td>Nom de la gamme</td><td>Modules</td>
						</tr>
						<tr>
							<td>Gamme de merde</td><td>Module 1</td>
						</tr>
						<tr>
							<td>Gamme moyennement merdique</td><td>Module 2</td>
						</tr>
						<tr>
							<td>Gamme merdiquement élevée</td><td>Module 3</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</html>
</template>

<script>
</script>
