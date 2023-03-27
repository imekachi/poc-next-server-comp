import { gql, useQuery } from '@apollo/client'
import { Pokemon, pokemonFieldsFragment } from './pokemon'

export const pokemonsQuery = gql`
  query Pokemons {
    getAllPokemon(offset: 89, take: 10) {
      ...PokemonFields
    }
  }
  ${pokemonFieldsFragment}
`

export type PokemonsQuery = {
  getAllPokemon: Pokemon[]
}

export const usePokemonsQuery = () => useQuery<PokemonsQuery>(pokemonsQuery)
