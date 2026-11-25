# Zhao Jiong Personal Site

Zane 的个人站点，使用 Nuxt 4、Vue 3、TypeScript 和 Tailwind CSS 构建。当前版本聚焦个人简介、经历、代表作品、文章链接和联系方式的单页展示，提供中文和英文两个版本。

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

## 多语言

站点有中文（`/`，默认）和英文（`/en`）两个版本，左侧栏的简介下方可以在两者之间切换，切换时保留当前所在的章节。

- 需要翻译的字段写成 `{ zh: '…', en: '…' }`；两种语言通用的内容用 `both(…)` 包一层；链接、图片路径这类字段直接写字符串。
- 界面文案（无障碍标签、跳转链接等）在 `site.ts` 的 `ui` 里，页面标题和描述在 `siteMeta` 里。
- 语言列表在 `site.ts` 的 `locales`。新增语言时扩展 `Locale` 类型和 `locales`，并为所有 `{ zh, en }` 补上新语言的值。
- 访问者手动选过的语言记在 Cookie `preferred_locale` 里（一年），访问根路径 `/` 时按该选择跳转。
- 根路径默认始终显示中文，不按浏览器语言自动跳转。需要自动识别时，把 `app/utils/locale.ts` 里的 `autoDetectLocale` 改为 `true`，浏览器语言列表里不含任何中文的访问者会被跳转到英文版。
- 带未知语言前缀的路径（如 `/fr`）返回 404。
