<style scoped>
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
.piedPage {
  display: inline;
  text-align: right;
  vertical-align: center;
  position: relative;
}

.contentFooter {
  margin: auto;
  position: absolute;
  left: 85%;
  top: 60%;
  font-size: 18px;
  font-weight: bold;
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
    <div class="wrapper">
      <div class="mainTitle">
        <h1>Menu principal</h1>
      </div>
      <div class="conteneurBoutons">
        <button class="btnMain"><a href="">Créer un devis</a></button>
        <button class="btnMain"><a href="">Gestion des clients</a></button>
        <button class="btnMain">
          <a href="menuProduits">Gestion des produits</a>
        </button>
      </div>
      <footer class="piedPage">
        <span class="contentFooter"
          >Bonjour Léandre &nbsp&nbsp&nbsp<i class="fa fa-sign-out exit"></i
        ></span>
      </footer>
    </div>
  </div>
</template>

<script></script>
