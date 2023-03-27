'use client'

import { ApolloProvider } from '@apollo/client'
import { ReactNode, useMemo } from 'react'
import { getApolloClient } from '@/libs/apollo'

export type PokemonClientLayoutProps = {
  children: ReactNode
}

export default function PokemonClientLayout({
  children,
}: PokemonClientLayoutProps) {
  const client = useMemo(() => getApolloClient(), [])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
