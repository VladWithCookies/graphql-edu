import Vue from 'vue'
import Vuex from 'vuex'
import { injectSupply } from 'vue-supply'
import getters from './getters'
import mutations from './mutations'
import supply from './supply'

Vue.use(Vuex)

export const supplyCache = {}

const storeOptions = { supply, getters, mutations }
const finalOptions = injectSupply(storeOptions, supplyCache)

export default new Vuex.Store(finalOptions)
