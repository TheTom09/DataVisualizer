<template>
  <div class="filtering">
    composant pour filtrer!

    <input type="text" v-model="searchString" />

  </div>
</template>

<script>
export default {
  name: 'Filtering',
  data(){
    return {
      searchString: '',
    }
  },
  watch: {
    searchString(value){
      this.$store.dispatch('searchStringUpdated', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
