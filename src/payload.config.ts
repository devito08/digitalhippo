import { buildConfig } from 'payload/config'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import path from 'path'


// import { Users } from './collections/User'
// import dotenv from 'dotenv'
// import { Products } from './collections/Products/Products'
// import { Media } from './collections/Media'
// import { ProductFiles } from './collections/ProductFile'
// import { Orders } from './collections/Orders'


export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SERVER_URL || '',
  collections: [], 
  routes: {
    admin: '/sell',
  },
  admin: {
    
    bundler: webpackBundler(),
    meta: {
      titleSuffix: '- DigitalHippo',
      favicon: '/favicon.ico',
      ogImage: '/thumbnail.jpg',
    },
  },
  rateLimit: {
    max: 2000,
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.MONGODB_URL!,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
})