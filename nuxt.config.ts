import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  srcDir: 'app',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'zh-CN',
      },
      title: 'Zane | 资深前端工程师',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Zane 的个人站点：资深前端工程师，专注微前端架构、数据可视化与 AI 工程化。',
        },
        { name: 'theme-color', content: '#0f172a' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg?v=2' },
      ],
    },
  },
})
