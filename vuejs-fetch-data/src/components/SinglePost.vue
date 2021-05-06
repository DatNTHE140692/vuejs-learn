<template>
  <div class="single-post">
    <h3>{{ post.title }}</h3>
    <p>User: {{ post.userId }} - ID: {{ post.id }}</p>
    <p>{{ post.body }}</p>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style scoped>
.single-post {
    border: 1px solid #ddd;
    padding: 10px;
    margin: 10px 0;
}
</style>