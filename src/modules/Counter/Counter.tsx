'use client'

import { ElementType, ReactNode, useState } from 'react'
import { EnvLegend } from '@/modules/EnvLegend'

export type CounterProps = {
  jsxComp?: ReactNode
  CompRef?: ElementType
  // Try primitive value
  step?: number
  // Try serializable value
  config?: {
    initialValue?: number
  }
}

export const Counter = (props: CounterProps) => {
  console.log('> Counter')

  const { jsxComp, CompRef, step = 1, config } = props
  const [count, setCount] = useState(config?.initialValue ?? 0)

  return (
    <EnvLegend env="client">
      <div className="p-4 space-y-4">
        <div className="flex items-center space-x-2">
          <div>count: {count}</div>
          <button
            className="bg-white text-slate-700 border border-slate-300 px-2 py-1 text-sm font-semibold rounded"
            onClick={() => setCount(prev => prev + step)}
          >
            Add +{step}
          </button>
        </div>
        {jsxComp ? <div>{jsxComp}</div> : null}
        {CompRef ? (
          <div>
            <CompRef />
          </div>
        ) : null}
      </div>
    </EnvLegend>
  )
}
