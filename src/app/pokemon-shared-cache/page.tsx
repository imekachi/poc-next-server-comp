import { EnvLegend } from '@/modules/EnvLegend'
import { PageHeader } from '@/modules/PageHeader'
import { PokemonListWithQuery } from '@/modules/PokemonListWithQuery'

export default async function PokemonSharedCachePage() {
  return (
    <EnvLegend env="server">
      <div className="p-6">
        <PageHeader
          title="Pokemon page"
          description="Fetch on server and share cache with client. Then fetch on client (cache hit)"
        />
        <PokemonListWithQuery />
      </div>
    </EnvLegend>
  )
}
