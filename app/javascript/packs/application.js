import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import VueTextareaAutosize from 'vue-textarea-autosize'
import App from '../App.vue'
import router from '../router.js'
import store from '../store'
import 'semantic-ui-css/semantic.css'

sync(store, router)

Vue.use(VueTextareaAutosize)

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  new Vue({
    store,
    router,
    render: h => h(App)
  }).$mount('app')
})
