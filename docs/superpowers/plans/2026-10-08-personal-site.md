# Personal Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Nuxt 4 + Vue 3 + Tailwind CSS personal portfolio that recreates the reference site's layout and interactions with Zhao Jiong's verified content.

**Architecture:** A statically generated Nuxt app with typed content modules and small Vue components. The page shell owns desktop/mobile navigation and scroll observation; section components consume typed data. Tailwind 4 supplies utility styles and a token-based custom CSS layer.

**Tech Stack:** Nuxt 4, Vue 3, TypeScript, Tailwind CSS 4, Vite, Web Browser verification.

**Spec:** `docs/superpowers/specs/2026-10-08-personal-site-design.md`

## Global Constraints

- Use Chinese copy with English technical nouns preserved.
- Use background `#0f172a`, body text `#94a3b8`, headings `#e2e8f0`, and accent `#64ffda`.
- Do not expose the work email in this release.
- Keep profile, navigation, experience, project, writing, and social data in `app/data/site.ts`.
- Keep internal projects without fabricated external links.
- Preserve keyboard accessibility and visible focus states.
- Maintain `docs/CHANGELOG.md` for every implementation change.

---

### Task 1: Project Scaffold And Design Tokens

**Files:**

- Create: `package.json`
- Create: `.nvmrc`
- Create: `.gitignore`
- Create: `nuxt.config.ts`
- Create: `tsconfig.json`
- Create: `app/app.vue`
- Create: `app/pages/index.vue`
- Create: `app/assets/css/main.css`

**Interfaces:**

- Produces: Nuxt app shell with `srcDir: app`, Tailwind Vite plugin, global CSS, SEO metadata, and route `/`.

- [ ] **Step 1: Create package metadata and ignores**

Create `package.json` with scripts `dev`, `build`, `generate`, and `preview`; dependencies `nuxt`, `vue`, and `vue-router`; dependencies `tailwindcss` and `@tailwindcss/vite`. Create `.nvmrc` containing `22.20.0` and a Node/Nuxt `.gitignore`.

- [ ] **Step 2: Configure Nuxt and Tailwind**

`nuxt.config.ts` must set compatibility date `2026-10-08`, `srcDir: app`, import Tailwind's Vite plugin, register global CSS, disable devtools in production, and define title, description, lang, and theme color.

- [ ] **Step 3: Add page shell**

`app/app.vue` renders `<NuxtPage />`; `app/pages/index.vue` initially renders the top-level page container and imports the data module through later tasks.

- [ ] **Step 4: Verify scaffold**

Run: `source "$HOME/.nvm/nvm.sh" && nvm use 22.20.0 && npm install`
Expected: dependencies install successfully.

Run: `npm run build`
Expected: Nuxt build exits with code 0.

### Task 2: Typed Content Model

**Files:**

- Create: `app/data/site.ts`

**Interfaces:**

- Produces: `profile`, `socialLinks`, `navigationItems`, `experienceItems`, `projectItems`, and `writingItems`.

- [ ] **Step 1: Define types**

Define `SocialLink`, `NavigationItem`, `ExperienceItem`, `ProjectItem`, and `WritingItem` with required display and optional `href` fields.

- [ ] **Step 2: Populate verified data**

Populate profile from the senior frontend resume. Add Hecom experience, BI micro frontend, HeAgent / cc-hecom, clipFast, and stock. Link only public destinations. Add the three existing writing posts.

- [ ] **Step 3: Verify data integrity**

Run: `npm run build`
Expected: TypeScript compilation succeeds.

### Task 3: Layout Navigation And Hero

**Files:**

- Create: `app/components/AppHeader.vue`
- Create: `app/components/AppSidebar.vue`
- Modify: `app/pages/index.vue`
- Modify: `app/assets/css/main.css`

**Interfaces:**

- Consumes: `navigationItems`, `profile`, and `socialLinks` from `app/data/site.ts`.
- Produces: desktop sidebar, mobile drawer, and hero section.

- [ ] **Step 1: Implement desktop sidebar**

Render name, title, in-page links, and social links. Use vertical social icons on the far left and identity/nav in the left content column at `lg` and above.

- [ ] **Step 2: Implement mobile navigation**

Add a sticky mobile bar, menu button, overlay, close button, aria-expanded state, and Escape/overlay close behavior. Menu selection closes the drawer before scrolling.

- [ ] **Step 3: Implement hero**

Render the greeting, name, positioning, summary, navigation, and social row. Use staggered intro reveal and responsive typography.

- [ ] **Step 4: Verify navigation**

Run browser checks at 1460x900 and 390x844.
Expected: smooth anchor scrolling, active link updates, hover/focus states, operable mobile drawer, and no horizontal overflow.

### Task 4: Content Sections

**Files:**

- Create: `app/components/SectionHeading.vue`
- Create: `app/components/AboutSection.vue`
- Create: `app/components/ExperienceSection.vue`
- Create: `app/components/ProjectCard.vue`
- Create: `app/components/ProjectsSection.vue`
- Create: `app/components/WritingSection.vue`
- Create: `app/components/ContactSection.vue`
- Create: `public/images/project-bi.svg`
- Create: `public/images/project-agent.svg`
- Create: `public/images/project-clipfast.svg`
- Create: `public/images/project-stock.svg`
- Modify: `app/pages/index.vue`

**Interfaces:**

- Consumes: all typed content from `app/data/site.ts`.
- Produces: About, Experience, Projects, Writing, and Contact sections with shared heading/reveal contracts.

- [ ] **Step 1: Add shared heading**

`SectionHeading.vue` accepts `index: string`, `title: string`, and optional `href: string`, rendering the numbered heading and optional action link.

- [ ] **Step 2: Add About and Experience**

About uses real summary paragraphs. Experience uses a left-bordered timeline with date, title, organization, description, highlights, and technology tags.

- [ ] **Step 3: Add Projects**

Project cards use custom SVG media, title, description, optional external link, optional GitHub link, highlights, and technology tags. Add hover media/card transition and focus-visible styling.

- [ ] **Step 4: Add Writing and Contact**

Writing links to the three existing public posts. Contact offers GitHub, blog, Juejin, and Zhihu without displaying the work email.

- [ ] **Step 5: Verify sections**

Run: `npm run build`
Expected: build exits 0.

Run browser scroll checks.
Expected: all sections render, reveal once, remain readable at desktop/mobile, and links have distinguishable states.

### Task 5: Accessibility, Polish, And Changelog

**Files:**

- Modify: `app/pages/index.vue`
- Modify: `app/assets/css/main.css`
- Create: `docs/CHANGELOG.md`

**Interfaces:**

- Consumes: all completed UI components.
- Produces: production-ready accessibility and project changelog.

- [ ] **Step 1: Add accessibility affordances**

Add Skip to Content, semantic landmarks, descriptive external-link text, `scroll-margin-top`, focus-visible rings, and `prefers-reduced-motion` fallbacks.

- [ ] **Step 2: Polish visual details**

Check spacing, contrast, media framing, mobile typography, footer, and selection color.

- [ ] **Step 3: Record changes**

Create `docs/CHANGELOG.md` with the required title, date format note, dated entry, type, summary, and affected files.

- [ ] **Step 4: Full verification**

Run: `npm run build && npm run generate`
Expected: both commands exit 0.

Run: `npm run preview`
Expected: static preview serves the generated site.

Use browser verification at desktop and mobile widths.
Expected: no console errors, all navigation works, drawer works, reveal works, and no horizontal overflow.
