import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueTextareaAutosize from 'vue-textarea-autosize'
import App from '../App'
import router from '../router'
import 'semantic-ui-css/semantic.css'

const httpLink = new HttpLink({
  uri: 'http://localhost:3000/api/v1/graphql',
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
  defaultOptions: {
    $loadingKey: 'loading',
  }
})

Vue.use(VueApollo)
Vue.use(VueTextareaAutosize)

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  new Vue({
    router,
    apolloProvider,
    render: h => h(App)
  }).$mount('app')
})
