<style lang="scss" scoped>
.fields-modal {
  margin: 0.5rem;
}

.modal-btns {
  width: 100%;
  display: flex;
  justify-content: end;
}

.select-role {
  margin-bottom: 1rem;
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
        <form action="" @submit="addUser">
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
                <b-field :label-position="'on-border'" :label="field.display">
                  <b-input
                    :type="field.type"
                    :placeholder="field.display"
                    :required="field.required"
                    v-model="user[field.field]"
                    @blur="generateUsernameAndEmail"
                  >
                  </b-input>
                </b-field>
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
                    >
                      {{ option.role }}
                    </option>
                  </b-select>
                </b-field>
              </div>
            </section>
            <footer class="modal-card-foot">
              <div class="modal-btns">
                <b-button class="button" type="button" @click="close">
                  Fermer
                </b-button>
                <b-button
                  class="button is-primary"
                  :loading="isLoading"
                  @click="addUser"
                  >Créer</b-button
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
import { reformatString } from "@/helpers/helpers";

export default {
  name: "UserModalCreate",
  props: ["isComponentModalActive", "title"],
  data() {
    return {
      showModal: this.isComponentModalActive,
      user: {
        username: null,
        email: null,
      },
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
          blurMethod: this.createUsername,
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
          field: "password",
          display: "Mot de passe",
          type: "password",
          required: true,
        },
      ],
      roles: null,
      isLoading: false,
      error: null,
      roleSelected: "",
    };
  },
  methods: {
    close() {
      this.showModal = false;
      this.$emit("close-modal", this.showModal);
    },
    async addUser(event) {
      event.preventDefault();
      this.isLoading = true;
      try {
        this.user.role = this.roleSelected;
        await this.$axios.$post(`${API_URL}/user/create`, this.user);
        this.user.createdAt = this.$moment();
        this.user.updatedAt = this.$moment();
        this.$emit("appendUser", this.user);
        this.close();
      } catch (e) {
        this.error = e;
      }
      this.isLoading = false;
    },
    generateUsernameAndEmail(event) {
      if (this.user.nom && this.user.prenom && !this.user.username) {
        this.user.username =
          reformatString(this.user.prenom.toLowerCase()) +
          reformatString(this.user.nom.charAt(0).toLowerCase());

        this.user.email = `${reformatString(
          this.user.prenom.toLowerCase()
        )}.${reformatString(this.user.nom.toLowerCase())}@madera.fr`;
      }
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
