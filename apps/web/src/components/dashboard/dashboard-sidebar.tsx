'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { UserMenu } from '@/components/common/user-menu';
import { BrandMark } from '@/components/icons/brand-mark';
import { BilibiliIcon } from '@/components/icons/platform-icons';

/** 侧栏类目页签的选中样式（与首页/创作页色系对应） */
const TAB_ON = ['bg-white text-brand-600 shadow-xs', 'bg-white text-teal-600 shadow-xs', 'bg-white text-amber-600 shadow-xs'];
const TAB_OFF = 'text-slate-400 hover:text-slate-600';

interface DashboardSidebarProps {
 collapsed: boolean;
 /** 0=总结 1=创作 */
 tab: number;
 userMenuOpen: boolean;
 onCollapse: () => void;
 onNewTask: () => void;
 onExplore: () => void;
 /** idx: 0=总结 1=创作 2=分镜（分镜直接跳走） */
 onTab: (idx: number) => void;
 onToggleUserMenu: () => void;
 onOpenDetail: () => void;
 onOpenFeedback: () => void;
 onOpenContact: () => void;
}

/** 控制台左侧边栏：品牌、新任务/探索、历史列表、用户菜单 */
export function DashboardSidebar({
 collapsed,
 tab,
 userMenuOpen,
 onCollapse,
 onNewTask,
 onExplore,
 onTab,
 onToggleUserMenu,
 onOpenDetail,
 onOpenFeedback,
 onOpenContact,
}: DashboardSidebarProps) {
 const [itemMenuOpen, setItemMenuOpen] = useState(false);

 useEffect(() => {
 const close = () => setItemMenuOpen(false);
 document.addEventListener('click', close);
 return () => document.removeEventListener('click', close);
 }, []);

 return (
 <aside
 className={`flex flex-col bg-white border-r border-gray-200 transition-all duration-300 ease-in-out z-20 shrink-0 w-64 ${
 collapsed ? '-ml-64 opacity-0' : 'ml-0 opacity-100'
 }`}
 >
 <div className="h-20 flex items-center justify-between pl-0 pr-0 border-b border-gray-100">
 <Link href="/" className="flex items-center gap-3 cursor-pointer">
 <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-blue-500 rounded-xl flex items-center justify-center shadow-md shrink-0">
 <BrandMark className="w-6 h-6 text-white" />
 </div>
 <span className="text-xl font-bold tracking-tight text-slate-900 whitespace-nowrap transition-opacity duration-300">
 Vid<span className="text-brand-600">Spark</span>
 </span>
 </Link>
 <button
 title="收起侧边栏"
 onClick={onCollapse}
 className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:bg-gray-100 hover:text-slate-600 transition-colors"
 >
 <svg
 xmlns="http://www.w3.org/2000/svg"
 width="18"
 height="18"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 >
 <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
 <line x1="9" y1="3" x2="9" y2="21"></line>
 </svg>
 </button>
 </div>
 <div className="py-2 px-0">
 <button
 onClick={onNewTask}
 className="w-full bg-brand-50 text-brand-600 hover:bg-brand-100 hover:text-brand-700 flex items-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200 group justify-start pl-2 pr-3"
 >
 <i className="fa-solid fa-plus text-lg group-hover:scale-110 transition-transform"></i>
 <span className="whitespace-nowrap">新任务</span>
 </button>
 </div>
 <div className="px-0 pb-2">
 <button
 onClick={onExplore}
 className="w-full bg-brand-50 text-brand-600 hover:bg-brand-100 hover:text-brand-700 flex items-center gap-2 py-3 rounded-xl font-semibold transition-all duration-200 group justify-start pl-2 pr-3"
 >
 <i className="fa-solid fa-fire text-lg"></i>
 <span className="whitespace-nowrap">探索热门</span>
 </button>
 </div>

 <div className="flex-1 flex flex-col overflow-hidden py-2 px-0">
 <div className="flex items-center mx-2 mb-2 bg-gray-100 rounded-lg p-0.5">
 {(['总结', '创作', '分镜'] as const).map((label, i) => (
 <button
 key={label}
 onClick={() => onTab(i)}
 className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 ${
 tab === i ? TAB_ON[i] : TAB_OFF
 }`}
 >
 <i
 className={`fa-solid ${
 i === 0 ? 'fa-video' : i === 1 ? 'fa-pen-nib' : 'fa-images'
 } text-[10px]`}
 ></i>
 {label}
 </button>
 ))}
 </div>
 {/* 总结记录 */}
 <div hidden={tab !== 0} className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
 <div
 title=""
 onClick={(e) => {
 if (e.target instanceof Element && e.target.closest('.el-dropdown')) return;
 onOpenDetail();
 }}
 className="group flex items-center gap-2 px-2 py-2 rounded-lg cursor-pointer transition-colors relative text-slate-600 hover:bg-gray-50 hover:text-slate-900"
 >
 <div title="Bilibili" className="platform-icon platform-bilibili sm">
 <BilibiliIcon />
 </div>
 <span className="truncate text-sm font-medium flex-1">
 如何从0-1做Agent项目？| 从小白到实战老手，纯干货带做，智能体实战项目10+，学会少走99%弯路！ - 8-1
 Agent介绍与LLMS的区别
 </span>
 <div className="absolute right-2 opacity-0 group-hover:opacity-100 transition-opacity">
 <div className="el-dropdown">
 <span
 onClick={(e) => {
 e.stopPropagation();
 setItemMenuOpen((v) => !v);
 }}
 className="el-dropdown-link cursor-pointer p-1 block el-dropdown-selfdefine"
 aria-haspopup={'list' as 'menu'}
 aria-controls="dropdown-menu-9619"
 role="button"
 tabIndex={0}
 >
 <i className="fa-solid fa-ellipsis text-slate-400 hover:text-slate-600"></i>
 </span>
 <ul
 className="el-dropdown-menu el-popper el-dropdown-menu--medium"
 id="dropdown-menu-9619"
 style={{ display: itemMenuOpen ? undefined : 'none' }}
 >
 <li
 tabIndex={-1}
 onClick={() => setItemMenuOpen(false)}
 className="el-dropdown-menu__item text-red-500"
 >
 <i className="el-icon-delete"></i>删除
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 {/* 创作记录 */}
 <div hidden={tab !== 1} className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
 <div className="text-center py-8">
 <p className="text-xs text-slate-400">暂无创作记录</p>
 </div>
 </div>
 {/* 分镜记录（点「分镜」页签直接跳转工作室，此列表不会展示） */}
 <div hidden className="flex-1 overflow-y-auto space-y-1 custom-scrollbar">
 <div className="text-center py-8">
 <p className="text-xs text-slate-400">暂无分镜记录</p>
 </div>
 </div>
 </div>
 <div data-pop-region className="pt-2 pb-2 px-6 relative mt-auto">
 <div className="relative group w-full">
 <div
 onClick={(e) => {
 e.stopPropagation();
 onToggleUserMenu();
 }}
 className="flex items-center w-full py-1 pl-1 pr-1 rounded-xl hover:bg-gray-100 cursor-pointer transition-colors"
 >
 <img
 src="https://thirdwx.qlogo.cn/mmopen/vi_32/dYZ9vmoSW03wrqbGy5SZE6r40FkqYcTbfkHHJib3X1Luqsz1UVJpEXtS85AEiaO4RhV9niaMxOQ1icGRZ2aOf9UP3w/132"
 alt="User"
 className="w-8 h-8 rounded-full bg-gray-200 shrink-0 border border-gray-200 hover:ring-2 hover:ring-brand-500 transition-all"
 />
 </div>
 <UserMenu open={userMenuOpen} onOpenFeedback={onOpenFeedback} onOpenContact={onOpenContact} />
 </div>
 </div>
 </aside>
 );
}
