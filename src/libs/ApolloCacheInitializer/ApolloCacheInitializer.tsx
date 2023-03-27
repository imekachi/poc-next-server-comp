'use client'
import { useApolloClient } from '@apollo/client'
import { ReactNode, useMemo } from 'react'
import { EnvLegend } from '@/modules/EnvLegend'

/**
 * T = cache data
 */
export type ApolloCacheInitializerProps<T extends object> = {
  extractedCache: T
  children: ReactNode
}

export const ApolloCacheInitializer = <T extends object>({
  extractedCache,
  children,
}: ApolloCacheInitializerProps<T>) => {
  const client = useApolloClient()

  useMemo(() => {
    client.cache.restore(extractedCache)
  }, [client.cache, extractedCache])

  return (
    <EnvLegend env="client">
      <div className="p-6">
        <p className="mb-4">ApolloCacheInitializer</p>
        <div>{children}</div>
      </div>
    </EnvLegend>
  )
}
