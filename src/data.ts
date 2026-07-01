/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AgentCardData, LinkConfig } from './types';

// 必须在此处填入从 Gemini Gems 界面通过 'Share' 按钮生成的正式公开/组织内分享链接，不能直接复制浏览器的编辑地址栏
export const CONFIG_LINKS: LinkConfig = {
  // Most used
  wechatPreScore: 'https://gemini.google.com/gems/wechat-prescore-and-performance',
  researchCompany: 'https://gemini.google.com/gems/research-company-or-executive',
  contractReview: 'https://gemini.google.com/gems/contract-finance-and-legal-review',

  // Workflow 1
  globalStoryTranslation: 'https://gemini.google.com/gems/global-story-translator',
  wechatStyleOptim: 'https://gemini.google.com/gems/wechat-style-optimizer',
  linkedinStyleRewriter: 'https://gemini.google.com/gems/linkedin-style-rewriter',

  // Workflow 2
  meetingScriptAide: 'https://gemini.google.com/gems/meeting-script-helper',
  notebookLMCoreMsg: 'https://notebooklm.google.com/notebook/core-message-vault',
  wechatEdmCampaign: 'https://gemini.google.com/gems/wechat-edm-campaign',
  gdriveSourceFolder: 'https://drive.google.com/drive/folders/chatbot-knowledge-base',

  // Tab 1: ABM
  abmCommOppNavigator: 'https://notebooklm.google.com/notebook/comm-opp-navigator',
  abmRdqOppNavigator: 'https://notebooklm.google.com/notebook/rdq-opp-navigator',
  abmCeoGmMoveWatcher: 'https://notebooklm.google.com/notebook/ceo-gm-watcher',
  abmTopTargetsHeatmap: 'https://notebooklm.google.com/notebook/top-targets-heatmap',
  abmWebinarLeadsMgmt: 'https://gemini.google.com/gems/webinar-leads-mgmt',
  abmInputCommDataMoves: 'https://gemini.google.com/gems/input-comm-data-moves',
  abmInputRdqMoves: 'https://gemini.google.com/gems/input-rdq-moves',
  abmGainAccessEmail: 'mailto:ying.han@veeva.com?subject=China%20Marketing%20AI%20Hub%20-%20Request%20Access%20to%20CEO%20Move%20Watcher%20&body=Hi%20Ying,%0A%0AI%20would%20like%20to%20request%20access%20to%20the%20CEO%20Move%20Watcher%20and%20the%20China%20Platform.%0A%0AThanks!',
  abmSourceFolder: 'https://drive.google.com/drive/folders/abm-source-folder',

  // Tab 2: Content Management
  contentChinaCustomerCase: 'https://gemini.google.com/gems/china-customer-case-finder',
  contentGlobalStoryWeb: 'https://gemini.google.com/gems/global-story-on-website',
  contentCommCoreMsgFAQ: 'https://notebooklm.google.com/notebook/comm-core-msg-faq',
  contentDataCoreMsgFAQ: 'https://notebooklm.google.com/notebook/data-core-msg-faq',
  contentRdqCoreMsgFAQ: 'https://notebooklm.google.com/notebook/rdq-core-msg-faq',
  contentVeevaStyleTranslation: 'https://gemini.google.com/gems/veeva-style-translation',
  contentLinkedInStyleChecker: 'https://gemini.google.com/gems/linkedin-style-checker',
  contentEdmStyleChecker: 'https://gemini.google.com/gems/edm-style-checker',
  contentNewsMonitoring: 'https://drive.google.com/drive/folders/news-monitoring',
  contentDashboardsWeChat: 'https://analytics.google.com/analytics/web/wechat-dashboards',
  contentRAGSourceFolder: 'https://drive.google.com/drive/folders/content-rag-source-folder',

  // Tab 3: Creatives
  creativesVeevaGuidelines: 'https://drive.google.com/drive/folders/veeva-creative-guidelines',
  creativesVernAigcTemplates: 'https://drive.google.com/drive/folders/vern-aigc-creative-templates',
  creativesHandmadeDoc: 'https://docs.google.com/document/d/marketing-handmade-aigc-creatives',
  creativesLearningTipsDoc: 'https://docs.google.com/document/d/learning-aigc-creative-tips',

  // Tab 4: Chatbots
  chatbotsWebsiteFAQ: 'https://chatbot.veeva.cn/website-faq',
  chatbotsMaterialsSearch: 'https://chatbot.veeva.cn/materials-search',
  chatbotsCommSummit: 'https://chatbot.veeva.cn/comm-summit',
  chatbotsRdqSummit: 'https://chatbot.veeva.cn/rdq-summit',
  chatbotsPerformanceFolder: 'https://drive.google.com/drive/folders/chatbot-performance-analytics',

  // Tab 5: Useful Tools
  meetingScript: 'https://gemini.google.com/gems/meeting-script-synthesizer',
};

