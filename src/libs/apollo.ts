import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import deepmerge from 'deepmerge'

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

/**
 * Manually serialize extracted cache to prevent this warning
 * "Warning: Only plain objects can be passed to Client Components from Server Components. Classes or other objects with methods are not supported."
 * when sending the cache from a server component to a client component.
 */
export function getSerializedApolloCache<T extends object>(
  client: ApolloClient<T>
): string {
  return JSON.stringify(client.cache.extract())
}

export function parseSerializedApolloCache<T extends object>(
  serializedCache: string
): T {
  return JSON.parse(serializedCache)
}

export function initializeCache<T extends object>(
  client: ApolloClient<T>,
  initialCache: T
) {
  // Get existing cache from client side
  const existingCache = client.extract()

  // Merge the existing cache and the initialCache by prioritizing existing cache.
  const mergedCache = deepmerge(initialCache, existingCache) as T

  // Restore the cache with the merged cached
  client.cache.restore(mergedCache)
}
