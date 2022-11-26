import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { pwaPlugin } from '@vuepress/plugin-pwa'
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { searchPlugin } from '@vuepress/plugin-search'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { commentPlugin } from "vuepress-plugin-comment2";
import pagePlugin from './plugins/page'

export default defineUserConfig({
  title: '刘哈哈的个人笔记',
  description: '记录 笔记 博客 git', // 网站描述
  // 被注入页面 HTML <head> 额外的标签
  head: [
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['link', { rel: 'icon', href: `https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg` }],
    ['meta', { name: 'google', value: 'notranslate' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg` }],
    ['link', { rel: 'mask-icon', href: 'https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { name: 'referrer', content: 'same-origin' }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
  ],
  host: '0.0.0.0',
  dest: '.vuepress/dist',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
      title: '刘哈哈的个人笔记',
      description: 'Vue-Press blog 博客 记录 笔记 git',
    }
  },
  theme: defaultTheme({
    repo: "https://github.com/fly-liu/blog-project", // github链接
    logo: 'https://ae01.alicdn.com/kf/Hf2c1a9a9686148debc15f0b0ac1fea85a.jpg', // 博客的 logo
    // 导航菜单
    navbar: [
      { text: "文章", link: '/list/' },
      { text: '后端', link: '/serve/' },
      // { 
      //   text: '后端', 
      //   link: '/serve/', 
      //   children: [
      //     '/serve/nodejs基础',
      //     '/serve/nodejs知识点',
      //     '/serve/express应用',
      //   ]
      // },
      { text: '关于我', link: '/about/' }
    ],
    sidebar: {
      '/serve/': [
        {
          text: '后端技术',
          link: '/serve/',
          collapsible: true,
          children: [
            '/serve/nodejs基础',
            '/serve/nodejs知识点',
            '/serve/express应用',
          ]
        },
      ]
    },
    editLink: false, // 是否启用 编辑此页 链接
    // lastUpdated: 'true', // 最后更新时间 boolean
    // lastUpdatedText: '最后更新', // 最近更新时间戳 标签的文字
  }),
  markdown: {
    code: {
      // 是否在每个代码块的左侧显示行号
      lineNumbers: 5,
    }
  },
  plugins: [
    // 自定义组件
    pagePlugin,

    // 返回顶部插件
    backToTopPlugin(),

    // 外部链接图标插件
    externalLinkIconPlugin({
      locales: {
        '/': {
          openInNewWindow: 'open in new window',
        },
        '/zh/': {
          openInNewWindow: '在新窗口打开',
        },
      },
    }),

    // 本地搜索
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search',
        },
        '/zh/': {
          placeholder: '搜索',
        },
      },
      hotKeys: [
        {
          "key": "k",
          "ctrl": true,
        }
      ],
      maxSuggestions: 10, // 搜索结果的最大条数
    }),

    // PWA 插件
    pwaPlugin({
      skipWaiting: true,
    }),
    pwaPopupPlugin({
      locales: {
        '/': {
          message: 'New content is available.',
          buttonText: 'Refresh',
        },
        '/zh/': {
          message: '新的风暴已经出现',
          buttonText: '盘他',
        },
      },
    }),
    
    // 图片缩放
    mediumZoomPlugin(),

    // 评论插件
    commentPlugin({
      // 插件选项
    }),
  ],
})