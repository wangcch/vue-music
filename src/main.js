import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(VueLazyLoad, {
  loading: require('@/common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
