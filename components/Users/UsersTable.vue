<style lang="scss" scoped>
.btn-create-user {
  width: 100%;
  display: flex;
  justify-content: end;

  .button {
    margin: 1rem;
  }
}
</style>

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
      :selected.sync="selectedUser"
      focusable
      checkable
      :checked-rows.sync="checkedRows"
      @select="selectUser"
      default-sort="user.prenom"
      aria-next-label="Page suivante"
      aria-previous-label="Page précédente"
      aria-page-label="Page"
      aria-current-label="Page courante"
    >
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

      <div class="btn-create-user">
        <b-button type="is-info" @click="openModalCreateUser"
          >Créer un utilisateur</b-button
        >
        <b-button
          :disabled="checkedRows.length === 0"
          type="is-danger"
          icon-left="delete"
          @click="deleteUser"
          >Supprimer
          {{ checkedRows.length > 0 ? checkedRows.length : "" }}</b-button
        >
      </div>

      <UserModal
        v-if="selectedUser"
        :data="selectedUser"
        :isComponentModalActive="showModal"
        @close-modal="close"
        :title="`Informations utilisateur ${selectedUser.username}`"
      />

      <UserModalCreate
        v-if="showModalCreateUser"
        :isComponentModalActive="showModalCreateUser"
        @close-modal="closeCreateUser"
        title="Création d'un utilisateur"
        @appendUser="appendNewUser"
      />
    </b-table>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";

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
      selectedUser: null,
      showModal: false,
      showModalCreateUser: false,
      checkedRows: [],
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
    openModalCreateUser() {
      this.showModalCreateUser = true;
    },
    closeCreateUser() {
      this.showModalCreateUser = false;
    },
    appendNewUser(user) {
      this.users.push(user);
    },
    deleteUser() {
      const usersChecked = this.checkedRows.map((user) => user.username);
      const deleteUserApi = async () => {
        try {
          for (const user of this.checkedRows) {
            await this.$axios.$delete(`${API_URL}/user/${user._id}`);
            this.$emit("removeUser", user);
          }
        } catch (e) {
          return new Error("Impossible de supprimer l'utilsateur.");
        }
      };
      this.$buefy.dialog.confirm({
        message: `Voulez-vous vraiment supprimer ${
          usersChecked.length > 1
            ? "les utilisateurs suivants"
            : "l'utilisateur suivant"
        } : ${usersChecked.join(", ")} `,
        onConfirm: () => {
          try {
            this.$buefy.toast.open({
              message: "Suppression effectuée",
              type: "is-success",
            });
            deleteUserApi();
            this.checkedRows = [];
          } catch (e) {
            this.$buefy.toast.open({
              message: e.message,
              type: "is-danger",
            });
          }
        },
      });
    },
  },
};
</script>
