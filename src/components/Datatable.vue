<template>
  <div>
    Tableau :

    <table>

      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Address</th>
          <th>Fav Fruit</th>
          <th>Fav Pet</th>
          <th>Fav Color</th>
        </tr>
      </thead>
      <tbody>
       <tr v-for="row in paginatedData" :key="row.id">
          <td>{{row.firstname + ' ' + row.lastname}}</td>
          <td>{{row.gender}}</td>
          <td>{{row.contact.email}}</td>
          <td>{{row.contact.address}}</td>
          <td>{{row.preferences.favorite_fruit}}</td>
          <td>{{row.preferences.favorite_pet}}</td>
          <td>{{row.preferences.favorite_color}}</td>
        </tr> 
      </tbody>

    </table>

    <Pagination :limit="pageSize" :offset="pageOffset" :total="data.length" @pageChanged="pageOffset = $event"/>

    <select v-model="pageSize">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
      <option value="100">100</option>
    </select>

    Showing rows from {{pageOffset+1}} to {{pageOffset+parseInt(pageSize)}} on {{totalItems}}

  </div>
</template>

<script>

import Pagination from './Pagination.vue'
export default {
  name: 'Datatable',
  components: { Pagination },
  props: {
    data: Array
  },
  data(){
    return {
      pageSize: 10,
      pageOffset: 0,
    }
  },
  computed:{
    totalItems(){
      return this.data.length;
    },
    paginatedData(){
      return this.data.slice(this.pageOffset, this.pageOffset+parseInt(this.pageSize))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
