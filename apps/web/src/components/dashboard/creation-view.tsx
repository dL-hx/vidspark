'use client';

import { useState } from 'react';

import { vsToast } from '@/lib/toast';

/** 侧栏已完成的视频总结标题（素材下拉中的唯一选项） */
const SUMMARY_TITLE =
 '如何从0-1做Agent项目？| 从小白到实战老手，纯干货带做，智能体实战项目10+，学会少走99%弯路！ - 8-1 Agent介绍与LLMS的区别';

type CreationType = 'article' | 'oral' | 'video';

interface TemplateItem {
 name: string;
 desc: string;
}

const TEMPLATES: Record<CreationType, TemplateItem[]> = {
 article: [
 { name: '知识总结型', desc: '适合经验分享、方法论输出' },
 { name: '爆款拆解型', desc: '适合案例分析、现象解读' },
 { name: '观点输出型', desc: '适合评论分析、见解分享' },
 { name: '清单方法论', desc: '适合干货分享、步骤拆解' },
 { name: '故事转述型', desc: '适合叙事类、情感类内容' },
 ],
 oral: [{ name: '口播演讲稿', desc: '适合口播录制或数字人视频' }],
 video: [{ name: '短视频分镜', desc: '适合3分钟以内的短视频' }],
};

const GOALS = [
 { icon: '📈', label: '涨粉' },
 { icon: '🔍', label: '搜索排名' },
 { icon: '💡', label: '输出观点' },
 { icon: '🎯', label: '引导转化' },
];

const TONES = [
 { icon: '😊', label: '口语' },
 { icon: '🎓', label: '专业' },
 { icon: '❤️', label: '情绪' },
 { icon: '📖', label: '故事' },
];

const DURATION_GROUPS = [
 { label: '短', items: ['30秒以内', '30-60秒', '1-3分钟'] },
 { label: '中', items: ['3-5分钟', '5-10分钟'] },
 { label: '长', items: ['10-15分钟', '15-20分钟', '20-30分钟'] },
];

interface ModelOption {
 name: string;
 credit: string;
 locked: boolean;
}

const MODEL_OPTIONS: ModelOption[] = [
 { name: 'qwen-flash', credit: '0.2x credit', locked: false },
 { name: 'deepseek-v4-flash', credit: '0.2x credit', locked: true },
 { name: 'qwen3.5-flash', credit: '0.2x credit', locked: true },
 { name: 'doubao-seed-2.0-flash', credit: '0.2x credit', locked: true },
 { name: 'qwen3.5-plus', credit: '0.5x credit', locked: true },
 { name: 'deepseek-v3.2-thinking', credit: '0.5x credit', locked: true },
 { name: 'qwen3.6-plus', credit: '1.2x credit', locked: true },
 { name: 'doubao-seed-2.0-pro', credit: '1.6x credit', locked: true },
 { name: 'deepseek-v4-pro', credit: '2x credit', locked: true },
];

/** 选中标记（勾选 svg） */
function CheckIndicator() {
 return (
 <div className="check-indicator">
 <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
 <polyline points="20 6 9 17 4 12"></polyline>
 </svg>
 </div>
 );
}

interface CreationViewProps {
 hidden: boolean;
 rootRef?: (el: HTMLDivElement | null) => void;
}

