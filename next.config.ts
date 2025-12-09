import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/home-page",
        destination: "/",
        permanent: true,
      },
      {
        source: "/39-2",
        destination: "/#about",
        permanent: true,
      },
      {
        source: "/academic-and-professional-profile-of-professor-alain-isoh",
        destination: "/team/professor-alain-isoh",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
