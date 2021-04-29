import { createStore } from 'vuex'

export default createStore({
  state: {
    people: [],
    searchString: '',
  },
  getters: {
    filteredData(state){
      //console.log()
      return state.people
      .filter((person)=>
        Object.values(person).join(' ').toLowerCase().includes(state.searchString.toLowerCase()))
    }
  },
  mutations: {
    setPeople(state, value){
      state.people = value;
    },
    setSearchString(state, value){
      state.searchString = value;
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
    }
  },
  modules: {
  }
})
