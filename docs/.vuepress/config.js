const sidebar = require("./siders/index");

module.exports = {
  // base: "/Vuepress_Blog/",
  base: "/",
  port: 8088,
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/GannonSun.png",
      },
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
  title: "舒心的避风港",
  theme: "reco",
  themeConfig: {
    repo: "https://github.com/gannonsun/Vuepress_Blog",
    repoLable: "Github",
    // 博客配置
    type: "blog",
    author: "GannonSun",
    authorAvatar: "/GannonSun.png",
    sidebar,
    sidebarDepth: 2,
    subSidebar: "auto",
    // 最后更新时间
    lastUpdated: "最后一次更新时间",
    nav: [
      { text: "首页", link: "/", icon: "reco-home" },
      {
        text: "大前端",
        icon: "reco-blog",
        items: [{ text: "Webpack", link: "/frontEnd/webpack/" }],
      },
    ],
    blogConfig: {
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/ganonsun" },
      ],
    },
  },
};
