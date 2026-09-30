import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services/business-phone", destination: "/service/category/business_support#business-phone", permanent: true },
      { source: "/services/multifunction-printer", destination: "/service/category/business_support#multifunction-printer", permanent: true },
      { source: "/services/oa-equipment", destination: "/service/category/business_support#oa-equipment", permanent: true },
      { source: "/services/network", destination: "/service/category/it_support#network", permanent: true },
      { source: "/services/security", destination: "/service/category/it_support#network-security", permanent: true },
      { source: "/services/security-camera", destination: "/office-security#security-camera", permanent: true },
      { source: "/service/after-sales", destination: "/service/category/top_support#after-sales", permanent: true },
      { source: "/service/oasys", destination: "/service/axcel", permanent: true },
    ];
  },
};

export default nextConfig;
