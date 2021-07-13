const sidebar = require("./siders/index");
const autometa_options = {
  site: {
    name: "Gannon Sun",
  },
  canonical_base: "https://gannonsun.ltd",
};

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
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "code-2ND6rcHAOA",
      },
    ],
    [
      "meta",
      {
        name: "keywords",
        content: "舒心的避风港,孙港年,前端,react,vue,git,antd",
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
        items: [
          { text: "Css", link: "/frontEnd/css/" },
          { text: "JavaScript", link: "/frontEnd/js/" },
          { text: "Typescript", link: "/frontEnd/typescript/" },
          { text: "Webpack", link: "/frontEnd/webpack/" },
          { text: "Antd", link: "/frontEnd/antd/" },
          { text: "GIS", link: "/frontEnd/gis/" },
          { text: "Git", link: "/frontEnd/git/" },
          { text: "Vue", link: "/frontEnd/vue/" },
          { text: "Interview", link: "/frontEnd/interview/" },
        ],
      },
    ],
    blogConfig: {
      socialLinks: [
        // 信息栏展示社交信息
        { icon: "reco-github", link: "https://github.com/ganonsun" },
      ],
    },
  },
  plugins: [
    ["autometa", autometa_options],
    [
      "sitemap",
      {
        hostname: "https://gannonsun.ltd",
        // 排除无实际内容的页面
        exclude: ["/404.html"],
      },
    ],
    ["vuepress-plugin-baidu-autopush"],
  ],
};
