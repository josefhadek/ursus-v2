/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // ← PŘIDAT TOTO!
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,  // ← již máš (dobře pro statický export)
  },
  basePath: '/nazev-repo',  // ← optional: název tvého GitHub repozitáře
}

export default nextConfig