'use client'

import { ApolloProvider } from '@apollo/client'
import { useMemo } from 'react'
import { getApolloClient } from '@/libs/apollo'
import { PokemonListWithQuery } from '@/modules/PokemonListWithQuery'

export default function PokemonClientOnly() {
  const client = useMemo(() => getApolloClient(), [])

  return (
    <ApolloProvider client={client}>
      <PokemonListWithQuery />
    </ApolloProvider>
  )
}
