import Vue from 'vue'
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import '~/css/index.css'
// import '~/css/timetable.css'
import App from './App'
import router from './router/index'
import Vuebar from 'vuebar'
import VueShortkey from 'vue-shortkey'

require('autolink-js')

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

const EventBus = new Vue()

Object.defineProperties(Vue.prototype, {
  $bus: {
    get: function () {
      return EventBus
    }
  }
})

Vue.use(iView)
Vue.use(Vuebar)
Vue.use(VueShortkey)
// Vue.use(FullCalendar)

Vue.directive('focus', {
  componentUpdated: function (el) {
    el.getElementsByTagName('input')[0].focus()
  }
})

/* eslint-disable no-new */
new Vue({
  components: {App},
  template: '<App/>',
  // router为什么要这么写
  router,
  store
}).$mount('#app')
