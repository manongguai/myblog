import { defineConfig } from "vitepress";
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "web技术学习笔记和分享",
  description:
    "学习用途，个人开发，用于学习前端，java，python.主要用于这些技术的相关笔记记录，测试和技术分享",
  head: [["link", { rel: "icon", href: "/favicon.ico",type:"image/x-icon" }]],
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "笔记", link: "/notes/html/tabindex" },
      { text: "工具箱", link: "/tools" },
      {
        text: "联系作者",
        link: "/about",
      },
    ],
    sidebar: [
      {
        text: "HTML",
        items: [
          { text: "tabindex", link: "/notes/html/tabindex" },
          { text: "fragment", link: "/notes/html/fragment" },
        ],
      },
      {
        text: "CSS",
        items: [
          { text: "三角形的制作", link: "/notes/css/triangle" },
          { text: "单边阴影", link: "/notes/css/shadow" },
          { text: "放大镜效果", link: "/notes/css/magnifier" },
          { text: "BEM规范", link: "/notes/css/bem" },
        ],
      },
      {
        text: "Js",
        items: [
          { text: "performance.now", link: "/notes/js/performance" },
          { text: "html转pdf分页问题解决方案", link: "/notes/js/k-htmlpdf" },
          {
            text: "vue2拖拽工具及拖拽辅助线",
            link: "/notes/js/k-vue-dragline",
          },
          { text: "手写实现Promise", link: "/notes/js/promise" },
          { text: "strapi-plugin-sso", link: "/notes/js/strapi-plugin-sso" },
        ],
      },
      {
        text: "canvas",
        items: [
          {
            text: "01.体验canvas",
            link: "/notes/canvas/01",
          },
          {
            text: "02.绘制基本图形",
            link: "/notes/canvas/02",
          },
          {
            text: "03.绘制圆形arc",
            link: "/notes/canvas/03",
          },
          {
            text: "04.绘制折线段lineTo",
            link: "/notes/canvas/04",
          },
          {
            text: "05.绘制圆弧arcTo",
            link: "/notes/canvas/05",
          },
          {
            text: "06.贝塞尔曲线",
            link: "/notes/canvas/06",
          },
          {
            text: "07.封装路径path2D",
            link: "/notes/canvas/07",
          },
          {
            text: "08.颜色设置",
            link: "/notes/canvas/08",
          },
          {
            text: "09.线性渐变和径向渐变",
            link: "/notes/canvas/09",
          },
          {
            text: "10.pattern模式",
            link: "/notes/canvas/10",
          },
          {
            text: "11.线条样式",
            link: "/notes/canvas/11",
          },
          {
            text: "12.阴影设置",
            link: "/notes/canvas/12",
          },
          {
            text: "13.绘制图片",
            link: "/notes/canvas/13",
          },
          {
            text: "14.绘制视频",
            link: "/notes/canvas/14",
          },
          {
            text: "15.文字绘制",
            link: "/notes/canvas/15",
          },
          {
            text: "16.位移变换",
            link: "/notes/canvas/16",
          },
          {
            text: "17.合成图层",
            link: "/notes/canvas/17",
          },
          {
            text: "18.裁剪",
            link: "/notes/canvas/18",
          },
          {
            text: "19.状态保存和恢复",
            link: "/notes/canvas/19",
          },
          {
            text: "20.像素操作",
            link: "/notes/canvas/20",
          },
          {
            text: "21.封装绘制的物体",
            link: "/notes/canvas/21",
          },
          {
            text: "22.签名画板案例",
            link: "/notes/canvas/22",
          },
          {
            text: "23.时钟案例",
            link: "/notes/canvas/23",
          },
          
        ],
      },
      {
        text: "前端进阶",
        items: [
          {
            text: "webpack、rollup、vite、esbuild、parcel优劣势详解",
            link: "/notes/advanced/bundle",
          },
          {
            text: "webpack",
            link: "/notes/advanced/webpack",
          },
          {
            text: "esbuild",
            link: "/notes/advanced/esbuild",
          },
          {
            text: "rollup",
            link: "/notes/advanced/rollup",
          },
          {
            text: "vite",
            link: "/notes/advanced/vite",
          },
          {
            text: "parcel",
            link: "/notes/advanced/parcel",
          },
          {
            text: "ts 项目怎么在打包后生成d.ts文件",
            link: "/notes/advanced/tscBuild",
          },
          {
            text: "chrome扩展设置浏览器背景图",
            link: "/notes/advanced/chrome",
          },
          {
            text: "使用github Action将前端项目自动化部署到服务器上",
            link: "/notes/advanced/githubAction",
          },
          {
            text: "PostCSS使用简介",
            link: "/notes/advanced/postcss",
          },
          {
            text: "使用 husky eslint commitlint 等工具统一项目规范",
            link: "/notes/advanced/eslint",
          },
          {
            text: "virtual-module，一个被低估的模块模式",
            link: "/notes/advanced/virtualModule",
          },
        ],
      },

      {
        text: "vue3源码解析",
        items: [
          { text: "01-准备工作", link: "/notes/vue/01" },
          { text: "02-调试", link: "/notes/vue/02" },
          { text: "03-createApp", link: "/notes/vue/03" },
          { text: "04-mounted", link: "/notes/vue/04" },
          { text: "05-createVNode", link: "/notes/vue/05" },
          { text: "06-render", link: "/notes/vue/06" },
        ],
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
        text: "SpringBoot学习笔记",
        items: [
          { text: "01-概述", link: "/notes/springboot/01" },
          { text: "02-快速入门", link: "/notes/springboot/02" },
          { text: "03-配置", link: "/notes/springboot/03" },
          { text: "04-读取配置内容", link: "/notes/springboot/04" },
          { text: "05-整合MyBatis", link: "/notes/springboot/05" },
        ],
      },
      {
        text: "其他",
        items: [
          {
            text: "react-vite-admin通用后台管理系统",
            link: "/other/react-vite-admin",
          },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/manongguai/react-vite-admin",
      },
    ],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">豫ICP备2023009283号-1</a>',
      copyright: "Copyright © 2024-present Kirk Wang",
    },
  },
});
