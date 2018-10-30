import Vue from 'vue'
import App from './app.vue'
import router from './router'
import './assets/style/docs.scss'
import 'firacode/distr/fira_code.css'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Vuetify)

Vue.component('doc-header', () => import('./components/header'))

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App),

  router
})
