/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Search, Sliders, Sparkles, BookOpen, Bot, 
  Settings, RefreshCw, ChevronRight, Info
} from 'lucide-react';

import { DEFAULT_URLS, AGENT_CARDS } from './data';
import { LinkConfig } from './types';

import AgentCard from './components/AgentCard';
import LinkSettingsDrawer from './components/LinkSettingsDrawer';
import WechatPlayground from './components/WechatPlayground';

export default function App() {
  // Config state (saved to LocalStorage, defaulting to DEFAULT_URLS)
  const [config, setConfig] = useState<LinkConfig>(() => {
    const saved = localStorage.getItem('china-mktg-ai-hub-config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_URLS, ...parsed };
      } catch (e) {
        console.error('Error parsing config from localStorage', e);
      }
    }
    return DEFAULT_URLS;
  });

  // UI States
  const [activeTab, setActiveTab] = useState<'abm' | 'content' | 'creatives' | 'chatbots' | 'tools'>('abm');
  const [searchTerm, setSearchTerm] = useState('');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('china-mktg-ai-hub-config', JSON.stringify(config));
  }, [config]);

  const handleSaveConfig = (newConfig: LinkConfig) => {
    setConfig(newConfig);
  };

  const handleResetConfig = () => {
    setConfig(DEFAULT_URLS);
    localStorage.removeItem('china-mktg-ai-hub-config');
  };

  // Helper count for tabs (with search filter considered)
  const getSearchMatchesCount = (tabName: 'abm' | 'content' | 'creatives' | 'chatbots' | 'tools') => {
    const searchLower = searchTerm.toLowerCase();
    return AGENT_CARDS.filter(card => {
      if (card.tab !== tabName) return false;
      if (!searchTerm) return true;
      return (
        card.title.toLowerCase().includes(searchLower) ||
        card.description.toLowerCase().includes(searchLower) ||
        card.type.toLowerCase().includes(searchLower) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }).length;
  };

  // Filter cards for the active tab and search query
  const getFilteredCards = () => {
    const searchLower = searchTerm.toLowerCase();
    return AGENT_CARDS.filter(card => {
      const isCorrectTab = card.tab === activeTab;
      if (!isCorrectTab) return false;
      if (!searchTerm) return true;
      return (
        card.title.toLowerCase().includes(searchLower) ||
        card.description.toLowerCase().includes(searchLower) ||
        card.type.toLowerCase().includes(searchLower) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    });
  };

  const totalMatchesAcrossAllTabs = AGENT_CARDS.filter(card => {
    const searchLower = searchTerm.toLowerCase();
    return (
      card.title.toLowerCase().includes(searchLower) ||
      card.description.toLowerCase().includes(searchLower) ||
      card.type.toLowerCase().includes(searchLower) ||
      card.tags.some(tag => tag.toLowerCase().includes(searchLower))
    );
  }).length;

  return (
    <div className="min-h-screen bg-white text-slate-850 font-sans flex flex-col antialiased selection:bg-orange-100 selection:text-orange-900">
      
      {/* Configure Settings Trigger in Absolute Position */}
      <div className="absolute top-6 right-6 z-40">
        <button
          id="config-trigger-btn"
          onClick={() => setIsSettingsOpen(true)}
          className="px-4 py-2 text-xs font-bold text-[#ea861a] bg-orange-50/50 hover:bg-orange-50 border border-orange-200/60 rounded-lg flex items-center gap-1.5 transition-all shadow-sm cursor-pointer"
          title="Configure System URLs"
        >
          <Settings className="w-3.5 h-3.5 animate-hover-spin" />
          配置系统链接
        </button>
      </div>

      {/* 1. CENTERED HERO HEADER WITH MASCOT ILLUSTRATION */}
      <header className="relative w-full pt-16 pb-8 px-6 bg-white flex flex-col items-center">
        {/* Text and Search elements sitting perfectly in the upper half negative space */}
        <div className="relative z-10 space-y-4 max-w-3xl w-full flex flex-col items-center text-center">
          
          {/* 在这里替换为你上传或图床的图片链接 */}
          <img 
            id="branded-mascot-icon-bar"
            src="https://lh3.googleusercontent.com/d/1UPDAWY8nteVU1bjlK5KMNnCoJCPdQ4xr"
            onError={(e) => {
              // Try the alternative direct URL format if the primary CDN format fails to load
              const target = e.currentTarget as HTMLImageElement;
              if (target.src !== 'https://drive.google.com/uc?export=view&id=1UPDAWY8nteVU1bjlK5KMNnCoJCPdQ4xr') {
                target.src = 'https://drive.google.com/uc?export=view&id=1UPDAWY8nteVU1bjlK5KMNnCoJCPdQ4xr';
              }
            }}
            alt="China Marketing AI Hub Branded Icon Bar"
            style={{
              height: '133px',
              width: 'auto',
              objectFit: 'contain',
              margin: '0 auto 12px auto',
              display: 'block',
              opacity: 0.95,
              mixBlendMode: 'multiply'
            }}
          />

          <h1 
            className="text-4xl md:text-5xl lg:text-[54px] font-black text-slate-900 tracking-tight leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            China Marketing AI Hub
          </h1>

          {/* Centered Smart Search Bar */}
          <div className="relative max-w-xl mx-auto pt-2 w-full">
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
            <input
              id="global-search-input"
              type="text"
              placeholder="搜索微信、ABM、NotebookLM等..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-24 py-3 text-xs bg-white text-slate-900 rounded-full border border-slate-200 focus:outline-none focus:ring-1 focus:ring-[#ea861a] focus:border-[#ea861a] transition-all shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
            />
            {searchTerm ? (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-bold font-mono text-slate-400 bg-[#f8f9fa] px-2.5 py-1 rounded-full border border-slate-100">
                {totalMatchesAcrossAllTabs} MATCHES
              </span>
            ) : (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[9px] font-bold font-mono text-slate-400 bg-[#f8f9fa] px-2.5 py-1 rounded-full border border-slate-100">
                LIVE FILTER
              </span>
            )}
          </div>


        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pb-20 flex-1 space-y-12 w-full">

        {/* 2. MOST USED AGENTS (HORIZONTAL CLEAN GRID WITH USAGE COUNTS & ORANGE OUTLINE ICONS) */}
        <section id="most-used-agents-section" className="space-y-4">
          <div className="flex items-center justify-center">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">
              最常使用工具 (Most Used)
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {/* WeChat Pre-score */}
            <button
              id="quick-agent-wechat"
              onClick={() => window.open(config.wechatPreScore, '_blank', 'noopener,noreferrer')}
              className="p-5 bg-white border border-slate-200/80 hover:border-[#ea861a] rounded-xl text-left flex items-center justify-between group transition-all duration-250 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(234,134,26,0.04)]"
            >
              <div className="flex items-center gap-3.5 pr-2">
                <div className="p-1.5 text-[#ea861a] shrink-0">
                  <Sparkles className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#ea861a] transition-colors">WeChat Pre-score</h4>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">微信风格与预评分</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#ea861a] transition-colors shrink-0" />
            </button>

            {/* LinkedIn Post Creator */}
            <button
              id="quick-agent-linkedin"
              onClick={() => window.open(config.contentLinkedInStyleChecker, '_blank', 'noopener,noreferrer')}
              className="p-5 bg-white border border-slate-200/80 hover:border-[#ea861a] rounded-xl text-left flex items-center justify-between group transition-all duration-250 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(234,134,26,0.04)]"
            >
              <div className="flex items-center gap-3.5 pr-2">
                <div className="p-1.5 text-[#ea861a] shrink-0">
                  <Sparkles className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#ea861a] transition-colors">LinkedIn Post Creator</h4>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">领英文章风格与内容创作</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#ea861a] transition-colors shrink-0" />
            </button>

            {/* Legal Review */}
            <button
              id="quick-agent-contracts"
              onClick={() => window.open(config.contractReview, '_blank', 'noopener,noreferrer')}
              className="p-5 bg-white border border-slate-200/80 hover:border-[#ea861a] rounded-xl text-left flex items-center justify-between group transition-all duration-250 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_16px_rgba(234,134,26,0.04)]"
            >
              <div className="flex items-center gap-3.5 pr-2">
                <div className="p-1.5 text-[#ea861a] shrink-0">
                  <BookOpen className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-[#ea861a] transition-colors">Legal Review</h4>
                  </div>
                  <p className="text-[10px] text-slate-400 mt-0.5">合同合规与法务审核</p>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#ea861a] transition-colors shrink-0" />
            </button>

          </div>
        </section>

        {/* 4. THE 5-TAB SYSTEM (CATEGORIZED NAVIGATION GRID) */}
        <section id="agent-grid-section" className="space-y-8 pt-2">
          
          {/* Centered Tab Menu */}
          <div className="border-b border-slate-100 flex justify-center">
            <div className="flex space-x-6 md:space-x-10 overflow-x-auto pb-0.5 scrollbar-none">
              
              {/* Tab 1: ABM */}
              <button
                id="tab-trigger-abm"
                onClick={() => setActiveTab('abm')}
                className={`py-4 text-xs font-bold tracking-widest uppercase border-b-2 transition-all duration-150 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeTab === 'abm'
                    ? 'border-[#ea861a] text-[#ea861a]'
                    : 'border-transparent text-slate-400 hover:text-slate-800'
                }`}
              >
                <span>ABM</span>
              </button>

              {/* Tab 2: Content Management */}
              <button
                id="tab-trigger-content"
                onClick={() => setActiveTab('content')}
                className={`py-4 text-xs font-bold tracking-widest uppercase border-b-2 transition-all duration-150 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeTab === 'content'
                    ? 'border-[#ea861a] text-[#ea861a]'
                    : 'border-transparent text-slate-400 hover:text-slate-800'
                }`}
              >
                <span>Content Management</span>
              </button>

              {/* Tab 3: Creatives */}
              <button
                id="tab-trigger-creatives"
                onClick={() => setActiveTab('creatives')}
                className={`py-4 text-xs font-bold tracking-widest uppercase border-b-2 transition-all duration-150 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeTab === 'creatives'
                    ? 'border-[#ea861a] text-[#ea861a]'
                    : 'border-transparent text-slate-400 hover:text-slate-800'
                }`}
              >
                <span>Creatives</span>
              </button>

              {/* Tab 4: Chatbots */}
              <button
                id="tab-trigger-chatbots"
                onClick={() => setActiveTab('chatbots')}
                className={`py-4 text-xs font-bold tracking-widest uppercase border-b-2 transition-all duration-150 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeTab === 'chatbots'
                    ? 'border-[#ea861a] text-[#ea861a]'
                    : 'border-transparent text-slate-400 hover:text-slate-800'
                }`}
              >
                <span>Chatbots</span>
              </button>

              {/* Tab 5: Useful tool & workflows */}
              <button
                id="tab-trigger-tools"
                onClick={() => setActiveTab('tools')}
                className={`py-4 text-xs font-bold tracking-widest uppercase border-b-2 transition-all duration-150 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  activeTab === 'tools'
                    ? 'border-[#ea861a] text-[#ea861a]'
                    : 'border-transparent text-slate-400 hover:text-slate-800'
                }`}
              >
                <span>Useful tool & workflows</span>
              </button>

            </div>
          </div>

          {/* Clean 3-Column Grid of Minimal Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getFilteredCards().map((card) => {
              const destinationUrl = config[card.actionUrlKey as keyof LinkConfig] || '#';
              return (
                <AgentCard
                  key={card.id}
                  card={card}
                  url={destinationUrl}
                  onEditClick={() => setIsSettingsOpen(true)}
                />
              );
            })}

            {/* Zero matching fallback */}
            {getFilteredCards().length === 0 && (
              <div className="col-span-full py-16 px-4 bg-slate-50/20 rounded-xl border border-dashed border-slate-200 text-center space-y-3 flex flex-col items-center justify-center">
                <Info className="w-8 h-8 text-slate-300" />
                <div className="space-y-1">
                  <h4 className="text-xs.5 font-bold text-slate-800">未找到匹配的工具组件</h4>
                  <p className="text-xs text-slate-400 max-w-sm">
                    当前分类下没有包含关键词 “{searchTerm}” 的条目。
                  </p>
                </div>
                {totalMatchesAcrossAllTabs > 0 && (
                  <div className="pt-2 text-xs text-[#ea861a] font-medium">
                    我们在其他分类中找到了 {totalMatchesAcrossAllTabs} 个匹配。请切换标签页。
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        {/* 5. INTERACTIVE WECHAT SANDBOX */}
        <section id="wechat-optimization-sandbox" className="space-y-4 pt-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <h2 className="text-[10px] font-black text-slate-400 uppercase tracking-widest font-display">
              本地微信推文质量诊断沙盒
            </h2>
          </div>
          <WechatPlayground />
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-slate-50/50 border-t border-slate-150 py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-1">
            <p className="font-bold text-slate-700 tracking-tight font-display text-sm flex items-center gap-1.5">
              <span className="text-[#ea861a]">●</span> <a href="mailto:ying.han@veeva.com" className="hover:text-[#ea861a] transition-colors">Contact China Marketing AI Hub</a>
            </p>

          </div>
        </div>
      </footer>

      {/* LINK SETTINGS DRAWER */}
      <LinkSettingsDrawer
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSave={handleSaveConfig}
        onReset={handleResetConfig}
      />
    </div>
  );
}
