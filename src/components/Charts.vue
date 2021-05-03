<template>
  <div class="container">
    <div class="buttons">
      <button class="pie" :class="{active: type === 'pie'}" @click="type = 'pie'" title="Pie"><i/></button>
    </div>
    <div class="chart-container">
      <PieChart v-if="type === 'pie'" :rows="rows" :col="col" @updateFilter="$emit('updateFilter', $event)"/>
    </div>
  </div>
</template>

<script>
  /* eslint-disable max-len */
  import PieChart from './PieChart.vue';

  export default {
    name: 'ChartWrapper',
    components: {
      PieChart,
    },
    props: {
      rows: Array,
      col: Object,
    },
    emits: ['updateFilter'],
    data() {
      return {
        type: 'pie',
      };
    },
    mounted() {
      this.type = this.col.defaultChartType || 'pie';
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
