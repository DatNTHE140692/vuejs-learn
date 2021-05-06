<template>
  <footer>
      <p>{{copyright}} - {{title}}</p>
  </footer>
</template>

<script>
export default {
    props: ['title'],
    data() {
        return {
            copyright: '2021'
        }
    }
}
</script>

<style scoped>
footer {
    background-color: #222;
    padding: 50px;
}

p{
    color: lightgreen;
    text-align: center;
}
</style>