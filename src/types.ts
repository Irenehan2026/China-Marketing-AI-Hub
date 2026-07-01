/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type AgentType = 'NotebookLM' | 'Gem' | 'Gem Input' | 'Gem Tool' | 'Folder' | 'Document' | 'Bot' | 'Link' | 'Access' | 'Monitor' | 'Analytics';

export interface AgentCardData {
  id: string;
  title: string;
  type: AgentType;
  displayType?: string;
  description: string;
  badge?: string;
  actionText: string;
  actionUrlKey: string; // Key in our URL configuration
  tags: string[];
  qrCodeLabel?: string; // If the card has a QR code
  backupText?: string;
  tab: 'abm' | 'content' | 'creatives' | 'chatbots' | 'tools';
}

export interface LinkConfig {
  // Most used
  wechatPreScore: string;
  researchCompany: string;
  contractReview: string;

  // Workflow 1
  globalStoryTranslation: string;
  wechatStyleOptim: string;
  linkedinStyleRewriter: string;

  // Workflow 2
  meetingScriptAide: string;
  notebookLMCoreMsg: string;
  wechatEdmCampaign: string;
  gdriveSourceFolder: string;

  // Tab 1: ABM
  abmCommOppNavigator: string;
  abmRdqOppNavigator: string;
  abmCeoGmMoveWatcher: string;
  abmTopTargetsHeatmap: string;
  abmWebinarLeadsMgmt: string;
  abmInputCommDataMoves: string;
  abmInputRdqMoves: string;
  abmGainAccessEmail: string;
  abmSourceFolder: string;

  // Tab 2: Content Management
  contentChinaCustomerCase: string;
  contentGlobalStoryWeb: string;
  contentCommCoreMsgFAQ: string;
  contentDataCoreMsgFAQ: string;
  contentRdqCoreMsgFAQ: string;
  contentVeevaStyleTranslation: string;
  contentLinkedInStyleChecker: string;
  contentEdmStyleChecker: string;
  contentNewsMonitoring: string;
  contentDashboardsWeChat: string;
  contentRAGSourceFolder: string;

  // Tab 3: Creatives
  creativesVeevaGuidelines: string;
  creativesVernAigcTemplates: string;
  creativesHandmadeDoc: string;
  creativesLearningTipsDoc: string;

  // Tab 4: Chatbots
  chatbotsWebsiteFAQ: string;
  chatbotsMaterialsSearch: string;
  chatbotsCommSummit: string;
  chatbotsRdqSummit: string;
  chatbotsPerformanceFolder: string;

  // Tab 5: Useful Tools
  meetingScript: string;
}
