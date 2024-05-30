// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: "http",
// 				hostname: "localhost",
// 			},
// 			{
// 				protocol: "https",
// 				hostname: "digitalhippo-production.up.railway.app",
// 			},
// 		],
// 	},
// };

// module.exports = nextConfig;


// Load environment variables from .env file
require('dotenv').config();

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: process.env.NEXT_PUBLIC_SERVER_URL ? new URL(process.env.NEXT_PUBLIC_SERVER_URL).hostname : "localhost",
            },
            {
                protocol: "https",
                hostname: "digitalhippo-production.up.railway.app",
            },
        ],
    },
    env: {
        PAYLOAD_SECRET: process.env.PAYLOAD_SECRET,
        MONGODB_URL: process.env.MONGODB_URL,
        NEXT_PUBLIC_SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
        STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        RESEND_API_KEY: process.env.RESEND_API_KEY,
    },
};

module.exports = nextConfig;
