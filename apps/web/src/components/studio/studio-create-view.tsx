'use client';

import { useEffect, useState } from 'react';

import { vsToast } from '@/lib/toast';

interface StudioModel {
 m: string;
 c: string;
 plus: boolean;
}

const MODELS: readonly StudioModel[] = [
 { m: 'deepseek-v4-flash', c: '0.2x credit', plus: false },
 { m: 'qwen3.5-flash', c: '0.2x credit', plus: true },
 { m: 'doubao-seed-2.0-flash', c: '0.2x credit', plus: true },
 { m: 'doubao-seed-2.0-lite', c: '0.5x credit', plus: true },
 { m: 'deepseek-v3.2-thinking', c: '0.5x credit', plus: true },
 { m: 'qwen3.6-plus', c: '1.2x credit', plus: true },
 { m: 'doubao-seed-2.0-pro', c: '1.8x credit', plus: true },
];

const COUNTS = ['1 套方案', '2 套方案'] as const;

const RATIOS: readonly { label: string; w: number; h: number }[] = [
 { label: '21:9', w: 28, h: 12 },
 { label: '16:9', w: 24, h: 14 },
 { label: '4:3', w: 20, h: 16 },
 { label: '1:1', w: 18, h: 18 },
 { label: '3:4', w: 16, h: 20 },
 { label: '9:16', w: 14, h: 24 },
];

const STYLES: readonly { emoji: string; name: string; note: string }[] = [
 { emoji: '🎬', name: '电影写实', note: '超强真实感' },
 { emoji: '🌸', name: '日系动画', note: '吉卜力/新海诚' },
 { emoji: '🧊', name: '3D 动画', note: '皮克斯风格' },
 { emoji: '🌃', name: '赛博朋克', note: '霓虹都市' },
 { emoji: '🏔️', name: '水墨国风', note: '泼墨山水' },
 { emoji: '📽️', name: '复古胶片', note: '怀旧色调' },
 { emoji: '🎞️', name: '黑白电影', note: '戏剧性光影' },
 { emoji: '🌀', name: '超现实', note: '达利/MV风格' },
 { emoji: '⚔️', name: '奇幻史诗', note: '魔幻瑰丽' },
 { emoji: '📹', name: '纪录片', note: '科普客观' },
 { emoji: '🎨', name: 'MV/视觉艺术', note: '音乐短片' },
 { emoji: '🏙️', name: '都市时尚', note: '品牌广告' },
];

const QUALITIES = ['标准画质', '高清', '电影级', '超高清'] as const;

const LENS = ['浅景深', '胶片颗粒', '变形宽银幕光斑', '微缩模型感'] as const;

const LIGHTS: readonly { name: string; note: string }[] = [
 { name: '✨ AI 自动', note: '智能匹配场景' },
 { name: '🌅 黄金时刻', note: '日出日落柔光' },
 { name: '🌙 月光银辉', note: '冷调夜景氛围' },
 { name: '💡 霓虹灯光', note: '赛博朋克色光' },
 { name: '🕯️ 烛光暖调', note: '亲密温暖场景' },
 { name: '🌄 逆光剪影', note: '剪影轮廓美学' },
 { name: '🌤️ 体积光/丁达尔', note: '光线穿透雾气' },
 { name: '🎨 伦勃朗光', note: '经典三角光位' },
 { name: '☁️ 阴天柔光', note: '均匀散射无阴影' },
 { name: '💫 顶光', note: '头顶直射戏剧感' },
 { name: '🔦 硬光', note: '锐利轮廓高对比' },
];

const MOTIONS: readonly { name: string; note: string }[] = [
 { name: 'AI 自动', note: '智能匹配运镜' },
 { name: '推镜头', note: '逼近主体增强压迫感' },
 { name: '拉镜头', note: '远离主体揭示全貌' },
 { name: '横摇', note: '水平扫视展现空间' },
 { name: '跟随镜头', note: '跟拍人物移动' },
 { name: '环绕镜头', note: '360°绕主体旋转' },
 { name: '升降镜头', note: '垂直升起或下降' },
 { name: '摇臂', note: '弧形摆动拍摄' },
 { name: '固定镜头', note: '静止构图稳定感' },
 { name: '手持晃动', note: '纪实感与紧张感' },
 { name: '一镜到底', note: '不剪辑连续拍摄' },
 { name: '正反打', note: '对话双方交替切换' },
 { name: '希区柯克变焦', note: '推拉变焦背景扭曲' },
 { name: '主观视角 POV', note: '角色第一人称视角' },
 { name: '聚焦推拉', note: '前后景焦点转换' },
];

