import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: '',
  },
  getters: {
    logInUser : state => state.user,
  },
  mutations: {
    REMOVE_USER(state, data) {
      localStorage.setItem('token', data)
      localStorage.setItem('auth', data)
      state.user = data;
    },
    SET_USER(state, data) {
      state.user = data;
    },
  },
  actions: {
    async GET_USER({commit}) {
      await axios.get('user').then(res => commit('SET_USER', res.data))
    }
  },
  modules: {
  }
})
