<template>
  <div class="single-post">
    <h3 v-rainbow>{{ post.title | toUppercase }}</h3>
    <p>User: {{ post.userId }} - ID: {{ post.id }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      post: {},
    };
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
  created () {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then((response) => response.json())
      .then((post) => (this.post = post));
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