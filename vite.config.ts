import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { babelOptimizerPlugin } from '@graphql-codegen/client-preset';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          'react-app',
        ],
        plugins: [
          [babelOptimizerPlugin, { artifactDirectory: './src/gql', gqlTagName: 'graphql' }],
        ],  
      }
    }),
    splitVendorChunkPlugin(),
  ],
})
