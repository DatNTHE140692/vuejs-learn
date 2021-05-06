<template>
  <header>
    <h1 @click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
  methods: {
    changeTitle: function () {
      this.$emit('changeTitle', 'Vue Wizards');
    },
  },
};
</script>

<style scoped>
header {
  background: green;
  padding: 50px;
}

h1 {
  color: white;
  text-align: center;
}
</style>
