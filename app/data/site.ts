export type Locale = 'zh' | 'en'

/** A translatable value that holds one entry per locale, e.g. `{ zh: '关于', en: 'About' }`. */
export type Localized<T = string> = Record<Locale, T>

/** Marks a value as identical in every locale. */
const both = <T>(value: T): Localized<T> => ({ zh: value, en: value })

/** The shape of a definition once every `Localized` field is resolved for one locale. */
type ResolveField<Field> = Field extends Localized<infer Value> ? Value : Field
export type Resolved<T> = { [Key in keyof T]: ResolveField<T[Key]> }

export type SocialIconName = 'github' | 'blog' | 'juejin' | 'zhihu'

export interface LocaleDefinition {
  code: Locale
  /** BCP 47 tag used for `<html lang>` and `hreflang`. */
  language: string
  /** Path that selects the locale; the default locale owns `/`. */
  path: string
  /** Native name shown in the language switcher. */
  label: string
}

export const locales: Record<Locale, LocaleDefinition> = {
  zh: { code: 'zh', language: 'zh-CN', path: '/', label: '中文' },
  en: { code: 'en', language: 'en', path: '/en', label: 'EN' },
}

export const defaultLocale: Locale = 'zh'

export const siteUrl = 'https://novastart.dpdns.org'

export interface ProfileDefinition {
  greeting: Localized
  name: string
  title: Localized
  focus: Localized
  summary: Localized
  availability: Localized
  location: Localized
}

export type Profile = Resolved<ProfileDefinition>

export interface SocialLinkDefinition {
  label: Localized
  href: string
  icon: SocialIconName
  shortLabel: string
}

export type SocialLink = Resolved<SocialLinkDefinition>

export interface NavigationItemDefinition {
  id: string
  label: Localized
  number: string
}

export type NavigationItem = Resolved<NavigationItemDefinition>

export interface ExperienceItemDefinition {
  id: string
  date: Localized
  title: Localized
  organization: Localized
  organizationHref?: string
  description: Localized
  highlights: Localized<string[]>
  technologies: Localized<string[]>
}

export type ExperienceItem = Resolved<ExperienceItemDefinition>

export interface ProjectItemDefinition {
  id: string
  title: Localized
  description: Localized
  image: string
  imageAlt: Localized
  demoHref?: string
  sourceHref?: string
  sourceLabel?: Localized
  highlights: Localized<string[]>
  technologies: Localized<string[]>
}

export type ProjectItem = Resolved<ProjectItemDefinition>

export interface WritingItemDefinition {
  title: Localized
  year: string
  href: string
  excerpt: Localized
  image?: string
  imageAlt?: Localized
}

export type WritingItem = Resolved<WritingItemDefinition>

export interface AboutSegment {
  text: string
  highlight?: boolean
}

export type AboutParagraph = AboutSegment[]

export interface UiMessages {
  skipToContent: string
  sectionNav: string
  socialLinks: string
  localeSwitcher: string
  about: string
  experience: string
  projects: string
  writing: string
  /** Appended to link labels for screen readers. */
  newWindow: string
  technologiesUsed: string
  projectStack: string
  sourceDefault: string
}

export interface SiteMeta {
  title: string
  description: string
}

export const profile: ProfileDefinition = {
  greeting: { zh: '你好，我是', en: "Hi, I'm" },
  name: 'Zane',
  title: { zh: '资深前端工程师', en: 'Senior Front-End Engineer' },
  focus: {
    zh: '微前端 · 数据可视化 · AI 工程化',
    en: 'Micro-Frontends · Data Visualization · AI Engineering',
  },
  summary: {
    zh: '我关注复杂 B 端系统的工程化落地：把耦合业务拆成清晰边界，用可视化还原业务决策，用 Agent 和 MCP 协议把 AI 能力接进真实工作流。相信上下文质量、可验证假设和长期主义。',
    en: 'I care about making engineering work in complex B2B systems: splitting tightly coupled business logic into clear boundaries, turning business decisions into visualizations, and wiring AI into real workflows with agents and the MCP protocol. I believe in high-quality context, testable hypotheses, and thinking long term.',
  },
  availability: {
    zh: '目前在职，欢迎交流前端架构、数据可视化与 AI 工程化。',
    en: 'Currently employed, and open to conversations about front-end architecture, data visualization, and AI engineering.',
  },
  location: { zh: '北京', en: 'Beijing' },
}

