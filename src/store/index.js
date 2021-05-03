import { createStore } from 'vuex'

export default createStore({
  state: {
    people: [],
    searchString: '',
    filterColumn: null,
    filterValue: null,
  },
  getters: {
    filteredData(state){
      //console.log()
      return state.people
        .filter((person)=>!state.filterColumn || !state.filterValue || person.preferences[state.filterColumn] === state.filterValue)
        .filter((person)=>objectToString(person).toLowerCase().includes(state.searchString.toLowerCase()))
    }
  },
  mutations: {
    setPeople(state, value){
      state.people = value;
    },
    setSearchString(state, value){
      state.searchString = value;
    },
    setFilter(state, value){
      state.filterColumn = value.column;
      state.filterValue = value.value;
    }
  },
  actions: {
    retrievePeople(store){
      fetch('https://run.mocky.io/v3/70e5b0ad-7112-41c5-853e-b382a39e65b7')
        .then(res=>res.json())
        .then(json=>store.commit('setPeople', json.people))
    },
    searchStringUpdated(store, value){
      store.commit('setSearchString', value)
    },
    filterUpdated(store, value){
      store.commit('setFilter', value)
    },
    resetFilter(store){
      store.commit('setFilter', {column: null, value: null})
    },
  },
  modules: {
  }
})

function objectToString(obj) {
  return Object.values(obj)
    .map((v)=>typeof v === 'object' ? objectToString(v) : v)
    .join('  ');
}
