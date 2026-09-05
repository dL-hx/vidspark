import Link from 'next/link';

import { BrandMark } from '@/components/icons/brand-mark';

/** 文档中心页顶部导航（导航与首页不一致，以 docs.html 为准） */
export function DocsHeader() {
 return (
 <nav className="fixed w-full z-50 top-0 transition-all duration-300 border-b border-white/5 bg-slate-900/80 backdrop-blur-md">
 <div className="w-full px-4 sm:px-6 lg:px-8">
 <div className="flex items-center justify-between h-20">
 <div className="flex items-center gap-8">
 <Link href="/" className="shrink-0 flex items-center gap-3 cursor-pointer group">
 <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300">
 <BrandMark className="w-6 h-6 text-white" />
 </div>
 <span className="text-2xl font-bold tracking-tight text-white">
 Vid<span className="text-brand-400">Spark</span>
 </span>
 </Link>
 <div className="hidden md:flex items-center gap-6">
 <Link
 href="/#storyboard-prompt"
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 分镜成片
 </Link>
 <Link
 href="/#features"
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 音视频总结
 </Link>
 <Link
 href="/#content-creation"
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 内容创作
 </Link>
 <Link
 href="/blog"
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 博客
 </Link>
 <Link
 href="/membership"
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 定价
 </Link>
 <Link
 href="/dashboard"
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 历史记录
 </Link>
 <Link
 href="/docs"
 className="text-white font-bold transition-colors text-sm border-b-2 border-brand-500 pb-1"
 >
 文档
 </Link>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="relative group">
 <button className="flex items-center focus:outline-none text-left">
 <img
 src="https://thirdwx.qlogo.cn/mmopen/vi_32/dYZ9vmoSW03wrqbGy5SZE6r40FkqYcTbfkHHJib3X1Luqsz1UVJpEXtS85AEiaO4RhV9niaMxOQ1icGRZ2aOf9UP3w/132"
 alt="User Avatar"
 className="w-10 h-10 rounded-full bg-gray-200 border border-gray-200 hover:ring-2 hover:ring-brand-500 transition-all"
 />
 </button>
 </div>
 </div>
 </div>
 </div>
 </nav>
 );
}
