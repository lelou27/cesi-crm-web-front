<template>
  <b-table
    :data="data"
    :columns="columns"
    :per-page="perPage"
    :paginated="isPaginated"
    :loading="isLoading"
    focusable
    @select="selected"
  >
  </b-table>
</template>

<script>
import { API_URL, ROUTE_GET_CLIENT } from "~/constants/contants";

export default {
name: "ClientTable",
  async fetch() {
  this.isLoading = true
        try {
      const client = await this.$axios.$get(
        `${API_URL}${ROUTE_GET_CLIENT}`
      );
    this.data = client
    } catch (e) {
      throw e;
    }
    this.isLoading = false

  },
  data() {
    return {
      isLoading: false,
      perPage: 10,
      data: [],
      isPaginated: true,
      columns: [
        {
          field: 'first_name',
          label: 'Nom',
          searchable: true,
          sortable: true,
        },
        {
          field: 'city',
          label: 'Ville',
          searchable: true,
          sortable: true,
        },
        {
          field: 'mail',
          label: 'Email',
          searchable: true,
        },
        {
          field: 'phone',
          label: 'Téléphone',
        },
      ],
    }
  },
  methods: {
    selected(item){
      console.log(item._id)
      this.$router.push(`/detailClient?id=${item._id}` )
    },
  }

}
</script>

<style scoped>

</style>