export const navigationItems: NavigationItemDefinition[] = [
  { id: 'about', label: { zh: '关于', en: 'About' }, number: '01' },
  { id: 'experience', label: { zh: '经历', en: 'Experience' }, number: '02' },
  { id: 'projects', label: { zh: '作品', en: 'Projects' }, number: '03' },
  { id: 'writing', label: { zh: '文章', en: 'Writing' }, number: '04' },
]

export const socialLinks: SocialLinkDefinition[] = [
  {
    label: both('GitHub'),
    href: 'https://github.com/Fxxk181126',
    icon: 'github',
    shortLabel: 'GitHub',
  },
  {
    label: { zh: '个人博客', en: 'Personal blog' },
    href: 'https://fxxk181126.github.io',
    icon: 'blog',
    shortLabel: 'Blog',
  },
  {
    label: { zh: '掘金', en: 'Juejin' },
    href: 'https://juejin.cn/user/1574920986563927',
    icon: 'juejin',
    shortLabel: '掘金',
  },
  {
    label: { zh: '知乎', en: 'Zhihu' },
    href: 'https://www.zhihu.com/people/zhao-jiong-85-15',
    icon: 'zhihu',
    shortLabel: '知乎',
  },
]

export const aboutParagraphs: Localized<AboutParagraph[]> = {
  zh: [
    [
      { text: '你好！我是 Zane，一名长期工作在 B 端 SaaS 场景里的前端工程师。我习惯从业务边界开始思考架构，再把它落成可维护、可演进、可观测的系统。过去几年，我主导了 ' },
      { text: 'BI 业务从单体应用到微前端子应用的拆分', highlight: true },
      { text: '，也在组件库、工程化工具链和团队规范上持续投入。' },
    ],
    [
      { text: '可视化是我另一条主线。从 ' },
      { text: 'ECharts 图表到 Univer 表格、GoJS 流程图和 AntV XFlow 工作流编排', highlight: true },
      { text: '，我关注的不只是呈现效果，更关注数据模型、交互表达和复杂业务中的可解释性。' },
    ],
    [
      { text: '最近，我把更多精力放在 AI 工程化：独立完成 ' },
      { text: 'HeAgent 前端', highlight: true },
      { text: '，参与 ' },
      { text: 'Claude Code 源码级企业定制', highlight: true },
      { text: '，实践 MCP 协议、Skills 体系、LLM 流式交互和 Agent 工作流。我希望 AI 不只是对话框，而是能进入业务流程的可靠协作者。' },
    ],
  ],
  en: [
    [
      { text: "Hi! I'm Zane, a front-end engineer who has spent years building B2B SaaS products. I like to start from business boundaries when thinking about architecture, then turn that into systems that are maintainable, evolvable, and observable. Over the past few years, I led " },
      { text: 'the split of the BI business from a monolith into micro-frontend sub-applications', highlight: true },
      { text: ', and I keep investing in our component library, build tooling, and team conventions.' },
    ],
    [
      { text: 'Visualization is my other main thread. From ' },
      { text: 'ECharts charts to Univer spreadsheets, GoJS flow diagrams, and AntV XFlow workflow editors', highlight: true },
      { text: ', what I care about goes beyond how things look: it is the data model, how interaction expresses meaning, and keeping complex business logic explainable.' },
    ],
    [
      { text: 'Most recently, I have been putting more energy into AI engineering: building ' },
      { text: 'the HeAgent front end', highlight: true },
      { text: ' on my own, contributing to ' },
      { text: 'source-level enterprise customization of Claude Code', highlight: true },
      { text: ', and working hands-on with the MCP protocol, the Skills system, LLM streaming interfaces, and agent workflows. I want AI to be more than a chat box: a reliable collaborator that can take part in real business processes.' },
    ],
  ],
}