const TRANSITIONS: readonly { name: string; note: string }[] = [
 { name: 'AI 自动', note: '智能匹配最佳转场' },
 { name: '硬切', note: '直接切换无过渡' },
 { name: '淡入淡出', note: '画面渐隐渐现' },
 { name: '溶解转场', note: '两画面叠化过渡' },
 { name: '无缝转场', note: '利用运动衔接场景' },
 { name: '匹配剪辑', note: '相似构图衔接' },
 { name: '遮罩转场', note: '物体遮挡切换场景' },
 { name: '光效转场', note: '光线闪耀过渡画面' },
 { name: '推拉穿越', note: '镜头穿过物体转场' },
 { name: '声音先行转场', note: 'J-Cut/L-Cut 声画分离' },
];

const PACINGS: readonly { name: string; note: string }[] = [
 { name: '📖 标准叙事', note: '远景开场→中近景发展→特写高潮→拉远收束' },
 { name: '⚡ 快节奏剪辑', note: '快切、短镜头、密集动作，适合预告片/广告' },
 { name: '🍃 文艺慢节奏', note: '长镜头、慢运镜、留白，适合情感/风景片' },
 { name: '📈 递进式', note: '镜头由静至动、由慢到快层层递进' },
 { name: '🔄 交叉叙事', note: '两条线交替剪辑' },
 { name: '💥 倒叙式', note: '高潮前置→闪回→回到现在' },
 { name: '🎭 蒙太奇', note: '经典蒙太奇剪辑，多场景并置' },
];

const VOICE_LANGS = ['由 AI 匹配', '中文', 'English', '日本語', '한국어'] as const;

const NARRATIONS = ['无旁白纯对白', '男声沉稳', '女声温柔', '第一人称独白'] as const;

const MUSICS = [
 '由 AI 自动匹配',
 '史诗管弦乐',
 '电子氛围',
 '钢琴轻柔',
 '民谣吉他',
 '中国传统古风',
 '爵士复古',
 '摇滚激烈',
 '自然环境音',
 '电影悬疑紧张',
 '静音 / 仅音效',
] as const;

const MOODS = [
 '✨ AI 自动',
 '🌑 孤独空旷',
 '😰 紧张悬疑',
 '🥰 温馨治愈',
 '🏔️ 史诗壮阔',
 '🪷 宁静祥和',
 '😄 喜剧幽默',
 '💕 浪漫唯美',
 '🖤 暗黑压抑',
 '🔥 热血激昂',
 '🎲 荒诞戏谑',
 '😱 恐怖惊悚',
 '🌈 超级活力',
] as const;

const COLORS: readonly { label: string; bg: string }[] = [
 { label: 'AI 自动', bg: 'linear-gradient(135deg,#f59e0b,#6366f1)' },
 { label: '暖色调', bg: '#f59e0b' },
 { label: '冷色调', bg: '#3b82f6' },
 { label: '青橙影调', bg: 'linear-gradient(90deg,#06b6d4,#f97316)' },
 { label: '低饱和', bg: '#94a3b8' },
 { label: '高对比', bg: 'linear-gradient(90deg,#000,#fff)' },
 { label: '霓虹彩色', bg: 'linear-gradient(90deg,#ec4899,#8b5cf6,#06b6d4)' },
 { label: '黑白', bg: '#475569' },
 { label: '绿色自然', bg: '#22c55e' },
 { label: '暗红色调', bg: '#991b1b' },
];

export interface StudioGeneratePayload {
 brief: string;
 model: string;
 style: string;
 ratio: string;
 quality: string;
}

interface StudioCreateViewProps {
 dur: number;
 onDurChange: (value: number) => void;
 onGenerate: (payload: StudioGeneratePayload) => void;
}

