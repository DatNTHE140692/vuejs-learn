<template>
  <form-helper>
    <div slot="form-header">
      <h3>Form One</h3>
      <p>Form's Information</p>
    </div>
    <div slot="form-fields">
      <input type="text" placeholder="name" required />
      <input type="password" placeholder="password" required />
    </div>
    <div slot="form-controls">
      <button @click="handleSubmit">Submit</button>
    </div>
  </form-helper>
</template>

<script>
import FormHelperVue from "./FormHelper.vue";

export default {
  data() {
    return {};
  },
  components: {
    "form-helper": FormHelperVue,
  },
};
</script>

<style scoped>
</style>
