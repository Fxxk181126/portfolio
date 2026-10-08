# Changelog

本文件记录个人站点项目的全部变更。日期格式为 `YYYY-MM-DD`。

## 2026-10-08

- docs: 初始化个人站点设计规格、实施计划与变更日志。涉及 `docs/superpowers/specs/2026-10-08-personal-site-design.md`、`docs/superpowers/plans/2026-10-08-personal-site.md`、`docs/CHANGELOG.md`。
- feat: 搭建 Nuxt 4 + Vue 3 + Tailwind CSS 项目骨架，新增类型化个人资料、桌面侧栏、移动抽屉、滚动定位和显现交互。涉及 `package.json`、`nuxt.config.ts`、`app/pages/index.vue`、`app/components/*`、`app/data/site.ts`、`app/assets/css/main.css`。
- feat: 新增关于、经历、作品、文章、联系区块与四张项目示意图。涉及 `app/components/AboutSection.vue`、`app/components/ExperienceSection.vue`、`app/components/ProjectsSection.vue`、`app/components/WritingSection.vue`、`app/components/ContactSection.vue`、`public/images/*`。
- fix: 修复移动端顶部栏滚动后不可见和抽屉遮罩高度为零的问题。涉及 `app/components/AppHeader.vue`。
- fix: 补充 SVG favicon，消除静态部署下的 favicon 404。涉及 `public/favicon.svg`、`nuxt.config.ts`。
- docs: 补充项目 README、运行方式、构建部署说明与内容维护入口。涉及 `README.md`、`docs/CHANGELOG.md`。
