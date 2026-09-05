'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import { CollapsedHint } from '@/components/dashboard/collapsed-hint';
import { ContactModal } from '@/components/dashboard/contact-modal';
import { CreationView } from '@/components/dashboard/creation-view';
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar';
import { DetailView } from '@/components/dashboard/detail-view';
import { ExploreView } from '@/components/dashboard/explore-view';
import { FeedbackModal } from '@/components/dashboard/feedback-modal';
import { HomeView } from '@/components/dashboard/home-view';
import { SumSettingsDialog, type SumSettings } from '@/components/dashboard/sum-settings-dialog';
import { SummaryView } from '@/components/dashboard/summary-view';
import { TopWidgets } from '@/components/dashboard/top-widgets';

type View = 'home' | 'explore' | 'summary' | 'creation' | 'detail';

/** 控制台外壳：侧栏 + 顶栏弹层 + 五个视图 + 弹窗 */
export function DashboardShell() {
 const router = useRouter();
 const [view, setView] = useState<View>('home');
 const [collapsed, setCollapsed] = useState(false);
 const [tab, setTab] = useState(0);
 const [notifOpen, setNotifOpen] = useState(false);
 const [miniOpen, setMiniOpen] = useState(false);
 const [userMenuOpen, setUserMenuOpen] = useState(false);
 const [feedbackOpen, setFeedbackOpen] = useState(false);
 const [contactOpen, setContactOpen] = useState(false);
 const [ssOpen, setSsOpen] = useState(false);
 const [ssState, setSsState] = useState<SumSettings>({
 follow: true,
 lang: '中文',
 level: '标准',
 model: 'qwen-flash',
 });

 const viewRefs = useRef<Partial<Record<View, HTMLDivElement | null>>>({});

 // 切换视图后滚动回顶部（同原站 show()）
 useEffect(() => {
 const el = viewRefs.current[view];
 if (el) el.scrollTop = 0;
 }, [view]);

 // 点击页面空白处关闭顶栏弹层与用户菜单
 useEffect(() => {
 const closeAll = (e: MouseEvent) => {
 const t = e.target as HTMLElement;
 if (t.closest('[data-pop-region]')) return;
 setNotifOpen(false);
 setMiniOpen(false);
 setUserMenuOpen(false);
 };
 document.addEventListener('click', closeAll);
 return () => document.removeEventListener('click', closeAll);
 }, []);

 const closeTopPops = useCallback(() => {
 setNotifOpen(false);
 setMiniOpen(false);
 setUserMenuOpen(false);
 }, []);

 const show = useCallback((name: View) => setView(name), []);

 /** 侧栏类目页签：总结 / 创作 / 分镜 */
 const handleTab = useCallback(
 (idx: number) => {
 if (idx === 2) {
 router.push('/storyboard-studio');
 return;
 }
 setTab(idx);
 show(idx === 0 ? 'summary' : 'creation');
 },
 [router, show],
 );

 return (
 <div id="app">
 <div className="flex h-screen bg-gray-50 font-sans text-slate-800">
 <CollapsedHint
 collapsed={collapsed}
 onExpand={() => setCollapsed(false)}
 onNewTask={() => show('home')}
 />
 <DashboardSidebar
 collapsed={collapsed}
 tab={tab}
 userMenuOpen={userMenuOpen}
 onCollapse={() => setCollapsed(true)}
 onNewTask={() => show('home')}
 onExplore={() => show('explore')}
 onTab={handleTab}
 onToggleUserMenu={() => {
 const next = !userMenuOpen;
 closeTopPops();
 setUserMenuOpen(next);
 }}
 onOpenDetail={() => show('detail')}
 onOpenFeedback={() => {
 closeTopPops();
 setFeedbackOpen(true);
 }}
 onOpenContact={() => {
 closeTopPops();
 setContactOpen(true);
 }}
 />
 <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
 <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
 <main className="flex-1 flex flex-col h-full overflow-hidden relative">
 <TopWidgets
 notifOpen={notifOpen}
 miniOpen={miniOpen}
 onToggleNotif={() => {
 const next = !notifOpen;
 closeTopPops();
 setNotifOpen(next);
 }}
 onToggleMini={() => {
 const next = !miniOpen;
 closeTopPops();
 setMiniOpen(next);
 }}
 />
 <ExploreView hidden={view !== 'explore'} />
 <HomeView
 hidden={view !== 'home'}

 onOpenSummary={() => {
 setTab(0);
 show('summary');
 }}
 onOpenCreation={() => {
 setTab(1);
 show('creation');
 }}
 />
 <SummaryView
 hidden={view !== 'summary'}
 chipLevel={ssState.level}
 chipModel={ssState.model}
 onOpenSettings={() => setSsOpen(true)}
 />
 <CreationView hidden={view !== 'creation'} />
 <DetailView
 hidden={view !== 'detail'}
 onGotoCreation={() => {
 setTab(1);
 show('creation');
 }}
 />
 </main>

 {/* 页面内置轻提示容器（原站 DOM；提示统一走全局 vsToast） */}
 <div className="fixed bottom-8 right-8 z-50 transition-all duration-300 transform translate-y-8 opacity-0">
 <div className="bg-slate-800 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3">
 <i className="fa-solid fa-circle-check text-green-400"></i>
 <span></span>
 </div>
 </div>
 <SumSettingsDialog
 open={ssOpen}
 settings={ssState}
 onCommit={setSsState}
 onClose={() => setSsOpen(false)}
 />
 </div>
 </div>
 );
}
