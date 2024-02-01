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
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '笔记', link: '/notes/html/tabindex' },
      { text: '工具箱', link: '/tools' },
      {
        text: '联系作者',link: '/about',
      },
    ],
    sidebar: [
      {
        text: 'HTML',
        items: [
          { text: 'tabindex', link: '/notes/html/tabindex' },
          { text: 'fragment', link: '/notes/html/fragment' },
        ]
      },
      {
        text: 'CSS',
        items: [
          { text: '三角形的制作', link: '/notes/css/triangle' },
          { text: '单边阴影', link: '/notes/css/shadow' },
          { text: '放大镜效果', link: '/notes/css/magnifier' },
          { text: 'BEM规范', link: '/notes/css/bem' },
        ]
      },
      {
        text: 'Js',
        items: [
          { text: 'performance.now', link: '/notes/js/performance' },
          { text: 'html转pdf分页问题解决方案', link: '/notes/js/k-htmlpdf' },
          { text: 'vue2拖拽工具及拖拽辅助线', link: '/notes/js/k-vue-dragline' },
          { text: '手写实现Promise', link: '/notes/js/promise' },
          { text: 'strapi-plugin-sso', link: '/notes/js/strapi-plugin-sso' },
        ]
      },{
        text:'前端进阶',
        items: [
          { text: 'webpack、rollup、vite、esbuild、parcel优劣势详解', link: '/notes/advanced/bundle' },
          {
            text: 'webpack',
            link: '/notes/advanced/webpack',
          },
          {
            text: 'esbuild',
            link: '/notes/advanced/esbuild',
          },
          {
            text: 'rollup',
            link: '/notes/advanced/rollup',
          },
          {
            text: 'vite',
            link: '/notes/advanced/vite',
          },
          {
            text: 'parcel',
            link: '/notes/advanced/parcel',
          },
          {
            text: 'ts 项目怎么在打包后生成d.ts文件',
            link: '/notes/advanced/tscBuild',
          },
          {
            text: 'chrome扩展设置浏览器背景图',
            link: '/notes/advanced/chrome',
          },
          {
            text: '使用github Action前端项目自动化部署到服务器上',
            link: '/notes/advanced/githubAction',
          },
        ]
      },
      
      {
        text: 'vue3源码解析',
        items: [
          { text: '01-准备工作', link: '/notes/vue/01' },
          { text: '02-调试', link: '/notes/vue/02' },
          { text: '03-createApp', link: '/notes/vue/03' },
          { text: '04-mounted', link: '/notes/vue/04' },
          { text: '05-createVNode', link: '/notes/vue/05' },
          { text: '06-render', link: '/notes/vue/06' },
        ]
      },
      // {
      //   text: 'React',
      //   items: [
      //     { text: 'HTML', link: '/html' },
      //   ]
      // },
      // {
      //   text: 'Node',
      //   items: [
      //     { text: 'HTML', link: '/html' },
      //   ]
      // },
      {
        text: 'SpringBoot学习笔记',
        items: [
          { text: '01-概述', link: '/notes/springboot/01' },
          { text: '02-快速入门', link: '/notes/springboot/02' },
          { text: '03-配置', link: '/notes/springboot/03' },
          { text: '04-读取配置内容', link: '/notes/springboot/04' },
          { text: '05-整合MyBatis', link: '/notes/springboot/05' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/manongguai/react-vite-admin' }
    ]
  }
})
