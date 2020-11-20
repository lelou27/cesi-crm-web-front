<template>
  <TableDevis :modules="{}" />
</template>

<script>
import Table from "@/components/Devis/Table_Module";
import TableDevis from "@/components/Devis/Table_Module";

export default {
  name: "selec_module",

  components: {
    TableDevis,
    Table,
  },
};
</script>