/** 内容创作视图：素材选择 + 配置面板 + 结果面板 */
export function CreationView({ hidden, rootRef }: CreationViewProps) {
 const [capTab, setCapTab] = useState(0);
 const [selectOpen, setSelectOpen] = useState(false);
 const [summaryValue, setSummaryValue] = useState('');
 const [materialSelected, setMaterialSelected] = useState(false);
 const [textValue, setTextValue] = useState('');
 const [urlValue, setUrlValue] = useState('');
 const [ctype, setCtype] = useState<CreationType>('article');
 const [platformActive, setPlatformActive] = useState(0);
 const [durActive, setDurActive] = useState<number | null>(null);
 const [tplActive, setTplActive] = useState(0);
 const [goalActive, setGoalActive] = useState(0);
 const [toneActive, setToneActive] = useState(0);
 const [modelOpen, setModelOpen] = useState(false);
 const [modelActive, setModelActive] = useState(0);

 const isArticle = ctype === 'article';
 const activeModel = MODEL_OPTIONS[modelActive] ?? { name: 'qwen-flash', credit: '0.2x credit', locked: false };

 const chooseCreationType = (key: CreationType) => {
 setCtype(key);
 setTplActive(0);
 };

 /** 扁平化时长索引（跨组单选） */
 let durIndex = 0;

 return (
 <div id="creationView" ref={rootRef} hidden={hidden} className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
 <div className="max-w-6xl mx-auto h-full flex flex-col">
 <div className="flex-1 flex flex-col animate-fade-in">
 <div className="mb-6">
 <div className="flex flex-col items-center justify-center gap-2">
 <div className="flex items-center gap-3">
 <div
 className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
 style={{ background: 'linear-gradient(135deg, rgb(99, 102, 241), rgb(139, 92, 246), rgb(167, 139, 250))' }}
 >
 <i className="fa-solid fa-pen-nib text-white text-2xl"></i>
 </div>
 <h1 className="text-2xl font-bold text-slate-900">内容创作</h1>
 </div>
 <p className="text-sm text-slate-500 mt-1">激发灵感，高效创作专业的自媒体内容。</p>
 </div>
 </div>
 <div className="flex-1 flex flex-col min-h-0">
 <div className="mb-4">
 <div className="material-source-selector">
 <div className="material-card">
 <div className="material-header">
 <span className="material-label">素材选择</span>
 <div className="capsule-tabs">
 <div className={`capsule-tab ${capTab === 0 ? 'active' : ''}`} onClick={() => setCapTab(0)}>
 <svg
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="tab-svg-icon"
 >
 <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
 <polyline points="14 2 14 8 20 8"></polyline>
 <line x1="16" y1="13" x2="8" y2="13"></line>
 <line x1="16" y1="17" x2="8" y2="17"></line>
 <polyline points="10 9 9 9 8 9"></polyline>
 </svg>
 <span className="tab-label">已有视频总结</span>
 </div>
 <div className={`capsule-tab ${capTab === 1 ? 'active' : ''}`} onClick={() => setCapTab(1)}>
 <svg
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="tab-svg-icon"
 >
 <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
 <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
 </svg>
 <span className="tab-label">文本/话题输入</span>
 </div>
 <div className={`capsule-tab ${capTab === 2 ? 'active' : ''}`} onClick={() => setCapTab(2)}>
 <svg
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="tab-svg-icon"
 >
 <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
 <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
 </svg>
 <span className="tab-label">视频链接输入</span>
 </div>
 </div>
 </div>
 {/* 已有视频总结 */}
 <div className="tab-content" hidden={capTab !== 0}>
 <div className="el-select w-full el-select--medium">
 <div className="el-input el-input--medium el-input--suffix" onClick={() => setSelectOpen((v) => !v)}>
 <input
 type="text"
 readOnly
 autoComplete="off"
 placeholder="请选择一个已完成的视频总结"
 value={summaryValue}
 className="el-input__inner"
 />
 <span className="el-input__suffix">
 <span className="el-input__suffix-inner">
 <i className="el-select__caret el-input__icon el-icon-arrow-up"></i>
 </span>
 </span>
 </div>
 <div className="el-select-dropdown el-popper" style={{ display: selectOpen ? undefined : 'none' }}>
 <div className="el-scrollbar">
 <div
 className="el-select-dropdown__wrap el-scrollbar__wrap"
 style={{ marginBottom: -15, marginRight: -15 }}
 >
 <ul className="el-scrollbar__view el-select-dropdown__list">
 <li
 className="el-select-dropdown__item"
 onClick={() => {
 setSummaryValue(SUMMARY_TITLE);
 setSelectOpen(false);
 setMaterialSelected(true);
 }}
 >
 <div className="task-option">
 <span className="truncate flex-1">{SUMMARY_TITLE}</span>
 <span className="task-date">2026/8/31</span>
 </div>
 </li>
 </ul>
 </div>
 <div className="el-scrollbar__bar is-horizontal">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
 </div>
 <div className="el-scrollbar__bar is-vertical">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
 </div>
 </div>
 </div>
 </div>

 <div className="material-preview" style={{ display: materialSelected ? undefined : 'none' }}>
 <div className="mp-section">
 <div className="mp-label">AI 摘要</div>
 <div className="mp-box mp-summary custom-scrollbar">
 <p>{SUMMARY_TITLE}</p>
 <p>💡 一句话核心摘要</p>
 <p>
 通过 <strong>Agent（智能体）</strong>
 技术，让大模型具备“手脚”与“记忆”，实现自主调用工具、访问实时数据并完成复杂任务。
 </p>
 <p>1. 大模型的核心缺陷与突破点</p>
 <p>
 <strong>知识滞后性：</strong>
 主流大模型依赖训练数据，无法获取实时信息（如最新天气、股价），导致回答过时或错误。
 </p>
 <p>
 <strong>缺乏外部交互能力：</strong>
 模型本身无法主动访问互联网或调用外部系统，仅能基于已有知识生成内容，无法处理动态需求。
 </p>
 <p>
 <strong>被动响应而非主动执行：</strong>
 传统模型只能“回答问题”，不能“解决问题”，缺少规划与行动链。
 </p>
 </div>
 </div>
 <div className="mp-section">
 <div className="mp-label">
 转录文本 <span className="mp-count">(5526字)</span>
 </div>
 <div className="mp-box mp-transcript custom-scrollbar">
 <p>
 [00:00-01:09]
 今天我们来学习达云博士，跟着这些N技巧。在学习之前，我们先讲一下例子——大家应该都用过这个题材的对方模型产品。对吧？不可以通过它进行一个新建，那么这个产品呢，我们发现有一个缺点，甚至不管是我和解和还是其他的OPI等等，所有的预模进大部分都有个问题。什么问题呢？我们去问一些实时的天气的时候，它需要什么呢？需要去用别人的网站或者到苏联网里面去找。比如说我们这个截图的人发现，它有缺点，对吧？比如我问的是今天的长沙天气，结果啊，他会回到2.3年的实际天气。你觉得这时候想要怎么？当然还有一个，我们可以用这个初期年，这个制补青年这个也好了一点。
 </p>
 <p>
 [01:09-01:58] 从这个点呢，也看了这个制补期年，给他要好一点。
 我们对他进行一个登录注册就可以正常使用了。这个也是要问一下今天长沙天气情况。
 好，我们换一个模型嘛，这也是我们国产的一个模型产品。 我们看一下他的一个回答。
 要不然间发现这个人还不一样了，这发现没
 </p>
 </div>
 </div>
 </div>
 </div>
 {/* 文本/话题输入 */}
 <div className="tab-content" hidden={capTab !== 1}>
 <div className="text-area el-textarea el-input--medium">
 <textarea
 autoComplete="off"
 rows={4}
 maxLength={2000}
 placeholder="请输入话题关键词或详细文本"
 className="el-textarea__inner"
 style={{ minHeight: 32.6 }}
 value={textValue}
 onChange={(e) => setTextValue(e.target.value)}
 ></textarea>
 <span className="el-input__count">{textValue.length}/2000</span>
 </div>
 <p className="input-hint">💡 输入简短关键词，AI会自动扩展话题；输入详细文本，AI会直接分析内容</p>
 <button disabled={textValue.trim() === ''} className="confirm-btn">
 确认素材
 </button>
 </div>
 {/* 视频链接输入 */}
 <div className="tab-content" hidden={capTab !== 2}>
 <div className="url-input-row">
 <div className="url-input el-input el-input--medium">
 <input
 type="text"
 autoComplete="off"
 placeholder="粘贴视频链接（支持抖音、B站、小红书、YouTube）"
 className="el-input__inner"
 value={urlValue}
 onChange={(e) => setUrlValue(e.target.value)}
 />
 </div>
 <button disabled={urlValue.trim() === ''} className="parse-btn">
 开始解析
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 <div className="flex-1 min-h-0 bg-white rounded-xl border border-gray-200 overflow-hidden">
 <div className="script-creator">
 <div className="creator-layout">
 <div className="config-panel">
 <div className="config-scroll">
 <div className="creation-type-selector">
 <div className="section-header">
 <span className="step-badge">1</span>
 <span className="section-title">选择创作类型</span>
 </div>
 <div className="type-grid">
 <div
 className={`type-card ${ctype === 'article' ? 'active' : ''}`}
 data-ctype="article"
 onClick={() => chooseCreationType('article')}
 >
 <span className="type-icon">📝</span>
 <div className="type-info">
 <div className="type-name">图文创作</div>
 <div className="type-desc">生成图文笔记/文章</div>
 </div>
 <CheckIndicator />
 </div>
 <div
 className={`type-card ${ctype === 'oral' ? 'active' : ''}`}
 data-ctype="oral"
 onClick={() => chooseCreationType('oral')}
 >
 <span className="type-icon">🎙️</span>
 <div className="type-info">
 <div className="type-name">口播文案</div>
 <div className="type-desc">生成口播演讲稿</div>
 </div>
 <CheckIndicator />
 </div>
 <div
 className={`type-card ${ctype === 'video' ? 'active' : ''}`}
 data-ctype="video"
 onClick={() => chooseCreationType('video')}
 >
 <span className="type-icon">🎬</span>
 <div className="type-info">
 <div className="type-name">视频脚本</div>
 <div className="type-desc">生成分镜/章节大纲</div>
 </div>
 <CheckIndicator />
 </div>
 </div>
 <div className="sub-selector" data-sub="platform" style={{ display: isArticle ? undefined : 'none' }}>
 <div className="sub-label">选择平台</div>
 <div className="platform-grid">
 <div
 className={`platform-card ${platformActive === 0 ? 'active' : ''}`}
 onClick={() => setPlatformActive(0)}
 >
 <div className={`platform-icon platform-xiaohongshu lg ${platformActive === 0 ? 'is-active' : ''}`}>
 <span className="icon-text">小红书</span>
 </div>
 <span className="platform-name">小红书</span>
 </div>
 <div
 className={`platform-card ${platformActive === 1 ? 'active' : ''}`}
 onClick={() => setPlatformActive(1)}
 >
 <div className={`platform-icon platform-wechat lg ${platformActive === 1 ? 'is-active' : ''}`}>
 <svg viewBox="0 0 24 24" fill="currentColor">
 <path d="M8.691 3.002C4.998 3.002 2 5.72 2 9.078c0 1.876.94 3.553 2.412 4.668l-.602 1.81 2.09-1.045c.672.19 1.393.303 2.14.323-.133-.49-.205-1.002-.205-1.53 0-3.24 2.94-5.87 6.566-5.87.24 0 .477.013.71.037C14.53 4.91 11.85 3.002 8.691 3.002zM6.355 6.59c.49 0 .887.397.887.887s-.397.888-.887.888-.888-.398-.888-.888.398-.887.888-.887zm4.673 0c.49 0 .887.397.887.887s-.397.888-.887.888-.888-.398-.888-.888.398-.887.888-.887zM15.4 8.607c-3.24 0-5.87 2.34-5.87 5.227 0 2.887 2.63 5.227 5.87 5.227.65 0 1.276-.098 1.857-.277l1.806.903-.52-1.563c1.397-.974 2.727-2.504 2.727-4.27 0-2.887-2.63-5.227-5.87-5.227zm-2.035 2.94c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75zm4.07 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75z"></path>
 </svg>
 </div>
 <span className="platform-name">微信公众号</span>
 </div>
 </div>
 </div>
 <div className="sub-selector" data-sub="duration" style={{ display: isArticle ? 'none' : undefined }}>
 <div className="sub-label">选择时长</div>
 <div className="duration-groups">
 {DURATION_GROUPS.map((group) => (
 <div className="duration-group" key={group.label}>
 <div className="group-label">{group.label}</div>
 <div className="group-items">
 {group.items.map((item) => {
 const idx = durIndex++;
 return (
 <div
 key={item}
 className={`duration-card ${durActive === idx ? 'active' : ''}`}
 onClick={() => setDurActive(idx)}
 >
 {item}
 </div>
 );
 })}
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 <div className="section-divider"></div>
 <div className="config-selector">
 <div className="config-section">
 <div className="section-header">
 <span className="step-badge">2</span>
 <span className="section-title">选择模板与风格</span>
 </div>
 <div className="config-row">
 <div className="config-group" data-cfg="format" style={{ display: isArticle ? undefined : 'none' }}>
 <div className="group-label">内容形式</div>
 <div className="content-type-selector">
 <div className="type-card active">
 <div className="type-icon">
 <svg viewBox="0 0 24 24" fill="currentColor">
 <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"></path>
 </svg>
 </div>
 <span className="type-label">图文笔记</span>
 </div>
 </div>
 </div>

 {(Object.keys(TEMPLATES) as CreationType[]).map((key) => (
 <div
 key={key}
 className="config-group template-group"
 data-tpl={key}
 style={{ display: ctype === key ? undefined : 'none' }}
 >
 <div className="group-label">创作模板</div>
 <div className="template-selector">
 {TEMPLATES[key].map((tpl, i) => (
 <div
 key={tpl.name}
 className={`template-card ${ctype === key && tplActive === i ? 'active' : ''}`}
 onClick={() => setTplActive(i)}
 >
 <div className="template-name">{tpl.name}</div>
 <div className="template-desc">{tpl.desc}</div>
 </div>
 ))}
 </div>
 </div>
 ))}
 </div>
 </div>
 <div className="config-section">
 <div className="section-header">
 <span className="step-badge">3</span>
 <span className="section-title">设定创作目标与风格</span>
 </div>
 <div className="config-row">
 <div className="config-group">
 <div className="group-label">创作目标</div>
 <div className="pill-selector">
 {GOALS.map((g, i) => (
 <div
 key={g.label}
 className={`pill-item ${goalActive === i ? 'active' : ''}`}
 onClick={() => setGoalActive(i)}
 >
 <span className="pill-icon">{g.icon}</span>
 <span>{g.label}</span>
 </div>
 ))}
 </div>
 </div>
 <div className="config-group">
 <div className="group-label">语调风格</div>
 <div className="pill-selector">
 {TONES.map((t, i) => (
 <div
 key={t.label}
 className={`pill-item tone-pill ${toneActive === i ? 'active' : ''}`}
 onClick={() => setToneActive(i)}
 >
 <span className="pill-icon">{t.icon}</span>
 <span>{t.label}</span>
 </div>
 ))}
 </div>
 </div>
 </div>
 <div className="config-group custom-emphasis">
 <div className="group-label">
 <span>自定义强调点</span>
 <span className="optional-tag">可选</span>
 </div>
 <div className="textarea-wrapper">
 <textarea placeholder="例如：重点强调第三个观点，语气要更加幽默一些..." rows={2}></textarea>
 <div className="char-count">0/200</div>
 </div>
 </div>
 <div className="config-group ai-model-group">
 <div className="group-label">
 <span>AI 模型</span>
 <span className="optional-tag">影响生成质量与速度</span>
 </div>
 <div className="model-selector-wrapper">
 <div className="model-selector-trigger" onClick={() => setModelOpen((v) => !v)}>
 <div className="model-selected-info">
 <span className="model-selected-name">{activeModel.name}</span>
 <span className="model-selected-credit">{activeModel.credit}</span>
 </div>
 <svg viewBox="0 0 24 24" fill="currentColor" className="model-arrow">
 <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"></path>
 </svg>
 </div>
 <div className="model-dropdown" style={{ display: modelOpen ? undefined : 'none' }}>
 {MODEL_OPTIONS.map((op, i) => (
 <div
 key={op.name}
 className={`model-option ${op.locked ? 'locked' : ''} ${modelActive === i ? 'active' : ''}`}
 onClick={() => {
 if (op.locked) return;
 setModelActive(i);
 setModelOpen(false);
 }}
 >
 <div className="model-option-left">
 <span className={`model-option-name ${modelActive === i ? 'is-active' : ''}`}>
 {' '}
 {op.name}{' '}
 </span>
 {op.locked && <span className="model-lock-badge">Plus</span>}
 </div>
 <span className={`model-option-credit ${modelActive === i ? 'is-active' : ''}`}>
 {' '}
 {op.credit}{' '}
 </span>
 </div>
 ))}
 </div>
 </div>
 <div className="model-hint">thinking 模型处理速度较慢，但质量更高</div>
 </div>
 </div>
 </div>
 </div>
 <div className="action-area">
 <button
 disabled={!materialSelected}
 onClick={() => {
 if (materialSelected) vsToast('创作任务已开始，完成后可在侧栏「创作」中查看');
 }}
 className="generate-btn"
 >
 <span className="btn-content">
 <svg viewBox="0 0 24 24" fill="currentColor">
 <path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z"></path>
 </svg>
 {materialSelected ? ' 开始生成脚本 ' : '请先选择素材'}
 </span>
 </button>
 </div>
 </div>
 <div className="result-panel">
 <div className="result-display">
 <div className="empty-state">
 <div className="empty-illustration">
 <svg viewBox="0 0 200 200" className="empty-svg">
 <defs>
 <linearGradient id="emptyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
 <stop offset="0%" style={{ stopColor: 'rgb(102, 126, 234)', stopOpacity: 0.2 }}></stop>
 <stop offset="100%" style={{ stopColor: 'rgb(118, 75, 162)', stopOpacity: 0.1 }}></stop>
 </linearGradient>
 </defs>
 <rect
 x="30"
 y="40"
 width="140"
 height="100"
 rx="8"
 fill="url(#emptyGrad)"
 stroke="#667eea"
 strokeWidth="2"
 strokeDasharray="8,4"
 ></rect>
 <path
 d="M70 80 L130 80 M70 100 L110 100 M70 120 L120 120"
 stroke="#667eea"
 strokeWidth="2"
 strokeLinecap="round"
 opacity="0.5"
 ></path>
 <circle cx="160" cy="140" r="25" fill="#667eea" opacity="0.15"></circle>
 <path d="M155 140 L165 140 M160 135 L160 145" stroke="#667eea" strokeWidth="3" strokeLinecap="round"></path>
 </svg>
 </div>
 <p className="empty-title">配置完成后，点击「开始生成脚本」</p>
 <p className="empty-desc">AI 将基于视频内容为你生成适合目标平台的脚本</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
