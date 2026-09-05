'use client';

import Link from 'next/link';

import { UserMenu } from '@/components/common/user-menu';

interface StudioSidebarProps {
 projectName: string;
 projectId: 'projSeed' | 'projItem';
 onCollapse: () => void;
 onNewTask: () => void;
 onProjectClick: () => void;
 onOpenFeedback: () => void;
 onOpenContact: () => void;
}

/** 分镜工作室左侧边栏（品牌 / 新任务 / 项目列表 / 用户） */
export function StudioSidebar({
 projectName,
 projectId,
 onCollapse,
 onNewTask,
 onProjectClick,
 onOpenFeedback,
 onOpenContact,
}: StudioSidebarProps) {
 return (
 <aside className="studio-sidebar">
 <Link className="studio-brand" href="/">
 <div className="studio-brand-mark">
 <i className="fa-solid fa-clapperboard"></i>
 </div>
 <div className="studio-brand-copy">
 <span className="studio-brand-name">VidSpark</span>
 <span className="studio-brand-sub">分镜成片工作流</span>
 </div>
 </Link>
 <button className="studio-sidebar-collapse-btn" id="collapseBtn" title="收起侧边栏" onClick={onCollapse}>
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
 <button className="studio-new-btn" id="newTaskBtn" onClick={onNewTask}>
 <i className="fa-solid fa-plus"></i>
 <span>新任务</span>
 </button>
 <div className="studio-sidebar-head">
 <span>项目列表</span>
 </div>
 <div className="studio-project-scroll custom-scrollbar">
 <div className="studio-empty-history" id="projEmpty" hidden>
 <i className="fa-regular fa-folder-open"></i>
 <span>还没有分镜项目</span>
 <span>从右侧新建一个分镜成片工作流任务</span>
 </div>
 <div id="projList">
 <button className="studio-project-item is-active" id={projectId} onClick={onProjectClick}>
 <div className="studio-project-icon">
 <i className="fa-solid fa-clapperboard"></i>
 </div>
 <div className="studio-project-title" title={projectName}>
 {projectName}
 </div>
 </button>
 </div>
 </div>
 <div data-pop-region className="studio-sidebar-footer">
 <UserMenu
 trigger={
 <button className="studio-user-trigger">
 <img
 src="https://thirdwx.qlogo.cn/mmopen/vi_32/dYZ9vmoSW03wrqbGy5SZE6r40FkqYcTbfkHHJib3X1Luqsz1UVJpEXtS85AEiaO4RhV9niaMxOQ1icGRZ2aOf9UP3w/132"
 alt="User"
 className="studio-user-avatar"
 />
 </button>
 }
 onOpenFeedback={onOpenFeedback}
 onOpenContact={onOpenContact}
 />
 </div>
 </aside>
 );
}
