'use client';

import { useEffect, useRef, useState } from 'react';

import { ContactModal } from '@/components/dashboard/contact-modal';
import { FeedbackModal } from '@/components/dashboard/feedback-modal';
import { vsToast } from '@/lib/toast';

import { StudioCreateView, type StudioGeneratePayload } from './studio-create-view';
import { buildPrompt, SEED_PLANS } from './studio-prompts';
import { StudioProjectView, type StudioSummary } from './studio-project-view';
import { StudioSidebar } from './studio-sidebar';

const LOAD_MSGS = ['正在分析创意...', '正在规划分镜结构...', '正在生成提示词...', '正在校验一致性...'] as const;

const SEED_NAME = '未来城市';
const SEED_PLAN_TITLES: readonly [string, string] = ['方案A：上帝俯览', '方案B：沉浸穿梭'];

interface ProjectItem {
 kind: 'seed' | 'generated';
 name: string;
}

/** 分镜成片工作流主组件（两阶段工作流状态机） */
export function StoryboardStudio() {
 const [collapsed, setCollapsed] = useState(false);
 const [feedbackOpen, setFeedbackOpen] = useState(false);
 const [contactOpen, setContactOpen] = useState(false);
 const [view, setView] = useState<'new' | 'project'>('new');
 const [stage, setStage] = useState<1 | 2>(1);
 const [stage2Disabled, setStage2Disabled] = useState(true);
 const [projExists, setProjExists] = useState(true);
 const [ready, setReady] = useState(false);
 const [seed, setSeed] = useState(false);
 const [projId, setProjId] = useState(2382);
 const [projectItem, setProjectItem] = useState<ProjectItem>({ kind: 'seed', name: SEED_NAME });
 const [planTitles, setPlanTitles] = useState<readonly [string, string]>(SEED_PLAN_TITLES);
 const [summary, setSummary] = useState<StudioSummary>({
 idea: SEED_NAME,
 model: 'deepseek-v4-flash',
 style: '电影写实',
 ratio: '16:9',
 dur: '15s',
 quality: '电影级',
 });
 const [curPlanIdx, setCurPlanIdx] = useState(0);
 const [dur, setDur] = useState(15);
 const [loadMsgIdx, setLoadMsgIdx] = useState(0);

 const scrollRef = useRef<HTMLElement | null>(null);
 const timerRef = useRef<number | null>(null);

 const promptText = seed ? SEED_PLANS[curPlanIdx] : buildPrompt(summary.idea, curPlanIdx, dur, summary.style);

 /* 地址栏参数同步（与线上一致：#/storyboard-studio/<id>?stage=plan|video&plan=0|1） */
 useEffect(() => {
 if (view !== 'project') return;
 const stageStr = stage === 2 ? 'video' : 'plan';
 window.history.replaceState(null, '', `#/storyboard-studio/${projId}?stage=${stageStr}&plan=${curPlanIdx}`);
 }, [view, stage, curPlanIdx, projId]);

 /* 卸载时清理伪生成定时器 */
 useEffect(
 () => () => {
 if (timerRef.current !== null) window.clearInterval(timerRef.current);
 },
 [],
 );

 /* 从地址栏参数恢复视图（browserRouter 格式；异步执行以避免渲染期状态级联） */
 useEffect(() => {
 const t = window.setTimeout(() => {
 const m = window.location.pathname.match(/^\/storyboard-studio\/(\d+)\/?$/);
 if (!m) return;
 const q = new URLSearchParams(window.location.search);
 /* 与脚本一致：恢复时打开种子项目（id 固定为 2382） */
 setProjectItem({ kind: 'seed', name: SEED_NAME });
 setSeed(true);
 setProjId(2382);
 setPlanTitles(SEED_PLAN_TITLES);
 setSummary((s) => ({ ...s, idea: SEED_NAME }));
 setProjExists(true);
 setReady(true);
 setStage2Disabled(false);
 setView('project');
 setCurPlanIdx(q.get('plan') === '1' ? 1 : 0);
 setStage(q.get('stage') === 'video' ? 2 : 1);
 }, 0);
 return () => window.clearTimeout(t);
 }, []);

 /* 一键生成：新建项目 + 伪生成进度 */
 const handleGenerate = (payload: StudioGeneratePayload) => {
 const brief = payload.brief.trim();
 if (brief.length < 2) {
 vsToast('请输入简单的核心剧情（至少 2 个字）', false);
 return;
 }
 const name = brief.length > 8 ? brief.slice(0, 8) + '...' : brief;
 /* 侧边栏项目 */
 setProjectItem({ kind: 'generated', name });
 /* 摘要取值 */
 setSeed(false);
 setProjId(Math.floor(Math.random() * 9000000) + 1000);
 setPlanTitles(['方案 1', '方案 2']);
 setSummary({
 idea: name,
 model: payload.model,
 style: payload.style,
 ratio: payload.ratio,
 dur: `${dur}s`,
 quality: payload.quality,
 });
 /* openProject(false) */
 setProjExists(true);
 setReady(false);
 setView('project');
 setStage2Disabled(false);
 if (scrollRef.current) scrollRef.current.scrollTop = 0;
 setStage(1);
 /* 伪生成进度 */
 setLoadMsgIdx(0);
 if (timerRef.current !== null) window.clearInterval(timerRef.current);
 let i = 0;
 timerRef.current = window.setInterval(() => {
 i += 1;
 if (i < LOAD_MSGS.length) {
 setLoadMsgIdx(i);
 } else {
 if (timerRef.current !== null) window.clearInterval(timerRef.current);
 timerRef.current = null;
 setReady(true);
 setCurPlanIdx(0);
 vsToast('分镜提示词生成完成！', true);
 }
 }, 1100);
 };

 /* 点击侧边栏项目：打开项目详情 */
 const handleProjectClick = () => {
 setSummary((s) => ({ ...s, idea: projectItem.name }));
 if (projectItem.kind === 'seed') {
 setSeed(true);
 setProjId(2382);
 setPlanTitles(SEED_PLAN_TITLES);
 }
 /* openProject(true) */
 setProjExists(true);
 setReady(true);
 setView('project');
 setStage2Disabled(false);
 if (scrollRef.current) scrollRef.current.scrollTop = 0;
 setCurPlanIdx(0);
 setStage(1);
 };

 const handleStage1 = () => {
 setStage(1);
 };

 const handleStage2 = () => {
 if (stage2Disabled) return;
 if (view !== 'project') {
 vsToast('方案不存在', false);
 return;
 }
 setStage(2);
 };

 /* 新任务：回到表单 */
 const handleNewTask = () => {
 setView('new');
 window.history.replaceState(null, '', '#/storyboard-studio/new');
 setStage(1);
 setStage2Disabled(!projExists);
 if (scrollRef.current) scrollRef.current.scrollTop = 0;
 };

 return (
 <div className={`studio-shell${collapsed ? ' is-sidebar-collapsed' : ''}`} id="shell">
 <StudioSidebar
 projectName={projectItem.name}
 projectId={projectItem.kind === 'seed' ? 'projSeed' : 'projItem'}
 onCollapse={() => setCollapsed(true)}
 onNewTask={handleNewTask}
 onProjectClick={handleProjectClick}
 onOpenFeedback={() => setFeedbackOpen(true)}
 onOpenContact={() => setContactOpen(true)}
 />

 <main className="studio-main">
 <div className="studio-collapsed-hint" id="collapsedHint" hidden={!collapsed}>
 <div className="studio-collapsed-logo">
 <i className="fa-solid fa-clapperboard"></i>
 </div>
 <button className="studio-collapsed-toggle" id="expandBtn" title="展开侧边栏" onClick={() => setCollapsed(false)}>
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

 <div className="studio-step-bar">
 <div className="step-bar-inner">
 <button className={`step-node is-done${stage === 1 ? ' is-active' : ''}`} id="stage1" onClick={handleStage1}>
 <span className="step-num">1</span>
 <span className="step-label">分镜方案</span>
 <i className="fa-solid fa-check step-check"></i>
 </button>
 <div className={`step-connector${stage === 2 ? ' is-active' : ''}`} id="stepConn"></div>
 <button className={`step-node${stage === 2 ? ' is-active' : ''}`} id="stage2" disabled={stage2Disabled} onClick={handleStage2}>
 <span className="step-num">2</span>
 <span className="step-label">分镜成片</span>
 </button>
 </div>
 </div>

 <section className="studio-scroll custom-scrollbar create-scroll" ref={scrollRef}>
 {/* ========== 新建任务 ========== */}
 <div className="studio-create" id="viewNew" hidden={view !== 'new'}>
 <StudioCreateView dur={dur} onDurChange={setDur} onGenerate={handleGenerate} />
 </div>

 {/* ========== 项目详情 ========== */}
 <div className="studio-create" id="viewProject" hidden={view !== 'project'}>
 <StudioProjectView
 summary={summary}
 planTitles={planTitles}
 curPlanIdx={curPlanIdx}
 stage={stage}
 ready={ready}
 loadMsg={LOAD_MSGS[loadMsgIdx]}
 promptText={promptText}
 onSelectPlan={setCurPlanIdx}
 />
 </div>
 </section>
 </main>

 <FeedbackModal open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
 <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
 </div>
 );
}
