import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.nQaBHiNx.js";const _=JSON.parse('{"title":"Create Your Own","description":"","frontmatter":{"layout":"doc","title":"Create Your Own"},"headers":[],"relativePath":"articles/CreateYourOwn.md","filePath":"articles/CreateYourOwn.md","lastUpdated":null}'),p={name:"articles/CreateYourOwn.md"},i=e(`<h2 id="创建你自己的个人网站" tabindex="-1">创建你自己的个人网站 <a class="header-anchor" href="#创建你自己的个人网站" aria-label="Permalink to &quot;创建你自己的个人网站&quot;">​</a></h2><p>首先，我个人是通过官方文档和第三方的一些教程学习并搭建了这个网站。如果你也想自己搭建一个，那么可以参考以下几步：</p><ul><li>创建一个本地仓库，并初始化 打开 git bash，然后输入以下命令：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>mkdir myblog</span></span>
<span class="line"><span>cd myblog</span></span>
<span class="line"><span>git init</span></span></code></pre></div><ul><li>安装 vitepress 打开 vscode, 在 myblog 文件夹中打开，然后在 vscode 的终端输入以下命令：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>yarn init</span></span>
<span class="line"><span>yarn add vitepress</span></span></code></pre></div><ul><li>然后创建以下层级结构：</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>myblog</span></span>
<span class="line"><span>|-- .gitignore</span></span>
<span class="line"><span>├─ docs                    # 项目根目录</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│       ├─ public</span></span>
<span class="line"><span>|          ├─ favicon.ico</span></span>
<span class="line"><span>│       ├─ config.js        # 配置目录</span></span>
<span class="line"><span>│  ├─ getting-started.md</span></span>
<span class="line"><span>│  ├─ articles</span></span>
<span class="line"><span>│       ├─ *.md</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>└─ deploy.sh</span></span></code></pre></div><ul><li>Copy 内容 关键就在 deploy.sh, config.js, index.md, articles/*.md 这几个文件。 复制本项目源码即可。</li><li>配置 Github Pages 在 github 创建 用户同名仓库即 id.github.io， 然后修改 deploy.sh 文件，将仓库地址改为你的仓库地址即可。 然后在 git bash 中输入以下命令：./deploy.sh。 最后 在 github 本仓库下，开启 pages 功能即可。</li></ul>`,9),l=[i];function t(c,o,d,r,u,h){return n(),a("div",null,l)}const m=s(p,[["render",t]]);export{_ as __pageData,m as default};
