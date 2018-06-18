import Vue from 'vue'
import App from './App'
import { store } from './store'
import router from './router'
import axios from 'axios'
import VueCarousel from 'vue-carousel'
import Tooltip from 'vue-directive-tooltip'
import DateFilter from './filters/date'


Vue.use(Tooltip)
Vue.filter('date', DateFilter)
Vue.use(VueCarousel)
axios.defaults.baseURL = 'http://localhost/wordpress/wp-json'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {    
    this.$store.dispatch('init')
  }
})