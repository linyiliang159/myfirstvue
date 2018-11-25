// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Locale from './LocaleProvider' //国际化语言包
import router from './router' //路由
import Antd from 'ant-design-vue' //蚂蚁UI
import 'ant-design-vue/dist/antd.less' //蚂蚁Less

Vue.use(Antd)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { Locale },
  template: '<Locale/>'
})
