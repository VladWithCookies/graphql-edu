import Vue from 'vue'
import axios from 'axios'
import { sync } from 'vuex-router-sync'
import VueTextareaAutosize from 'vue-textarea-autosize'
import App from '../App.vue'
import router from '../router.js'
import store from '../store'
import 'semantic-ui-css/semantic.css'

let token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token
axios.defaults.headers.common['Accept'] = 'application/json'

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
