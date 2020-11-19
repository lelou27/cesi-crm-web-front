<template>
  <section class="users">
    <div class="title">
      <h1>Client</h1>
    </div>
    <div class="buttons">
    <b-button size="is-medium"
              tag="router-link"
      icon-left="plus"
      to="/addClient"
              type="is-info">
      Ajouter
    </b-button>
    </div>
    <ClientTable></ClientTable>
  </section>
</template>

<script>
import ClientTable from "~/components/Client/ClientTable";
export default {
name: "ListClient",
  components: { ClientTable }
}
</script>

<style scoped>
.title {
  width: 100%;
  text-align: center;
}
.title h1 {
    font-weight: bold;
    margin: 2rem;
}
.button {
  margin: 1rem;
}
</style>
