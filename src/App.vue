<template>
  <Visualizator msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Visualizator from './components/Visualizator.vue'

export default {
  name: 'App',
  components: {
    Visualizator
  },
  created(){
    this.$store.dispatch('retrievePeople')
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
