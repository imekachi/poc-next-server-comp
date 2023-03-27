import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

let apolloClient: ApolloClient<any> | null = null

function createApolloClient() {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'https://graphqlpokemon.favware.tech/v7',
    }),
    cache: new InMemoryCache(),
  })
}

export function getApolloClient() {
  // only use existing apollo client on client side
  const client =
    apolloClient && typeof window !== 'undefined'
      ? apolloClient
      : createApolloClient()

  // TODO: Populate cache

  return client
}
