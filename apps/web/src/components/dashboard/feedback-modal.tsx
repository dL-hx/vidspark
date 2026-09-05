'use client';

import { useState } from 'react';

import { vsToast } from '@/lib/toast';

interface FeedbackModalProps {
 open: boolean;
 onClose: () => void;
}

/** 意见反馈弹窗 */
export function FeedbackModal({ open, onClose }: FeedbackModalProps) {
 const [content, setContent] = useState('');
 const disabled = content.trim() === '';

 return (
 <div
 id="feedbackModal"
 hidden={!open}
 onClick={(e) => {
 if (e.target === e.currentTarget) onClose();
 }}
 className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4 transition-all"
 >
 <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 transform transition-all scale-100">
 <div className="flex justify-between items-center mb-6">
 <h3 className="text-xl font-bold text-slate-900">意见反馈</h3>
 <button data-modal-close onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
 <i className="fa-solid fa-xmark text-xl"></i>
 </button>
 </div>
 <div className="space-y-4">
 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">反馈类型</label>
 <select
 defaultValue="1"
 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
 >
 <option value="1">功能建议</option>
 <option value="2">Bug反馈</option>
 <option value="3">产品咨询</option>
 <option value="4">其他</option>
 </select>
 </div>
 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 反馈内容 <span className="text-red-500">*</span>
 </label>
 <textarea
 rows={4}
 placeholder="请详细描述您的建议或问题..."
 value={content}
 onChange={(e) => setContent(e.target.value)}
 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all resize-none"
 ></textarea>
 </div>
 <div>
 <label className="block text-sm font-medium text-slate-700 mb-2">
 联系方式 <span className="text-slate-400 font-normal">(可选)</span>
 </label>
 <input
 type="text"
 placeholder="邮箱或微信，方便我们联系您"
 className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
 />
 </div>
 <button
 data-feedback-submit
 disabled={disabled}
 onClick={() => {
 vsToast('反馈已提交，感谢您的支持！');
 onClose();
 setContent('');
 }}
 className="w-full bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
 >
 <i className="fa-solid fa-paper-plane"></i> 提交反馈
 </button>
 </div>
 </div>
 </div>
 );
}
