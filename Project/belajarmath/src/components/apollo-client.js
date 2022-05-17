import { ApolloClient, InMemoryCache } from "@apollo/client";


const client = new ApolloClient({

    uri:'https://superb-cicada-95.hasura.app/v1/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-hasura-admin-secret':
            'r6QLmgs1kbHyrbpXNlQbUJdz9kT9DXmvsgqyVpVKexbProdOP3rFCqEG4d9X8VXw'
    },
});

export default client;