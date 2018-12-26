module.exports = {
    title: '六学',
    description:
        '戏说不是胡说，改编不是乱编',
    head: [['link', { rel: 'icon', href: '/favicon.png' }]],
    themeConfig: {
        nav: [
            { text: '六学', link: '/SixScience/' },
            { text: '微博', link: 'https://www.weibo.com/liuxiaolingtong' },
        ],
        sidebar: {
            '/SixScience/': [
                '',
                'SixNature',
                'SixAdhibition',
            ],
        },
    },
    base: '/SixScience/dist/',
}
