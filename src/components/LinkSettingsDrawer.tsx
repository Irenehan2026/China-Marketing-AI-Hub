/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, RotateCcw, Save, Link2, Search, Sliders, Globe, FolderOpen, Bot, FileText, Sparkles, Mail } from 'lucide-react';
import { LinkConfig } from '../types';

interface LinkSettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  config: LinkConfig;
  onSave: (newConfig: LinkConfig) => void;
  onReset: () => void;
}

export default function LinkSettingsDrawer({
  isOpen,
  onClose,
  config,
  onSave,
  onReset,
}: LinkSettingsDrawerProps) {
  const [localConfig, setLocalConfig] = useState<LinkConfig>({ ...config });
  const [searchTerm, setSearchTerm] = useState('');

  // Update local state when config prop changes
  React.useEffect(() => {
    setLocalConfig({ ...config });
  }, [config, isOpen]);

  const handleFieldChange = (key: keyof LinkConfig, value: string) => {
    setLocalConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(localConfig);
    onClose();
  };

  // Group fields for easier navigation
  const groups = [
    {
      title: '⭐️ Core & Quick Launch Tools',
      fields: [
        { key: 'wechatPreScore', label: 'WeChat Pre-score & Performance check (Gem)', icon: Sparkles },
        { key: 'researchCompany', label: 'Research Company or Executive (Gem)', icon: Search },
        { key: 'contractReview', label: 'Contract Finance & Legal Review (Gem)', icon: FileText },
      ]
    },
    {
      title: '⚡ Featured Sequences (Workflow 1 & 2)',
      fields: [
        { key: 'globalStoryTranslation', label: 'Global Story Translator (Gem)', icon: Globe },
        { key: 'wechatStyleOptim', label: 'WeChat Style Optimizer (Gem)', icon: Sparkles },
        { key: 'linkedinStyleRewriter', label: 'LinkedIn Style Rewriter (Gem)', icon: Link2 },
        { key: 'meetingScriptAide', label: 'Meeting Transcript Assistant (Gem)', icon: FileText },
        { key: 'notebookLMCoreMsg', label: 'Core Message Vault (NotebookLM)', icon: Sliders },
        { key: 'wechatEdmCampaign', label: 'WeChat War Report / EDM Composer (Gem)', icon: Sparkles },
        { key: 'gdriveSourceFolder', label: 'GDrive Bot Knowledge Base Folder', icon: FolderOpen },
      ]
    },
    {
      title: '📈 Tab 1: Account-Based Marketing (ABM)',
      fields: [
        { key: 'abmCommOppNavigator', label: 'Comm Opp & Projects Navigator (NotebookLM)', icon: Sliders },
        { key: 'abmRdqOppNavigator', label: 'RDQ Opp & Projects Navigator (NotebookLM)', icon: Sliders },
        { key: 'abmCeoGmMoveWatcher', label: 'CEO & GM Move Watcher (NotebookLM)', icon: Sliders },
        { key: 'abmTopTargetsHeatmap', label: 'Customer Engagement Platform (NotebookLM)', icon: Sliders },
        { key: 'abmWebinarLeadsMgmt', label: 'Webinar Leads Management (Gem)', icon: Sparkles },
        { key: 'abmInputCommDataMoves', label: 'Input Comm and Data Moves (Gem)', icon: Link2 },
        { key: 'abmInputRdqMoves', label: 'Input RDQ ABM Moves (Gem)', icon: Link2 },
        { key: 'abmGainAccessEmail', label: 'CEO Move Watcher Access (Email / Mailto Link)', icon: Mail },
        { key: 'abmSourceFolder', label: 'ABM Central GDrive Source Folder', icon: FolderOpen },
      ]
    },
    {
      title: '📁 Tab 2: Content Management & Compliance',
      fields: [
        { key: 'contentChinaCustomerCase', label: 'Find China Customer Case (Gem)', icon: Search },
        { key: 'contentGlobalStoryWeb', label: 'Find Global Customer Story (Gem)', icon: Search },
        { key: 'contentCommCoreMsgFAQ', label: 'Comm Core Message FAQ (NotebookLM)', icon: Sliders },
        { key: 'contentDataCoreMsgFAQ', label: 'Data Core Message FAQ (NotebookLM)', icon: Sliders },
        { key: 'contentRdqCoreMsgFAQ', label: 'RDQ Core Message FAQ (NotebookLM)', icon: Sliders },
        { key: 'contentVeevaStyleTranslation', label: 'Veeva Style CN-EN Translation (Gem)', icon: Sparkles },
        { key: 'contentLinkedInStyleChecker', label: 'LinkedIn Style Checker (Gem)', icon: Sparkles },
        { key: 'contentEdmStyleChecker', label: 'EDM Style Check (Gem)', icon: Sparkles },
        { key: 'contentNewsMonitoring', label: 'News Monitoring GDrive Folder', icon: FolderOpen },
        { key: 'contentDashboardsWeChat', label: 'WeChat/Web/LinkedIn Dashboard Analytics', icon: Sliders },
        { key: 'contentRAGSourceFolder', label: 'Content RAG Source GDrive Folder', icon: FolderOpen },
      ]
    },
    {
      title: '🎨 Tab 3: Creatives & Generative Design',
      fields: [
        { key: 'creativesVeevaGuidelines', label: 'Veeva Creative Guidelines GDrive Folder', icon: FolderOpen },
        { key: 'creativesVernAigcTemplates', label: 'Vern AIGC Templates GDrive Folder', icon: FolderOpen },
        { key: 'creativesHandmadeDoc', label: 'Handmade AIGC Creatives GDoc', icon: FileText },
        { key: 'creativesLearningTipsDoc', label: 'AIGC Learning & Tips GDoc', icon: FileText },
      ]
    },
    {
      title: '🤖 Tab 4: Public & Event Chatbots',
      fields: [
        { key: 'chatbotsWebsiteFAQ', label: 'Website FAQ Chatbot Production URL', icon: Bot },
        { key: 'chatbotsMaterialsSearch', label: 'Marketing Materials Search Bot URL', icon: Bot },
        { key: 'chatbotsCommSummit', label: 'China Comm Summit Chatbot URL', icon: Bot },
        { key: 'chatbotsRdqSummit', label: 'China RDQ Summit Chatbot URL', icon: Bot },
        { key: 'chatbotsPerformanceFolder', label: 'Chatbot Performance Analytics Folder', icon: FolderOpen },
      ]
    },
    {
      title: '🛠️ Tab 5: Universal Utilities',
      fields: [
        { key: 'meetingScript', label: 'Meeting Script Synthesizer (Gem)', icon: Sparkles },
      ]
    }
  ];

  const handleResetClick = () => {
    if (confirm('Are you sure you want to reset all URLs to default system values? This will overwrite your current settings.')) {
      onReset();
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900 z-50 transition-opacity"
          />

          {/* Drawer content */}
          <motion.div
            id="link-settings-drawer"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-xl bg-white shadow-2xl z-50 flex flex-col h-full border-l border-slate-200"
          >
            {/* Header */}
            <div className="p-6 border-b border-slate-150 flex items-center justify-between bg-orange-50/25">
              <div>
                <h3 className="text-sm.5 font-bold text-slate-900 flex items-center gap-2">
                  <Sliders className="w-4.5 h-4.5 text-brand-orange" />
                  配置系统链接 (URL Configuration Center)
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Customize target destination links for Gems, NotebookLM portals, and GDrive folders.
                </p>
              </div>
              <button
                id="close-drawer-btn"
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-orange-50 text-slate-400 hover:text-brand-orange transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Search Filter */}
            <div className="px-6 py-3 bg-white border-b border-slate-100 flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  id="drawer-search-input"
                  type="text"
                  placeholder="搜索系统链接键值..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-1.5 text-xs rounded-lg border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all"
                />
              </div>
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="text-xs text-brand-orange hover:text-[#d87514] font-medium"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Settings Form */}
            <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
              {groups.map((group, groupIdx) => {
                // Filter fields based on search query
                const filteredFields = group.fields.filter(
                  (field) =>
                    field.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    field.key.toLowerCase().includes(searchTerm.toLowerCase())
                );

                if (filteredFields.length === 0) return null;

                return (
                  <div key={groupIdx} className="space-y-3.5">
                    <h4 className="text-xs.5 font-bold text-slate-800 border-b border-slate-100 pb-2 flex items-center justify-between">
                      <span>{group.title}</span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        {filteredFields.length} field(s)
                      </span>
                    </h4>
                    <div className="space-y-3.5">
                      {filteredFields.map((field) => {
                        const configKey = field.key as keyof LinkConfig;
                        const FieldIcon = field.icon;
                        return (
                          <div key={field.key} className="space-y-1">
                            <label
                              htmlFor={`input-${field.key}`}
                              className="text-xs font-semibold text-slate-700 flex items-center gap-1.5"
                            >
                              <FieldIcon className="w-3.5 h-3.5 text-brand-orange" />
                              {field.label}
                            </label>
                            <div className="relative flex items-center">
                              <input
                                id={`input-${field.key}`}
                                type="text"
                                value={localConfig[configKey] || ''}
                                onChange={(e) => handleFieldChange(configKey, e.target.value)}
                                className="w-full text-xs font-mono pl-3 pr-24 py-1.5 rounded-md border border-slate-200 focus:outline-none focus:ring-1 focus:ring-brand-orange focus:border-brand-orange transition-all text-slate-800"
                                placeholder="https://..."
                              />
                              <span className="absolute right-3 text-slate-400 font-mono text-[9px] bg-slate-50 px-1 py-0.5 rounded border border-slate-200/50">
                                {configKey}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* No items fallback */}
              {groups.every(
                (g) =>
                  g.fields.filter(
                    (f) =>
                      f.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      f.key.toLowerCase().includes(searchTerm.toLowerCase())
                  ).length === 0
              ) && (
                <div className="text-center py-12 text-slate-400">
                  <p className="text-xs">未找到匹配的系统链接配置项。</p>
                  <button
                    type="button"
                    onClick={() => setSearchTerm('')}
                    className="text-brand-orange hover:underline text-xs mt-2 font-medium"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </form>

            {/* Actions Footer */}
            <div className="p-4 bg-orange-50/10 border-t border-slate-200 flex items-center justify-between gap-3">
              <button
                id="reset-all-links-btn"
                type="button"
                onClick={handleResetClick}
                className="px-3 py-1.5 text-xs font-medium text-red-600 hover:text-red-700 border border-red-200 hover:bg-red-50 rounded-md flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset Defaults
              </button>

              <div className="flex items-center gap-2">
                <button
                  id="cancel-settings-btn"
                  type="button"
                  onClick={onClose}
                  className="px-4 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-md transition-all cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  id="save-settings-btn"
                  onClick={handleSubmit}
                  type="button"
                  className="px-4 py-1.5 text-xs font-bold text-white bg-brand-orange hover:bg-[#d87514] active:bg-[#c66a10] rounded-md flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <Save className="w-3.5 h-3.5" />
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
