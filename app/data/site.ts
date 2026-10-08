export type SocialIconName = 'github' | 'blog' | 'juejin' | 'zhihu'

export interface SocialLink {
  label: string
  href: string
  icon: SocialIconName
  shortLabel: string
}

export interface NavigationItem {
  id: string
  label: string
  number: string
}

export interface ExperienceItem {
  id: string
  date: string
  title: string
  organization: string
  organizationHref?: string
  description: string
  highlights: string[]
  technologies: string[]
}

export interface ProjectItem {
  id: string
  title: string
  description: string
  image: string
  imageAlt: string
  demoHref?: string
  sourceHref?: string
  sourceLabel?: string
  highlights: string[]
  technologies: string[]
}

export interface WritingItem {
  title: string
  date: string
  publication: string
  href: string
  excerpt: string
}

export const profile = {
  greeting: '你好，我是',
  name: '赵炯',
  englishName: 'Zane',
  title: '资深前端工程师',
  focus: '微前端 · 数据可视化 · AI 工程化',
  summary:
    '我关注复杂 B 端系统的工程化落地：把耦合业务拆成清晰边界，用可视化还原业务决策，用 Agent 和 MCP 协议把 AI 能力接进真实工作流。相信上下文质量、可验证假设和长期主义。',
  availability: '目前在职，欢迎交流前端架构、数据可视化与 AI 工程化。',
  location: '北京',
} as const

export const navigationItems: NavigationItem[] = [
  { id: 'about', label: '关于', number: '01' },
  { id: 'experience', label: '经历', number: '02' },
  { id: 'projects', label: '作品', number: '03' },
  { id: 'writing', label: '文章', number: '04' },
  { id: 'contact', label: '联系', number: '05' },
]

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/Fxxk181126',
    icon: 'github',
    shortLabel: 'GitHub',
  },
  {
    label: '个人博客',
    href: 'https://fxxk181126.github.io',
    icon: 'blog',
    shortLabel: 'Blog',
  },
  {
    label: '掘金',
    href: 'https://juejin.cn/user/1574920986563927',
    icon: 'juejin',
    shortLabel: '掘金',
  },
  {
    label: '知乎',
    href: 'https://www.zhihu.com/people/zhao-jiong-85-15',
    icon: 'zhihu',
    shortLabel: '知乎',
  },
]

export const aboutParagraphs = [
  '你好！我是赵炯，一名长期工作在 B 端 SaaS 场景里的前端工程师。我习惯从业务边界开始思考架构，再把它落成可维护、可演进、可观测的系统。过去几年，我主导了 BI 业务从单体应用到微前端子应用的拆分，也在组件库、工程化工具链和团队规范上持续投入。',
  '可视化是我另一条主线。从 ECharts 图表到 Univer 表格、GoJS 流程图和 AntV XFlow 工作流编排，我关注的不只是呈现效果，更关注数据模型、交互表达和复杂业务中的可解释性。',
  '最近，我把更多精力放在 AI 工程化：独立完成 HeAgent 前端，参与 Claude Code 源码级企业定制，实践 MCP 协议、Skills 体系、LLM 流式交互和 Agent 工作流。我希望 AI 不只是对话框，而是能进入业务流程的可靠协作者。',
]

export const experienceItems: ExperienceItem[] = [
  {
    id: 'ai-engineering',
    date: '2026 — 现在',
    title: 'AI 工程化实践',
    organization: 'HeAgent · cc-hecom',
    description:
      '在和创科技内部推进 AI 产品工程化，覆盖智能体前端、桌面 AI 工作台、MCP 协议接入和行业 Skills 体系设计。',
    highlights: [
      '从 0 到 1 独立交付 HeAgent 智能体前端，支持多轮对话、流式输出、工具调用和 MCP 协议集成。',
      '基于 Claude Code 源码完成 cc-hecom 企业级二次开发，沉淀 Skills 编写规范和业务工具链。',
      '将方案撰写、客户成功等 B 端场景沉淀为可复用的 Agent 工作流。',
    ],
    technologies: [
      'React 19',
      'Ant Design X',
      'Zustand',
      'MCP',
      'LLM Streaming',
      'Electron',
      'TypeScript',
    ],
  },
  {
    id: 'hecom-senior-frontend',
    date: '2021 — 现在',
    title: '资深前端工程师',
    organization: '和创科技 · Cloud Web',
    description:
      '负责企业级主应用基座、BI 微前端子应用、公共组件库和复杂可视化模块建设，服务红圈 CRM 多条核心业务线。',
    highlights: [
      '主导 BI 业务从单体应用拆分为独立 Vite 子应用，覆盖看板、大屏、报表、数据模型和数据同步。',
      '参与 qiankun 主应用基座建设，支撑 10+ 子应用稳定运行，沉淀契约层与路由隔离方案。',
      '作为 cloud-web-components 主要贡献者，推动组件文档、单元测试和 CI 发布流程建设。',
    ],
    technologies: [
      'React',
      'Vue 3',
      'TypeScript',
      'qiankun',
      'Vite',
      'ECharts',
      'Univer',
      'GoJS',
      'AntV XFlow',
    ],
  },
  {
    id: 'education',
    date: '2015 — 2019',
    title: '计算机科学与技术 · 学士',
    organization: '本科',
    description:
      '建立计算机科学基础，持续关注前端工程、可视化系统和软件设计方法。',
    highlights: [
      '开始参与 Web 应用开发与项目实践。',
      '形成从需求拆解到工程实现的完整思考方式。',
    ],
    technologies: ['计算机科学', 'Web 基础', '工程方法'],
  },
]

