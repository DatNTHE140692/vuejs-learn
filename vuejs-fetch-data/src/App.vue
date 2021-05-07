<template>
  <div id="app">
    <input type="search" placeholder="search" v-model="search" id="search-box"/>
    <single-post v-for="post in filteredPosts" :key="post.id" :post="post"></single-post>
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
      search: ''
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((posts) => this.posts = posts);
  },
  computed: {
    filteredPosts: function() {
      return this.posts.filter(post => {
        return post.title.match(this.search);
      })
    }
  },
  filters: {
    toUppercase: function(value) {
      return value.toUpperCase();
    }
  },
  directives: {
    'rainbow': {
      bind(el, binding, vnode) {
        el.style.color= '#' + Math.random().toString(16).slice(2, 8);
      }
    }
  }
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

#search-box {
  width: 100%;
}
</style>
