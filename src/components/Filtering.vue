<template>
  <div>
    Filtre :

    <input type="text" v-model="searchString" />

    <label for="column"> favorite</label>
    <select name="column" v-model="column">
      <option value="favorite_fruit">Fruit</option>
      <option value="favorite_color">Color</option>
      <option value="favorite_pet">Pet</option>
    </select>

    <label for="value"> equal</label>
    <select name="value" v-model="value">
      <option v-for="opt in options[column]" :key="opt">{{opt}}</option>
    </select>

    <button @click="resetFilter">Reset Filters</button>

  </div>
</template>

<script>
export default {
  name: 'Filtering',
  data(){
    return {
      searchString: '',
      column: null,
      value: null,
      options: {
        favorite_fruit: ['Apple', 'Pineapple', 'Pear', 'Strawberry', 'Orange', 'Mango'],
        favorite_color: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple'],
        favorite_pet: ['Cat', 'Dog', 'Bird', 'Rat'],
      }
    }
  },
  watch: {
    searchString(value){
      this.$store.dispatch('searchStringUpdated', value)
    },
    value(value){
      this.$store.dispatch('filterUpdated', {column:this.column, value:value})
    },
  },
  methods:{
    resetFilter(){
      this.searchString = '';
      this.$store.dispatch('resetFilter')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
