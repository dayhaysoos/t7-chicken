import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';


const client = new ApolloClient({
  networkInterface: createNetworkInterface('http://my-api.graphql.com')
});
