import path from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const root = path.dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const packageEntry = (packageName) => require.resolve(packageName)
const jarvisCoreSrc = path.resolve(root, '../../jarvis/frameworks/frontend/src')

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, root, '')
  const apiTarget =
    env.VITE_API_PROXY_TARGET || env.VITE_DEV_API_PROXY || 'http://127.0.0.1:5167'

  return {
    plugins: [react(), tailwindcss()],
    define: {
      'process.env.DRAGGABLE_DEBUG': 'undefined',
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'development',
      ),
    },
    resolve: {
      dedupe: [
        'react',
        'react-dom',
        'react-router-dom',
        'react-hook-form',
        '@primereact/core',
        '@primereact/headless',
        '@primeuix/themes',
        '@primeuix/styled',
        '@jarvis/core',
      ],
      alias: [
        {
          find: /^@jarvis\/core$/,
          replacement: path.resolve(jarvisCoreSrc, 'index.ts'),
        },
        {
          find: /^@jarvis\/core\/theme\.css$/,
          replacement: path.resolve(jarvisCoreSrc, 'styles/theme.css'),
        },
        {
          find: /^@jarvis\/core\/styles\.css$/,
          replacement: path.resolve(jarvisCoreSrc, 'styles/kit.css'),
        },
        {
          find: /^@jarvis\/core\/dashboard\.css$/,
          replacement: path.resolve(
            jarvisCoreSrc,
            'features/dashboard/styles/dashboard.css',
          ),
        },
        { find: /^react$/, replacement: packageEntry('react') },
        { find: /^react-dom$/, replacement: packageEntry('react-dom') },
        { find: /^react-router-dom$/, replacement: packageEntry('react-router-dom') },
        { find: /^react-hook-form$/, replacement: packageEntry('react-hook-form') },
        { find: /^lucide-react$/, replacement: packageEntry('lucide-react') },
        { find: 'primereact', replacement: path.resolve(root, 'node_modules/primereact') },
        { find: /^@primereact\/core$/, replacement: packageEntry('@primereact/core') },
        { find: '@atlaskit/pragmatic-drag-and-drop', replacement: path.resolve(root, 'node_modules/@atlaskit/pragmatic-drag-and-drop') },
        { find: '@hookform/resolvers', replacement: path.resolve(root, 'node_modules/@hookform/resolvers') },
        {
          find: /^@primeuix\/themes$/,
          replacement: packageEntry('@primeuix/themes'),
        },
        {
          find: /^@primeuix\/themes\/aura$/,
          replacement: packageEntry('@primeuix/themes/aura'),
        },
        { find: /^@primeuix\/styled$/, replacement: packageEntry('@primeuix/styled') },
        { find: '@react-querybuilder/dnd', replacement: path.resolve(root, 'node_modules/@react-querybuilder/dnd') },
        { find: /^axios$/, replacement: path.resolve(root, 'node_modules/axios/index.js') },
        { find: /^chart\.js$/, replacement: packageEntry('chart.js') },
        { find: 'gridstack', replacement: path.resolve(root, 'node_modules/gridstack') },
        { find: /^pdfjs-dist$/, replacement: packageEntry('pdfjs-dist') },
        { find: 'primeicons', replacement: path.resolve(root, 'node_modules/primeicons') },
        { find: /^quill$/, replacement: packageEntry('quill') },
        { find: /^react-chartjs-2$/, replacement: packageEntry('react-chartjs-2') },
        { find: /^react-pdf$/, replacement: packageEntry('react-pdf') },
        { find: /^react-querybuilder$/, replacement: packageEntry('react-querybuilder') },
        { find: /^react-rnd$/, replacement: packageEntry('react-rnd') },
        { find: /^react-toastify$/, replacement: packageEntry('react-toastify') },
        { find: /^zod$/, replacement: packageEntry('zod') },
      ],
    },
    optimizeDeps: {
      include: ['@primereact/core', '@primeuix/themes', '@primeuix/styled'],
    },
    server: {
      host: '127.0.0.1',
      port: 4173,
      strictPort: true,
      fs: {
        allow: [root, jarvisCoreSrc],
      },
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        '/health': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
        '/swagger': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})
