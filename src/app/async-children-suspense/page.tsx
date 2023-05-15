import { Suspense } from 'react'
import AsyncChild from '@/app/async-children/AsyncChild'
import { EnvLegend } from '@/modules/EnvLegend'
import { sleep } from '@/utils/sleep'

export default async function AsyncChildrenPage() {
  await sleep(3000)

  return (
    <EnvLegend env="server">
      <div className="p-6 space-y-4">
        <h1>Page with async children (Takes 3s to load)</h1>
        <div>
          <Suspense fallback="(Suspense) Async Child is suspended. Loading...">
            {/* @ts-expect-error Async server component */}
            <AsyncChild />
          </Suspense>
        </div>
      </div>
    </EnvLegend>
  )
}