export const projectItems: ProjectItem[] = [
  {
    id: 'bi-micro-frontend',
    title: 'BI 微前端子应用',
    description:
      '主导 BI 业务从主应用中拆分为独立子应用，覆盖主题看板、数字大屏、中国式报表、数据模型和数据同步五大模块。',
    image: '/images/project-bi.svg',
    imageAlt: 'BI 微前端架构示意图，展示主应用基座与看板、大屏、报表、数据模型、数据同步子模块的关系',
    highlights: [
      '设计主子应用契约层与路由隔离方案。',
      '独立发版周期从天级压缩到小时级。',
      '支撑企业客户的数据分析与业务看板场景。',
    ],
    technologies: [
      'qiankun',
      'Vite',
      'React',
      'TypeScript',
      'ECharts',
      'Univer',
      'GoJS',
    ],
  },
  {
    id: 'agent-platform',
    title: 'HeAgent / cc-hecom',
    description:
      'AI 工程化双线实践：一端是面向企业业务的智能体前端，另一端是基于 Claude Code 源码定制的桌面 AI 编程工作台。',
    image: '/images/project-agent.svg',
    imageAlt: 'Agent 平台示意图，展示流式对话、工具调用、MCP 协议和 Skills 体系的连接关系',
    highlights: [
      'HeAgent 前端唯一作者，独立完成从选型到交付。',
      '实现多会话、流式渲染、图表处理和企业账号体系打通。',
      'cc-hecom 扩展 Skills、MCP、桌面端与企业内部工具链。',
    ],
    technologies: [
      'React 19',
      'Ant Design X',
      'Zustand',
      'MiniMax API',
      'MCP',
      'Claude Code',
      'Electron',
    ],
  },
  {
    id: 'clipfast',
    title: 'clipFast',
    description:
      '跨平台剪贴板管理工具，支持历史记录、智能分类、快捷唤起和本地优先的数据管理，并配套产品站与文档。',
    image: '/images/project-clipfast.svg',
    imageAlt: 'clipFast 产品界面示意图，展示剪贴板历史列表、搜索框和快捷键提示',
    demoHref: 'https://fxxk181126.github.io',
    sourceHref: 'https://github.com/Fxxk181126/clipFast',
    sourceLabel: 'GitHub 仓库',
    highlights: [
      '独立完成产品设计、开发、打包和文档。',
      '支持全局快捷键唤起与剪贴板历史检索。',
      '完成 macOS / Windows 多平台发布流程。',
    ],
    technologies: ['Electron', 'TypeScript', 'electron-builder', 'Local-first'],
  },
  {
    id: 'stock-platform',
    title: 'stock 量化分析平台',
    description:
      '个人全栈项目，把投资规则沉淀为可回测、可可视化的系统，覆盖数据采集、策略回测、收益分析和 AI 交易计划。',
    image: '/images/project-stock.svg',
    imageAlt: '量化分析平台示意图，展示行情曲线、回测指标和策略信号面板',
    highlights: [
      '独立完成 Spring Boot、Python 与 Vue 3 的全栈交付。',
      '实现策略规则配置、历史回测与关键指标输出。',
      '接入 LLM 生成交易计划，形成数据到决策的闭环。',
    ],
    technologies: [
      'Spring Boot',
      'MyBatis',
      'Python',
      'AKShare',
      'Vue 3',
      'Pinia',
      'ECharts',
      'MySQL',
    ],
  },
]

export const writingItems: WritingItem[] = [
  {
    title: 'Vue 3 Composition API 完全指南',
    date: '2024-01-15',
    publication: '个人博客',
    href: 'https://fxxk181126.github.io/blog/vue3-composition-api-guide/',
    excerpt:
      '深入理解 Vue 3 Composition API 的组织方式、类型推导、逻辑复用和工程实践。',
  },
  {
    title: '前端性能优化实战指南',
    date: '2024-01-10',
    publication: '个人博客',
    href: 'https://fxxk181126.github.io/blog/frontend-performance-optimization/',
    excerpt:
      '从加载性能到运行时性能，梳理现代 Web 应用的关键指标、诊断方法和优化路径。',
  },
  {
    title: '现代 CSS 技术与最佳实践',
    date: '2024-01-05',
    publication: '个人博客',
    href: 'https://fxxk181126.github.io/blog/modern-css-techniques/',
    excerpt:
      '使用 Grid、Flexbox、自定义属性和容器查询构建更清晰、更灵活的界面布局。',
  },
]
