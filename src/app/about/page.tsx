import { Counter } from '@/modules/Counter'
import { EmbedServerComp } from '@/modules/EmbedServerComp'
import { EnvLegend } from '@/modules/EnvLegend'
import { sleep } from '@/utils/sleep'
import { cache } from 'react'

// use cache to prevent hydration mismatch
const getInitialValues = cache(async () => {
  await sleep(3000)
  return parseInt((Math.random() * 100).toFixed(2))
})

export default async function About() {
  const initialValue = await getInitialValues()

  return (
    <EnvLegend env="server">
      <div className="p-6">
        <h1>ABOUT</h1>
        <Counter
          jsxComp={<EmbedServerComp />}
          step={3}
          config={{ initialValue }}
        />
        {/* This doesn't work */}
        {/* <Counter CompRef={EmbedServerComp} /> */}
      </div>
    </EnvLegend>
  )
}
