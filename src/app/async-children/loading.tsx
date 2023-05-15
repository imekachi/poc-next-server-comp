import { Timer } from '@/app/async-children/Timer'
import { EnvLegend } from '@/modules/EnvLegend'

export default function AsyncChildrenPageLoading() {
  return (
    <EnvLegend env="server">
      <div className="p-6">
        <p>(loading.tsx) Page with Async children is loading...</p>
        <Timer />
      </div>
    </EnvLegend>
  )
}
