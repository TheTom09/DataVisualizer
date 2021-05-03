<template>

  <canvas id="chart-container">

  </canvas>

</template>

<script>
import Chart from 'chart.js';

const backgroundColor = [
  'rgba(255, 99, 132, 0.2)',
  'rgba(54, 162, 235, 0.2)',
  'rgba(255, 206, 86, 0.2)',
  'rgba(75, 192, 192, 0.2)',
  'rgba(153, 102, 255, 0.2)',
  'rgba(255, 159, 64, 0.2)'
]
const borderColor = [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
]

export default {
  props: ['data', 'labels', 'options', 'title'],
  data(){
    return {
      chart: null,
    }
  },
  watch:{
    data:{
      handler(){
        this.renderChart()
      },
    }
  },
  methods:{
    renderChart(){
      let ctx = this.$el.getContext('2d')

      try{
        if(this.chart){
          this.chart.destroy()
        }
        if(this.data){
          this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: this.labels,
              datasets: [{
                data: this.data,
                backgroundColor: this.generateColors(this.data/length, backgroundColor),
                borderColor: this.generateColors(this.data.length, borderColor),
                borderWidth: 1
              }]
            },
            options: {}
          });
        }
      }
      catch(e){
        console.warn('Je rencontre un problème!')
      }
    },
    generateColors(size, colorList){
      let result = [];
      for(let i = O; i < size; i++){
        result[i] = colorList[i % colorList.length]
      }
      return result;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>