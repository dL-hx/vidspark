'use client';

import Link from 'next/link';

interface HomeViewProps {
 hidden: boolean;
 rootRef?: (el: HTMLDivElement | null) => void;
 onOpenSummary: () => void;
 onOpenCreation: () => void;
}

/** 默认首页视图：三大创作入口 */
export function HomeView({ hidden, rootRef, onOpenSummary, onOpenCreation }: HomeViewProps) {
 return (
 <div id="homeView" ref={rootRef} hidden={hidden} className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
 <div className="max-w-6xl mx-auto h-full flex flex-col">
 <div className="flex-1 flex flex-col items-center justify-center min-h-[500px]">
 <div className="w-full max-w-4xl">
 <div className="text-center mb-12">
 <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
 AI 驱动的 <span className="text-brand-600">内容引擎</span>
 </h1>
 <p className="text-base text-slate-500">从视频理解到内容创作，一站式完成多平台内容生产</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
 {/* 分镜成片工作流 */}
 <Link
 href="/storyboard-studio"
 className="order-3 bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 cursor-pointer group overflow-hidden"
 >
 <div className="p-7">
 <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 mb-5">
 <i className="fa-solid fa-clapperboard text-white text-xl"></i>
 </div>
 <div className="flex items-center gap-2 mb-3">
 <h2 className="text-xl font-bold text-slate-900">分镜成片工作流</h2>
 </div>
 <p className="text-sm text-slate-500 leading-relaxed mb-5">
 从简单剧情直接生成电影级分镜语言，一键推进高质量分镜视频创作，适配多种主流视频模型
 </p>
 <div className="flex flex-col items-start gap-2.5 mb-5">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-film text-amber-400 text-[10px]"></i> 影视知识库，提供专业分镜设计{' '}
 </span>
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-layer-group text-amber-400 text-[10px]"></i> 一站式生成高质量分镜视频{' '}
 </span>
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-clapperboard text-amber-400 text-[10px]"></i> 支持多种主流视频模型
 </span>
 </div>
 <div className="flex items-center text-amber-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
 进入工作台
 <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
 </div>
 </div>
 </Link>
 {/* 内容创作 */}
 <div
 onClick={onOpenCreation}
 className="order-2 bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl hover:border-teal-300 transition-all duration-300 cursor-pointer group overflow-hidden"
 >
 <div className="p-7">
 <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 mb-5">
 <i className="fa-solid fa-pen-nib text-white text-xl"></i>
 </div>
 <div className="flex items-center gap-2 mb-3">
 <h2 className="text-xl font-bold text-slate-900">内容创作</h2>
 </div>
 <p className="text-sm text-slate-500 leading-relaxed mb-5">
 基于视频总结素材，一键生成小红书、公众号、抖音等多平台优质内容
 </p>
 <div className="flex flex-col items-start gap-2.5 mb-5">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-image text-teal-400 text-[10px]"></i> 图文创作{' '}
 </span>
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-microphone text-teal-400 text-[10px]"></i> 口播稿{' '}
 </span>
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-user-astronaut text-teal-400 text-[10px]"></i> 视频分镜/章节
 </span>
 </div>
 <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
 开始创作
 <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
 </div>
 </div>
 </div>
 {/* 音视频总结 */}
 <div
 onClick={onOpenSummary}
 className="order-1 bg-white rounded-2xl border border-gray-200 shadow-xs hover:shadow-xl hover:border-brand-300 transition-all duration-300 cursor-pointer group overflow-hidden"
 >
 <div className="p-7">
 <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-brand-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300 mb-5">
 <i className="fa-solid fa-play text-white text-xl"></i>
 </div>
 <div className="flex items-center gap-2 mb-3">
 <h2 className="text-xl font-bold text-slate-900">音视频总结</h2>
 </div>
 <p className="text-sm text-slate-500 leading-relaxed mb-5">
 粘贴视频链接或上传文件，一键生成结构化总结、思维导图和精准转录
 </p>
 <div className="flex flex-col items-start gap-2.5 mb-5">
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-wand-magic-sparkles text-brand-400 text-[10px]"></i> 智能总结{' '}
 </span>
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-sitemap text-brand-400 text-[10px]"></i> 思维导图{' '}
 </span>
 <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-50 text-slate-600 text-xs rounded-lg">
 <i className="fa-solid fa-language text-brand-400 text-[10px]"></i> 多语言
 </span>
 </div>
 <div className="flex items-center text-brand-600 font-semibold text-sm group-hover:gap-3 gap-2 transition-all">
 开始总结
 <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
