<template>
  <div class="filtering">
    composant pour filtrer!

    <input type="text" v-model="searchString" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Filtering',
  props: {
    modelValue: Array,
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
