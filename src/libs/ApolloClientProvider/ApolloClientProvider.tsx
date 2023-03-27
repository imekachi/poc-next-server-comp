'use client'

import { ApolloProvider } from '@apollo/client'
import { ReactNode, useMemo } from 'react'
import { getApolloClient } from '@/libs/apollo'
import { EnvLegend } from '@/modules/EnvLegend'

export type ApolloClientProviderProps = {
  children: ReactNode
}

/**
 * Create apollo client on 'client'
 */
export const ApolloClientProvider = ({
  children,
}: ApolloClientProviderProps) => {
  const client = useMemo(() => getApolloClient(), [])

  return (
    <EnvLegend env="client">
      <div className="p-6">
        <p className="mb-4">ApolloClientProvider</p>
        <ApolloProvider client={client}>{children}</ApolloProvider>
      </div>
    </EnvLegend>
  )
}
