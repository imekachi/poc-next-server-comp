import { getApolloClient } from '@/libs/apollo'
import { EnvLegend } from '@/modules/EnvLegend'
import { PageHeader } from '@/modules/PageHeader'
import { pokemonsQuery, PokemonsQuery } from '@/modules/pokemon'
import { PokemonList } from '@/modules/PokemonList'

export default async function PokemonServerOnlyPage() {
  const client = getApolloClient()
  const { data } = await client.query<PokemonsQuery>({
    query: pokemonsQuery,
    context: {
      fetchOptions: {
        next: { revalidate: 5 },
      },
    },
  })

  return (
    <EnvLegend env="server">
      <div className="p-6">
        <PageHeader
          title="Pokemon page"
          description="Server-only data fetching"
        />
        <PokemonList pokemons={data.getAllPokemon} />
      </div>
    </EnvLegend>
  )
}
