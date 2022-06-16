import Vue from "vue";
import vuex from "vuex"; 

Vue.use(vuex);

export default  new vuex.Store({
  state: {
    num:8,
    tanka: 100
  },
  getters:{
    number: state => state.num,
    tanKa: state => state.tanka
  },
  mutations:{
    setNum(state, num){
      state.num = num
    }
  },
  actions:{
    setNum({commit}, num){
      commit('setNum', num)
    }
  } 
})