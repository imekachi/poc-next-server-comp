import { EnvLegend } from '@/modules/EnvLegend'

export const NavBarSkeleton = () => {
  return (
    <EnvLegend env="server">
      <div className="h-24 shadow-lg px-6 py-4 flex items-center text-gray-300">
        Loading... (Server-side Suspense with async server comp)
      </div>
    </EnvLegend>
  )
}
