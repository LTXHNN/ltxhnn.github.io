module.exports = {
  title: "blog",
  description: "Front end project and tips sharing",
  icon: "/logo.png",

}

module.exports = {
  title: "blog",
  description: "Front end project and tips sharing",
  baseUrl: "/articles",
  themeConfig: {

    siteTitle: "LTX的个人网站",  //左上角的
    logo: "/logo.jpg",      //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
    sidebar: {
      "/articles/other": [
        {
          text: "vitepress",    //标签名字
          collapsible: true,    //是不是可以动态展开
          collapsed: true,      //默认是不是展开
          items: [              //孩子
            {
              text: "index",        //标签名字
              link: "/articles/other/vitepress/index",         //链接
            },
          ],
        },
      ],
    },
    nav: [                  //右上角的导航栏
      {
        text: "官网",             //导航标签的名字
        items: [                  //这种格式是有下拉菜单的版本
          //text代表每一项的名字，link是连接的位置
          { text: "Spring", link: "https://spring.io/" },
          { text: "Vue", link: "https://cn.vuejs.org/" },
          { text: "React", link: "https://react.xiniushu.com/" },
          { text: "Uniapp", link: "https://en.uniapp.dcloud.io/" },
          { text: "Electron", link: "https://electron.nodejs.cn/" },
          { text: "Vite", link: "https://cn.vitejs.dev/" },
          { text: "VitePress", link: "https://vitepress.dev/" },
          { text: "ElementPlus", link: "https://element-plus.org/en-US/" },
          { text: "MybatisPlus", link: "https://baomidou.com/" },
          { text: "NPM", link: "https://www.npmjs.com/" },
          { text: "NodeJS", link: "https://dev.nodejs.cn/learn/the-package-json-guide/" },
          { text: "Redis", link: "https://redis.io/" },
          { text: "其他", link: "#" },
        ],
      },
      { text: "优秀开源项目", link: "/intent/" },
      {
        text: "LTX",             //导航标签的名字
        items: [                  //这种格式是有下拉菜单的版本
          { text: "面试题", link: `${this.baseUrl}/basic/index` },      //text代表每一项的名字，link是连接的位置
          { text: "笔试题", link: "/articles/react/index" },
          { text: "核心语法", link: "/articles/vue/index" },
          { text: "经典算法", link: "/articles/mini/index" },
          { text: "", link: "/articles/other/vitepress/index" },
        ],
      },
      { text: "leetcode", link: "/leetcode/LEET_CODE题解/47. 全排列 II" },   //这种是没有下拉菜单的版本

    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了

  }
}