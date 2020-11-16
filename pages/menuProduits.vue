<style>
.conteneurBoutons {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
	grid-row-gap: 2vh;
	justify-content: center;
}

.btnMain {
	width: 33vw;
	margin: auto;
	height: 10vh;
	background-color: #363636;
	color: white;
	font-size: 28px;
	border: none;
}

.mainTitle {
	font-size: 28px;
	font-weight: bold;
	text-align: center;
	margin-top: 5vh;
}

.wrapper {
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
}

.exit {
	font-size: 40px !important;
}
a {
	text-decoration: none !important;
	color: white;
}
a:hover {
	color: white;
}
</style>

<template>
	<div>
		<head>
			<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
		</head>
		<div class="wrapper">
			<div class="mainTitle">
				<h1>
					Menu des produits
				</h1>
			</div>
			<div class="conteneurBoutons">
					<button class="btnMain"><a href="composants">Gestion des composants</a></button>
					<button class="btnMain"><a href="">Gestion des modules</a></button>
					<button class="btnMain"><a href="gammes">Gestion des gammes</a></button>
			</div>
		</div>
	</div>
</template>

<script>
</script>