export const experienceItems: ExperienceItemDefinition[] = [
  {
    id: 'ai-engineering',
    date: { zh: '2026 — 现在', en: '2026 — Present' },
    title: { zh: 'AI 工程化实践', en: 'Applied AI Engineering' },
    organization: both('HeAgent · cc-hecom'),
    description: {
      zh: '在和创科技内部推进 AI 产品工程化，覆盖智能体前端、桌面 AI 工作台、MCP 协议接入和行业 Skills 体系设计。',
      en: 'Driving AI product engineering inside Hecom, covering an agent front end, a desktop AI workbench, MCP protocol integration, and the design of domain-specific Skills.',
    },
    highlights: {
      zh: [
        '从 0 到 1 独立交付 HeAgent 智能体前端，支持多轮对话、流式输出、工具调用和 MCP 协议集成。',
        '基于 Claude Code 源码完成 cc-hecom 企业级二次开发，沉淀 Skills 编写规范和业务工具链。',
        '将方案撰写、客户成功等 B 端场景沉淀为可复用的 Agent 工作流。',
      ],
      en: [
        'Delivered the HeAgent agent front end from 0 to 1 on my own, with multi-turn conversations, streaming output, tool calling, and MCP protocol integration.',
        'Built cc-hecom, an enterprise-grade customization of Claude Code at the source level, and distilled Skills authoring guidelines and business tooling from it.',
        'Turned B2B scenarios such as proposal writing and customer success into reusable agent workflows.',
      ],
    },
    technologies: both([
      'React 19',
      'Ant Design X',
      'Zustand',
      'MCP',
      'LLM Streaming',
      'Electron',
      'TypeScript',
    ]),
  },
  {
    id: 'hecom-senior-frontend',
    date: { zh: '2021 — 现在', en: '2021 — Present' },
    title: { zh: '资深前端工程师', en: 'Senior Front-End Engineer' },
    organization: { zh: '和创科技 · Cloud Web', en: 'Hecom · Cloud Web' },
    description: {
      zh: '负责企业级主应用基座、BI 微前端子应用、公共组件库和复杂可视化模块建设，服务红圈 CRM 多条核心业务线。',
      en: "Responsible for the enterprise host application, the BI micro-frontend sub-application, the shared component library, and complex visualization modules, serving several core business lines of the company's CRM product.",
    },
    highlights: {
      zh: [
        '主导 BI 业务从单体应用拆分为独立 Vite 子应用，覆盖看板、大屏、报表、数据模型和数据同步。',
        '参与 qiankun 主应用基座建设，支撑 10+ 子应用稳定运行，沉淀契约层与路由隔离方案。',
        '作为 cloud-web-components 主要贡献者，推动组件文档、单元测试和 CI 发布流程建设。',
      ],
      en: [
        'Led the split of the BI business out of the monolith into a standalone Vite sub-application covering dashboards, data screens, reports, data models, and data sync.',
        'Helped build the qiankun host application that keeps 10+ sub-applications running reliably, and shaped its contract layer and routing isolation scheme.',
        'As a main contributor to cloud-web-components, pushed forward component documentation, unit testing, and the CI release process.',
      ],
    },
    technologies: both([
      'React',
      'Vue 3',
      'TypeScript',
      'qiankun',
      'Vite',
      'ECharts',
      'Univer',
      'GoJS',
      'AntV XFlow',
    ]),
  },
  {
    id: 'education',
    date: both('2015 — 2019'),
    title: { zh: '计算机科学与技术 · 学士', en: 'B.S. in Computer Science' },
    organization: { zh: '本科', en: 'Undergraduate studies' },
    description: {
      zh: '建立计算机科学基础，持续关注前端工程、可视化系统和软件设计方法。',
      en: 'Built a foundation in computer science and kept following front-end engineering, visualization systems, and software design methods.',
    },
    highlights: {
      zh: [
        '开始参与 Web 应用开发与项目实践。',
        '形成从需求拆解到工程实现的完整思考方式。',
      ],
      en: [
        'Started working on web application development and hands-on projects.',
        'Developed an end-to-end way of thinking, from breaking down requirements to engineering implementation.',
      ],
    },
    technologies: {
      zh: ['计算机科学', 'Web 基础', '工程方法'],
      en: ['Computer Science', 'Web Fundamentals', 'Engineering Methods'],
    },
  },
]

