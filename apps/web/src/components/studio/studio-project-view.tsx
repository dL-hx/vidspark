'use client';

import Link from 'next/link';

import { vsToast } from '@/lib/toast';

export interface StudioSummary {
 idea: string;
 model: string;
 style: string;
 ratio: string;
 dur: string;
 quality: string;
}

interface StudioProjectViewProps {
 summary: StudioSummary;
 planTitles: readonly [string, string];
 curPlanIdx: number;
 stage: 1 | 2;
 ready: boolean;
 loadMsg: string;
 promptText: string;
 onSelectPlan: (idx: number) => void;
}

/** 项目详情视图（侧栏配置摘要 + 方案预览 / 出片概览） */
export function StudioProjectView({
 summary,
 planTitles,
 curPlanIdx,
 stage,
 ready,
 loadMsg,
 promptText,
 onSelectPlan,
}: StudioProjectViewProps) {
 const handleCopy = () => {
 if (navigator.clipboard) {
 navigator.clipboard.writeText(promptText).then(() => {
 vsToast('已复制到剪贴板', true);
 });
 } else {
 vsToast('已复制到剪贴板', true);
 }
 };

 return (
 <div className="studio-workspace">
 <div className="workspace-main-layout">
 <aside className="workspace-sidebar custom-scrollbar">
 <div className="sidebar-section">
 <h3>原始创意</h3>
 <p className="sidebar-creative-brief" id="pvIdea">
 {summary.idea}
 </p>
 </div>
 <div className="sidebar-section">
 <h3>基本配置</h3>
 <ul className="sidebar-config-list">
 <li>
 <span>分镜模型</span>
 <strong id="pvModel">{summary.model}</strong>
 </li>
 <li>
 <span>视频模型</span>
 <strong>Seedance 2.0 Fast</strong>
 </li>
 <li>
 <span>风格</span>
 <strong id="pvStyle">{summary.style}</strong>
 </li>
 <li>
 <span>比例</span>
 <strong id="pvRatio">{summary.ratio}</strong>
 </li>
 <li>
 <span>视频总时长</span>
 <strong id="pvDur">{summary.dur}</strong>
 </li>
 </ul>
 </div>
 <div className="sidebar-section">
 <h3>高级配置</h3>
 <ul className="sidebar-config-list">
 <li>
 <span>画质要求</span>
 <strong id="pvQuality">{summary.quality}</strong>
 </li>
 <li>
 <span>光影设定</span>
 <strong>AI 自动</strong>
 </li>
 <li>
 <span>运镜偏好</span>
 <strong>AI 自动</strong>
 </li>
 <li>
 <span>转场方式</span>
 <strong>AI 自动</strong>
 </li>
 <li>
 <span>叙事节奏</span>
 <strong>标准叙事</strong>
 </li>
 </ul>
 </div>
 </aside>

 <main className="workspace-content">
 <div className="workspace-waiting-card" id="stLoading" hidden={!(stage === 1 && !ready)}>
 <div className="workspace-waiting-icon">
 <span className="spinner"></span>
 </div>
 <p id="loadMsg">{loadMsg}</p>
 </div>
 <div className="workspace-plan-tabs" id="planTabs">
 {planTitles.map((title, i) => (
 <button
 key={i === 0 ? 'planTabA' : 'planTabB'}
 className={`workspace-plan-tab${i === curPlanIdx ? ' is-active' : ''}`}
 id={i === 0 ? 'planTabA' : 'planTabB'}
 onClick={() => onSelectPlan(i)}
 >
 <div className="workspace-plan-content">
 <strong id={i === 0 ? 'planTitleA' : 'planTitleB'}>{title}</strong>
 <div
 className="plan-selected-indicator"
 style={i === curPlanIdx ? undefined : { display: 'none' }}
 >
 <i className="fa-solid fa-circle-check"></i>
 <span>当前选中</span>
 </div>
 </div>
 </button>
 ))}
 </div>
 <div id="stPlan" hidden={!(stage === 1 && ready)}>
 <div className="workspace-plan-preview">
 <div className="plan-preview-header">
 <div className="plan-preview-title">
 <i className="fa-solid fa-scroll"></i>
 <h2>分镜方案内容预览</h2>
 </div>
 <div className="plan-preview-actions">
 <button className="plan-preview-copy" id="copyAll" onClick={handleCopy}>
 <i className="fa-regular fa-copy"></i>
 <span>一键复制全部</span>
 </button>
 <Link className="plan-enter-video-btn" href="/workbench">
 <i className="fa-solid fa-film"></i>
 <span>进入出片工作台</span>
 </Link>
 </div>
 </div>
 <div className="plan-preview-content-wrapper">
 <pre className="plan-preview-text custom-scrollbar" id="promptBlock">
 {promptText}
 </pre>
 </div>
 </div>
 </div>
 <div id="stFilm" hidden={stage !== 2}>
 <div className="video-overview-header">
 <div className="video-overview-info">
 <h2>出片概览</h2>
 <span className="video-overview-progress"> 0 / 2 片段已完成 </span>
 </div>
 <div className="video-overview-actions">
 <Link className="plan-enter-video-btn" href="/workbench">
 <i className="fa-solid fa-arrow-up-right-from-square"></i>
 <span>继续分镜成片</span>
 </Link>
 </div>
 </div>
 <div className="workspace-video-empty">
 <div className="video-empty-icon">
 <i className="fa-solid fa-photo-film"></i>
 </div>
 <h2>暂无生成结果</h2>
 <p>当前方案还没有生成视频，请进入工作台开始制作。</p>
 <Link className="plan-enter-video-btn" href="/workbench">
 <i className="fa-solid fa-play"></i>
 <span>继续分镜成片</span>
 </Link>
 </div>
 </div>
 </main>
 </div>
 </div>
 );
}
