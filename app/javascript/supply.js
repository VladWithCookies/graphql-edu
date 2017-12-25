import Vue from 'vue'
import VueSupply, { register } from 'vue-supply'
import Articles from './supplies/articles'

Vue.use(VueSupply)

register('Articles', Articles)
