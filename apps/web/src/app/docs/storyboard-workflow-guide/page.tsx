import type { Metadata } from 'next';

import { GuideHeader } from '@/components/docs/guide-header';
import { StoryboardGuideContent } from '@/components/docs/storyboard-guide-content';

export const metadata: Metadata = {
 title: '分镜成片工作流使用文档 - VidSpark 文档 | 智能AI视频创作与内容生成',
};

export default function StoryboardWorkflowGuidePage() {
 return (
 <div className="doc-page antialiased min-h-screen flex flex-col bg-slate-900 text-slate-50 overflow-x-hidden">
 <div className="glow-bg top-0 left-1/4 animate-pulse-slow"></div>
 <div className="glow-bg-secondary top-1/3 right-1/4 animate-pulse-slow delay-1000"></div>
 <GuideHeader />
 <main className="grow pt-32 pb-20 relative z-10">
 <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
 <StoryboardGuideContent />
 </section>
 </main>
 </div>
 );
}
