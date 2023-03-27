import { ClientOnlySection } from '@/modules/ClientOnlySection'
import { EnvLegend } from '@/modules/EnvLegend'
import { HybridComp } from '@/modules/HybridComp'

export default function Home() {
  return (
    <EnvLegend env="server">
      <div className="p-6 space-y-6">
        <h1>Homepage</h1>
        <ClientOnlySection />
        <HybridComp env="server" />
      </div>
    </EnvLegend>
  )
}
