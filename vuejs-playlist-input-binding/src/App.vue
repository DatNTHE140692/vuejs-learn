<template>
  <div id="app">
    <form>
      <label>Blog Title:</label>
      <input type="text" v-model.lazy="blog.title" />
      <label>Blog Content:</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div class="checkboxes">
        <h3>Favorites</h3>
        <input type="checkbox" v-model="blog.favorites" value="Banana" /> Banana
        <input type="checkbox" v-model="blog.favorites" value="Apple" /> Apple
        <input type="checkbox" v-model="blog.favorites" value="Cherry" /> Cherry
        <input type="checkbox" v-model="blog.favorites" value="Flower" /> Flower
      </div>
    </form>
    <div id="preview">
      <p>Blog title: {{ blog.title }}</p>
      <p>Blog content: {{ blog.content }}</p>
      <p>Favorites</p>
      <ul>
        <li v-for="f in blog.favorites" :key="f">{{ f }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      blog: {
        title: "",
        content: "",
        favorites: [],
      },
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
