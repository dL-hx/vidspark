import Link from 'next/link';

import { BrandMark } from '@/components/icons/brand-mark';

/** 博客页顶部导航（导航与首页不一致，以 blog.html 为准） */
export function BlogHeader() {
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
 className="text-white font-bold transition-colors text-sm border-b-2 border-brand-500 pb-1"
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
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 文档
 </Link>
 </div>
 </div>
 <div className="flex items-center gap-4">
 <div className="relative group">
 <button
 title="选择语言"
 className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
 >
 <span className="text-sm">中文</span>
 <i className="fa-solid fa-chevron-down text-xs opacity-70 group-hover:opacity-100 transition-opacity"></i>
 </button>
 <div className="absolute right-0 top-full mt-2 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl py-2 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
 <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover: transition-colors whitespace-nowrap flex items-center">
 <i className="fa-solid fa-check text-green-400 mr-2"></i>中文{' '}
 </button>
 <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 hover: transition-colors whitespace-nowrap flex items-center">
 <i className="fa-solid fa-check text-green-400 mr-2 opacity-0"></i>English{' '}
 </button>
 </div>
 </div>
 <div className="h-6 w-px bg-slate-700 mx-2"></div>
 <div className="relative group">
 <button className="flex items-center focus:outline-none text-left">
 <img
 src="https://thirdwx.qlogo.cn/mmopen/vi_32/dYZ9vmoSW03wrqbGy5SZE6r40FkqYcTbfkHHJib3X1Luqsz1UVJpEXtS85AEiaO4RhV9niaMxOQ1icGRZ2aOf9UP3w/132"
 alt="User Avatar"
 className="w-10 h-10 rounded-full bg-gray-200 border border-gray-200 hover:ring-2 hover:ring-brand-500 transition-all"
 />
 </button>
 <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
 <div className="px-4 py-2 border-b border-slate-700 mb-1">
 <p className="text-sm font-bold text-white leading-tight truncate">异维A酸</p>
 <p className="text-xs text-slate-400 leading-tight mt-1">Free</p>
 </div>
 <Link
 href="/membership"
 className="block w-full text-left px-4 py-2 text-sm text-amber-400 hover:bg-slate-700 transition-colors"
 >
 <i className="fa-solid fa-crown mr-2"></i>升级会员{' '}
 </Link>
 <Link
 href="/member-center"
 className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700 transition-colors"
 >
 <i className="fa-solid fa-user-gear mr-2"></i>会员中心{' '}
 </Link>
 <button className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-slate-700 hover:text-red-300 transition-colors">
 <i className="fa-solid fa-right-from-bracket mr-2"></i>退出登录{' '}
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </nav>
 );
}
