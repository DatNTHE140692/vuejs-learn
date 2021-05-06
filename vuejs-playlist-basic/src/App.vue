<template>
  <div>
    <app-header :title="title" @changeTitle="updateTitle($event)"></app-header>
    <app-body :greetings="greetings"></app-body>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-body": Body,
  },
  data() {
    return {
      title: 'Greeting',
      greetings: [
        { name: "Hi", show: false },
        { name: "Hello", show: false },
        { name: "Greeting", show: false },
        { name: "Howdy", show: false },
        { name: "Good Morning", show: false },
        { name: "Good Afternoon", show: false },
      ],
    };
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    },
  }
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  padding: 0;
  margin: 0;
  outline: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 600px;
  margin: 0 auto;
}
</style>
