/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AgentCardData, AgentType } from '../types';
import { 
  FileText, Folder, BookOpen, Bot, Link2, Key, Sliders, ExternalLink, Mail, 
  Sparkles, Radio, BarChart3, QrCode, Edit3, Check, Copy
} from 'lucide-react';

interface AgentCardProps {
  key?: string;
  card: AgentCardData;
  url: string;
  onEditClick: (key: string) => void;
}

export default function AgentCard({ card, url, onEditClick }: AgentCardProps) {
  const [showQr, setShowQr] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const getIcon = (type: AgentType) => {
    switch (type) {
      case 'NotebookLM':
        return <Sliders className="w-4 h-4 text-[#ea861a]" />;
      case 'Gem':
      case 'Gem Tool':
        return <Sparkles className="w-4 h-4 text-[#ea861a]" />;
      case 'Gem Input':
        return <Link2 className="w-4 h-4 text-[#ea861a]" />;
      case 'Folder':
        return <Folder className="w-4 h-4 text-[#ea861a]" />;
      case 'Document':
        return <BookOpen className="w-4 h-4 text-[#ea861a]" />;
      case 'Bot':
        return <Bot className="w-4 h-4 text-[#ea861a]" />;
      case 'Link':
        return <Link2 className="w-4 h-4 text-[#ea861a]" />;
      case 'Access':
        return <Key className="w-4 h-4 text-[#ea861a]" />;
      case 'Monitor':
        return <Radio className="w-4 h-4 text-[#ea861a]" />;
      case 'Analytics':
        return <BarChart3 className="w-4 h-4 text-[#ea861a]" />;
      default:
        return <FileText className="w-4 h-4 text-[#ea861a]" />;
    }
  };

  const handleActionClick = () => {
    if (card.type === 'Access') {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleCopyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const renderQrCodeSvg = () => {
    return (
      <svg className="w-24 h-24 text-slate-800 bg-white p-1 rounded border border-slate-200" viewBox="0 0 100 100" fill="currentColor">
        <path d="M 5,5 h 20 v 8 h -12 v 12 h -8 z" />
        <path d="M 95,5 h -20 v 8 h 12 v 12 h 8 z" />
        <path d="M 5,95 h 20 v -8 h -12 v -12 h -8 z" />
        <path d="M 95,95 h -20 v -8 h 12 v -12 h 8 z" />
        <rect x="12" y="12" width="22" height="22" rx="1" />
        <rect x="16" y="16" width="14" height="14" fill="white" />
        <rect x="19" y="19" width="8" height="8" />
        <rect x="66" y="12" width="22" height="22" rx="1" />
        <rect x="70" y="16" width="14" height="14" fill="white" />
        <rect x="73" y="19" width="8" height="8" />
        <rect x="12" y="66" width="22" height="22" rx="1" />
        <rect x="16" y="70" width="14" height="14" fill="white" />
        <rect x="19" y="73" width="8" height="8" />
        <circle cx="50" cy="50" r="4" className="text-[#ea861a]" />
        <rect x="45" y="15" width="4" height="4" />
        <rect x="52" y="22" width="4" height="4" />
        <rect x="45" y="30" width="4" height="4" />
        <rect x="52" y="38" width="4" height="4" />
        <rect x="15" y="45" width="4" height="4" />
        <rect x="22" y="52" width="4" height="4" />
        <rect x="30" y="45" width="4" height="4" />
        <rect x="45" y="66" width="4" height="4" />
        <rect x="52" y="73" width="4" height="4" />
        <rect x="66" y="45" width="4" height="4" />
        <rect x="73" y="52" width="4" height="4" />
        <rect x="60" y="60" width="6" height="6" />
        <rect x="75" y="75" width="6" height="6" />
      </svg>
    );
  };

  return (
    <div 
      id={`agent-card-${card.id}`}
      className="group relative bg-white rounded-lg border border-slate-200/70 p-5 flex flex-col justify-between hover:border-[#ea861a] hover:shadow-[0_4px_16px_rgba(234,134,26,0.06)] transition-all duration-200"
    >
      {/* Configure Settings Overlay (hidden by default, appears on card hover) */}
      <div className="absolute top-4 right-4 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEditClick(card.actionUrlKey);
          }}
          className="p-1.5 bg-white hover:bg-orange-50 text-slate-400 hover:text-[#ea861a] border border-slate-200 rounded transition-all cursor-pointer"
          title="Configure link"
        >
          <Edit3 className="w-3 h-3" />
        </button>
        <button
          onClick={handleCopyLink}
          className="p-1.5 bg-white hover:bg-orange-50 text-slate-400 hover:text-[#ea861a] border border-slate-200 rounded transition-all cursor-pointer"
          title="Copy link"
        >
          {copiedLink ? <Check className="w-3 h-3 text-green-600" /> : <Copy className="w-3 h-3" />}
        </button>
      </div>

      <div className="space-y-3">
        {/* Card Header Tag/Badge */}
        <div className="flex items-center gap-2">
          <div className="p-1.5 bg-orange-50/55 rounded-md border border-orange-100/50">
            {getIcon(card.type)}
          </div>
          <span className="text-[10px] font-bold text-[#ea861a] uppercase tracking-wider">
            {card.displayType || card.type}
          </span>
          {card.badge && (
            <span className="px-1.5 py-0.5 rounded text-[8px] font-black bg-[#ea861a] text-white uppercase tracking-widest">
              {card.badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#ea861a] transition-colors duration-150 line-clamp-1 pr-14">
          {card.title}
        </h4>

        {/* Description */}
        <p className="text-xs text-slate-500 leading-relaxed min-h-[44px] line-clamp-3">
          {card.description}
        </p>
      </div>

      {/* QR Code Overlay (For WeChat/Summit Bots) */}
      {card.qrCodeLabel && showQr && (
        <div 
          id={`qr-overlay-${card.id}`}
          className="absolute inset-0 bg-white/98 rounded-lg z-10 p-5 flex flex-col items-center justify-center space-y-3 transition-all duration-150"
        >
          <div className="text-center space-y-0.5">
            <p className="text-xs font-bold text-slate-900">{card.qrCodeLabel}</p>
            <p className="text-[10px] text-slate-400">Scan via WeChat or mobile</p>
          </div>
          {renderQrCodeSvg()}
          <div className="flex gap-2 w-full max-w-[160px]">
            <button
              onClick={() => setShowQr(false)}
              className="flex-1 py-1 text-[10px] font-bold text-slate-500 hover:bg-slate-50 rounded border border-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleActionClick}
              className="flex-1 py-1 text-[10px] font-bold text-white bg-[#ea861a] hover:bg-[#d87514] rounded flex items-center justify-center gap-1 transition-colors"
            >
              Open <ExternalLink className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      )}

      {/* Footer Area with Cleaner Actions */}
      <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
        {card.qrCodeLabel && (
          <button
            onClick={() => setShowQr(!showQr)}
            className="px-2.5 py-1 bg-slate-50 hover:bg-orange-50 text-slate-600 hover:text-[#ea861a] rounded border border-slate-200/80 transition-all flex items-center gap-1 text-[10px] font-bold cursor-pointer"
            title="Scan WeChat Bot"
          >
            <QrCode className="w-3 h-3" />
            QR Code
          </button>
        )}

        <button
          onClick={handleActionClick}
          className={`px-3.5 py-1.5 rounded text-[11px] font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
            card.type === 'Access'
              ? 'bg-red-50 hover:bg-red-100/70 text-red-700 border border-red-200/60'
              : 'bg-[#ea861a] hover:bg-[#d87514] text-white shadow-sm hover:shadow'
          }`}
        >
          {card.type === 'Access' ? <Mail className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
          {card.actionText}
        </button>
      </div>
    </div>
  );
}
