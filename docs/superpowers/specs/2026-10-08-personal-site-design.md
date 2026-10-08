# Zhao Jiong Personal Site Design

## Goal

Create a dark, single-page personal portfolio for Zhao Jiong that recreates the layout and interaction model of brittanychiang.com while using Zhao Jiong's real professional content. The first release prioritizes visual fidelity and interaction quality. Article, course scheduling, payment, and commerce capabilities remain future extensions enabled by the Nuxt architecture.

## Person

- Name: 赵炯 / Zane
- Primary title: 资深前端工程师
- Secondary positioning: AI 工程化 / 微前端 / 数据可视化
- GitHub: https://github.com/Fxxk181126
- Blog: https://fxxk181126.github.io
- Juejin: https://juejin.cn/user/1574920986563927
- Zhihu: https://www.zhihu.com/people/zhao-jiong-85-15

## Product Scope

### Included

1. A responsive one-page home experience.
2. Hero section with name, positioning, summary, in-page navigation, and social links.
3. About section describing frontend architecture, visualization, and AI engineering work.
4. Experience timeline based on the verified Hecom work described in the user's resume.
5. Selected projects: BI micro frontend, HeAgent / cc-hecom, clipFast, and stock.
6. Writing section linking to three existing public blog posts.
7. Contact and footer section with public links.
8. Desktop fixed navigation, mobile navigation drawer, smooth scrolling, active section highlighting, scroll reveal, and hover/focus states.

### Excluded From This Release

- Course pages, course timetable, enrollment, scheduling, user accounts, payment, and admin tools.
- Markdown article rendering and an internal article content model.
- Contact form submission and third-party analytics.
- Public display of the work email address. Contact links use public platforms until the user chooses a dedicated personal email.

## Interaction Design

1. Desktop layout keeps the identity, section navigation, and social rail visible in the left half while main content occupies the right half.
2. Desktop navigation links update as the user scrolls through About, Experience, Projects, and Writing.
3. Anchor links use smooth scrolling and leave enough top spacing for the mobile sticky bar.
4. Mobile uses a compact top bar with a menu button and an accessible overlay navigation drawer.
5. Section content becomes visible through a subtle fade-and-rise effect once it enters the viewport.
6. Social icons, links, tags, cards, and focus-visible states provide clear 150-300 ms transitions.
7. Keyboard users can use Skip to Content and retain a visible focus ring.

## Visual Design

- Background: `#0f172a`.
- Primary body text: `#94a3b8`.
- Bright heading text: `#e2e8f0`.
- Accent: `#64ffda`.
- Typeface: Inter with system sans-serif fallbacks.
- Desktop content width: approximately 640-680 px in the right column.
- Section rhythm: generous vertical spacing, numbered section headings, left-bordered experience timeline, and full-width project media cards.

## Content Sources

- Primary source: `/Users/zhaojiong/workSpace/docs/Resume/02-资深前端通用版.md`.
- Project verification: `/Users/zhaojiong/workSpace/docs/Resume/00-工作文件清单.md`.
- Public GitHub account: `Fxxk181126`.
- Initial articles from the existing Jekyll repository.

## Technical Architecture

- Nuxt 4 provides the application shell, file-based routing, SSG, SEO metadata, and future server-route boundary.
- Vue 3 components encapsulate navigation, hero, sections, experience, projects, writing, and contact.
- TypeScript data modules keep profile, experience, projects, writing, and social data separate from presentation.
- Tailwind CSS 4 provides utility styles while a small custom CSS layer defines site tokens, reveal animation, and scrollbar/focus behavior.
- No backend, database, authentication, or payment dependency is included in this release.

## Data Boundaries

The release defines typed exports in `app/data/site.ts`:

- `profile` for identity, title, summary, and availability.
- `socialLinks` for external platforms.
- `navigationItems` for in-page sections.
- `experienceItems` for work and education milestones.
- `projectItems` for selected work.
- `writingItems` for initial external articles.

Future commercial features may add server routes, persisted course data, auth, and payment providers without changing this release's component contracts.

## Verification

1. `npm run build` completes successfully.
2. `npm run generate` produces a static deployment.
3. The local preview exposes the full page without console errors.
4. Desktop viewport confirms the fixed left navigation, right content column, active state, hover states, and scroll reveal.
5. Mobile viewport confirms the top bar, drawer, close behavior, readable text, and absence of horizontal overflow.
6. Keyboard focus confirms Skip to Content, visible focus rings, and operable navigation.
