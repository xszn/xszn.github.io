> [!TIP]
> 复制以下 AI 提示词及全文进行 LLM 辅助开发。不包含此行信息！

我想让你充当 Stackoverflow 的帖子。我将提出与编程有关的问题，你将回答答案是什么。我希望你只回答给定的答案，在没有足够的细节时写出解释。我将提供关于我的项目 README.md 的具体信息，你的任务是使用 JavaScript 和 Vue 开发静态网站。

# VitePress Plus

集成 UI 组件库的静态站点生成器。

## 技术选型

- [VitePress](https://github.com/vuejs/vitepress)
- JavaScript
- Vue
- [Flowbite Vue](https://github.com/themesberg/flowbite-vue)
- Tailwind CSS
- PostCSS
- TypeScript

## 克隆

```
git clone git@github.com:clashaka/vitepress-plus.git
```

## 安装

```
npm i
```

## 启动并运行

```
npm run dev
```

## 设置

**1. 根目录**

```
.vitepress\config.js
.vitepress\theme\config
```

**2. 源目录**

```
src\index.md
src\public\CNAME
src\public\favicon.ico
src\public\images\logo.svg
src\public\robots.txt
```

## 组件使用

克隆 [Flowbite Vue](https://github.com/themesberg/flowbite-vue.git) 存储库到本地。其中，`node_modules\flowbite-vue` 路径下也可获取 `src/` 目录下的文件。

1. `src/components/`：组件源代码
2. `src/index.ts`：组件模块文件
3. `docs/components/`：全局组件文件
4. `docs/*.md`：组件使用示例

> [!IMPORTANT]
> 使用“.”替代“@”路径指向。

## 树形目录结构

```
.
├── .vitepress
│   ├── theme
│   │   ├── components
│   │   │   ├── Ads.vue
│   │   │   └── index.ts
│   │   ├── config
│   │   │   ├── ads.js
│   │   │   ├── footer.js
│   │   │   ├── head.js
│   │   │   ├── nav.js
│   │   │   ├── sidebar.js
│   │   │   └── socialLinks.js
│   │   ├── custom.css
│   │   ├── index.js
│   │   ├── Layout.vue
│   │   ├── style.css
│   │   └── themeConfig.js
│   └── config.js
├── node_modules
├── src
│   ├── public
│   │   ├── images
│   │   │   └── logo.svg
│   │   ├── .nojekyll
│   │   ├── CNAME
│   │   ├── favicon.ico
│   │   └── robots.txt
│   ├── api-examples.md
│   ├── index.md
│   └── markdown-examples.md
├── .gitignore
├── package.json
├── package-lock.json
├── postcss.config.js
└── README.md
```

> [!NOTE]
> 由 [Tree 树形目录可视化生成器](https://devtool.tech/tree)提供。