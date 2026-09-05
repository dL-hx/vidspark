import type { Metadata } from 'next';
import Link from 'next/link';
import { Suspense } from 'react';

import { BackButton } from '@/components/billing/back-button';
import { PaymentCard } from '@/components/billing/payment-card';

export const metadata: Metadata = {
 title: 'VidSpark | 智能AI视频创作与内容生成',
};

export default function PaymentPage() {
 return (
 <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
 <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg">
 <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
 <Link href="/dashboard" className="flex items-center gap-3 group">
 <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="w-6 h-6 text-white"
 >
 <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"></rect>
 <path d="M8 9.5l5 3-5 3v-6z" fill="currentColor" stroke="none"></path>
 <path d="M15 10h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M15 14h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M21 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="none"></path>
 </svg>
 </div>
 <span className="text-xl font-bold tracking-tight">
 {' '}
 Vid<span className="text-brand-500">Spark</span>
 </span>
 </Link>
 <BackButton
 href="/membership"
 className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
 >
 <i className="fa-solid fa-arrow-left"></i> 返回选择{' '}
 </BackButton>
 </div>
 </header>
 <main className="pt-32 pb-20 px-6">
 <Suspense fallback={null}>
 <PaymentCard />
 </Suspense>
 </main>
 </div>
 );
}
