'use client'

import { EnvLegend } from '@/modules/EnvLegend'
import { usePokemonsQuery } from '@/modules/pokemon'
import { PokemonList } from '@/modules/PokemonList'

export const PokemonListWithQuery = () => {
  const { data, loading } = usePokemonsQuery()

  let content = <div>Pokemons not found</div>

  if (loading) {
    content = <div>Loading pokemons on client...</div>
  } else if (data) {
    content = <PokemonList pokemons={data.getAllPokemon} />
  }

  return (
    <EnvLegend env="client">
      <div className="p-6">{content}</div>
    </EnvLegend>
  )
}
