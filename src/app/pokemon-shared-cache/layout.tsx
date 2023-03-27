import { ReactNode } from 'react'
import { getApolloClient } from '@/libs/apollo'
import { ApolloCacheInitializer } from '@/libs/ApolloCacheInitializer'
import { EnvLegend } from '@/modules/EnvLegend'
import { PokemonsQuery, pokemonsQuery } from '@/modules/pokemon'

export type SharedCacheLayoutProps = {
  children: ReactNode
}

export default async function SharedCacheLayout({
  children,
}: SharedCacheLayoutProps) {
  const client = getApolloClient()
  try {
    // Prefetch data from server
    // Promise.all / .allSettled here for parallel fetching
    await client.query<PokemonsQuery>({
      query: pokemonsQuery,
      context: {
        fetchOptions: {
          next: { revalidate: 30 },
        },
      },
    })
  } catch (err) {
    console.error('PokemonSharedCachePage: pokemonsQuery error')
  }

  return (
    <EnvLegend env="server">
      <div className="p-6">
        <div className="mb-4">
          Fetch and extract cache from server (layout.tsx)
        </div>
        <ApolloCacheInitializer extractedCache={client.cache.extract()}>
          {children}
        </ApolloCacheInitializer>
      </div>
    </EnvLegend>
  )
}