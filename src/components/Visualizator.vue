<template>
  <div>
    <Filtering />
    Voici mes différents composants :
    <Datatable :data="filteredData" />
    <Charts :data="filteredData"/>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
import Datatable from './Datatable.vue'
import Filtering from './Filtering.vue'
import Charts from './Charts.vue'

export default {
  name: 'Visualizator',
  components: { Datatable, Filtering, Charts },
  computed:{

    ...mapState(['people']),
    ...mapGetters(['filteredData']),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
