import {copyCode} from "vuepress-plugin-copy-code2";

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'View & Docker',
    description: '基于Docker搭建的View系统本地开发环境',
    head: [['link', {rel: 'shortcut icon', href: '/tke-view/assets/images/logo.png'}]],
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
                text: '开发规范',
                link: '/standard/html.md',
            },
            {
                text: '工具推荐',
                link: '/tools/recommend.md',
            },
            {
                text: 'Docker Hub',
                link: 'https://hub.docker.com/r/rtwadewang/tke',
            }
        ],
        sidebar: {
            '/guide/': [
                {
                    children: [
                        '/guide/README.md',
                        '/guide/view.md',
                        '/guide/autotest.md',
                        '/guide/rabbitmq.md',
                        '/guide/wso2.md',
                        '/guide/solr.md',
                    ],
                },
            ],
            '/standard/': [
                {
                    children: [
                        '/standard/html.md',
                        '/standard/ui.md',
                        '/standard/component.md',
                        '/standard/db.md',
                    ],
                },
            ],
            '/tools/': [
                {
                    children: [
                        '/tools/recommend.md',
                    ],
                },
            ],
        },
    },
    markdown: {
        EmojiPluginOptions: true,
        code: {
            lineNumbers: 10
        }
    },
    plugins: [
        copyCode({
        }),
    ],
    base: '/tke-view/'
}