export const projectItems: ProjectItemDefinition[] = [
  {
    id: 'bi-micro-frontend',
    title: { zh: 'BI 微前端子应用', en: 'BI Micro-Frontend Sub-Application' },
    description: {
      zh: '主导 BI 业务从主应用中拆分为独立子应用，覆盖主题看板、数字大屏、中国式报表、数据模型和数据同步五大模块。',
      en: 'Led the split of the BI business out of the host application into a standalone sub-application covering five modules: theme dashboards, data screens, Chinese-style reports, data models, and data sync.',
    },
    image: '/images/project-bi.svg',
    imageAlt: {
      zh: 'BI 微前端架构示意图，展示主应用基座与看板、大屏、报表、数据模型、数据同步子模块的关系',
      en: 'Diagram of the BI micro-frontend architecture, showing how the host application connects to the dashboard, data screen, report, data model, and data sync modules',
    },
    highlights: {
      zh: [
        '设计主子应用契约层与路由隔离方案。',
        '独立发版周期从天级压缩到小时级。',
        '支撑企业客户的数据分析与业务看板场景。',
      ],
      en: [
        'Designed the host/sub-application contract layer and the routing isolation scheme.',
        'Cut the independent release cycle from days to hours.',
        'Supports enterprise customers in data analysis and business dashboards.',
      ],
    },
    technologies: both(['qiankun', 'Vite', 'React', 'TypeScript', 'ECharts', 'Univer', 'GoJS']),
  },
  {
    id: 'agent-platform',
    title: both('HeAgent / cc-hecom'),
    description: {
      zh: 'AI 工程化双线实践：一端是面向企业业务的智能体前端，另一端是基于 Claude Code 源码定制的桌面 AI 编程工作台。',
      en: 'Two tracks of AI engineering work: an agent front end for enterprise business on one side, and a desktop AI coding workbench customized from the Claude Code source on the other.',
    },
    image: '/images/project-agent.svg',
    imageAlt: {
      zh: 'Agent 平台示意图，展示流式对话、工具调用、MCP 协议和 Skills 体系的连接关系',
      en: 'Diagram of the agent platform, showing how streaming conversations, tool calling, the MCP protocol, and the Skills system connect',
    },
    highlights: {
      zh: [
        'HeAgent 前端唯一作者，独立完成从选型到交付。',
        '实现多会话、流式渲染、图表处理和企业账号体系打通。',
        'cc-hecom 扩展 Skills、MCP、桌面端与企业内部工具链。',
      ],
      en: [
        'Sole author of the HeAgent front end, delivered it alone from technology selection to release.',
        'Implemented multi-session support, streaming rendering, chart handling, and integration with the enterprise account system.',
        'Extended cc-hecom with Skills, MCP, desktop shells, and internal enterprise tooling.',
      ],
    },
    technologies: both([
      'React 19',
      'Ant Design X',
      'Zustand',
      'MiniMax API',
      'MCP',
      'Claude Code',
      'Electron',
    ]),
  },
  {
    id: 'clipfast',
    title: both('clipFast'),
    description: {
      zh: '跨平台剪贴板管理工具，支持历史记录、智能分类、快捷唤起和本地优先的数据管理，并配套产品站与文档。',
      en: 'A cross-platform clipboard manager with history, smart categorization, a quick-launch hotkey, and local-first data storage, shipped with a product site and documentation.',
    },
    image: '/images/project-clipfast.svg',
    imageAlt: {
      zh: 'clipFast 产品界面示意图，展示剪贴板历史列表、搜索框和快捷键提示',
      en: 'Illustration of the clipFast interface, showing the clipboard history list, the search box, and keyboard shortcut hints',
    },
    demoHref: 'https://fxxk181126.github.io',
    sourceHref: 'https://github.com/Fxxk181126/clipFast',
    sourceLabel: { zh: 'GitHub 仓库', en: 'GitHub repository' },
    highlights: {
      zh: [
        '独立完成产品设计、开发、打包和文档。',
        '支持全局快捷键唤起与剪贴板历史检索。',
        '完成 macOS / Windows 多平台发布流程。',
      ],
      en: [
        'Handled product design, development, packaging, and documentation alone.',
        'Supports a global hotkey and search across clipboard history.',
        'Set up a release pipeline for both macOS and Windows.',
      ],
    },
    technologies: both(['Electron', 'TypeScript', 'electron-builder', 'Local-first']),
  },
  {
    id: 'ark-ledger',
    title: { zh: '方舟账本 Ark Ledger', en: 'Ark Ledger' },
    description: {
      zh: '本地优先的个人记账 Web App：账本只存在浏览器里，可安装为 PWA 离线使用，支持多账本、预算、日历视图、账单导入与加密导出。',
      en: 'A local-first personal bookkeeping web app: the ledger lives only in your browser, installs as a PWA for offline use, and supports multiple ledgers, budgets, a calendar view, bill import, and encrypted export.',
    },
    image: '/images/project-ark-ledger.svg',
    imageAlt: {
      zh: '方舟账本界面示意图，展示本月支出、预算进度、最近记录列表和分析图表',
      en: 'Illustration of the Ark Ledger interface, showing monthly spending, budget progress, recent entries, and analytics charts',
    },
    demoHref: 'https://ark.novastart.dpdns.org',
    highlights: {
      zh: [
        '金额全程以整数「分」存储，交易经状态机与指纹去重后写入 IndexedDB。',
        '导出包含清单、CSV 与 SHA-256 校验，可用口令做 AES-256-GCM 整包加密。',
        '账单导入先进入待确认队列，可批量批准或整批回滚，不直接写入正式账本。',
      ],
      en: [
        'Amounts are stored as integer cents throughout, and transactions pass through a state machine and fingerprint deduplication before being written to IndexedDB.',
        'Exports bundle a manifest, CSV files, and SHA-256 checksums, and can be encrypted as a whole with a passphrase using AES-256-GCM.',
        'Imported bills land in a review queue first, where they can be approved in bulk or rolled back as a batch instead of being written straight into the ledger.',
      ],
    },
    technologies: both(['React 19', 'TypeScript', 'Vite', 'IndexedDB', 'PWA', 'Web Crypto']),
  },
  {
    id: 'cili',
    title: { zh: '词历 Cili', en: 'Cili' },
    description: {
      zh: '面向 CET-4 / CET-6 / 考研 / 雅思备考的背单词微信小程序：以考试倒计时驱动每日任务，用 FSRS 间隔重复排程，支持定级测试、离线作答和云端幂等同步。',
      en: 'A WeChat mini program for CET-4, CET-6, postgraduate entrance exam, and IELTS vocabulary: an exam countdown drives daily tasks, FSRS spaced repetition schedules reviews, and it supports placement tests, offline practice, and idempotent cloud sync.',
    },
    image: '/images/project-cili.svg',
    imageAlt: {
      zh: '词历小程序界面示意图，展示考试倒计时、今日任务卡片和单词卡作答界面',
      en: 'Illustration of the Cili mini program, showing the exam countdown, the daily task card, and the flashcard answering screen',
    },
    highlights: {
      zh: [
        '业务内核 @cili/core 为纯 TypeScript、零 wx.* 依赖，由 CI 门禁强制，客户端与云函数共用同一套类型与事件字典。',
        '四选一题目由内核按种子确定性生成，干扰项取词频邻近词，离线也能出题。',
        '新词批次按种子做 A/B 分半，B 半 7 天内不进复习队列，用于 7 天后的记忆效果后测。',
      ],
      en: [
        'The @cili/core domain core is pure TypeScript with zero wx.* dependencies, enforced by a CI gate, and shares one set of types and event definitions between the client and cloud functions.',
        'Multiple-choice questions are generated deterministically from a seed, with distractors drawn from words of similar frequency, so questions work offline.',
        'Each batch of new words is split A/B by seed; the B half stays out of review queues for 7 days so it can serve as a delayed memory post-test.',
      ],
    },
    technologies: {
      zh: ['微信小程序', 'TypeScript', 'ts-fsrs', '微信云开发', 'Vitest'],
      en: ['WeChat Mini Program', 'TypeScript', 'ts-fsrs', 'WeChat Cloud Development', 'Vitest'],
    },
  },
  {
    id: 'gugong-3d',
    title: { zh: '故宫 · 3D 漫游', en: 'Forbidden City · 3D Walkthrough' },
    description: {
      zh: '按真实尺度在浏览器中漫游故宫的 Three.js 场景：建筑、纹理与音效全部程序化生成，支持多档视角、疾跑跳跃、昼夜循环与地图传送。',
      en: 'A Three.js scene for exploring the Forbidden City at real scale in the browser: buildings, textures, and sounds are all generated procedurally, with several camera modes, sprinting and jumping, a day-night cycle, and map teleporting.',
    },
    image: '/images/project-gugong.svg',
    imageAlt: {
      zh: '故宫 3D 漫游示意图，展示中轴线上的宫殿、东西两侧宫院、位置卡片和小地图',
      en: 'Illustration of the Forbidden City 3D walkthrough, showing the halls along the central axis, the side courtyards, the location card, and the minimap',
    },
    demoHref: 'https://gugong-3d.novastart.dpdns.org',
    sourceHref: 'https://github.com/Fxxk181126/gugong-3d',
    highlights: {
      zh: [
        '单文件零构建：几何体、程序化纹理与合成音效集中在同一个 index.html 中。',
        '按 1 单位等于 1 米还原约 753×961 米宫城，覆盖中轴线与东西六宫等 21 个命名区域。',
        '自写分区块静态网格合并与跟随玩家的阴影相机，并加入昼夜光照和实例化人群。',
      ],
      en: [
        'Single file, no build step: geometry, procedural textures, and synthesized sounds all live in one index.html.',
        'Recreates the roughly 753×961 m palace grounds at 1 unit = 1 metre, covering 21 named areas including the central axis and the Six Eastern and Western Palaces.',
        'Wrote custom zone-based static mesh merging and a shadow camera that follows the player, plus day-night lighting and instanced crowds.',
      ],
    },
    technologies: both(['Three.js', 'JavaScript', 'WebGL', 'Canvas 2D', 'Web Audio API']),
  },
  {
    id: 'thundergap',
    title: { zh: '雷隙 THUNDERGAP', en: 'THUNDERGAP' },
    description: {
      zh: '雷雨夜第三人称 3D 动作游戏概念原型：在收缩的雷暴穹顶下躲避落雷、收集雷纹碎片并抵达广播塔，雨幕与雷声全部由代码实时计算。',
      en: 'A third-person 3D action game concept prototype set on a stormy night: dodge lightning strikes under a shrinking storm dome, collect thunder shards, and reach the radio tower, with rain and thunder computed in real time.',
    },
    image: '/images/project-thundergap.svg',
    imageAlt: {
      zh: '雷隙游戏界面示意图，展示雷雨夜城市、闪电、回声脉冲环和生命体征、雷纹碎片面板',
      en: 'Illustration of the THUNDERGAP interface, showing the stormy night city, lightning, echo pulse rings, and the vitals and shard panels',
    },
    demoHref: 'https://thundergap.vercel.app',
    sourceHref: 'https://github.com/Fxxk181126/thundergap',
    highlights: {
      zh: [
        '14000 条雨丝的位置全部在顶点着色器中计算，程序化城市立面与屋顶合批为两个网格。',
        '雨声、雷鸣与碎片提示音全部由 WebAudio 程序化合成，并用 HRTF 做空间化。',
        '自研 AABB 碰撞、土狼时间与跳跃缓冲、相机避障和程序化跑动动画。',
      ],
      en: [
        'All 14,000 rain streaks are positioned in the vertex shader, and the procedural city facades and roofs are batched into two meshes.',
        'Rain, thunder, and shard cues are synthesized procedurally with WebAudio and spatialized with HRTF.',
        'Custom AABB collision, coyote time and jump buffering, camera obstacle avoidance, and procedural run animation.',
      ],
    },
    technologies: both(['Three.js', 'JavaScript', 'GLSL', 'Web Audio API', 'Pointer Lock API']),
  },
  {
    id: 'cafe-in-the-rain',
    title: { zh: '雨夜咖啡 Cafe in the Rain', en: 'Cafe in the Rain' },
    description: {
      zh: '第一人称可漫游的雨夜小巷 Three.js 场景：雨丝、水洼涟漪与霓虹倒影由自定义 GLSL 着色器实时计算，雨声与雷声全部由 Web Audio 合成。',
      en: 'A first-person Three.js scene of a rainy alley at night: rain streaks, puddle ripples, and neon reflections are computed in real time by custom GLSL shaders, and the rain and thunder are synthesized with Web Audio.',
    },
    image: '/images/project-cafe-rain.svg',
    imageAlt: {
      zh: '雨夜咖啡场景示意图，展示雨中的小巷、亮着暖光的咖啡店、霓虹招牌和地面积水倒影',
      en: 'Illustration of the Cafe in the Rain scene, showing the alley in the rain, the warmly lit café, neon signs, and reflections in puddles',
    },
    demoHref: 'https://fxxk181126.github.io/cafe-in-the-rain/',
    sourceHref: 'https://github.com/Fxxk181126/cafe-in-the-rain',
    highlights: {
      zh: [
        'GPU 实例化雨系统：桌面端 8000 条、移动端 3000 条雨丝在跟随相机的体积内循环。',
        '自定义水洼着色器结合噪声法线、涟漪环与立方体贴图伪反射，并叠加 Bloom 泛光。',
        '砖墙纹理在运行时注入着色器，招牌文字用 Canvas 动态绘制，不依赖任何贴图与模型文件。',
      ],
      en: [
        'GPU-instanced rain system: 8,000 streaks on desktop and 3,000 on mobile cycle through a volume that follows the camera.',
        'A custom puddle shader combines noise normals, ripple rings, and cube-map pseudo-reflections, layered with bloom.',
        'Brick textures are injected into shaders at runtime and sign text is drawn with Canvas, so no texture or model files are needed.',
      ],
    },
    technologies: both(['Three.js', 'GLSL', 'Web Audio API', 'Canvas 2D']),
  },
]

