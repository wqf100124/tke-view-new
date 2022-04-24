import { copyCode } from "vuepress-plugin-copy-code2";

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'View & Docker',
  description: '基于Docker搭建的View系统本地开发环境',
  head: [['link', { rel: 'shortcut icon', href: '/assets/images/logo.png' }]],
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/assets/images/logo.png',
    logoDark: '/assets/images/logo-dark.png',
    repo: 'wqf100124/tke-view',
    contributors: false,
    lastUpdated: true,
    lastUpdatedText: '最近更新',
    editLink: false,
    navbar: [
      {
        text: 'Docker Hub',
        link: 'https://hub.docker.com/r/rtwadewang/tke',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          children: [
            '/guide/view.md',
            '/guide/autotest.md',
            '/guide/rabbitmq.md',
            '/guide/wso2.md',
            '/guide/solr.md',
          ],
        },
      ],
    },
  },
  markdown: {
    code: {
      lineNumbers: 10
    }
  },
  plugins: [
    copyCode({
      pure: true
    }),
  ],
  base: '/tke-view/'
}