import { gql } from '@apollo/client'

export type Pokemon = {
  key: string
  num: number
  species: string
  sprite: string
}

export const pokemonFieldsFragment = gql`
  fragment PokemonFields on Pokemon {
    key
    num
    species
    sprite
  }
`