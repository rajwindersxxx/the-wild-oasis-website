/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'jmqspgxmomqtfvttimnj.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/cabin-images/**',
            search: '',
          },
        ],
      },
      // this will deploy full site as static
      // output: 'export'
};

export default nextConfig;
