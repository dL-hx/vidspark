import type { Metadata } from 'next';
import Link from 'next/link';

import { ArticleCards } from '@/components/blog/article-cards';
import { BlogFooter } from '@/components/blog/blog-footer';
import { BlogHeader } from '@/components/blog/blog-header';

export const metadata: Metadata = {
 title: '官方博客与实战指南 | 智能AI视频创作与内容生成',
};

export default function BlogPage() {
 return (
 <div className="antialiased min-h-screen flex flex-col bg-slate-900 text-slate-50 overflow-x-hidden">
 <div className="glow-bg top-0 left-1/4 animate-pulse-slow"></div>
 <div className="glow-bg-secondary top-1/3 right-1/4 animate-pulse-slow delay-1000"></div>
 <BlogHeader />
 <div className="grow pt-32 pb-20">
 <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
 <div>
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-purple-600 border border-brand-500/30 rounded-full px-4 py-1.5 mb-4">
 <i className="fa-solid fa-pen-nib text-brand-400 text-sm"></i>
 <span className="text-sm text-brand-300">创作研究所</span>
 </div>
 <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
 <span className="text-gradient">博客</span>与实战指南{' '}
 </h1>
 </div>
 </div>
 <ArticleCards />
 </section>
 <section className="py-24 relative overflow-hidden mt-20 border-t border-slate-800">
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/20 to-transparent"></div>
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
 {' '}
 准备好开始<span className="text-gradient">高效创作</span>了吗？{' '}
 </h2>
 <p className="text-slate-400 max-w-2xl mx-auto mb-8">
 {' '}
 立即进入控制台，体验最新 AI 分镜与其他前沿创作功能{' '}
 </p>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link
 href="/dashboard"
 className="bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center gap-2"
 >
 <i className="fa-solid fa-rocket"></i> 进入控制台{' '}
 </Link>
 <Link
 href="/"
 className="text-slate-400 hover:text-white font-medium px-6 py-4 flex items-center gap-2 transition-colors"
 >
 <i className="fa-solid fa-house"></i> 返回首页{' '}
 </Link>
 </div>
 </div>
 </section>
 </div>
 <BlogFooter />
 </div>
 );
}
