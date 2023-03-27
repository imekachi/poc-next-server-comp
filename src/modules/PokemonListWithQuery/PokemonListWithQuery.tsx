'use client'

import { EnvLegend } from '../EnvLegend'
import { usePokemonsQuery } from '../pokemon'
import { PokemonList } from '../PokemonList'

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
