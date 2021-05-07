<template>
  <div>
    Pagination :

    <ul>
      <li v-for="(p, index) in pages" :key="index" @click="changePage(index)" :class="{active: index === offset / limit}">
        {{index+1}}
      </li>
    </ul>  

  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    limit: Number,
    offset: Number, 
    total: Number,
  },
  emits: ['pageChanged'],
  computed:{
    pages(){
      return Math.ceil(this.total / this.limit)
    },
    currentPage(){
      return this.offset / this.limit
    },
  },
  methods:{
    changePage(index){
      this.$emit('pageChanged', index * this.limit);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

ul{
  list-style: none;
}
ul li{
  padding: 10px;
  border-radius: 10px;
  float: left;
  margin: 10px;
  cursor: pointer;
}
ul li:hover{
  background-color: #DCF6F9;
}
ul li.active{
  background-color: #00BBDB;
}
</style>
