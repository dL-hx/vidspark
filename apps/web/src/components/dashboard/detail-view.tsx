'use client';

import { useRef, useState } from 'react';

import { vsToast } from '@/lib/toast';

type DTab = 'summary' | 'mindmap' | 'transcript' | 'creation';

interface DetailViewProps {
 hidden: boolean;
 rootRef?: (el: HTMLDivElement | null) => void;
 onGotoCreation: () => void;
}

const D_TABS: { key: DTab; icon: string; label: string }[] = [
 { key: 'summary', icon: 'fa-wand-magic-sparkles', label: 'AI 智能总结' },
 { key: 'mindmap', icon: 'fa-sitemap', label: '思维导图' },
 { key: 'transcript', icon: 'fa-align-left', label: '原文转录' },
 { key: 'creation', icon: 'fa-pen-nib', label: '内容创作' },
];

/** 任务详情视图：总结 / 思维导图 / 转录 / 创作入口 */
export function DetailView({ hidden, rootRef, onGotoCreation }: DetailViewProps) {
 const [dtab, setDtab] = useState<DTab>('summary');
 const [mmScale, setMmScale] = useState(1);
 const mmWrapRef = useRef<HTMLDivElement>(null);

 const tabClass = (key: DTab) =>
 `px-4 py-3.5 text-sm font-semibold whitespace-nowrap border-b-2 ${
 dtab === key
 ? 'text-brand-600 border-brand-600'
 : 'text-slate-500 hover:text-slate-700 border-transparent'
 }`;

 return (
 <div id="detailView" ref={rootRef} hidden={hidden} className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
 <div className="max-w-5xl mx-auto">
 <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-5 md:p-6 flex flex-col md:flex-row gap-6">
 <div className="relative shrink-0 rounded-xl overflow-hidden bg-gray-100">
 <img
 src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Bold%20red%20tech-style%20video%20thumbnail%20poster%2C%20large%20white%20Chinese%20text%20Agent%E5%AE%9E%E6%88%98%2C%202026%20badge%2C%20AI%20programming%20agent%20theme%2C%20high%20contrast%20YouTube%20thumbnail&image_size=landscape_16_9"
 alt="视频封面"
 className="dt-thumb"
 />
 <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-sm">17:17</span>
 </div>
 <div className="flex-1">
 <h1 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug mb-5">
 如何从0-1做Agent项目？| 从小白到实战老手，纯干货带做，智能体实战项目10+，学会少走99%弯路！ - 8-1
 Agent介绍与LLMS的区别
 </h1>
 <div className="flex items-center gap-2 mb-5">
 <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold">
 U
 </div>
 <span className="text-sm font-medium text-slate-700">Unknown</span>
 <i className="fa-solid fa-circle-check text-brand-600 text-sm"></i>
 </div>
 <div className="flex items-center flex-wrap gap-5 text-sm text-slate-500">
 <span className="flex items-center gap-1.5">
 <i className="fa-regular fa-eye"></i> 1625{' '}
 </span>
 <span className="flex items-center gap-1.5">
 <i className="fa-regular fa-thumbs-up"></i> 36{' '}
 </span>
 <span className="flex items-center gap-1.5">
 <i className="fa-regular fa-comment"></i> 15{' '}
 </span>
 <span className="flex items-center gap-1.5">
 <i className="fa-regular fa-clock"></i> 2026-07-21{' '}
 </span>
 </div>
 </div>
 </div>
 <div className="bg-white rounded-2xl border border-gray-200 shadow-xs mt-4 md:mt-6">
 <div className="flex items-center gap-1 px-4 border-b border-gray-100 overflow-x-auto">
 {D_TABS.map((t) => (
 <button key={t.key} data-dtab={t.key} onClick={() => setDtab(t.key)} className={tabClass(t.key)}>
 <i className={`fa-solid ${t.icon} mr-1.5`}></i>
 {t.label}
 </button>
 ))}
 <div className="flex-1"></div>
 <div
 id="dtToolbar"
 className="hidden md:flex items-center gap-3 pr-2"
 style={{ display: dtab === 'creation' ? 'none' : undefined }}
 >
 <span
 className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2 text-xs text-slate-600"
 style={{ display: dtab === 'summary' ? undefined : 'none' }}
 >
 <i className="fa-solid fa-gear"></i> 标准
 <span className="w-1 h-1 rounded-full bg-gray-300"></span>
 qwen-flash{' '}
 </span>
 <button
 className="flex items-center gap-1.5 bg-gradient-to-r from-brand-600 to-blue-600 text-white text-xs font-semibold rounded-lg px-3.5 py-2"
 data-pop="演示环境：翻译功能暂未开放"
 onClick={() => vsToast('演示环境：翻译功能暂未开放')}
 >
 <i className="fa-solid fa-language"></i> 翻译
 <i className="fa-solid fa-chevron-down text-[10px]"></i>
 </button>
 <button
 id="tbCopy"
 className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-gray-100 hover:text-slate-600 transition-colors"
 data-pop="已复制到剪贴板"
 style={{ display: dtab === 'summary' || dtab === 'transcript' ? undefined : 'none' }}
 onClick={() => vsToast('已复制到剪贴板')}
 >
 <i className="fa-regular fa-copy"></i>
 </button>
 <button
 id="tbDownload"
 className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-gray-100 hover:text-slate-600 transition-colors"
 style={{ display: dtab === 'mindmap' || dtab === 'transcript' ? undefined : 'none' }}
 data-pop="导出任务已开始，请稍候"
 onClick={() => vsToast('导出任务已开始，请稍候')}
 >
 <i className="fa-solid fa-download"></i>
 </button>
 </div>
 </div>
 <div data-dpanel="summary" hidden={dtab !== 'summary'} className="p-6 md:p-10">
 <h1 className="text-2xl md:text-3xl font-bold text-slate-900 leading-snug mb-8">
 如何从0-1做Agent项目？| 从小白到实战老手，纯干货带做，智能体实战项目10+，学会少走99%弯路！ - 8-1
 Agent介绍与LLMS的区别
 </h1>
 <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">💡 一句话核心摘要</h2>
 <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
 通过 Agent（智能体）技术，让大模型具备“手脚”与“记忆”，实现自主调用工具、访问实时数据并完成复杂任务。
 </p>
 <div className="h-px bg-gray-100 mb-6"></div>
 <h2 className="text-lg md:text-xl font-bold text-slate-900 mb-3">1. 大模型的核心缺陷与突破点</h2>
 <p className="text-sm md:text-base text-slate-600 leading-relaxed">
 传统大模型只能基于训练数据回答问题，缺乏实时信息与执行能力；Agent
 通过引入工具调用与记忆机制，形成“思考—行动—反思”的闭环，突破了这一限制。
 </p>
 </div>
 <div data-dpanel="mindmap" hidden={dtab !== 'mindmap'} className="p-4 md:p-6">
 <div
 id="mindmapWrap"
 ref={mmWrapRef}
 className="relative rounded-xl bg-gray-50 border border-gray-100 overflow-hidden flex items-center justify-center"
 style={{ minHeight: 520 }}
 >
 <img
 id="mindmapImg"
 src="https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Clean%20mind%20map%20diagram%20on%20white%20background%2C%20central%20topic%20node%20on%20the%20left%20with%20Chinese%20label%20%E5%A6%82%E4%BD%95%E4%BB%8E0-1%E5%81%9AAgent%E9%A1%B9%E7%9B%AE%2C%20colorful%20curved%20branches%20in%20orange%2C%20purple%2C%20blue%2C%20green%2C%20pink%20spreading%20to%20the%20right%2C%20small%20circular%20nodes%20with%20short%20Chinese%20labels%2C%20flat%20clean%20vector%20illustration%2C%20high%20clarity&image_size=landscape_16_9"
 alt="视频内容思维导图"
 className="max-w-full transition-transform duration-200"
 style={{ transform: `scale(${mmScale})` }}
 />
 <div className="absolute bottom-4 right-4 flex items-center gap-0.5 bg-white border border-gray-200 rounded-lg shadow-xs p-1">
 <button
 id="mmZoomOut"
 className="w-7 h-7 flex items-center justify-center rounded-sm text-slate-500 hover:bg-gray-100 transition-colors"
 title="缩小"
 onClick={() => setMmScale((s) => Math.max(0.4, s - 0.2))}
 >
 <i className="fa-solid fa-minus text-xs"></i>
 </button>
 <button
 id="mmZoomIn"
 className="w-7 h-7 flex items-center justify-center rounded-sm text-slate-500 hover:bg-gray-100 transition-colors"
 title="放大"
 onClick={() => setMmScale((s) => Math.min(3, s + 0.2))}
 >
 <i className="fa-solid fa-plus text-xs"></i>
 </button>
 <button
 id="mmFit"
 className="w-7 h-7 flex items-center justify-center rounded-sm text-slate-500 hover:bg-gray-100 transition-colors"
 title="适应画布"
 onClick={() => setMmScale(1)}
 >
 <i className="fa-solid fa-expand text-xs"></i>
 </button>
 <button
 id="mmFull"
 className="w-7 h-7 flex items-center justify-center rounded-sm text-slate-500 hover:bg-gray-100 transition-colors"
 title="全屏"
 onClick={() => {
 if (document.fullscreenElement) {
 void document.exitFullscreen();
 } else if (mmWrapRef.current?.requestFullscreen) {
 void mmWrapRef.current.requestFullscreen();
 }
 }}
 >
 <i className="fa-solid fa-maximize text-xs"></i>
 </button>
 </div>
 </div>
 </div>
 <div data-dpanel="transcript" hidden={dtab !== 'transcript'} className="p-6 md:p-10">
 <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
 [00:00-01:09]
 今天我们通过一个例子来引入今天的内容。大家应该都用过类似的大模型产品，会发现一个共性问题：模型只能基于训练数据回答问题，没法获取实时信息。比如问它今天的天气，它可能返回很久以前的旧数据，这显然不是我们想要的结果。
 </p>
 <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-6">
 [01:09-01:58]
 换用另一个做了优化的模型后，情况就不同了：同样的问题，它能返回带当天日期的实时天气数据。原因在于这个模型可以调用外部工具、访问网络——先从公开的天气网站抓取数据，再整理成结构化的内容输出，答案自然就准确了。
 </p>
 <p className="text-sm md:text-base text-slate-600 leading-relaxed">
 [01:58-02:45] 这正是 Agent
 的核心思路：给大模型配上“手脚”和“记忆”，让它能自主调用工具、访问实时数据、完成复杂任务。接下来会围绕大模型的核心缺陷、Agent
 的关键能力与关键技术组成展开，帮助大家从 0 到 1 搭建自己的智能体。
 </p>
 </div>
 <div data-dpanel="creation" hidden={dtab !== 'creation'} className="p-6 md:p-10">
 <div className="max-w-xl mx-auto bg-brand-50/60 border border-brand-100 rounded-2xl px-8 py-16 flex flex-col items-center text-center gap-6">
 <div className="w-14 h-14 rounded-xl bg-brand-100 text-brand-600 flex items-center justify-center">
 <i className="fa-solid fa-pen-nib text-xl"></i>
 </div>
 <h3 className="text-lg md:text-xl font-bold text-slate-900">基于音视频内容二次创作</h3>
 <button
 id="gotoCreation"
 onClick={onGotoCreation}
 className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg px-6 py-3 transition-colors"
 >
 前往创作页面
 <i className="fa-solid fa-arrow-right text-xs"></i>
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
