<template>
  <div>
    je vais afficher des charts
    

    <PieChart :chartData="{datasets: [{data:[1,2,3,4,5]}], labels: ['A', 'B', 'C', 'D', 'E']}" :options="{}" />
 
  </div>
</template>

<script>

import PieChart from './PieChart.vue';

export default {
  name: 'Charts',
  components: {PieChart},
  props:{
    data: Array,
  },
  computed: {
    countries(){
      return this.aggregatedDataForColumn(this.data, 'contact.country')
    },
    genders(){
      return this.aggregatedDataForColumn(this.data, 'gender')
    },
    pets(){
      return this.aggregatedDataForColumn(this.data, 'preferences.favorite_pet')
    },
    fruits(){
      return this.aggregatedDataForColumn(this.data, 'preferences.favorite_fruit')
    },
    colors(){
      return this.aggregatedDataForColumn(this.data, 'preferences.favorite_color')
    },
  },
  methods: {
    aggregatedDataForColumn(data, column){
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
