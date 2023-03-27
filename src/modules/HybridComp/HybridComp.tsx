import { EnvLegend, EnvLegendProps } from '@/modules/EnvLegend'

export type HybridCompProps = {
  env: EnvLegendProps['env']
}
export const HybridComp = (props: HybridCompProps) => {
  const { env } = props

  return (
    <EnvLegend env={env}>
      <div className="p-6">
        <h3 className="font-bold">HybridComp</h3>
        <p>I can be used as either a server or a client component</p>
      </div>
    </EnvLegend>
  )
}
