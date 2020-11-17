<style lang="scss" scoped>
.title {
  width: 100%;
  text-align: center;

  h1 {
    font-weight: bold;
    margin: 2rem;
  }
}
</style>

<template>
  <section class="users">
    <div class="title">
      <h1>Utilisateurs</h1>
    </div>

    <div class="users">
      <div v-if="isLoading">
        <b-loading
          :is-full-page="false"
          v-model="isLoading"
          :can-cancel="true"
        ></b-loading>
      </div>
      <div v-else>
<!--        <b-table :data="users" :columns="columns"> </b-table>-->


        <section>
          <b-field grouped group-multiline>
            <b-select v-model="defaultSortDirection">
              <option value="asc">Tri par défaut: Ascendant</option>
              <option value="desc">Tri par défaut: Descendant</option>
            </b-select>
            <b-select v-model="perPage" :disabled="!isPaginated">
              <option value="5">5 par page</option>
              <option value="10">10 par page</option>
              <option value="15">15 par page</option>
              <option value="20">20 par page</option>
            </b-select>
            <div class="control is-flex">
              <b-switch v-model="isPaginated">Pagination</b-switch>
            </div>
          </b-field>

          <b-table
            :data="users"
            :paginated="isPaginated"
            :per-page="perPage"
            :current-page.sync="currentPage"
            :pagination-simple="isPaginationSimple"
            :pagination-position="'both'"
            :default-sort-direction="defaultSortDirection"
            :pagination-rounded="isPaginationRounded"
            :sort-icon="sortIcon"
            :sort-icon-size="sortIconSize"
            checkable
            :checked-rows.sync="checkedRows"
            default-sort="user.prenom"
            aria-next-label="Page suivante"
            aria-previous-label="Page précédente"
            aria-page-label="Page"
            aria-current-label="Page courante">

            <template slot="bottom-left">
              <b>Total checked</b>: {{ checkedRows.length }}
            </template>

            <b-table-column field="user.prenom" label="Prénom" sortable centered v-slot="props">
              {{ props.row.prenom }}
            </b-table-column>

            <b-table-column field="user.nom" label="Nom" sortable centered v-slot="props">
              {{ props.row.nom }}
            </b-table-column>

            <b-table-column field="user.username" label="Nom d'utilisateur" sortable centered v-slot="props">
              {{ props.row.username }}
            </b-table-column>

            <b-table-column field="user.email" label="Email" sortable centered v-slot="props">
              {{ props.row.email }}
            </b-table-column>

            <b-table-column field="user.createdAt" label="Crée le" sortable centered v-slot="props">
                <span class="tag is-success">
                    {{ new Date(props.row.createdAt).toLocaleDateString() }}
                </span>
            </b-table-column>

            <b-table-column field="user.updatedAt" label="Crée le" sortable centered v-slot="props">
                <span class="tag is-warning">
                    {{ new Date(props.row.updatedAt).toLocaleDateString() }}
                </span>
            </b-table-column>

          </b-table>
        </section>
      </div>
    </div>
  </section>
</template>

<script>
import { IS_FETCHING, NEED_FETCHING } from "@/constants/fetchingConst";
import { API_URL } from "@/constants/contants";
import { isLoading } from "@/constants/fetchingConst";

export default {
  data() {
    return {
      users: NEED_FETCHING,
      isLoading: isLoading(this.users),
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: 'bottom',
      defaultSortDirection: 'asc',
      sortIcon: 'arrow-up',
      sortIconSize: 'is-small',
      currentPage: 1,
      perPage: 5,
      checkedRows: []
    };
  },
  async fetch() {
    console.log(this.users);
    if (this.users === NEED_FETCHING) {
      this.users = IS_FETCHING;
      try {
        this.users = await this.$axios.$get(`${API_URL}/user/all`);
        console.log(this.users);
      } catch (e) {
        e.message = "Impossible de récupérer les données";
        this.users = e;
      }
    }
  },
};
</script>
