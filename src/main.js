// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
import Locale from './LocaleProvider' //国际化语言包
import router from './router' //路由
import Antd from 'ant-design-vue' //蚂蚁UI
import 'ant-design-vue/dist/antd.less' //蚂蚁Less
import MenuUtils from '@/utils/MenuUtils'
import {httpPost, httpGet} from '@/common/HttpBean'
import LocalStorageHelper from '@/common/LocalStorageHelper'

Vue.prototype.httpPost = httpPost;
Vue.prototype.httpGet = httpGet;
Vue.prototype.LocalStorageHelper = LocalStorageHelper;


Vue.use(Antd)

Vue.config.productionTip = false

//这里是防止用户手动刷新页面，整个app要重新加载,动态新增的路由，会消失，所以我们重新add一次
let data = JSON.parse(window.sessionStorage.getItem('user'))
if (data) {
  let routes = []
  MenuUtils(routes, data)
  router.options.routes[0].children = routes;
  router.addRoutes(router.options.routes);
  window.sessionStorage.removeItem('isLoadNodes')
}

new Vue({
  el: '#app',
  router,
  components: {Locale},
  template: '<Locale/>'
})
