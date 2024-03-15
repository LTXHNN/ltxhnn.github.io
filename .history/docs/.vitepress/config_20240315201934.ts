import { defineConfig } from "vitepress";

export default defineConfig({
  title: "chaxus",
  description: "描述信息",
  base: "/ran/", // 部署到github上时访问的根目录
  lastUpdated: true, // 页面上展示最后更新的时间
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }], // 也是放在/public目录中
  ],
  themeConfig: {
    logo: "/home.svg", // 也是放在/public目录中
    nav: [
      // 页面最上面一行的导航栏
      { text: "首页", link: "/" }, // 导航栏名字和目录地址，如果文件名叫index.md可以省略不写，路径只写到目录
    ],
    // 配置github地址
    socialLinks: [{ icon: "github", link: "https://github.com/chaxus/ran" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-11-11",
    },
    // 配置从导航栏进去后的侧边栏
    sidebar: {
      "/ranuts/": [
        {
          text: "通用函数",
          items: [
            { text: "过滤对象", link: "/ranuts/functions/" },
            { text: "统计执行时间", link: "/ranuts/functions/task/" },
          ],
        },
      ],
    },
  },
});
