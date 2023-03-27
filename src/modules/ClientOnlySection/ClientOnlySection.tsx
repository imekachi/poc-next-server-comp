'use client'

import { EnvLegend } from '@/modules/EnvLegend'
import { HybridComp } from '@/modules/HybridComp'

export const ClientOnlySection = () => {
  return (
    <EnvLegend env="client">
      <div className="p-6 space-y-4">
        <h2>ClientOnlySection</h2>
        <HybridComp env="client" />
      </div>
    </EnvLegend>
  )
}
