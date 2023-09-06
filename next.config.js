/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',

    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: 'randomuser.me',
                port: '',
                pathname: '/api/portraits/**',
            }
        ]
    }
}

module.exports = nextConfig
