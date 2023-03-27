'use client'
import { ApolloProvider } from '@apollo/client'
import { ReactNode, useMemo } from 'react'
import { getApolloClient } from '@/libs/apollo'
import { EnvLegend } from '@/modules/EnvLegend'

/**
 * T = cache data
 */
export type ApolloWithCacheProviderProps<T> = {
  extractedCache: T
  children: ReactNode
}

export const ApolloWithCacheProvider = <T,>({
  extractedCache,
  children,
}: ApolloWithCacheProviderProps<T>) => {
  const client = useMemo(() => {
    const apolloClient = getApolloClient()
    apolloClient.cache.restore(extractedCache)

    return apolloClient
  }, [extractedCache])

  return (
    <EnvLegend env="client">
      <div className="p-6">
        <div className="mb-4">ApolloWithCacheProvider</div>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </div>
    </EnvLegend>
  )
}
