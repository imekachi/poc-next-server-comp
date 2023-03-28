'use client'
import { useApolloClient } from '@apollo/client'
import { ReactNode, useMemo } from 'react'
import { initializeCache, parseSerializedApolloCache } from '@/libs/apollo'
import { EnvLegend } from '@/modules/EnvLegend'

/**
 * T = cache data
 */
export type ApolloCacheInitializerProps = {
  serializedCache: string
  children: ReactNode
}

export const ApolloCacheInitializer = ({
  serializedCache,
  children,
}: ApolloCacheInitializerProps) => {
  const client = useApolloClient()

  // Run immediately during render
  useMemo(() => {
    initializeCache(client, parseSerializedApolloCache(serializedCache))
  }, [client, serializedCache])

  return (
    <EnvLegend env="client">
      <div className="p-6">
        <p className="mb-4">ApolloCacheInitializer</p>
        <div>{children}</div>
      </div>
    </EnvLegend>
  )
}
