'use client'

import { getApolloClient } from '@/libs/apollo'
import { PokemonListWithQuery } from '@/modules/PokemonListWithQuery'
import { ApolloProvider } from '@apollo/client'
import { useMemo } from 'react'

export default function PokemonClientOnly() {
  const client = useMemo(() => getApolloClient(), [])

  return (
    <ApolloProvider client={client}>
      <PokemonListWithQuery />
    </ApolloProvider>
  )
}
