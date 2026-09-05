import Link from 'next/link';

import { BrandMark } from '@/components/icons/brand-mark';

const NAV_LINKS = [
 { href: '/#storyboard-prompt', label: '分镜成片' },
 { href: '/#features', label: '音视频总结' },
 { href: '/#content-creation', label: '内容创作' },
 { href: '/blog', label: '博客' },
 { href: '/membership', label: '定价' },
 { href: '/dashboard', label: '历史记录' },
 { href: '/docs', label: '文档' },
];

/** 深色站点顶部导航（首页 / 博客 / 文档等营销页共用） */
export function SiteHeader() {
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
 {NAV_LINKS.map((item) => (
 <Link
 key={item.label}
 href={item.href}
 className="text-slate-400 hover:text-white transition-colors text-sm font-medium"
 >
 {item.label}
 </Link>
 ))}
 </div>
 </div>
 <div className="flex items-center gap-4">
 <button
 title="菜单"
 className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
 >
 <i className="fa-solid text-lg fa-bars"></i>
 </button>
 <div className="relative group">
 <button
 title="选择语言"
 className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
 >
 <span className="text-sm">中文</span>
 <i className="fa-solid fa-chevron-down text-xs opacity-70 group-hover:opacity-100 transition-opacity"></i>
 </button>
 <div className="absolute right-0 top-full mt-2 bg-slate-800/95 backdrop-blur-md border border-slate-700 rounded-lg shadow-xl py-2 min-w-[140px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
 <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 transition-colors whitespace-nowrap flex items-center">
 <i className="fa-solid fa-check text-green-400 mr-2"></i>中文{' '}
 </button>
 <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-slate-700/80 transition-colors whitespace-nowrap flex items-center">
 <i className="fa-solid text-green-400 mr-2 opacity-0"></i>English{' '}
 </button>
 </div>
 </div>
 <div className="h-6 w-px bg-slate-700 mx-2"></div>
 <Link
 href="/login"
 className="bg-white text-slate-900 hover:bg-brand-50 px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]"
 >
 {' '}
 登录/注册{' '}
 </Link>
 </div>
 </div>
 </div>
 </nav>
 );
}
