import { ReactNode } from 'react'
import { cx } from '@/utils/cx'

export type EnvLegendProps = {
  env: 'server' | 'client'
  children: ReactNode
}

export const EnvLegend = (props: EnvLegendProps) => {
  const { env, children } = props

  return (
    <div
      className={cx(
        'relative ring ring-inset rounded',
        [env === 'server' && 'ring-server-300/75'],
        [env === 'client' && 'ring-client-200/75']
      )}
    >
      <div
        className={cx(
          'absolute top-0 left-0 text-xs font-bold rounded-tl rounded-br px-1 py-0.5',
          [env === 'server' && 'bg-server-300/50 text-server-500'],
          [env === 'client' && 'bg-client-400/50 text-amber-500']
        )}
      >
        {env}
      </div>
      <div>{children}</div>
    </div>
  )
}
