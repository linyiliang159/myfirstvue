import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let header = new Vuex.Store({
  state: { //存储空间
    collapsed: false
  },
  mutations: { //响应事件
    collapse: function (state) {
      state.collapsed = !state.collapsed;
    }
  }
});


export default header;
