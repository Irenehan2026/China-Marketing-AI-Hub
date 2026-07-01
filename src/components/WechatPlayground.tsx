/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageSquare, AlertCircle, CheckCircle, TrendingUp, Info, RefreshCw } from 'lucide-react';

export default function WechatPlayground() {
  const [title, setTitle] = useState('速递 | Veeva Vault PromoMats 赋能中国生命科学数字革命');
  const [content, setContent] = useState(
    '随着生命科学数字管线的高速演进，多渠道物料分发面临严格合规挑战。Veeva Vault PromoMats 携手生成式内容校准技术，为中国本地企业定制一体化提效方案，助力医学、法务、品牌营销在保证绝对合规的前提下，提效42%！扫码立刻预约专业团队方案演示！'
  );
  const [score, setScore] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [analyzing, setAnalyzing] = useState(false);

  const performPreScore = () => {
    setAnalyzing(true);
    setTimeout(() => {
      let currentScore = 75;
      const suggestions: string[] = [];

      // Title length check (ideal title length for WeChat is 15-28 chars)
      if (title.length < 12) {
        currentScore -= 10;
        suggestions.push('标题长度较短（当前' + title.length + '字）。建议增加核心价值词以吸引微信用户，保持在15-28字之间。');
      } else if (title.length > 30) {
        currentScore -= 8;
        suggestions.push('标题略长（当前' + title.length + '字）。微信对话框展示容易被截断，建议精简至26字以内。');
      } else {
        currentScore += 8;
      }

      // Title hooks (WeChat love vertical bars |, emojis, words like "速递", "重磅", "干货")
      if (title.includes('速递') || title.includes('重磅') || title.includes('干货') || title.includes('限时')) {
        currentScore += 5;
      } else {
        suggestions.push('建议在标题添加微动作词或修饰语，如【重磅】、| 深度、指南等提高打开率。');
      }

      // Content length checks
      if (content.length < 50) {
        currentScore -= 12;
        suggestions.push('正文篇幅过短（低于50字）。微信长文精要不宜流于形式，建议扩充段落细节。');
      } else if (content.length > 500) {
        currentScore -= 5;
        suggestions.push('正文篇幅较长。建议多用空行或段落分栏隔开，以便移动端舒适阅读。');
      }

      // Call to action hooks (WeChat loves keywords like "扫码", "点击", "免费", "预约", "关注")
      if (content.includes('扫码') || content.includes('点击') || content.includes('预约') || content.includes('下载')) {
        currentScore += 7;
      } else {
        currentScore -= 10;
        suggestions.push('缺少明确的微信转化行动点（CTA）。请植入“扫码关注”、“点击阅读原文”或“预约演示”。');
      }

      // Emoji count (WeChat copy loves modern emoji accents)
      const emojiRegex = /[\uD800-\uDBFF][\uDC00-\uDFFF]|\p{Emoji_Presentation}/gu;
      const emojiCount = (content.match(emojiRegex) || []).length;
      if (emojiCount === 0) {
        currentScore -= 5;
        suggestions.push('正文中未使用任何表情符号（Emoji）。添加1-3个符合内容的Emoji（如🚀、💡、📊）可提升可读性。');
      } else if (emojiCount > 8) {
        currentScore -= 4;
        suggestions.push('表情符号使用过多（共' + emojiCount + '个），容易使专业B2B文案显得繁琐，建议控制在2-5个。');
      } else {
        currentScore += 5;
      }

      // Veeva Brand styling checks
      if (content.toLowerCase().includes('veeva')) {
        currentScore += 5;
      } else {
        suggestions.push('核心文案中未提及 Veeva 品牌，建议增加品牌名称和露出，强化心智定位。');
      }

      // Final score normalization (cap 100, floor 30)
      const finalScore = Math.max(30, Math.min(100, currentScore));
      setScore(finalScore);
      setFeedback(suggestions.length > 0 ? suggestions : ['文案质量非常扎实！标题醒目，CTA明确，排版和品牌展现完美平衡。']);
      setAnalyzing(false);
    }, 750);
  };

  return (
    <div id="wechat-playground" className="bg-white rounded-xl border border-slate-200/80 p-6 space-y-6 shadow-[0_2px_8px_rgba(0,0,0,0.01)]">
      <div className="flex items-center justify-between border-b border-slate-100 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-50 text-brand-orange rounded-lg border border-orange-100/30">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">微信文案预评分 & 优化沙盒 (WeChat Post Optimizer)</h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Draft and pre-score your local social copy against China engagement benchmarks before publishing.
            </p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-orange-50 text-brand-orange border border-orange-100/50">
          INTERACTIVE SANDBOX
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Input fields */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="wechat-playground-title" className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>微信推文标题 (Title Draft)</span>
              <span className={`text-[10px] font-mono ${title.length >= 15 && title.length <= 28 ? 'text-brand-orange font-semibold' : 'text-slate-400'}`}>
                {title.length} characters
              </span>
            </label>
            <input
              id="wechat-playground-title"
              type="text"
              className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:ring-1 focus:ring-brand-orange focus:border-brand-orange focus:outline-none text-slate-800"
              placeholder="Enter headline draft..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="wechat-playground-content" className="text-xs font-bold text-slate-700 flex items-center justify-between">
              <span>微信正文摘要 (Main Copy Draft)</span>
              <span className="text-[10px] font-mono text-slate-400">
                {content.length} characters
              </span>
            </label>
            <textarea
              id="wechat-playground-content"
              className="w-full h-36 p-3 text-xs border border-slate-200 rounded-lg focus:ring-1 focus:ring-brand-orange focus:border-brand-orange focus:outline-none text-slate-700 resize-none leading-relaxed font-sans"
              placeholder="Type your main message copy draft here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

          <button
            id="run-prescore-btn"
            onClick={performPreScore}
            disabled={analyzing || !title || !content}
            className="w-full py-2.5 px-4 bg-brand-orange hover:bg-[#d87514] active:bg-[#c66a10] disabled:bg-slate-200 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
          >
            {analyzing ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                正在智能评分与分析中...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                立即执行智能预评分 (Check Pre-Score)
              </>
            )}
          </button>
        </div>

        {/* Scoring feedback */}
        <div className="bg-slate-50/50 border border-slate-200 rounded-lg p-5 flex flex-col justify-between">
          <div>
            <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-slate-500" />
              智能诊断结果 (Performance Diagnosis)
            </h4>

            {score !== null ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="relative flex items-center justify-center">
                    {/* Circle Score representation */}
                    <div className="w-16 h-16 rounded-full border-4 border-slate-200 flex items-center justify-center bg-white shadow-sm">
                      <span className={`text-xl font-black ${
                        score >= 85 ? 'text-brand-orange' : score >= 70 ? 'text-orange-500' : 'text-red-500'
                      }`}>
                        {score}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {score >= 85 ? '🌟 优秀推文级别 (Highly Optimised)' : score >= 70 ? '⚡ 良好改进级别 (Needs Polish)' : '⚠️ 亟需修正级别 (Unsatisfactory)'}
                    </h5>
                    <p className="text-[10px] text-slate-500 mt-1 leading-normal">
                      WeChat engagement index predicted based on local lifetime benchmarks.
                    </p>
                  </div>
                </div>

                <div className="space-y-2 pt-3 border-t border-slate-200">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">优化建议 (Suggested Actions):</p>
                  <ul className="space-y-1.5 max-h-[160px] overflow-y-auto pr-1">
                    {feedback.map((item, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 leading-relaxed">
                        {score >= 85 && feedback.length === 1 ? (
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-3.5 h-3.5 text-brand-orange shrink-0 mt-0.5" />
                        )}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 text-slate-400 space-y-2">
                <Info className="w-8 h-8 text-slate-300" />
                <div>
                  <p className="text-xs font-bold">暂无评估数据</p>
                  <p className="text-[10px] max-w-[200px] mt-1">
                    点击左侧“立即执行智能预评分”按钮进行本地文案合规与传播度体检。
                  </p>
                </div>
              </div>
            )}
          </div>

          <div className="text-[10px] text-slate-400 pt-4 border-t border-slate-100 flex items-center gap-1.5 leading-normal">
            <span>💡 提示: 本沙盒提供静态评分规范参考。点击 Content Management 标签页中的 WeChat Pre-score 即可进入功能更全面的定制 Gem 进行深度优化。</span>
          </div>
        </div>
      </div>
    </div>
  );
}
