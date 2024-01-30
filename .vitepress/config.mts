import { defineConfig } from 'vitepress'
import { containerPreview, componentPreview } from '@vitepress-demo-preview/plugin'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kirk的博客",
  description: "A Front End Programmer ",
  markdown: {
    config(md) {
      md.use(containerPreview)
      md.use(componentPreview)
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '笔记', link: '/notes/html/tabindex' },
      { text: '工具', link: '/tools' }
    ],

    sidebar: [
      {
        text: 'HTML',
        items: [
          { text: 'tabindex', link: '/notes/html/tabindex' },
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: '三角形的制作', link: '/notes/css/triangle' },
        ]
      },
      {
        text: 'Vue',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
      {
        text: 'React',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
      {
        text: 'Node',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
      {
        text: 'Python',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
      {
        text: 'Java',
        items: [
          { text: 'HTML', link: '/html' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/manongguai/myblog' }
    ]
  }
})
