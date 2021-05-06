<template>
  <div id="app">
    <keep-alive>
      <component :is="form"></component>
    </keep-alive>
    <button @click="form = 'form-one'">Show form one</button>
    <button @click="form = 'form-two'">Show form two</button>
  </div>
</template>

<script>
import FormOneVue from "./components/FormOne.vue";
import FormTwoVue from "./components/FormTwo.vue";
export default {
  name: "app",
  components: {
    "form-one": FormOneVue,
    "form-two": FormTwoVue,
  },
  data() {
    return {
      form: "form-one",
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
