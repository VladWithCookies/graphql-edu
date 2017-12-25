import Vue from 'vue'
import VueApollo from 'vue-apollo'
import { ApolloClient, createNetworkInterface } from 'apollo-client'

Vue.use(VueApollo)

const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:3000/api/v1/graphql',
    transportBatching: true,
  }),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
	defaultClient: apolloClient,
})

export default apolloProvider
