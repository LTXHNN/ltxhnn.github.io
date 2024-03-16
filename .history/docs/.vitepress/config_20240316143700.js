
module.exports = {
  title: "BLOG",
  description: "LTX For Sharing",
  lastUpdated: true,
  baseUrl: "/articles",
  head: [
    [
      'link', { rel: 'icon', herf: "/favicon.ico" }
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    siteTitle: "LTX的个人网站",  //左上角的
    logo: "/favicon.ico",
    //左上角的logo,注意：它的路径是从public文件夹开始的，所以这里引用的是public/logo.jpg这张图
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
      { text: "优秀开源项目", link: "https://leetcode.cn/" },
      {
        text: "LTX",             //导航标签的名字
        items: [                  //这种格式是有下拉菜单的版本
          { text: "面试题", link: `${this.baseUrl}/basic/index` },      //text代表每一项的名字，link是连接的位置
          { text: "笔试题", link: `${this.baseUrl}/basic/index` },
          { text: "核心语法", link: `${this.baseUrl}/basic/index` },
          { text: "经典算法", link: `${this.baseUrl}/basic/index` },
          { text: "学习笔记", link: `${this.baseUrl}/basic/index` },
        ],
      },
      { text: "leetcode", link: "https://leetcode.cn/" },   //这种是没有下拉菜单的版本
      {
        text: "免费工具",             //导航标签的名字
        items: [                  //这种格式是有下拉菜单的版本
          { text: "文件转换", link: `https://www.aconvert.com/cn` },      //text代表每一项的名字，link是连接的位置
        ],
      },

    ],
    socialLinks: [{ icon: "github", link: "https://github.com/aiai0603" }],       //右上角的社交标签，支持多种icon，具体可以查询官网，反正没有QQ和微信，放个git差不多意思意思就行了
    footer: {
      message: '版权及免责声明',
      copyright: '个人非盈利网站，单纯用来学习和分享，如有侵权请联系删除。[原创部分禁止侵权，如要转载请注明出处,联系邮箱@ltxhnn@qq.com]'
    }
  }
}
