import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: process.env.GRAPHQL_ENDPOINT || 'https://www.dnd5eapi.co/graphql',
    cache: new InMemoryCache(),
});

export default apolloClient;