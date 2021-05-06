<template>
  <div>
    <ul>
      <li v-for="(g, index) in greetings" :key="g" @click="g.show = !g.show">
        <h2>{{ index + 1 }}</h2>
        <h3 v-show="g.show">{{ g.name }}</h3>
      </li>
    </ul>
    <button @click="deleteNinja">Delete</button>
  </div>
</template>

<script>
export default {
  props: ['greetings'],
  data() {
    return {};
  },
  methods: {
    deleteNinja: function () {
      this.greetings.pop();
    },
  },
};
</script>

<style scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
}

li {
  list-style: none;
  width: 33%;
  margin: 0.1%;
  text-align: center;
  border: 1px solid #000;
}
</style>