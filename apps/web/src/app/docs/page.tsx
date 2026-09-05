import type { Metadata } from 'next';
import Link from 'next/link';

import { DocsHeader } from '@/components/docs/docs-header';

export const metadata: Metadata = {
 title: 'VidSpark 文档 | 智能AI视频创作与内容生成',
};

export default function DocsPage() {
 return (
 <div className="antialiased min-h-screen flex flex-col bg-slate-900 text-slate-50 overflow-x-hidden">
 <div className="glow-bg top-0 left-1/4 animate-pulse-slow"></div>
 <div className="glow-bg-secondary top-1/3 right-1/4 animate-pulse-slow delay-1000"></div>
 <DocsHeader />
 <main className="grow pt-32 pb-20 relative z-10">
 <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="mb-12">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-blue-600 border border-brand-500/30 rounded-full px-4 py-1.5 mb-6">
 <i className="fa-solid fa-book-open text-brand-300 text-sm"></i>
 <span className="text-sm text-brand-200">VidSpark 文档</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight"> 文档列表 </h1>
 </div>
 <div className="max-w-4xl space-y-6">
 <Link
 href="/docs/storyboard-workflow-guide"
 className="block rounded-3xl border border-slate-700 bg-slate-800/60 backdrop-blur-xs p-8 cursor-pointer hover:border-brand-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
 >
 <h2 className="text-2xl md:text-3xl font-bold text-white">分镜成片工作流使用文档</h2>
 <p className="text-slate-400 text-base leading-relaxed mt-4">
 从一句话创意出发，依次完成内容创作、分镜方案创作和分镜成片工作流，并在片段级别完成编辑、参数设置和单镜头重做。
 </p>
 <div className="mt-8 inline-flex items-center gap-2 text-brand-300 font-semibold">
 {' '}
 查看文档 <i className="fa-solid fa-arrow-right"></i>
 </div>
 </Link>
 <Link
 href="/docs/video-model-prompt-guide"
 className="block rounded-3xl border border-slate-700 bg-slate-800/60 backdrop-blur-xs p-8 cursor-pointer hover:border-brand-500 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
 >
 <h2 className="text-2xl md:text-3xl font-bold text-white">视频生成模型提示词指南</h2>
 <p className="text-slate-400 text-base leading-relaxed mt-4">
 汇总几份常用的视频模型提示词外部资料，供用户补充学习；VidSpark 平台内已提供电影级分镜提示词生成能力。
 </p>
 <div className="mt-8 inline-flex items-center gap-2 text-brand-300 font-semibold">
 {' '}
 查看文档 <i className="fa-solid fa-arrow-right"></i>
 </div>
 </Link>
 </div>
 </section>
 </main>
 </div>
 );
}
