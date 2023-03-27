import { EnvLegend } from '@/modules/EnvLegend'
import { PageHeader } from '@/modules/PageHeader'
import { PokemonListWithQuery } from '@/modules/PokemonListWithQuery'

export default function PokemonClientOnly() {
  return (
    <EnvLegend env="server">
      <div className="p-6">
        <PageHeader
          title="Pokemon page"
          description="Client-only data fetching"
        />
        <PokemonListWithQuery />
      </div>
    </EnvLegend>
  )
}
