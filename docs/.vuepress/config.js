module.exports = {
    base: "/Vuepress_Blog/",
    head: [
        ["link", {
            rel: "icon",
            href: "/GannonSun.png"
        }]
    ],
    title: "Hello",
    description: "My Bolg",
    themeConfig: {
        repo: "https://github.com/gannonsun/Vuepress_Blog",
        repoLable: "Github",
        nav: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "百度",
                link: "https://baidu.com"
            }
        ]
    }
}