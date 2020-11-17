<style>
.navbar-item {
  padding: 0.3rem 0.5rem;
}
aside {
  border-right: 1px solid grey;
}
.main-content {
  height: 100vh;
}
</style>

<template>
  <div v-if="1 === 1">
    <Navigation />

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
  <div v-else>
    <Authentication />
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Menu",
          icon: "home",
          to: { name: "menuPrincipal" },
        },
        {
          title: "Menu des produits",
          icon: "lightbulb",
          to: { name: "menuProduits" },
        },
        {
          title: "Gammes",
          icon: "window-restore",
          to: { name: "gammes" },
        },
        {
          title: "Composants",
          icon: "tools",
          to: { name: "composants" },
        },
        {
          title: "Modules",
          icon: "border-all",
          to: { name: "modules" },
        },
      ],
    };
  },
};
</script>
