'use client';

import { useState } from 'react';

import { vsToast } from '@/lib/toast';

type SumTab = 'link' | 'upload';

interface SummaryViewProps {
 hidden: boolean;
 rootRef?: (el: HTMLDivElement | null) => void;
 chipLevel: string;
 chipModel: string;
 onOpenSettings: () => void;
}

/** 音视频总结视图：视频链接 / 本地上传 */
export function SummaryView({ hidden, rootRef, chipLevel, chipModel, onOpenSettings }: SummaryViewProps) {
 const [sumTab, setSumTab] = useState<SumTab>('link');

 const tabClass = (key: SumTab) =>
 `flex-1 py-4 text-sm font-medium flex items-center justify-center gap-2 transition-colors relative ${
 sumTab === key ? 'text-brand-600 bg-white' : 'text-slate-500 hover:text-slate-700 hover:bg-gray-50'
 }`;

 return (
 <div id="summaryView" ref={rootRef} hidden={hidden} className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
 <div className="max-w-6xl mx-auto h-full flex flex-col">
 <div className="flex-1 flex flex-col items-center justify-center min-h-[500px]">
 <div className="w-full max-w-3xl">
 <div className="mb-8">
 <div className="text-center">
 <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
 视频内容，<span className="text-brand-600">一触即达</span>
 </h1>
 <p className="text-lg text-slate-500">粘贴链接或上传文件，AI 帮您快速总结</p>
 </div>
 </div>
 <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
 <div className="flex border-b border-gray-100 bg-gray-50/50">
 <button data-sumtab="link" onClick={() => setSumTab('link')} className={tabClass('link')}>
 <i className="fa-solid fa-link"></i> 视频链接
 <div data-sumbar hidden={sumTab !== 'link'} className="absolute top-0 left-0 w-full h-0.5 bg-brand-600"></div>
 </button>
 <button data-sumtab="upload" onClick={() => setSumTab('upload')} className={tabClass('upload')}>
 <i className="fa-solid fa-cloud-arrow-up"></i> 本地上传
 <div data-sumbar hidden={sumTab !== 'upload'} className="absolute top-0 left-0 w-full h-0.5 bg-brand-600"></div>
 </button>
 </div>
 <div className="p-8">
 <div data-sumpanel="link" hidden={sumTab !== 'link'} className="space-y-6">
 <div className="relative group">
 <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
 <i className="fa-brands fa-youtube text-slate-400 text-xl group-focus-within:text-brand-500 transition-colors"></i>
 </div>
 <input
 type="text"
 placeholder="粘贴 Bilibili, YouTube, 抖音 等视频链接..."
 className="block w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all"
 />
 </div>
 </div>
 <div data-sumpanel="upload" hidden={sumTab !== 'upload'} className="space-y-6">
 <div className="border-2 border-dashed border-gray-300 rounded-xl p-10 text-center hover:border-brand-500 hover:bg-brand-50/30 transition-all cursor-pointer group relative">
 <input type="file" accept="video/*,audio/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
 <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
 <i className="fa-solid fa-cloud-arrow-up text-brand-500 text-2xl"></i>
 </div>
 <h3 className="text-lg font-medium text-slate-900 mb-1">点击或拖拽文件到此处</h3>
 <p className="text-slate-500 text-sm">支持 MP4, MOV, MP3 (最大 500MB)</p>
 </div>
 </div>
 <div className="mt-8 flex gap-3">
 <button
 onClick={() => vsToast('总结任务已创建，完成后可在侧栏「总结」中查看')}
 className="flex-1 bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
 data-pop="总结任务已创建，完成后可在侧栏「总结」中查看"
 >
 <span>一键总结</span>
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 </button>
 <button
 id="sumSettingsTrigger"
 title="总结设置"
 onClick={onOpenSettings}
 className="px-4 bg-white border border-gray-200 text-slate-600 hover:border-brand-300 hover:bg-brand-50 rounded-xl transition-all shadow-xs flex items-center gap-2 group"
 >
 <i className="fa-solid fa-gear text-base text-slate-400 group-hover:text-brand-500 transition-colors"></i>
 <div className="flex items-center gap-1.5 text-sm border-l border-gray-200 pl-3">
 <span id="ssChipLevel" className="text-slate-500">
 {chipLevel}
 </span>
 <span className="text-slate-300">·</span>
 <span id="ssChipModel" className="text-brand-600 font-medium">
 {chipModel}
 </span>
 </div>
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
