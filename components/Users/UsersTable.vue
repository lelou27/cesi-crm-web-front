<style lang="scss" scoped></style>

<template>
  <section v-if="users">
    <b-field grouped group-multiline>
      <div class="control is-flex">
        <b-switch v-model="isPaginated">Pagination</b-switch>
      </div>

      <b-select v-model="perPage" :disabled="!isPaginated">
        <option value="5">5 par page</option>
        <option value="10">10 par page</option>
        <option value="15">15 par page</option>
        <option value="20">20 par page</option>
      </b-select>
    </b-field>
    <b-table
      :data="users"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="'both'"
      :pagination-rounded="isPaginationRounded"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      checkable
      :selected.sync="selectedUser"
      focusable
      @select="selectUser"
      :checked-rows.sync="checkedRows"
      default-sort="user.prenom"
      aria-next-label="Page suivante"
      aria-previous-label="Page précédente"
      aria-page-label="Page"
      aria-current-label="Page courante"
    >
      <template slot="bottom-left">
        <b>Total checked</b>: {{ checkedRows.length }}
      </template>

      <b-table-column
        field="user.prenom"
        label="Prénom"
        sortable
        centered
        v-slot="props"
      >
        {{ props.row.prenom }}
      </b-table-column>

      <b-table-column
        field="user.nom"
        label="Nom"
        sortable
        centered
        v-slot="props"
      >
        {{ props.row.nom }}
      </b-table-column>

      <b-table-column
        field="user.username"
        label="Nom d'utilisateur"
        sortable
        centered
        v-slot="props"
      >
        {{ props.row.username }}
      </b-table-column>

      <b-table-column
        field="user.email"
        label="Email"
        sortable
        centered
        v-slot="props"
      >
        {{ props.row.email }}
      </b-table-column>

      <b-table-column
        field="user.createdAt"
        label="Crée le"
        sortable
        centered
        v-slot="props"
      >
        <span class="tag is-success">
          {{ new Date(props.row.createdAt).toLocaleDateString() }}
        </span>
      </b-table-column>

      <b-table-column
        field="user.updatedAt"
        label="Modifié le"
        sortable
        centered
        v-slot="props"
      >
        <span class="tag is-warning">
          {{ new Date(props.row.updatedAt).toLocaleDateString() }}
        </span>
      </b-table-column>

      <UserModal
        v-if="selectedUser"
        :data="selectedUser"
        :isComponentModalActive="showModal"
        @close-modal="close"
        :title="`Informations utilisateur ${selectedUser.username}`"
      />
    </b-table>
  </section>
</template>

<script>
export default {
  name: "UsersTable",
  props: ["users"],
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: "bottom",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5,
      checkedRows: [],
      selectedUser: null,
      showModal: false,
    };
  },
  metaInfo() {
    return { users: this.users };
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user;
      this.showModal = true;
    },
    close() {
      this.showModal = false;
      this.selectedUser = null;
    },
  },
};
</script>
