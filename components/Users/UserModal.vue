<style lang="scss" scoped>
.fields-modal {
  margin: 0.5rem;
}

.modal-card-foot {
  div {
    width: 50%;
  }
}

.select-role {
  margin-bottom: 1rem;
}

.tag-dates {
  display: flex;
  justify-content: start;

  span:last-child {
    padding-left: 0.5rem;
  }
}

.modal-btns {
  display: flex;
  justify-content: end;
}
</style>

<template>
  <section>
    <b-modal
      v-model="showModal"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
      :on-cancel="close"
    >
      <template #default="props">
        <form action="" @submit="majUser">
          <div class="modal-card">
            <header class="modal-card-head">
              <p class="modal-card-title">
                {{ title }}
              </p>
              <button type="button" class="delete" @click="close" />
            </header>
            <section class="modal-card-body">
              <div v-if="error !== null">
                <b-notification
                  type="is-danger"
                  :closable="true"
                  class="text-center"
                  role="alert"
                >
                  {{ error.message }}
                </b-notification>
              </div>
              <span v-for="field in fields" class="fields-modal">
                <div v-if="field.type !== 'date'">
                  <b-field :label-position="'on-border'" :label="field.display">
                    <b-input
                      :type="field.type"
                      :value="data[field.field]"
                      :placeholder="field.display"
                      :required="field.required"
                      v-model="data[field.field]"
                    >
                    </b-input>
                  </b-field>
                </div>
              </span>
              <div v-if="roles">
                <b-field class="select-role">
                  <b-select
                    v-model="roleSelected"
                    placeholder="Role"
                    expanded
                    required
                  >
                    <option
                      v-for="option in roles"
                      :value="option._id"
                      :key="option._id"
                      :selected="data.role && option._id === data.role._id"
                    >
                      {{ option.role }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </section>
            <footer class="modal-card-foot">
              <div class="tag-dates">
                <span v-for="field in fields">
                  <span v-if="field.type === 'date'">
                    <span :class="`tag is-${field.tag}`">
                      {{ new Date(data[field.field]).toLocaleDateString() }}
                    </span>
                  </span>
                </span>
              </div>
              <div class="modal-btns">
                <b-button class="button" type="button" @click="close">
                  Fermer
                </b-button>
                <b-button
                  class="button is-primary"
                  @click="majUser"
                  :loading="isLoading"
                  >Mettre à jour</b-button
                >
              </div>
            </footer>
          </div>
        </form>
      </template>
    </b-modal>
  </section>
</template>

<script>
import { API_URL } from "@/constants/contants";

export default {
  name: "UserModal",
  props: ["data", "isComponentModalActive", "title"],
  data() {
    return {
      showModal: this.isComponentModalActive,
      fields: [
        {
          field: "nom",
          display: "Nom",
          type: "text",
          required: true,
        },
        {
          field: "prenom",
          display: "Prénom",
          type: "text",
          required: true,
        },
        {
          field: "email",
          display: "Email",
          type: "email",
          required: true,
        },
        {
          field: "username",
          display: "Nom d'utilisateur",
          type: "text",
          required: true,
        },
        {
          field: "createdAt",
          display: "Crée le",
          type: "date",
          required: true,
          tag: "success",
        },
        {
          field: "updatedAt",
          display: "Mis à jour le",
          type: "date",
          required: true,
          tag: "warning",
        },
      ],
      roles: null,
      isLoading: false,
      error: null,
      roleSelected: this.data.role ? this.data.role._id : "",
    };
  },
  methods: {
    close() {
      this.showModal = false;
      this.$emit("close-modal", this.showModal);
    },
    async majUser(event) {
      event.preventDefault();
      this.isLoading = true;

      try {
        this.data.role = this.roles.filter(
          (role) => role._id === this.roleSelected
        )[0];
        await this.$axios.$put(`${API_URL}/user/${this.data._id}`, this.data);
        this.close();
      } catch (e) {
        this.error = e;
      }
      this.isLoading = false;
    },
  },
  async fetch() {
    this.isLoading = true;
    this.error = null;
    if (this.roles === null) {
      try {
        this.roles = await this.$axios.$get(`${API_URL}/role`);
      } catch (e) {
        e.message = "Impossible de récupérer les données";
        this.error = e;
      }
    }
    this.isLoading = false;
  },
};
</script>
