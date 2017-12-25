import Vue from 'vue'
import Vuex from 'vuex'
import { injectSupply } from 'vue-supply'
import storeOptions from '../storeModules'

Vue.use(Vuex)

export const supplyCache = {}

const finalOptions = injectSupply(storeOptions, supplyCache)

export default new Vuex.Store(finalOptions)
