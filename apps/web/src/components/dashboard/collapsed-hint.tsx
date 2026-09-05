'use client';

import { BrandMark } from '@/components/icons/brand-mark';

interface CollapsedHintProps {
 /** 侧边栏是否处于收起状态 */
 collapsed: boolean;
 onExpand: () => void;
 onNewTask: () => void;
}

/** 侧边栏收起后左上角的悬浮提示条 */
export function CollapsedHint({ collapsed, onExpand, onNewTask }: CollapsedHintProps) {
 return (
 <div
 id="collapsedHint"
 className={`absolute top-4 left-4 z-30 flex items-center gap-3 transition-opacity duration-300 ${
 collapsed ? '' : 'opacity-0 pointer-events-none'
 }`}
 >
 <div className="flex items-center cursor-pointer">
 <div className="w-9 h-9 bg-gradient-to-br from-brand-600 to-blue-500 rounded-lg flex items-center justify-center shadow-xs shrink-0">
 <BrandMark className="w-5 h-5 text-white" />
 </div>
 </div>
 <div className="bg-white border border-gray-200 rounded-full shadow-xs flex items-center p-1.5 gap-1">
 <button
 title="展开侧边栏"
 onClick={onExpand}
 className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-gray-50 hover:text-slate-900 transition-colors"
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width="18"
 height="18"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 >
 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
 <line x1="9" y1="3" x2="9" y2="21"></line>
 </svg>
 </button>
 <button
 title="新任务"
 onClick={onNewTask}
 className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-gray-50 hover:text-brand-600 transition-colors"
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width="18"
 height="18"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 >
 <circle cx="12" cy="12" r="10"></circle>
 <line x1="12" y1="8" x2="12" y2="16"></line>
 <line x1="8" y1="12" x2="16" y2="12"></line>
 </svg>
 </button>
 </div>
 </div>
 );
}
