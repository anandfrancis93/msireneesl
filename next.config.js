/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [],
  },
  async headers() {
    return [
      {
        source: '/admin/config.yml',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/yaml',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