export const writingItems: WritingItemDefinition[] = [
  {
    title: {
      zh: 'Vue 3 Composition API 完全指南',
      en: 'A Complete Guide to the Vue 3 Composition API (in Chinese)',
    },
    year: '2024',
    href: 'https://fxxk181126.github.io/blog/vue3-composition-api-guide/',
    excerpt: {
      zh: '深入理解 Vue 3 Composition API 的组织方式、类型推导、逻辑复用和工程实践。',
      en: 'A deep look at how the Vue 3 Composition API is organized, type inference, logic reuse, and engineering practices.',
    },
    image: '/images/writing-vue.svg',
    imageAlt: {
      zh: 'Vue 3 Composition API 文章封面',
      en: 'Cover image for the Vue 3 Composition API article',
    },
  },
  {
    title: {
      zh: '前端性能优化实战指南',
      en: 'A Practical Guide to Front-End Performance Optimization (in Chinese)',
    },
    year: '2024',
    href: 'https://fxxk181126.github.io/blog/frontend-performance-optimization/',
    excerpt: {
      zh: '从加载性能到运行时性能，梳理现代 Web 应用的关键指标、诊断方法和优化路径。',
      en: 'From loading to runtime performance: key metrics, diagnosis methods, and optimization paths for modern web apps.',
    },
    image: '/images/writing-performance.svg',
    imageAlt: {
      zh: '前端性能优化文章封面',
      en: 'Cover image for the front-end performance article',
    },
  },
  {
    title: {
      zh: '现代 CSS 技术与最佳实践',
      en: 'Modern CSS Techniques and Best Practices (in Chinese)',
    },
    year: '2024',
    href: 'https://fxxk181126.github.io/blog/modern-css-techniques/',
    excerpt: {
      zh: '使用 Grid、Flexbox、自定义属性和容器查询构建更清晰、更灵活的界面布局。',
      en: 'Building clearer, more flexible layouts with Grid, Flexbox, custom properties, and container queries.',
    },
    image: '/images/writing-css.svg',
    imageAlt: {
      zh: '现代 CSS 技术文章封面',
      en: 'Cover image for the modern CSS article',
    },
  },
]