/** 新建任务视图（创意简报表单 + 全部配置项） */
export function StudioCreateView({ dur, onDurChange, onGenerate }: StudioCreateViewProps) {
 const [brief, setBrief] = useState('');
 const [countIdx, setCountIdx] = useState(1);
 const [ratioIdx, setRatioIdx] = useState(1);
 const [styleIdx, setStyleIdx] = useState(0);
 const [qualityIdx, setQualityIdx] = useState(2);
 const [lensSel, setLensSel] = useState<boolean[]>(() => LENS.map(() => false));
 const [lightIdx, setLightIdx] = useState(0);
 const [motionIdx, setMotionIdx] = useState(0);
 const [transIdx, setTransIdx] = useState(0);
 const [pacingIdx, setPacingIdx] = useState(0);
 const [voiceOn, setVoiceOn] = useState(false);
 const [langIdx, setLangIdx] = useState(1);
 const [narrIdx, setNarrIdx] = useState(0);
 const [musicIdx, setMusicIdx] = useState(0);
 const [moodIdx, setMoodIdx] = useState(0);
 const [colorIdx, setColorIdx] = useState(0);
 const [tipsOpen, setTipsOpen] = useState(false);
 const [modelIdx, setModelIdx] = useState(0);
 const [modelOpen, setModelOpen] = useState(false);

 const genDisabled = brief.trim().length < 2;

 useEffect(() => {
 if (!modelOpen) return;
 const close = () => setModelOpen(false);
 document.addEventListener('click', close);
 return () => document.removeEventListener('click', close);
 }, [modelOpen]);

 const handleGenerate = () => {
 if (brief.trim().length < 2) {
 vsToast('请输入简单的核心剧情（至少 2 个字）', false);
 return;
 }
 onGenerate({
 brief,
 model: MODELS[modelIdx].m,
 style: STYLES[styleIdx].name,
 ratio: RATIOS[ratioIdx].label,
 quality: QUALITIES[qualityIdx],
 });
 };

 return (
 <div className="create-stack">
 {/* 创意简报 */}
 <article className="create-panel">
 <div className="create-panel-head">
 <div className="create-panel-title-wrap">
 <div className="create-panel-icon is-amber">
 <i className="fa-solid fa-lightbulb"></i>
 </div>
 <div>
 <div className="create-panel-title-line">
 <h2 className="create-panel-title">创意简报</h2>
 <span className="create-panel-badge is-required">必填</span>
 </div>
 </div>
 </div>
 </div>
 <textarea
 id="briefTa"
 rows={4}
 maxLength={3000}
 className="create-textarea"
 placeholder="例如：一个未来城市的科幻短片。戴着面罩的旅行者走过霓虹街头，最后站在天台俯瞰。"
 value={brief}
 onChange={(e) => setBrief(e.target.value)}
 ></textarea>
 <div className="create-field-foot">
 <span>
 只需输入大致剧情或核心想法，自动补全专业分镜方案；若生成较长时长的分镜，建议填写更完整的剧本。剧本可先在内容创作模块的"视频脚本"中生成。
 </span>
 <strong id="briefCnt">{brief.length} / 3000</strong>
 </div>
 </article>

 {/* 配置 */}
 <article className="create-panel">
 <div className="create-config-group">
 {/* 基础配置 */}
 <section className="create-config-block is-blue">
 <div className="create-config-head">
 <h3>基础配置</h3>
 </div>
 <div className="create-field-stack">
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-microchip"></i>
 <span>AI 创作模型</span>
 </label>
 <div className={`create-select${modelOpen ? ' open' : ''}`} id="mdlWrap">
 <button
 className="create-select-box"
 id="mdlBox"
 onClick={(e) => {
 e.stopPropagation();
 setModelOpen((o) => !o);
 }}
 >
 <span id="mdlName">
 {MODELS[modelIdx].m} ({MODELS[modelIdx].c})
 </span>
 <i className="fa-solid fa-chevron-down chev"></i>
 </button>
 <div className="create-select-drop" id="mdlDrop" hidden={!modelOpen}>
 {MODELS.map((m, i) => (
 <button
 key={m.m}
 className={i === modelIdx ? 'on' : ''}
 data-m={m.m}
 data-c={m.c}
 onClick={(e) => {
 e.stopPropagation();
 setModelIdx(i);
 setModelOpen(false);
 }}
 >
 <span className="nm">
 {m.m}
 {m.plus ? <i className="plus-b">Plus</i> : null}
 </span>
 <em>{m.c}</em>
 </button>
 ))}
 </div>
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-layer-group"></i>
 <span>生成方案数量</span>
 </label>
 <div className="create-pill-group create-pill-group-count" data-s1>
 {COUNTS.map((c, i) => (
 <button
 key={c}
 className={`create-count-button create-pill-button${i === countIdx ? ' is-selected' : ''}`}
 onClick={() => setCountIdx(i)}
 >
 <i className="fa-solid fa-check"></i>
 <span>{c}</span>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-clock"></i>
 <span>视频总时长</span>
 <em>4–60 秒</em>
 </label>
 <div className="create-range-card">
 <div className="create-range-main">
 <div className="create-range-track-wrap">
 <input
 type="range"
 min={4}
 max={60}
 step={1}
 value={dur}
 className="create-range-input"
 id="durRange"
 onChange={(e) => onDurChange(Number(e.target.value))}
 />
 <div className="create-range-ticks">
 <span className="create-range-tick is-start" style={{ left: '0%' }}>
 4s
 </span>
 <span className="create-range-tick" style={{ left: '28.5714%' }}>
 20s
 </span>
 <span className="create-range-tick" style={{ left: '64.2857%' }}>
 40s
 </span>
 <span className="create-range-tick is-end" style={{ left: '100%' }}>
 60s
 </span>
 </div>
 </div>
 <div className="create-range-value" id="durVal">
 {dur}s
 </div>
 </div>
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-expand"></i>
 <span>画面比例</span>
 <span className="create-help-tooltip">
 <i className="fa-solid fa-circle-question"></i>
 <span className="create-help-tooltip-bubble">生成更符合横屏 / 竖屏 / 方屏语境的提示词和镜头设计</span>
 </span>
 </label>
 <div className="create-card-grid is-compact create-ratio-row" data-s1>
 {RATIOS.map((r, i) => (
 <button
 key={r.label}
 className={`create-choice-card is-horizontal${i === ratioIdx ? ' is-selected' : ''}`}
 onClick={() => setRatioIdx(i)}
 >
 <div
 className={`create-ratio-icon${i === ratioIdx ? ' is-selected' : ''}`}
 style={{ width: `${r.w}px`, height: `${r.h}px` }}
 ></div>
 <span>{r.label}</span>
 <i className="fa-solid fa-check"></i>
 </button>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 视觉风格 */}
 <section className="create-config-block is-violet">
 <div className="create-config-head">
 <h3>视觉风格</h3>
 </div>
 <div className="create-field-stack">
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 <span>整体风格</span>
 </label>
 <div className="create-card-grid" data-s1>
 {STYLES.map((s, i) => (
 <button
 key={s.name}
 className={`create-choice-card${i === styleIdx ? ' is-selected' : ''}`}
 onClick={() => setStyleIdx(i)}
 >
 <span className="create-choice-emoji">{s.emoji}</span>
 <strong>{s.name}</strong>
 <small>{s.note}</small>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-tv"></i>
 <span>画质要求</span>
 </label>
 <div className="create-pill-group" data-s1>
 {QUALITIES.map((q, i) => (
 <button
 key={q}
 className={`create-pill-button${i === qualityIdx ? ' is-selected' : ''}`}
 onClick={() => setQualityIdx(i)}
 >
 <i className="fa-solid fa-check"></i>
 <span>{q}</span>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-camera-retro"></i>
 <span>镜头效果</span>
 <em>可多选</em>
 <span className="create-help-tooltip">
 <i className="fa-solid fa-circle-question"></i>
 <span className="create-help-tooltip-bubble">
 模拟真实电影镜头的光学特性，为画面增添质感与氛围，不选则由 AI 自动决定
 </span>
 </span>
 </label>
 <div className="create-pill-group" data-m1>
 {LENS.map((l, i) => (
 <button
 key={l}
 className={`create-pill-button${lensSel[i] ? ' is-selected' : ''}`}
 onClick={() => setLensSel((s) => s.map((v, j) => (j === i ? !v : v)))}
 >
 <span>{l}</span>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-sun"></i>
 <span>光影氛围</span>
 </label>
 <div className="create-card-grid is-compact create-lighting-grid" data-s1>
 {LIGHTS.map((l, i) => (
 <button
 key={l.name}
 className={`create-choice-card is-left is-lighting${i === lightIdx ? ' is-selected' : ''}`}
 onClick={() => setLightIdx(i)}
 >
 <strong>{l.name}</strong>
 <small>{l.note}</small>
 </button>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 运镜与节奏 */}
 <section className="create-config-block is-emerald">
 <div className="create-config-head">
 <h3>运镜与节奏</h3>
 </div>
 <div className="create-field-stack">
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-arrows-up-down-left-right"></i>
 <span>运镜偏好</span>
 <em>可多选</em>
 </label>
 <div className="create-card-grid is-compact create-motion-grid" data-s1>
 {MOTIONS.map((m, i) => (
 <button
 key={m.name}
 className={`create-choice-card is-left is-motion${i === motionIdx ? ' is-selected' : ''}`}
 onClick={() => setMotionIdx(i)}
 >
 <strong>
 <i className="fa-solid fa-check"></i> {m.name}
 </strong>
 <small>{m.note}</small>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-shuffle"></i>
 <span>转场方式</span>
 </label>
 <div className="create-card-grid is-compact create-motion-grid" data-s1>
 {TRANSITIONS.map((t, i) => (
 <button
 key={t.name}
 className={`create-choice-card is-left is-motion${i === transIdx ? ' is-selected' : ''}`}
 onClick={() => setTransIdx(i)}
 >
 <strong>
 <i className="fa-solid fa-check"></i> {t.name}
 </strong>
 <small>{t.note}</small>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-wave-square"></i>
 <span>叙事节奏</span>
 </label>
 <div className="create-card-grid is-compact" data-s1>
 {PACINGS.map((p, i) => (
 <button
 key={p.name}
 className={`create-choice-card is-left${i === pacingIdx ? ' is-selected' : ''}`}
 onClick={() => setPacingIdx(i)}
 >
 <strong>{p.name}</strong>
 <small>{p.note}</small>
 </button>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 声音与台词 */}
 <section className="create-config-block is-rose">
 <div className="create-config-head">
 <h3>声音与台词</h3>
 </div>
 <div className="create-field-stack">
 <div className="create-field">
 <div className="create-switch-row">
 <div>
 <label className="create-field-label">
 <i className="fa-solid fa-closed-captioning"></i>
 <span>包含台词 / 对白</span>
 </label>
 <p className="create-field-note">开启后为每个分镜生成角色台词和画外旁白。</p>
 </div>
 <button
 className={`create-switch${voiceOn ? ' is-on' : ''}`}
 id="voiceTgl"
 onClick={() => setVoiceOn((v) => !v)}
 >
 <span></span>
 </button>
 </div>
 </div>
 <div className="create-sub-block" id="voiceBox" hidden={!voiceOn}>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-language"></i>
 <span>台词语言</span>
 </label>
 <div className="create-pill-group" data-s1>
 {VOICE_LANGS.map((l, i) => (
 <button
 key={l}
 className={`create-pill-button${i === langIdx ? ' is-selected' : ''}`}
 onClick={() => setLangIdx(i)}
 >
 <span>{l}</span>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-microphone-lines"></i>
 <span>旁白风格</span>
 </label>
 <div className="create-pill-group" data-s1>
 {NARRATIONS.map((n, i) => (
 <button
 key={n}
 className={`create-pill-button${i === narrIdx ? ' is-selected' : ''}`}
 onClick={() => setNarrIdx(i)}
 >
 <span>{n}</span>
 </button>
 ))}
 </div>
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-music"></i>
 <span>音效 / 配乐倾向</span>
 <em>可选</em>
 </label>
 <div className="create-pill-group" data-s1>
 {MUSICS.map((m, i) => (
 <button
 key={m}
 className={`create-pill-button${i === musicIdx ? ' is-selected' : ''}`}
 onClick={() => setMusicIdx(i)}
 >
 <span>{m}</span>
 </button>
 ))}
 </div>
 </div>
 </div>
 </section>

 {/* 高级设置 */}
 <section className="create-config-block is-slate">
 <div className="create-config-head">
 <h3>高级设置</h3>
 </div>
 <div className="create-field-stack">
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-theater-masks"></i>
 <span>情绪基调</span>
 </label>
 <div className="create-pill-group" data-s1>
 {MOODS.map((m, i) => (
 <button
 key={m}
 className={`create-pill-button${i === moodIdx ? ' is-selected' : ''}`}
 onClick={() => setMoodIdx(i)}
 >
 <span>{m}</span>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-droplet"></i>
 <span>色彩基调</span>
 </label>
 <div className="create-pill-group" data-s1>
 {COLORS.map((c, i) => (
 <button
 key={c.label}
 className={`create-pill-button create-color-pill${i === colorIdx ? ' is-selected' : ''}`}
 onClick={() => setColorIdx(i)}
 >
 <span className="create-color-dot" style={{ background: c.bg }}></span>
 <span>{c.label}</span>
 </button>
 ))}
 </div>
 </div>
 <div className="create-field">
 <label className="create-field-label">
 <i className="fa-solid fa-terminal"></i>
 <span>附加指令</span>
 </label>
 <textarea
 rows={4}
 maxLength={500}
 className="create-textarea is-compact"
 placeholder="例如：全片保持一镜到底、角色始终穿红色风衣、慢动作特写..."
 ></textarea>
 </div>
 </div>
 </section>

 {/* 使用提示 */}
 <section className="create-config-block is-slate create-tips-block create-tips-panel" id="tipsBox">
 <button className="create-section-toggle" id="tipsToggle" onClick={() => setTipsOpen((o) => !o)}>
 <span className="create-section-toggle-title">
 使用提示{' '}
 <span className="create-inline-info-icon">
 <i className="fa-solid fa-circle-info"></i>
 </span>
 </span>
 <i
 className={`fa-solid fa-chevron-down create-section-toggle-arrow${tipsOpen ? ' is-expanded' : ''}`}
 id="tipsArrow"
 ></i>
 </button>
 <ul className="create-tips-bullet-list" id="tipsList" hidden={!tipsOpen}>
 <li className="create-tips-bullet-item">
 <i className="fa-solid fa-caret-right"></i>
 <span>
 <strong>系统会自动生成 2 套差异化方案</strong>（如快节奏 vs 文艺慢节奏），供你对比选择
 </span>
 </li>
 <li className="create-tips-bullet-item">
 <i className="fa-solid fa-caret-right"></i>
 <span>
 <strong>智能时长推演：</strong> 基于设定的视频总时长，AI 会自动分配最佳的镜头接续数目和分镜头时长
 </span>
 </li>
 <li className="create-tips-bullet-item">
 <i className="fa-solid fa-caret-right"></i>
 <span>
 <strong>智能冲突处理：</strong> 若主风格与局部参数（如色调 / 光影）冲突，AI 会自动帮你融合或做主次取舍保画质
 </span>
 </li>
 <li className="create-tips-bullet-item">
 <i className="fa-solid fa-caret-right"></i>
 <span>
 <strong>平台合规规避：</strong> 自动预判并替换可能触发平台拦截的敏感违禁词及受限 IP 版权规则，智能转化为安全表述
 </span>
 </li>
 <li className="create-tips-bullet-item">
 <i className="fa-solid fa-caret-right"></i>
 <span>
 <strong>一键粘贴结构：</strong> 方案将整合为全局精密的 Markdown 提示词文本，带有时戳和剧情排期
 </span>
 </li>
 <li className="create-tips-bullet-item">
 <i className="fa-solid fa-caret-right"></i>
 <span>提示词框架已深度适配主流 AI 视频工具平台（如：即梦、可灵、Sora、Runway）</span>
 </li>
 </ul>
 </section>
 </div>
 </article>

 <div className="create-submit-wrap">
 <button className="create-submit-btn" id="genBtn" disabled={genDisabled} onClick={handleGenerate}>
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 <span>一键生成分镜提示词</span>
 </button>
 </div>
 </div>
 );
}
