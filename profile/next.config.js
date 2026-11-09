/** @type {import('next').NextConfig} */
// Rotas de idioma são páginas estáticas (/ e /pt).
// Não ativar i18n do Next: ele redireciona por Accept-Language.
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
    ],
  },
}

module.exports = nextConfig
