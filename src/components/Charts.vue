<template>
  <div>
    je vais afficher des charts ( partie bloqué :)


    <PieChart title="Countries" :labels="countries.labels"  :data="countries.data" :options="{}" />

    <PieChart title="Gender" :labels="genders.labels"  :data="genders.data" :options="{}" />

    <PieChart title="Pets" :labels="pets.labels"  :data="pets.data" :options="{}" />

    <PieChart title="Fruits" :labels="fruits.labels"  :data="fruits.data" :options="{}" />

    <PieChart title="Colors" :labels="colors.labels"  :data="colors.data" :options="{}" />

  </div>
</template>

<script>
import PieChart from "@/components/PieChart";
export default {
  name: 'Charts',
  components: {PieChart},
  props:{
    data: Array,
  },
  computed:{
    countries(){
      return this.aggregateDataForColumn(this.data, 'contact.country')
    },
    genders(){
      return this.aggregateDataForColumn(this.data, 'gender')
    },
    pets(){
      return this.aggregateDataForColumn(this.data, 'preferences.favorite_pet')
    },
    fruits(){
      return this.aggregateDataForColumn(this.data, 'preferences.favorite_fruit')
    },
    colors(){
      return this.aggregateDataForColumn(this.data, 'preferences.favorite_color')
    },
  },
  methods:{
    aggregateDataForColumn(data, column){
      let result = data.reduce((acc, obj)=>{
        let keyValue = this.findValueAtPath(obj, column);
        if(!acc[keyValue]){
          acc[keyValue] = 1;
        }else{
          acc[keyValue]++;
        }
        return acc;
      }, {})
      return { labels:Object.keys(result), data:Object.values(result) }
    },
    findValueAtPath(obj, path, defaultValue = '') {
      const value = path.split('.')
          .reduce(function(acc, part) {
            return acc && acc[part];
          }, obj);
      return value !== null && value !== undefined ? value : defaultValue;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>