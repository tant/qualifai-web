/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    devIndicators: {
        allowedDevOrigins: ['w3k.tantran.dev'],
    },
    async redirects() {
        return [
            {
                source: '/en/:path*',
                destination: '/:path*',
                permanent: true,
            },
        ]
    },
};

export default nextConfig;
