<template>
  <div class="visualizator">
    <Filtering v-model="people" />
    je vais afficher un tableau de données ici!
    <Datatable :data="people" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Datatable from './Datatable.vue'
import Filtering from './Filtering.vue'
export default {
  components: { Datatable, Filtering },
  name: 'Visualizator',
  props: {
    msg: String
  },
  computed:{

    ...mapState(['people']),

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
