import { EnvLegend } from '@/modules/EnvLegend'

export const EmbedServerComp = () => {
  console.log('> EmbedServerComp')
  return (
    <EnvLegend env="server">
      <div className="p-6">EmbedServerComp by props</div>
    </EnvLegend>
  )
}
