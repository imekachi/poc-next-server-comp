import Image from 'next/image'
import { Pokemon } from '@/modules/pokemon'

export type PokemonListProps = {
  pokemons: Pokemon[]
}

export const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <ol className="space-y-2">
      {pokemons.map(pokemon => {
        return (
          <li key={pokemon.key} className="flex items-center space-x-2">
            <Image
              src={pokemon.sprite}
              alt={pokemon.species}
              width={20}
              height={20}
              className="h-5 w-5 rounded"
            />
            <span className="capitalize">{pokemon.species}</span>
          </li>
        )
      })}
    </ol>
  )
}
