<template>
  <div>
    <input
      type="search"
      placeholder="search"
      v-model="search"
      id="search-box"
    />
    <div class="single-post" v-for="post in filteredPosts" :key="post.id">
      <router-link :to='`/post/${post.id}`'><h3 v-rainbow>{{ post.title | toUppercase }}</h3></router-link>
      <p>User: {{ post.userId }} - ID: {{ post.id }}</p>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      search: "",
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
      .then((response) => response.json())
      .then((posts) => (this.posts = posts));
  },
  computed: {
    filteredPosts: function () {
      return this.posts.filter((post) => {
        return post.title.match(this.search);
      });
    },
  },
  filters: {
    toUppercase: function (value) {
      return value.toUpperCase();
    },
  },
  directives: {
    rainbow: {
      bind(el, binding, vnode) {
        el.style.color = "#" + Math.random().toString(16).slice(2, 8);
      },
    },
  },
};
</script>

<style scoped>
.single-post {
  border: 1px solid #ddd;
  padding: 10px;
  margin: 10px 0;
}
</style>