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
  year: string
  href: string
  excerpt: string
  image?: string
  imageAlt?: string
}

export interface AboutSegment {
  text: string
  highlight?: boolean
}

export type AboutParagraph = AboutSegment[]

export const profile = {
  greeting: '你好，我是',
  name: 'Zane',
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

export const aboutParagraphs: AboutParagraph[] = [
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
    id: 'ark-ledger',
    title: '方舟账本 Ark Ledger',
    description:
      '本地优先的个人记账 Web App：账本只存在浏览器里，可安装为 PWA 离线使用，支持多账本、预算、日历视图、账单导入与加密导出。',
    image: '/images/project-ark-ledger.svg',
    imageAlt: '方舟账本界面示意图，展示本月支出、预算进度、最近记录列表和分析图表',
    demoHref: 'https://ark.novastart.dpdns.org',
    highlights: [
      '金额全程以整数「分」存储，交易经状态机与指纹去重后写入 IndexedDB。',
      '导出包含清单、CSV 与 SHA-256 校验，可用口令做 AES-256-GCM 整包加密。',
      '账单导入先进入待确认队列，可批量批准或整批回滚，不直接写入正式账本。',
    ],
    technologies: ['React 19', 'TypeScript', 'Vite', 'IndexedDB', 'PWA', 'Web Crypto'],
  },
  {
    id: 'cili',
    title: '词历 Cili',
    description:
      '面向 CET-4 / CET-6 / 考研 / 雅思备考的背单词微信小程序：以考试倒计时驱动每日任务，用 FSRS 间隔重复排程，支持定级测试、离线作答和云端幂等同步。',
    image: '/images/project-cili.svg',
    imageAlt: '词历小程序界面示意图，展示考试倒计时、今日任务卡片和单词卡作答界面',
    highlights: [
      '业务内核 @cili/core 为纯 TypeScript、零 wx.* 依赖，由 CI 门禁强制，客户端与云函数共用同一套类型与事件字典。',
      '四选一题目由内核按种子确定性生成，干扰项取词频邻近词，离线也能出题。',
      '新词批次按种子做 A/B 分半，B 半 7 天内不进复习队列，用于 7 天后的记忆效果后测。',
    ],
    technologies: ['微信小程序', 'TypeScript', 'ts-fsrs', '微信云开发', 'Vitest'],
  },
  {
    id: 'gugong-3d',
    title: '故宫 · 3D 漫游',
    description:
      '按真实尺度在浏览器中漫游故宫的 Three.js 场景：建筑、纹理与音效全部程序化生成，支持多档视角、疾跑跳跃、昼夜循环与地图传送。',
    image: '/images/project-gugong.svg',
    imageAlt: '故宫 3D 漫游示意图，展示中轴线上的宫殿、东西两侧宫院、位置卡片和小地图',
    demoHref: 'https://gugong-3d.novastart.dpdns.org',
    sourceHref: 'https://github.com/Fxxk181126/gugong-3d',
    highlights: [
      '单文件零构建：几何体、程序化纹理与合成音效集中在同一个 index.html 中。',
      '按 1 单位等于 1 米还原约 753×961 米宫城，覆盖中轴线与东西六宫等 21 个命名区域。',
      '自写分区块静态网格合并与跟随玩家的阴影相机，并加入昼夜光照和实例化人群。',
    ],
    technologies: ['Three.js', 'JavaScript', 'WebGL', 'Canvas 2D', 'Web Audio API'],
  },
  {
    id: 'thundergap',
    title: '雷隙 THUNDERGAP',
    description:
      '雷雨夜第三人称 3D 动作游戏概念原型：在收缩的雷暴穹顶下躲避落雷、收集雷纹碎片并抵达广播塔，雨幕与雷声全部由代码实时计算。',
    image: '/images/project-thundergap.svg',
    imageAlt: '雷隙游戏界面示意图，展示雷雨夜城市、闪电、回声脉冲环和生命体征、雷纹碎片面板',
    demoHref: 'https://thundergap.vercel.app',
    sourceHref: 'https://github.com/Fxxk181126/thundergap',
    highlights: [
      '14000 条雨丝的位置全部在顶点着色器中计算，程序化城市立面与屋顶合批为两个网格。',
      '雨声、雷鸣与碎片提示音全部由 WebAudio 程序化合成，并用 HRTF 做空间化。',
      '自研 AABB 碰撞、土狼时间与跳跃缓冲、相机避障和程序化跑动动画。',
    ],
    technologies: ['Three.js', 'JavaScript', 'GLSL', 'Web Audio API', 'Pointer Lock API'],
  },
  {
    id: 'cafe-in-the-rain',
    title: '雨夜咖啡 Cafe in the Rain',
    description:
      '第一人称可漫游的雨夜小巷 Three.js 场景：雨丝、水洼涟漪与霓虹倒影由自定义 GLSL 着色器实时计算，雨声与雷声全部由 Web Audio 合成。',
    image: '/images/project-cafe-rain.svg',
    imageAlt: '雨夜咖啡场景示意图，展示雨中的小巷、亮着暖光的咖啡店、霓虹招牌和地面积水倒影',
    demoHref: 'https://fxxk181126.github.io/cafe-in-the-rain/',
    sourceHref: 'https://github.com/Fxxk181126/cafe-in-the-rain',
    highlights: [
      'GPU 实例化雨系统：桌面端 8000 条、移动端 3000 条雨丝在跟随相机的体积内循环。',
      '自定义水洼着色器结合噪声法线、涟漪环与立方体贴图伪反射，并叠加 Bloom 泛光。',
      '砖墙纹理在运行时注入着色器，招牌文字用 Canvas 动态绘制，不依赖任何贴图与模型文件。',
    ],
    technologies: ['Three.js', 'GLSL', 'Web Audio API', 'Canvas 2D'],
  },
]

export const writingItems: WritingItem[] = [
  {
    title: 'Vue 3 Composition API 完全指南',
    year: '2024',
    href: 'https://fxxk181126.github.io/blog/vue3-composition-api-guide/',
    excerpt:
      '深入理解 Vue 3 Composition API 的组织方式、类型推导、逻辑复用和工程实践。',
    image: '/images/writing-vue.svg',
    imageAlt: 'Vue 3 Composition API 文章封面',
  },
  {
    title: '前端性能优化实战指南',
    year: '2024',
    href: 'https://fxxk181126.github.io/blog/frontend-performance-optimization/',
    excerpt:
      '从加载性能到运行时性能，梳理现代 Web 应用的关键指标、诊断方法和优化路径。',
    image: '/images/writing-performance.svg',
    imageAlt: '前端性能优化文章封面',
  },
  {
    title: '现代 CSS 技术与最佳实践',
    year: '2024',
    href: 'https://fxxk181126.github.io/blog/modern-css-techniques/',
    excerpt:
      '使用 Grid、Flexbox、自定义属性和容器查询构建更清晰、更灵活的界面布局。',
    image: '/images/writing-css.svg',
    imageAlt: '现代 CSS 技术文章封面',
  },
]
