# Changelog

本文件记录个人站点项目的全部变更。日期格式为 `YYYY-MM-DD`。

## 2026-10-08

- docs: 初始化个人站点设计规格、实施计划与变更日志。涉及 `docs/superpowers/specs/2026-10-08-personal-site-design.md`、`docs/superpowers/plans/2026-10-08-personal-site.md`、`docs/CHANGELOG.md`。
- feat: 搭建 Nuxt 4 + Vue 3 + Tailwind CSS 项目骨架，新增类型化个人资料、桌面侧栏、移动抽屉、滚动定位和显现交互。涉及 `package.json`、`nuxt.config.ts`、`app/pages/index.vue`、`app/components/*`、`app/data/site.ts`、`app/assets/css/main.css`。
- feat: 新增关于、经历、作品、文章、联系区块与四张项目示意图。涉及 `app/components/AboutSection.vue`、`app/components/ExperienceSection.vue`、`app/components/ProjectsSection.vue`、`app/components/WritingSection.vue`、`app/components/ContactSection.vue`、`public/images/*`。
- fix: 修复移动端顶部栏滚动后不可见和抽屉遮罩高度为零的问题。涉及 `app/components/AppHeader.vue`。
- fix: 补充 SVG favicon，消除静态部署下的 favicon 404。涉及 `public/favicon.svg`、`nuxt.config.ts`。
- docs: 补充项目 README、运行方式、构建部署说明与内容维护入口。涉及 `README.md`、`docs/CHANGELOG.md`。

## 2026-10-09

- style: 对齐原站 Brittany Chiang v5 全局排版：`html` 增加 Inter 字体特性 `ss03/cv02/cv11`，`body` 行高改为 1.625（leading-relaxed），新增 `::selection` 青色选区样式。涉及 `app/assets/css/main.css`。
- fix: Skip link 改为原站的绝对定位 + `translateX(-100%)` 结构，替代自定义 fixed 方案。涉及 `app/assets/css/main.css`。
- refactor: 首页根容器简化为 `group/spotlight relative`（背景/文字/抗锯齿样式移至 body 层），光标聚光灯弹簧阻尼由 30 改为原站的 10，新增页面加载整体淡入动画。涉及 `app/pages/index.vue`。
- feat: 移除独立 Contact 区块，改用原站 v5 结构（Writing 后直接接 footer），footer 归属 `main` 内层 div。涉及 `app/pages/index.vue`、删除 `app/components/ContactSection.vue`、`app/data/site.ts` 导航项。
- style: 侧栏导航指示线与文字类名精确对齐原站（`w-8/bg-slate-600` 默认、active/hover 展开至 `w-16/bg-slate-200`）。涉及 `app/components/AppSidebar.vue`、`app/assets/css/main.css`。
- feat: About 段落支持内联强调（`font-medium text-slate-200`），数据结构改为分段数组。涉及 `app/components/AboutSection.vue`、`app/data/site.ts`。
- fix: Experience 标题外链仅在存在 `organizationHref` 时渲染箭头图标。涉及 `app/components/ExperienceSection.vue`。
- style: 项目卡片 GitHub 图标由 `h-4 w-4` 缩小为原站的 `h-3 w-3`；项目与文章图片尺寸对齐原站 `200×48`。涉及 `app/components/ProjectCard.vue`、`app/components/WritingSection.vue`。
- style: 站点名统一为 Zane，移除中文名赵炯及 `englishName` 字段。涉及 `app/data/site.ts`、`app/components/AppSidebar.vue`、`nuxt.config.ts`、`README.md`。
