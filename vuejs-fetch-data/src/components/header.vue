<template>
  <nav>
    <ul>
      <li>
        <router-link to="/">Blog</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  max-width: 600px;
  margin: 10px auto;
  background-color: green;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}

li {
    margin-right: 10px;
    padding: 10px;
    background-color: black;
}

a {
    text-decoration: none;
    color: white;
}
</style>