export const DEFAULT_URLS: LinkConfig = CONFIG_LINKS;

export const AGENT_CARDS: AgentCardData[] = [
  // ================= TAB 1: ABM =================
  {
    id: 'abm-comm-opp',
    title: 'Comm Opp & Projects Navigator',
    type: 'NotebookLM',
    description: 'Track, query, and navigate key commercial opportunities and project plans across major enterprise accounts in China.',
    actionText: 'Open Notebook',
    actionUrlKey: 'abmCommOppNavigator',
    tags: ['ABM', 'Commercial', 'Opportunities', '项目导航', '商业机会', 'NotebookLM'],
    tab: 'abm'
  },
  {
    id: 'abm-rdq-opp',
    title: 'RDQ Opp & Projects Navigator',
    type: 'NotebookLM',
    description: 'Explore R&D and Quality key account opportunities and project pipeline tracking.',
    actionText: 'Open Notebook',
    actionUrlKey: 'abmRdqOppNavigator',
    tags: ['ABM', 'RDQ', 'Quality', '研发质量', '机会导航', 'NotebookLM'],
    tab: 'abm'
  },
  {
    id: 'abm-top-targets',
    title: 'Customer Engagement Platform',
    type: 'NotebookLM',
    displayType: 'CDM',
    description: 'Key accounts and Top Targets heat-mapping prioritizing marketing efforts, high-value engagements, and content touchpoints.',
    actionText: 'Open Platform',
    actionUrlKey: 'abmTopTargetsHeatmap',
    tags: ['ABM', 'Heatmap', 'Account Intelligence', '热力图', '重点目标', 'NotebookLM'],
    tab: 'abm'
  },
  {
    id: 'abm-research-executive',
    title: 'Research a Company or an Executive',
    type: 'Gem',
    description: 'Instantly compile background intelligence, financial history, and career moves for any company or key executive.',
    actionText: 'Consult Gem',
    actionUrlKey: 'researchCompany',
    tags: ['ABM', 'Research', 'Intelligence', '企业研究', '高管背景', 'Gem'],
    tab: 'abm'
  },
  {
    id: 'abm-webinar-leads',
    title: 'Webinar Leads Management (Coming soon)',
    type: 'Gem',
    description: 'Analyze, filter, and score webinar registrants to identify warm enterprise opportunities and routing for Sales reps.',
    actionText: 'Process Leads',
    actionUrlKey: 'abmWebinarLeadsMgmt',
    tags: ['ABM', 'Leads', 'Webinar', '线索管理', '会议转化', 'Gem'],
    tab: 'abm'
  },
  {
    id: 'abm-input-comm',
    title: 'Input Comm and Data Moves',
    type: 'Gem Input',
    description: 'Interface to feed critical commercial, events, and data changes into the centralized knowledge base.',
    actionText: 'Input Move Data',
    actionUrlKey: 'abmInputCommDataMoves',
    tags: ['ABM', 'Data Entry', 'Commercial', '数据录入', '商业情报', 'Gem Input'],
    tab: 'abm'
  },
  {
    id: 'abm-input-rdq',
    title: 'Input RDQ ABM Moves',
    type: 'Gem Input',
    description: 'Structure and upload research, development, and quality-specific strategic moves into target account files.',
    actionText: 'Input RDQ Data',
    actionUrlKey: 'abmInputRdqMoves',
    tags: ['ABM', 'Data Entry', 'RDQ', '研发质量', '数据更新', 'Gem Input'],
    tab: 'abm'
  },
  {
    id: 'abm-gain-access',
    title: 'Gain Access to CEO Intelligence Newsletter',
    type: 'Access',
    description: 'Request administrative access permissions to the internal executive move watcher alerts and China intelligence systems.',
    actionText: 'Send Request Mail',
    actionUrlKey: 'abmGainAccessEmail',
    tags: ['Access', 'Permission', 'Alerts', '申请权限', '中国平台', 'Access'],
    tab: 'abm'
  },
  {
    id: 'abm-source-folder',
    title: 'Locate the Source Folder',
    type: 'Folder',
    description: 'Access the root Google Drive storage containing all underlying ABM databases, exports, and target account dossiers.',
    actionText: 'Open GDrive Folder',
    actionUrlKey: 'abmSourceFolder',
    tags: ['Folder', 'Storage', 'GDrive', '源文件夹', '共享云盘', 'Folder'],
    tab: 'abm'
  },

  // ================= TAB 2: CONTENT MANAGEMENT =================
  {
    id: 'content-china-case',
    title: 'Find a China Customer Case or Quote (WIP)',
    type: 'Gem',
    description: 'Query localized case studies, success quotes, and customer testimonial records. Includes verified secondary sources.',
    actionText: 'Find Customer Case',
    actionUrlKey: 'contentChinaCustomerCase',
    tags: ['Content', 'Case Study', 'Quotes', '客户案例', '真实证言', 'Gem'],
    tab: 'content'
  },
  {
    id: 'content-global-story',
    title: 'Find a Global Customer Story on Website',
    type: 'Gem',
    description: 'Search official global customer success stories and filter for applicable use-cases for the China market.',
    actionText: 'Search Global Stories',
    actionUrlKey: 'contentGlobalStoryWeb',
    tags: ['Content', 'Global Case', 'Website', '海外案例', '故事提取', 'Gem'],
    tab: 'content'
  },
  {
    id: 'content-comm-core-faq',
    title: 'Comm Core Message FAQ',
    type: 'NotebookLM',
    description: 'Centralized reference book answering commercial positioning questions, regulatory complaints, and product FAQs.',
    actionText: 'Consult Core FAQ',
    actionUrlKey: 'contentCommCoreMsgFAQ',
    tags: ['Content', 'FAQ', 'Commercial Messages', '商业核心话术', '问答库', 'NotebookLM'],
    tab: 'content'
  },
  {
    id: 'content-data-core-faq',
    title: 'Data Core Message FAQ',
    type: 'NotebookLM',
    description: 'Access security, data privacy compliance, and IT deployment standard responses for the China region.',
    actionText: 'Consult Data FAQ',
    actionUrlKey: 'contentDataCoreMsgFAQ',
    tags: ['Content', 'FAQ', 'Data Security', '数据合规', '技术核心话术', 'NotebookLM'],
    tab: 'content'
  },
  {
    id: 'content-rdq-core-faq',
    title: 'RDQ Core Message FAQ (Coming soon)',
    type: 'NotebookLM',
    description: 'Dedicated knowledge base for R&D Quality core messaging guidelines and specialized medical compliance answers.',
    actionText: 'Consult RDQ FAQ',
    actionUrlKey: 'contentRdqCoreMsgFAQ',
    tags: ['Content', 'FAQ', 'RDQ Messages', '研发核心话术', '临床合规', 'NotebookLM'],
    tab: 'content'
  },
  {
    id: 'content-wechat-prescore',
    title: 'WeChat Pre-score and Performance Check',
    type: 'Gem Tool',
    badge: 'HOT',
    description: 'Critique and pre-evaluate drafted WeChat posts against high-performing engagement criteria, headlines, and tone indices.',
    actionText: 'Analyze Draft',
    actionUrlKey: 'wechatPreScore',
    tags: ['Content', 'WeChat', 'Optimization', '微信优化', '推文预评分', 'Gem Tool'],
    tab: 'content'
  },
  {
    id: 'content-veeva-translation',
    title: 'Veeva Style CN-EN Translation',
    type: 'Gem Tool',
    description: 'Translate marketing materials and customer messages, strictly preserving the professional Veeva brand style guidelines.',
    actionText: 'Translate Document',
    actionUrlKey: 'contentVeevaStyleTranslation',
    tags: ['Content', 'Translation', 'Veeva Style', '专业翻译', '合规措辞', 'Gem Tool'],
    tab: 'content'
  },
  {
    id: 'content-linkedin-checker',
    title: 'LinkedIn Post Creator',
    type: 'Gem Tool',
    description: 'Review and optimize your executive posts or business updates to sound highly professional, punchy, and global.',
    actionText: 'Check LinkedIn Style',
    actionUrlKey: 'contentLinkedInStyleChecker',
    tags: ['Content', 'LinkedIn', 'Style Optimizer', '领英文风', '社交传播', 'Gem Tool'],
    tab: 'content'
  },
  {
    id: 'content-edm-checker',
    title: 'EDM Style Check (Coming soon)',
    type: 'Gem Tool',
    description: 'Validate email marketing layouts, copywriting tone, open-rate subject optimizations, and call-to-actions.',
    actionText: 'Analyze EDM Copy',
    actionUrlKey: 'contentEdmStyleChecker',
    tags: ['Content', 'EDM', 'Email', '邮件文案', '打开率优化', 'Gem Tool'],
    tab: 'content'
  },
  {
    id: 'content-news-monitor',
    title: 'News Monitoring (Coming soon)',
    type: 'Monitor',
    description: 'Open the aggregated folder tracking industry competitor alerts, life science policies, and brand mentions.',
    actionText: 'Open News Folder',
    actionUrlKey: 'contentNewsMonitoring',
    tags: ['Content', 'Monitoring', 'GDrive', '舆情监控', '行业新闻', 'Monitor'],
    tab: 'content'
  },
  {
    id: 'content-analytics',
    title: 'Explore the Dashboards (Coming soon)',
    type: 'Analytics',
    description: 'Access live data tracking views, click-through rates, and conversion pipelines for our local social channels.',
    actionText: 'Open Analytics',
    actionUrlKey: 'contentDashboardsWeChat',
    tags: ['Analytics', 'Dashboards', 'Social Channels', '渠道数据', '微信报表', 'Analytics'],
    tab: 'content'
  },
  {
    id: 'content-rag-folder',
    title: 'Locate the Content RAG Source Folder',
    type: 'Folder',
    description: 'Source library for localized materials, product brochures, whitepapers used to train RAG applications.',
    actionText: 'Open Source Folder',
    actionUrlKey: 'contentRAGSourceFolder',
    tags: ['Folder', 'Storage', 'RAG', '知识库源文件', '分发归档', 'Folder'],
    tab: 'content'
  },

  // ================= TAB 3: CREATIVES =================
  {
    id: 'creatives-vern-templates',
    title: 'Vern AIGC Creative Templates',
    type: 'Folder',
    description: 'Ready-to-use image and visual generator parameters, preset dimensions, and style blocks configured for local teams.',
    actionText: 'Open Templates Folder',
    actionUrlKey: 'creativesVernAigcTemplates',
    tags: ['Creatives', 'Templates', 'AIGC', '模版设计', '生成模板', 'Folder'],
    tab: 'creatives'
  },
  {
    id: 'creatives-handmade-doc',
    title: 'Marketing AIGC Creatives',
    type: 'Document',
    description: 'Shared Google Doc showcasing curated design creations, custom hero banners, and active prompt configurations.',
    actionText: 'Open GDoc',
    actionUrlKey: 'creativesHandmadeDoc',
    tags: ['Creatives', 'Handmade', 'Prompts', '手工设计', '精选提示词', 'Document'],
    tab: 'creatives'
  },

  // ================= TAB 4: CHATBOTS =================
  {
    id: 'chatbots-website',
    title: 'Website FAQ Chatbot',
    type: 'Link',
    description: 'Official production web chatbot dealing with incoming questions, lead gathering, and localized routing.',
    actionText: 'Launch Bot',
    actionUrlKey: 'chatbotsWebsiteFAQ',
    tags: ['Chatbots', 'Website', 'Live FAQ', '官网客服', '实时问答', 'Link'],
    tab: 'chatbots'
  },
  {
    id: 'chatbots-materials',
    title: 'Marketing Materials Search Bot',
    type: 'Bot',
    description: 'Interactive search agent helping internal and external audiences discover specific assets, PDFs, and slide decks.',
    actionText: 'Scan / Use Bot',
    actionUrlKey: 'chatbotsMaterialsSearch',
    qrCodeLabel: 'Materials Search Assistant',
    backupText: 'Direct Link to Search Bot',
    tags: ['Chatbots', 'QR Code', 'Internal Bot', '宣发搜索', '物料助手', 'Bot'],
    tab: 'chatbots'
  },
  {
    id: 'chatbots-comm-summit',
    title: 'China Comm Summit Chatbot (Coming soon)',
    type: 'Bot',
    description: 'Official event-dedicated chatbot answering logistics, schedules, speaker bios, and real-time summit topics.',
    actionText: 'Scan / Use Bot',
    actionUrlKey: 'chatbotsCommSummit',
    qrCodeLabel: 'China Commercial Summit Bot',
    backupText: 'Direct Link to Summit Bot',
    tags: ['Chatbots', 'QR Code', 'Summit Event', '峰会机器人', '商业版客服', 'Bot'],
    tab: 'chatbots'
  },
  {
    id: 'chatbots-rdq-summit',
    title: 'China RDQ Summit Chatbot (Coming soon)',
    type: 'Bot',
    description: 'Specialized R&D Quality conference chatbot delivering compliance topics, seminar summaries, and session schedules.',
    actionText: 'Scan / Use Bot',
    actionUrlKey: 'chatbotsRdqSummit',
    qrCodeLabel: 'China RDQ Summit Bot',
    backupText: 'Direct Link to RDQ Bot',
    tags: ['Chatbots', 'QR Code', 'Summit Event', '研发峰会客服', '研发机器人', 'Bot'],
    tab: 'chatbots'
  },
  {
    id: 'chatbots-performance',
    title: 'Explore the Bots Performance (Coming soon)',
    type: 'Folder',
    description: 'Google Drive analytics files tracking conversational metrics, session logs, accuracy reviews, and fallback queries.',
    actionText: 'Open Analytics Folder',
    actionUrlKey: 'chatbotsPerformanceFolder',
    tags: ['Folder', 'Storage', 'Metrics', '机器人报表', '效果监测', 'Folder'],
    tab: 'chatbots'
  },

  // ================= TAB 5: TOOLS =================
  {
    id: 'tools-contract-review',
    title: 'Contract Finance and Legal Review',
    type: 'Gem',
    description: 'AI review agent for evaluating service contracts, confidentiality terms, and operational finances. Pre-identifies local risks.',
    actionText: 'Consult Contract Reviewer',
    actionUrlKey: 'contractReview',
    tags: ['Tools', 'Legal', 'Contract', 'Finance', '合同审核', '法务审核', 'Gem'],
    tab: 'tools'
  },
  {
    id: 'tools-meeting-script',
    title: 'Meeting Script',
    type: 'Gem',
    description: 'Upload audio transcripts or raw transcripts to generate structured summaries, executive briefings, and clear Q&A tables.',
    actionText: 'Consult Transcript Tool',
    actionUrlKey: 'meetingScript',
    tags: ['Tools', 'Meeting transcript', 'Summarizer', '会议纪要', '录音速记', 'Gem'],
    tab: 'tools'
  }
];
