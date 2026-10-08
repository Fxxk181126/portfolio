# Zhao Jiong Personal Site

赵炯的个人站点，使用 Nuxt 4、Vue 3、TypeScript 和 Tailwind CSS 构建。当前版本聚焦个人简介、经历、代表作品、文章链接和联系方式的单页展示。

## 本地开发

```bash
nvm use
npm install
npm run dev
```

开发服务默认运行在 `http://127.0.0.1:3000`。

## 构建与部署

```bash
npm run build
npm run generate
npm run preview
```

`npm run generate` 会生成静态站点，产物位于 `.output/public`，可部署到 GitHub Pages、Vercel、Netlify 或 Cloudflare Pages。

## 内容维护

站点内容集中在 [app/data/site.ts](app/data/site.ts)：

- `profile`：姓名、定位、简介、所在城市与状态。
- `navigationItems`：首页章节导航。
- `socialLinks`：GitHub、博客、掘金、知乎。
- `experienceItems`：教育与工作经历。
- `projectItems`：精选项目。
- `writingItems`：外部文章链接。

后续文章系统、课程表、报名和商业化能力可以在 Nuxt 页面、Server Routes 与独立数据模块上扩展，不需要重写当前展示层。
