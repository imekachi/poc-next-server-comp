/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  images: {
    domains: ['play.pokemonshowdown.com'],
  },
}

module.exports = nextConfig
