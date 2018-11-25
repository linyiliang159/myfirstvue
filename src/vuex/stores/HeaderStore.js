import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let user = new Vuex.Store({
  state: { //存储空间
    collapsed: null
  },
  mutations: { //响应事件
    collapse: function (state) {
      state.collapsed = !state.collapsed;
    }
  }
});


export default user;
