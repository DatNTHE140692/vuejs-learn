<template>
  <div id="app">
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="title" />
      <label>Blog Content:</label>
      <textarea v-model.lazy="content"></textarea>
    </form>
    <div id="preview">
      <p>Blog title: {{ title }}</p>
      <p>Blog content: {{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      title: "",
      content: "",
    };
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
