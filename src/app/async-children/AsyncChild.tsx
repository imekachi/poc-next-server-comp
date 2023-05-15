import { EnvLegend } from '@/modules/EnvLegend'
import { sleep } from '@/utils/sleep'

export default async function AsyncChild() {
  await sleep(5000)

  return (
    <EnvLegend env="server">
      <div className="p-6">
        <h2>Async Child LOADED (Takes 5s to load)</h2>
      </div>
    </EnvLegend>
  )
}
