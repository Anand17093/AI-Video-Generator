/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['@remotion/bundler', '@remotion/renderer', 'esbuild'],
  webpack: (config, { isServer }) => {
    config.externals.push({
      '@rspack/binding-win32-x64-msvc': 'commonjs @rspack/binding-win32-x64-msvc',
    });
    return config;
  },
};

export default nextConfig;