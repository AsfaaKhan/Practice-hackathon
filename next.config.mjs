/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                pathname: "https",
                hostname: "cdn.sanity.io",
                port: "",
                pathname : "/images/**"
            }
        ]
    }
};

export default nextConfig;
