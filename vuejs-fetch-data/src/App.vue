<template>
  <div id="app">
    <single-post v-for="post in posts" :key="post.id" :post="post"></single-post>
  </div>
</template>

<script>
import SinglePostVue from "./components/SinglePost.vue";
export default {
  name: "app",
  components: {
    "single-post": SinglePostVue,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((posts) => this.posts = posts.slice(0, 5));
  },
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 600px;
  margin: 0 auto;
}
</style>
