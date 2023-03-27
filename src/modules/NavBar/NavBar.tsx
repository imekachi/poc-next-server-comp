import Link from 'next/link'
import { cache } from 'react'
import { Counter } from '@/modules/Counter'
import { EnvLegend } from '@/modules/EnvLegend'
import { sleep } from '@/utils/sleep'

// use cache to prevent hydration mismatch
const getInitialValues = cache(async () => {
  await sleep(3000)
  return parseInt((Math.random() * 100).toFixed(2))
})

export const NavBar = async () => {
  console.log('> NavBar')

  const initialValue = await getInitialValues()

  return (
    <EnvLegend env="server">
      <nav className="flex justify-between items-center py-4 px-6 shadow-lg">
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-blue-500 underline">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/pokemon-server">Server-Only Query</Link>
          <Link href="/pokemon-client">Client-Only Query</Link>
          <Link href="/pokemon-shared-cache">Shared Cache Query</Link>
        </div>
        <div>
          <Counter step={2} config={{ initialValue }} />
        </div>
      </nav>
    </EnvLegend>
  )
}
