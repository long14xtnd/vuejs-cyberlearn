<template>
  <tr>
    <td>
      <img :src="user.avatar" class="mr-2" alt="image" />
      {{ user.name }}
    </td>
    <td>{{ user.age }}</td>
    <td>
      <label
        v-for="(proLang, index) in user.programmingLanguage"
        :key="index"
        class="badge badge-gradient-primary mr-2"
        >{{ proLang }}</label
      >
    </td>
    <td>{{ user.gender }}</td>
    <td>
      <button
        type="button"
        class="mr-2 btn btn-gradient-danger btn-icon-text"
        @click="handleRemoveUser(user.id)"
      >
        <i class="mdi mdi-delete btn-icon-prepend"></i> Remove
      </button>
      <button
        type="button"
        class="btn btn-gradient-info btn-icon-text"
        @click="handleModalEdit"
      >
        <i class="mdi mdi-border-color btn-icon-prepend"></i> Edit
      </button>
    </td>
  </tr>
  <teleport to="#app">
    <app-modal
      :isOpen="isOpenModalEdit"
      :handelCloseModal="handleCloseModalEdit"
    >
      <form-user :userInfo="user"></form-user>
    </app-modal>
  </teleport>
</template>

<script>
import { ref } from "vue";
// import { createNamespacedHelpers } from "vuex";
import { useStore } from "vuex";
// const { mapActions } = createNamespacedHelpers("user");

import FormUser from "./FormUser.vue";
export default {
  components: {
    FormUser,
  },
  props: {
    user: {
      type: Object,
    },
  },
  setup() {
    const store = useStore();
    const isOpenModalEdit = ref(false);
    function handleModalEdit() {
      isOpenModalEdit.value = true;
    }
    function handleCloseModalEdit() {
      this.isOpenModalEdit.value = false;
    }
    function handleRemoveUser(user) {
      store.dispatch("user/removeUserAction",user);
    }
    return {
      isOpenModalEdit,
      handleCloseModalEdit,
      handleModalEdit,
      handleRemoveUser,
    };
  },
  // data() {
  //   return {
  //     isOpenModalEdit: false,
  //   };
  // },

  // methods: {
  //   handleModalEdit() {
  //     this.isOpenModalEdit = true;
  //   },
  //   handleCloseModalEdit() {
  //     this.isOpenModalEdit = false;
  //   },
  //   ...mapActions({
  //     handleRemoveUser: "removeUserAction",
  //   }),
  // },
};
</script>

<style></style>
