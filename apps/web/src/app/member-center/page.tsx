import type { Metadata } from 'next';
import Link from 'next/link';

import { MemberTabs } from '@/components/billing/member-tabs';

export const metadata: Metadata = {
 title: 'VidSpark - 音视频转录与智能总结',
};

export default function MemberCenterPage() {
 return (
 <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
 <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg">
 <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
 <Link href="/dashboard" className="flex items-center gap-3 group">
 <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="w-5 h-5 text-white"
 >
 <rect x="3" y="6" width="18" height="13" rx="2"></rect>
 <path d="M8 9.5l5 3-5 3v-6z" fill="currentColor" stroke="none"></path>
 <path d="M15 10h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M15 14h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M21 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="none"></path>
 </svg>
 </div>
 <span className="text-xl font-bold tracking-tight">
 Vid<span className="text-brand-400">Spark</span>
 </span>
 </Link>
 <button className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors">
 <i className="fa-solid fa-arrow-left"></i> 返回{' '}
 </button>
 </div>
 </header>
 <main className="pt-28 pb-20 px-4 md:px-6">
 <div className="max-w-5xl mx-auto">
 <div className="text-center mb-10">
 <h1 className="text-3xl md:text-4xl font-bold mb-3">
 会员中心
 </h1>
 <p className="text-slate-400 text-base">管理您的会员订阅与配额使用</p>
 </div>
 <div className="space-y-6">
 <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-xs">
 <h2 className="text-xl font-bold mb-6 text-white block">账号与安全</h2>
 <div className="flex flex-col md:flex-row gap-8 items-start">
 <div className="flex items-center gap-4 min-w-[200px]">
 <div className="w-16 h-16 rounded-full bg-slate-700 overflow-hidden border-2 border-slate-600 shrink-0">
 <img
 src="https://thirdwx.qlogo.cn/mmopen/vi_32/dYZ9vmoSW03wrqbGy5SZE6r40FkqYcTbfkHHJib3X1Luqsz1UVJpEXtS85AEiaO4RhV9niaMxOQ1icGRZ2aOf9UP3w/132"
 alt="Avatar"
 className="w-full h-full object-cover"
 />
 </div>
 <div>
 <div className="text-lg font-bold text-white">异维A酸</div>
 <div className="mt-1 inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium bg-slate-600">
 <i className="fa-solid fa-crown mr-1 text-slate-400"></i>
 <span className="text-slate-400">免费版</span>
 </div>
 </div>
 </div>
 <div className="hidden md:block w-px bg-slate-700 self-stretch"></div>
 <div className="flex-1 w-full space-y-4">
 <div className="flex items-center justify-between p-4 rounded-xl border border-slate-700">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
 <i className="fa-regular fa-envelope text-xl"></i>
 </div>
 <div>
 <div className="text-sm text-slate-400 mb-0.5">邮箱账号</div>
 <div className="font-medium text-slate-500"> 未绑定 </div>
 </div>
 </div>
 <button className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-lg transition-colors">
 {' '}
 立即绑定{' '}
 </button>
 </div>
 <div className="flex items-center justify-between p-4 rounded-xl border border-slate-700">
 <div className="flex items-center gap-3">
 <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400">
 <i className="fa-brands fa-weixin text-xl"></i>
 </div>
 <div>
 <div className="text-sm text-slate-400 mb-0.5">微信账号</div>
 <div className="font-medium text-white"> 异维A酸 </div>
 </div>
 </div>
 <div className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full flex items-center gap-1 cursor-default">
 <i className="fa-solid fa-check"></i> 已绑定{' '}
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
 <div className="relative overflow-hidden rounded-2xl p-6 bg-slate-800/50 border border-slate-700">
 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
 <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
 <div className="relative z-10">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-slate-600">
 <i className="fa-solid fa-crown text-2xl text-slate-400"></i>
 </div>
 <div>
 <h2 className="text-2xl font-bold text-white">免费版</h2>
 <p className="text-sm text-white/70">Free Plan</p>
 </div>
 </div>
 <div className="space-y-2 mb-6">
 <div className="flex items-center gap-2 text-sm text-white/60">
 <i className="fa-solid fa-infinity w-5"></i>
 <span>免费版无时间限制</span>
 </div>
 </div>
 <div className="flex gap-3">
 <Link
 href="/membership"
 className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white backdrop-blur-xs rounded-xl text-center text-sm font-bold transition-all"
 >
 <i className="fa-solid fa-arrow-up mr-2"></i> 开通会员{' '}
 </Link>
 </div>
 </div>
 </div>
 <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 backdrop-blur-xs">
 <div className="flex items-center justify-between mb-6">
 <h3 className="text-lg font-bold flex items-center gap-2">
 <i className="fa-solid fa-chart-pie text-brand-400"></i> 本月配额使用{' '}
 </h3>
 <span className="text-xs text-slate-500"> 重置日期：2026-09-30 </span>
 </div>
 <div className="space-y-4">
 <div className="flex items-center gap-6">
 <div className="relative w-24 h-24 shrink-0">
 <svg className="w-full h-full transform -rotate-90">
 <circle cx="48" cy="48" r="40" strokeWidth="8" fill="none"></circle>
 <circle
 cx="48"
 cy="48"
 r="40"
 strokeWidth="8"
 fill="none"
 strokeDasharray="251.32741228718345"
 strokeDashoffset="50.26548245743669"
 strokeLinecap="round"
 className="transition-all duration-1000"
 ></circle>
 </svg>
 <div className="absolute inset-0 flex flex-col items-center justify-center">
 <span className="text-xl font-bold">80%</span>
 <span className="text-xs text-slate-500">已使用</span>
 </div>
 </div>
 <div className="flex-1 space-y-3">
 <div className="flex justify-between text-sm">
 <span className="text-slate-400">已使用</span>
 <span className="font-medium">8.0 积分</span>
 </div>
 <div className="flex justify-between text-sm">
 <span className="text-slate-400">剩余</span>
 <span className="font-medium text-green-400">2.0 积分</span>
 </div>
 <div className="flex justify-between text-sm">
 <span className="text-slate-400">月配额</span>
 <span className="font-medium">10.0 积分</span>
 </div>
 </div>
 </div>
 <div className="mt-4">
 <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
 <div
 className="h-full bg-gradient-to-r from-brand-500 to-blue-500 rounded-full transition-all duration-1000"
 style={{ width: '80%' }}
 ></div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <MemberTabs />
 </div>
 </div>
 </main>
 </div>
 );
}