export const ui: Record<Locale, UiMessages> = {
  zh: {
    skipToContent: '跳到主要内容',
    sectionNav: '页面章节导航',
    socialLinks: '社交媒体',
    localeSwitcher: '语言切换',
    about: '关于我',
    experience: '工作经历',
    projects: '精选作品',
    writing: '博客文章',
    newWindow: '（新窗口打开）',
    technologiesUsed: '使用技术',
    projectStack: '项目技术栈',
    sourceDefault: 'GitHub 仓库',
  },
  en: {
    skipToContent: 'Skip to main content',
    sectionNav: 'Page sections',
    socialLinks: 'Social links',
    localeSwitcher: 'Language',
    about: 'About me',
    experience: 'Work experience',
    projects: 'Selected projects',
    writing: 'Blog posts',
    newWindow: ' (opens in a new tab)',
    technologiesUsed: 'Technologies used',
    projectStack: 'Project tech stack',
    sourceDefault: 'GitHub repository',
  },
}

export const siteMeta: Record<Locale, SiteMeta> = {
  zh: {
    title: 'Zane | 资深前端工程师',
    description: 'Zane 的个人站点：资深前端工程师，专注微前端架构、数据可视化与 AI 工程化。',
  },
  en: {
    title: 'Zane | Senior Front-End Engineer',
    description:
      "Zane's personal site: senior front-end engineer focused on micro-frontend architecture, data visualization, and AI engineering.",
  },
}
