import Link from 'next/link';

import { SiteFooter } from '@/components/layout/site-footer';
import { SiteHeader } from '@/components/layout/site-header';
import {
 BilibiliIcon,
 DouyinIcon,
 WechatIcon,
 XiaohongshuIcon,
 YoutubeIcon,
} from '@/components/icons/platform-icons';

export default function HomePage() {
 return (
 <div className="page-home antialiased min-h-screen flex flex-col bg-slate-900 text-slate-50 overflow-x-hidden">
 <div className="glow-bg top-0 left-1/4 animate-pulse-slow"></div>
 <div className="glow-bg-secondary top-1/3 right-1/4 animate-pulse-slow delay-1000"></div>
 <SiteHeader />
 <div className="grow">
 <main className="relative z-10 pt-32 pb-20">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
 <div className="hero-enter inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-brand-600/20 border border-purple-500/30 rounded-full px-4 py-1.5 mb-6">
 <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
 <span className="text-sm text-purple-300 tracking-wide">VidSpark 智能创作工作流</span>
 </div>
 <h1 className="hero-enter hero-enter-delay-1 text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl leading-tight">
 {' '}
 AI 驱动的 <span className="text-gradient">内容引擎</span>
 </h1>
 <p className="hero-enter hero-enter-delay-2 text-lg md:text-xl text-slate-400 max-w-2xl mb-14 leading-relaxed">
 {' '}
 从视频理解到内容创作，一站式完成多平台内容生产{' '}
 </p>
 <div className="hero-enter hero-enter-delay-3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto text-left relative z-20">
 {/* 分镜成片 */}
 <Link
 href="/storyboard-studio"
 className="order-3 glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative group border border-slate-700 hover:border-orange-500 bg-slate-800/80 backdrop-blur-xl cursor-pointer shadow-xl"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-orange-600/5 group-hover:to-orange-600/10 rounded-2xl transition-colors"></div>
 <div className="relative z-10">
 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
 <i className="fa-solid fa-clapperboard text-white text-3xl"></i>
 </div>
 <div className="flex items-center gap-3 mb-4">
 <h3 className="text-2xl font-bold text-white">分镜成片</h3>
 </div>
 <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
 {' '}
 从简单剧情直接生成电影级分镜语言，一键推进高质量分镜视频创作，适配多种主流视频模型{' '}
 </p>
 <div className="flex flex-col items-start gap-2.5 mb-8">
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-film text-orange-400"></i> 影视知识库，提供专业分镜设计
 </span>
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-layer-group text-orange-400"></i> 一站式生成高质量分镜视频
 </span>
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-clapperboard text-orange-400"></i> 支持多种主流视频模型
 </span>
 </div>
 <div className="font-bold text-orange-400 group-hover:text-orange-300 flex items-center gap-2 transition-colors">
 {' '}
 进入工作台{' '}
 <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-sm"></i>
 </div>
 </div>
 </Link>
 {/* 内容创作 */}
 <Link
 href="/dashboard"
 className="order-2 glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative group border border-slate-700 hover:border-emerald-500 bg-slate-800/80 backdrop-blur-xl cursor-pointer shadow-xl"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-emerald-600/5 group-hover:to-emerald-600/10 rounded-2xl transition-colors"></div>
 <div className="relative z-10">
 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
 <i className="fa-solid fa-pen-nib text-white text-3xl"></i>
 </div>
 <div className="flex items-center gap-3 mb-4">
 <h3 className="text-2xl font-bold text-white">内容创作</h3>
 </div>
 <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
 {' '}
 基于视频总结素材，一键生成小红书、公众号、抖音等多平台优质内容{' '}
 </p>
 <div className="flex flex-col items-start gap-2.5 mb-8">
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-regular fa-image text-emerald-400"></i> 图文创作
 </span>
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-microphone-lines text-emerald-400"></i> 口播稿
 </span>
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-user-astronaut text-emerald-400"></i> 视频分镜/章节
 </span>
 </div>
 <div className="font-bold text-emerald-400 group-hover:text-emerald-300 flex items-center gap-2 transition-colors">
 {' '}
 开始创作{' '}
 <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-sm"></i>
 </div>
 </div>
 </Link>
 {/* 音视频总结 */}
 <Link
 href="/dashboard"
 className="order-1 glass-panel rounded-2xl p-8 hover:-translate-y-2 transition-transform duration-300 relative group border border-slate-700 hover:border-purple-500 bg-slate-800/80 backdrop-blur-xl cursor-pointer shadow-xl"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/5 group-hover:to-purple-600/10 rounded-2xl transition-colors"></div>
 <div className="relative z-10">
 <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform">
 <i className="fa-solid fa-play text-white text-3xl"></i>
 </div>
 <div className="flex items-center gap-3 mb-4">
 <h3 className="text-2xl font-bold text-white">音视频总结</h3>
 </div>
 <p className="text-slate-400 text-sm leading-relaxed mb-8 min-h-[60px]">
 {' '}
 粘贴视频链接或上传文件，一键生成结构化总结、思维导图和精准转录{' '}
 </p>
 <div className="flex flex-col items-start gap-2.5 mb-8">
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-wand-magic-sparkles text-purple-400"></i> 智能总结
 </span>
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-diagram-project text-purple-400"></i> 思维导图
 </span>
 <span className="text-xs bg-slate-900/80 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 flex items-center gap-1.5">
 <i className="fa-solid fa-language text-purple-400"></i> 精准转录
 </span>
 </div>
 <div className="font-bold text-purple-400 group-hover:text-purple-300 flex items-center gap-2 transition-colors">
 {' '}
 开始总结{' '}
 <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform text-sm"></i>
 </div>
 </div>
 </Link>
 </div>
 <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 w-full max-w-6xl mx-auto mt-16 pt-10 border-t border-white/5 relative z-20 reveal">
 {[
 { num: '3', unit: ' 大', label: '核心创作引擎' },
 { num: '6', unit: '+', label: '平台策略适配' },
 { num: '10', unit: '+', label: 'AI 模型支持' },
 { num: '80', unit: '%', label: '内容生产效率提升' },
 ].map((s) => (
 <div key={s.label} className="text-center">
 <div className="text-3xl md:text-4xl font-bold text-white mb-1.5">
 {s.num}
 <span className="text-brand-400 text-2xl md:text-3xl">{s.unit}</span>
 </div>
 <div className="text-sm text-slate-500">{s.label}</div>
 </div>
 ))}
 </div>
 </div>
 </main>

 {/* ===== 核心功能一览 ===== */}
 <section id="features" className="pt-12 pb-24 relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16 reveal">
 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
 {' '}
 核心功能<span className="text-gradient">一览</span>
 </h2>
 </div>

 {/* 分镜成片工作流 */}
 <div
 id="storyboard-prompt"
 className="mb-8 relative rounded-2xl overflow-hidden shadow-2xl group border border-amber-500/30 bg-slate-800/60 backdrop-blur-sm cursor-pointer reveal"
 >
 <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 via-orange-900/20 to-amber-900/40 opacity-80 z-0"></div>
 <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500 rounded-full opacity-20 group-hover:opacity-35 transition-opacity duration-700 blur-[80px]"></div>
 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500 rounded-full opacity-20 group-hover:opacity-35 transition-opacity duration-700 blur-[80px]"></div>
 <div className="relative z-10 p-7 md:p-9 flex flex-col md:flex-row items-center gap-8">
 <div className="flex-1">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-600 border border-amber-400/30 rounded-full px-4 py-1.5 mb-5 shadow-lg">
 <i className="fa-solid fa-clapperboard text-amber-300 text-sm"></i>
 <span className="text-sm font-bold text-white tracking-widest uppercase">
 Storyboard Workflow
 </span>
 <span className="text-xs text-amber-200 ml-1">· 方案到成片</span>
 </div>
 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
 <span className="text-gradient-orange">VidSpark</span> 分镜成片工作流
 <br className="hidden md:block" />
 <span className="text-xl md:text-2xl text-slate-300 mt-2 block font-normal">
 简单剧情输入，先出方案，再出高质量分镜视频
 </span>
 </h3>
 <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl text-base md:text-lg">
 {' '}
 输入简单剧情后，工作流会先生成 1-2 套电影级分镜方案，再无缝推进高质量分镜视频创作。镜头语言、节奏与风格都可控，既保证成片质量，也保留充分选择空间。{' '}
 </p>
 <div className="flex flex-wrap gap-4 mb-6">
 {[
 '简单剧情直出 1-2 套电影级方案',
 '镜头、节奏、风格高可控',
 '无缝生成高质量分镜视频',
 ].map((t) => (
 <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
 <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
 <i className="fa-solid fa-check text-[10px]"></i>
 </div>{' '}
 {t}{' '}
 </div>
 ))}
 </div>
 <div className="inline-flex items-center text-amber-300 font-bold group-hover:translate-x-2 transition-transform">
 {' '}
 进入分镜成片 <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
 </div>
 </div>
 <div className="hidden md:block md:w-5/12 lg:w-1/3">
 <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl transform -rotate-1 group-hover:rotate-0 transition-transform duration-500">
 <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
 <div className="w-3 h-3 rounded-full bg-red-500"></div>
 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
 <div className="w-3 h-3 rounded-full bg-green-500"></div>
 <span className="text-xs text-slate-500 ml-2 font-mono">
 storyboard_pipeline.flow
 </span>
 </div>
 <div className="p-4 md:p-5 font-mono text-xs text-slate-300 relative h-32 flex flex-col justify-center gap-2 overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10 bottom-0 top-1/2 rounded-b-xl"></div>
 <span>
 <span className="text-amber-300">Stage 1:</span> brief -&gt; plans[2]
 </span>
 <span>
 <span className="text-cyan-400">Stage 2:</span> selected plan -&gt; workflow
 </span>
 <span>
 <span className="text-green-400">Output:</span> cinematic storyboard video
 </span>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* 音视频总结 */}
 <div className="mb-8 relative rounded-2xl overflow-hidden shadow-2xl group border border-blue-500/30 bg-slate-800/60 backdrop-blur-sm cursor-pointer reveal">
 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-cyan-900/20 to-blue-900/40 opacity-80 z-0"></div>
 <div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[80px]"></div>
 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-blue-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[80px]"></div>
 <div className="relative z-10 p-7 md:p-9 flex flex-col md:flex-row items-center gap-8">
 <div className="flex-1">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 border border-blue-400/30 rounded-full px-4 py-1.5 mb-5 shadow-lg">
 <i className="fa-solid fa-brain text-blue-400 text-sm"></i>
 <span className="text-sm font-bold text-white tracking-widest uppercase">
 AI Transcribe Engine
 </span>
 <span className="text-xs text-blue-300 ml-1">· 深度理解</span>
 </div>
 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
 <span className="text-gradient-blue">VidSpark</span> 音视频总结
 <br className="hidden md:block" />
 <span className="text-xl md:text-2xl text-slate-300 mt-2 block font-normal">
 不只是转文字，是知识的结构化重构
 </span>
 </h3>
 <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl text-base md:text-lg">
 {' '}
 不知道如何有效吸收长视频知识？VidSpark 的音视频总结为您提效 80%。
 <br /> 这不是简单的转录，它是基于 AI 的
 <span className="text-blue-400 font-semibold">知识结构化系统</span>
 。自动提取核心观点，生成结构化摘要与可是化思维导图，支持多语言无缝切换。{' '}
 </p>
 <div className="flex flex-wrap gap-4 mb-6">
 {['精准转录 ASR', '智能分段总结', '思维导图生成', '多语种互译'].map((t) => (
 <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
 <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
 <i className="fa-solid fa-check text-[10px]"></i>
 </div>{' '}
 {t}{' '}
 </div>
 ))}
 </div>
 <div className="inline-flex items-center text-blue-400 font-bold group-hover:translate-x-2 transition-transform">
 {' '}
 查看深度解析 <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
 </div>
 </div>
 <div className="hidden md:block md:w-5/12 lg:w-1/3">
 <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
 <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
 <div className="w-3 h-3 rounded-full bg-red-500"></div>
 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
 <div className="w-3 h-3 rounded-full bg-green-500"></div>
 <span className="text-xs text-slate-500 ml-2 font-mono">audio_analyzer.js</span>
 </div>
 <div className="p-4 md:p-5 font-mono text-xs leading-loose text-slate-300 relative h-32 flex flex-col justify-center overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10 bottom-0 top-1/2 rounded-b-xl"></div>
 <div className="flex items-end gap-1 h-12 mb-4 opacity-70">
 <div className="w-1.5 bg-blue-500 rounded-t-sm h-full animate-[pulse_1s_ease-in-out_infinite]"></div>
 <div className="w-1.5 bg-blue-400 rounded-t-sm h-3/4 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
 <div className="w-1.5 bg-cyan-400 rounded-t-sm h-1/2 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
 <div className="w-1.5 bg-blue-300 rounded-t-sm h-4/5 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
 <div className="w-1.5 bg-cyan-500 rounded-t-sm h-full animate-[pulse_1.1s_ease-in-out_infinite]"></div>
 <div className="w-1.5 bg-blue-500 rounded-t-sm h-2/3 animate-[pulse_0.9s_ease-in-out_infinite]"></div>
 </div>
 <span className="text-cyan-400">&gt; Transcribing... 98%</span>
 <span className="text-slate-400">&gt; Extracting Knowledge Graph...</span>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* 内容创作 */}
 <div className="relative rounded-2xl overflow-hidden shadow-2xl group border border-orange-500/30 bg-slate-800/60 backdrop-blur-sm cursor-pointer reveal">
 <div className="absolute inset-0 bg-gradient-to-r from-orange-900/40 via-red-900/20 to-orange-900/40 opacity-80 z-0"></div>
 <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[80px]"></div>
 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-red-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[80px]"></div>
 <div className="relative z-10 p-7 md:p-9 flex flex-col md:flex-row items-center gap-8">
 <div className="flex-1">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 border border-orange-400/30 rounded-full px-4 py-1.5 mb-5 shadow-lg">
 <i className="fa-solid fa-feather-pointed text-orange-400 text-sm"></i>
 <span className="text-sm font-bold text-white tracking-widest uppercase">
 Platform Strategy Engine
 </span>
 <span className="text-xs text-orange-300 ml-1">· 算法适配</span>
 </div>
 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
 <span className="text-gradient-orange">VidSpark</span> 内容创作
 <br className="hidden md:block" />
 <span className="text-xl md:text-2xl text-slate-300 mt-2 block font-normal">
 不是 AI 写作，是懂平台算法的创作系统
 </span>
 </h3>
 <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl text-base md:text-lg">
 {' '}
 为什么内容总是不火？问题可能不在内容本身，而在你不了解平台算法。
 <br /> VidSpark 深度研究各平台推荐机制与爆款规律，内置{' '}
 <span className="text-orange-400 font-semibold">抖音、小红书、B站、YouTube</span>{' '}
 等平台专业运营策略。基于素材一键为你&quot;写对&quot;爆款内容，而非仅仅&quot;写出来&quot;。{' '}
 </p>
 <div className="flex flex-wrap gap-4 mb-6">
 {['多平台策略适配', '专业脚本生成', 'SEO智能优化', '智能工作流引擎'].map((t) => (
 <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
 <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
 <i className="fa-solid fa-check text-[10px]"></i>
 </div>{' '}
 {t}{' '}
 </div>
 ))}
 </div>
 <div className="inline-flex items-center text-orange-400 font-bold group-hover:translate-x-2 transition-transform">
 {' '}
 查看深度解析 <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
 </div>
 </div>
 <div className="hidden md:block md:w-5/12 lg:w-1/3">
 <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
 <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
 <div className="w-3 h-3 rounded-full bg-red-500"></div>
 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
 <div className="w-3 h-3 rounded-full bg-green-500"></div>
 <span className="text-xs text-slate-500 ml-2 font-mono">platform_router.yml</span>
 </div>
 <div className="p-4 md:p-5 font-mono text-xs leading-loose text-slate-300 relative h-32 flex items-center justify-center overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10 bottom-0 top-1/2 rounded-b-xl"></div>
 <div className="flex gap-4 relative z-0">
 <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 text-2xl animate-pulse shadow-[0_0_15px_rgba(239,68,68,0.3)]">
 <i className="fa-brands fa-tiktok"></i>
 </div>
 <div
 className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center text-pink-400 text-2xl animate-pulse shadow-[0_0_15px_rgba(236,72,153,0.3)]"
 style={{ animationDelay: '200ms' }}
 >
 <i className="fa-brands fa-bilibili"></i>
 </div>
 <div
 className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-2xl animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.2)]"
 style={{ animationDelay: '400ms' }}
 >
 <i className="fa-brands fa-youtube"></i>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Seedance 2.0 视频分镜提示词 */}
 <div className="mt-8 relative rounded-2xl overflow-hidden shadow-2xl group border border-brand-500/30 bg-slate-800/60 backdrop-blur-sm cursor-pointer reveal">
 <div className="absolute inset-0 bg-gradient-to-r from-brand-900/40 via-purple-900/20 to-brand-900/40 opacity-80 z-0"></div>
 <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[80px]"></div>
 <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-[80px]"></div>
 <div className="relative z-10 p-7 md:p-9 flex flex-col md:flex-row items-center gap-8">
 <div className="flex-1">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-purple-600 border border-brand-400/30 rounded-full px-4 py-1.5 mb-5 shadow-lg">
 <i className="fa-solid fa-wand-magic-sparkles text-brand-400 text-sm"></i>
 <span className="text-sm font-bold text-white tracking-widest uppercase">
 Video Prompt Engine
 </span>
 <span className="text-xs text-brand-300 ml-1">· 全新上线</span>
 </div>
 <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
 <span className="text-gradient">Seedance 2.0</span> 视频分镜提示词
 <br className="hidden md:block" />
 <span className="text-xl md:text-2xl text-slate-300 mt-2 block font-normal">
 一句话生成导演级分镜，驾驭视效大模型
 </span>
 </h3>
 <p className="text-slate-400 mb-6 leading-relaxed max-w-2xl text-base md:text-lg">
 {' '}
 不知道如何写高质量视频生成提示词？VidSpark 独家内置影视级视听知识库。
 <br /> 只需输入简单场景，AI 即可生成{' '}
 <span className="text-brand-400 font-semibold">
 即梦 (Seedance)、可灵 (Kling)、Runway、Sora
 </span>{' '}
 等主流 AI 视频工具<span className="text-white">完美适配</span>
 的英文提示词，零门槛打造电影级光影与运镜。{' '}
 </p>
 <div className="flex flex-wrap gap-4 mb-6">
 {['影视级画质控制', '专业运镜语言', '生成多套备选方案'].map((t) => (
 <div key={t} className="flex items-center gap-2 text-sm text-slate-300">
 <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
 <i className="fa-solid fa-check text-[10px]"></i>
 </div>{' '}
 {t}{' '}
 </div>
 ))}
 </div>
 <div className="inline-flex items-center text-brand-400 font-bold group-hover:translate-x-2 transition-transform">
 {' '}
 查看实战指南 <i className="fa-solid fa-arrow-right ml-2 text-sm"></i>
 </div>
 </div>
 <div className="hidden md:block md:w-5/12 lg:w-1/3">
 <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
 <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
 <div className="w-3 h-3 rounded-full bg-red-500"></div>
 <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
 <div className="w-3 h-3 rounded-full bg-green-500"></div>
 <span className="text-xs text-slate-500 ml-2 font-mono">prompt_generator.sh</span>
 </div>
 <div className="p-4 md:p-5 font-mono text-xs leading-loose text-slate-300 relative h-32 overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10 bottom-0 top-1/2 rounded-b-xl"></div>
 <span className="text-blue-400">Input:</span> A cyberpunk city street.
 <br />
 <span className="text-brand-400">Wait AI Generating...</span>
 <br />
 <span className="text-green-400">Prompt:</span> Cinematic wide shot, cyberpunk
 metropolis alleyway, neon signs reflecting in puddles...{' '}
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>

 {/* ===== 分镜成片工作流示例 ===== */}
 <section className="pb-10 relative z-10">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="storyboard-demo-shell reveal">
 <div className="storyboard-demo-header">
 <div>
 <h2 className="storyboard-demo-title">分镜成片工作流示例</h2>
 <p className="storyboard-demo-copy">
 {' '}
 下面两个成片示例分别展示了 PixVerse-v6 与 Seedance2.0 参考图生视频的实际效果。点击文档可查看完整工作流说明。{' '}
 </p>
 </div>
 <Link
 href="/docs/storyboard-workflow-guide"
 target="_blank"
 rel="noopener noreferrer"
 className="storyboard-demo-link"
 >
 {' '}
 查看完整文档 <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
 </Link>
 </div>
 <div className="storyboard-demo-grid">
 <article className="storyboard-demo-card">
 <video
 controls
 controlsList="nodownload"
 disablePictureInPicture
 preload="metadata"
 className="storyboard-demo-video"
 >
 <source src="/guide-assets/小猫下班vlog.mov" type="video/quicktime" />
 <source src="/guide-assets/小猫下班vlog.mov" type="video/mp4" /> 当前浏览器不支持视频播放。{' '}
 </video>
 <div className="storyboard-demo-caption">PixVerse-v6 示例</div>
 </article>
 <article className="storyboard-demo-card">
 <video
 controls
 controlsList="nodownload"
 disablePictureInPicture
 preload="metadata"
 className="storyboard-demo-video"
 >
 <source src="/guide-assets/飞天成片.mov" type="video/quicktime" />
 <source src="/guide-assets/飞天成片.mov" type="video/mp4" /> 当前浏览器不支持视频播放。{' '}
 </video>
 <div className="storyboard-demo-caption">Seedance2.0 参考图生视频示例</div>
 </article>
 </div>
 </div>
 </div>
 </section>

 {/* ===== 内容创作工作流 ===== */}
 <section id="content-creation" className="py-24 bg-slate-800/30 relative overflow-hidden">
 <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <div className="text-center mb-16 reveal">
 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
 <span className="text-gradient">内容创作</span>工作流{' '}
 </h2>
 <p className="text-slate-400 max-w-2xl mx-auto">
 {' '}
 基于音视频素材，一键生成适配各平台的专业内容{' '}
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 reveal">
 <div className="content-type-card">
 <div className="content-type-icon">
 <i className="fa-solid fa-file-lines text-3xl text-brand-400"></i>
 </div>
 <h3 className="text-lg font-bold text-white mb-2">图文笔记</h3>
 <p className="text-slate-400 text-sm"> 结构化图文内容，适合小红书、公众号等文字类平台 </p>
 </div>
 <div className="content-type-card">
 <div className="content-type-icon">
 <i className="fa-solid fa-clapperboard text-3xl text-blue-400"></i>
 </div>
 <h3 className="text-lg font-bold text-white mb-2">短视频脚本</h3>
 <p className="text-slate-400 text-sm"> 30秒-3分钟短视频脚本，适合抖音、快手等短视频平台 </p>
 </div>
 <div className="content-type-card">
 <div className="content-type-icon">
 <i className="fa-solid fa-film text-3xl text-purple-400"></i>
 </div>
 <h3 className="text-lg font-bold text-white mb-2">长视频脚本</h3>
 <p className="text-slate-400 text-sm"> 5-30分钟深度内容脚本，适合B站、YouTube等长视频平台 </p>
 </div>
 <div className="content-type-card transform hover:-translate-y-2 transition-transform">
 <div className="content-type-icon bg-brand-500 rounded-full w-16 h-16 flex items-center justify-center mb-4">
 <i className="fa-solid fa-wand-magic-sparkles text-3xl text-green-400"></i>
 </div>
 <h3 className="text-lg font-bold text-white mb-2">AI视频分镜</h3>
 <p className="text-slate-400 text-sm"> 一句话生成导演级镜头语言，适配即梦、可灵等视效模型 </p>
 </div>
 </div>
 <div className="text-center mb-8">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600/10 to-emerald-600/10 rounded-full px-5 py-2">
 <i className="fa-solid fa-bolt text-brand-400"></i>
 <span className="text-sm text-slate-300">
 智能工作流创作 · 从素材到成品 ·{' '}
 <span className="text-brand-300 font-medium">一键搞定</span>
 </span>
 </div>
 </div>
 <div className="workflow-pipeline reveal">
 {[
 { icon: 'fa-video', cls: 'workflow-icon-brand', label: '上传素材', desc: '视频/音频/链接' },
 { icon: 'fa-brain', cls: 'workflow-icon-blue', label: 'AI理解', desc: '深度内容分析' },
 { icon: 'fa-sliders', cls: 'workflow-icon-purple', label: '策略注入', desc: '平台定制化策略' },
 { icon: 'fa-pen-nib', cls: 'workflow-icon-cyan', label: '内容生成', desc: '专业脚本撰写' },
 {
 icon: 'fa-wand-magic-sparkles',
 cls: 'workflow-icon-emerald',
 label: 'SEO优化',
 desc: '智能优化校验',
 },
 ].map((step, i, arr) => (
 <div key={step.label} className="contents">
 <div className="workflow-item">
 <div className={`workflow-icon-wrapper ${step.cls}`}>
 <i className={`fa-solid ${step.icon}`}></i>
 </div>
 <span className="workflow-label">{step.label}</span>
 <span className="workflow-desc">{step.desc}</span>
 </div>
 {i < arr.length - 1 && <div className="workflow-connector"></div>}
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== 高级平台策略 ===== */}
 <section id="platforms" className="py-12 relative">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-16 reveal">
 <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-full px-4 py-1.5 mb-6">
 <i className="fa-solid fa-crown text-amber-400 text-sm"></i>
 <span className="text-sm text-amber-300">核心差异化能力</span>
 </div>
 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
 {' '}
 高级<span className="text-gradient">平台策略</span>
 </h2>
 <p className="text-slate-400 max-w-3xl mx-auto">
 {' '}
 深度研究各平台推荐算法和爆款规律，内置专业运营经验，
 <br className="hidden md:block" />
 <span className="text-white font-medium">这是 GPT 大模型无法比拟的核心优势</span>
 </p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
 {/* 策略优势 */}
 <div className="platform-card group bg-gradient-to-br from-brand-900/50 to-blue-900/50 border-brand-500/30">
 <div className="platform-header">
 <div className="platform-logo bg-gradient-to-br from-brand-500 to-blue-500">
 <i className="fa-solid fa-rocket text-lg"></i>
 </div>
 <div>
 <h3 className="text-lg font-bold text-white">策略优势</h3>
 <span className="text-xs text-brand-400">VidSpark Core</span>
 </div>
 </div>
 <div className="platform-body">
 <p className="text-slate-300 text-sm mb-4"> 我们深度研究了每个平台的： </p>
 <ul className="space-y-2 text-sm text-slate-400">
 {[
 '推荐算法机制与权重分配',
 '黄金开头模式与时长要求',
 '内容结构模板与语调风格',
 'SEO策略与禁忌规避',
 ].map((t) => (
 <li key={t} className="flex items-start gap-2">
 <i className="fa-solid fa-check text-brand-400 mt-0.5"></i> {t}{' '}
 </li>
 ))}
 </ul>
 </div>
 </div>
 {[
 {
 title: '小红书',
 sub: 'Xiaohongshu',
 icon: <XiaohongshuIcon />,
 iconCls: 'platform-xiaohongshu',
 iconTitle: '小红书',
 desc: '种草型内容结构，SEO关键词优化，痛点共鸣型开头，提升搜索排名与收藏转化',
 tags: ['经验分享型结构', '亲切种草语调', 'Emoji优化'],
 },
 {
 title: '抖音',
 sub: 'Douyin',
 icon: <DouyinIcon />,
 iconCls: 'platform-douyin',
 iconTitle: '抖音',
 desc: '3秒黄金开头设计，强冲击型hook，5-7秒信息节奏，最大化完播率与互动',
 tags: ['短视频分镜', '口语化表达', '节奏把控'],
 },
 {
 title: 'B站',
 sub: 'Bilibili',
 icon: <BilibiliIcon />,
 iconCls: 'platform-bilibili',
 iconTitle: 'Bilibili',
 desc: '章节化叙事结构，高信息密度，专业接地气表达，优化播放时长与三连互动',
 tags: ['章节时间戳', '专业接地气', '三连引导'],
 },
 {
 title: '微信公众号',
 sub: 'WeChat Official',
 icon: <WechatIcon />,
 iconCls: 'platform-wechat',
 iconTitle: '未知来源',
 desc: '爆款标题公式，结构化深度长图文，权威专业语调，金句提炼与行动号召',
 tags: ['深度长图文', '引用块增信', '行动召唤'],
 },
 {
 title: 'YouTube',
 sub: 'YouTube',
 icon: <YoutubeIcon />,
 iconCls: 'platform-youtube',
 iconTitle: 'YouTube',
 desc: 'Watch Time + SEO双轮驱动，Chapters叙事结构，国际化表达风格',
 tags: ['时间戳章节', 'SEO标题优化', 'End Screen'],
 },
 ].map((p) => (
 <div key={p.title} className="platform-card group">
 <div className="platform-header">
 <div title={p.iconTitle} className={`platform-icon ${p.iconCls} md`}>
 {p.icon}
 </div>
 <div>
 <h3 className="text-lg font-bold text-white">{p.title}</h3>
 <span className="text-xs text-slate-500">{p.sub}</span>
 </div>
 </div>
 <div className="platform-body">
 <p className="text-slate-400 text-sm mb-3"> {p.desc} </p>
 <div className="platform-features">
 {p.tags.map((t) => (
 <span key={t} className="platform-feature-tag">
 {t}
 </span>
 ))}
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>

 {/* ===== CTA ===== */}
 <section className="py-24 relative overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/20 to-transparent"></div>
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 reveal">
 <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
 {' '}
 准备好开始<span className="text-gradient">高效创作</span>了吗？{' '}
 </h2>
 <p className="text-slate-400 max-w-2xl mx-auto mb-8">
 {' '}
 立即上传你的音视频素材，体验AI驱动的内容创作新方式{' '}
 </p>
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
 <Link
 href="/dashboard"
 className="bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all hover:-translate-y-1 flex items-center gap-2"
 >
 <i className="fa-solid fa-rocket"></i> 进入控制台{' '}
 </Link>
 <Link
 href="/#features"
 className="text-slate-400 hover:text-white font-medium px-6 py-4 flex items-center gap-2 transition-colors"
 >
 <i className="fa-solid fa-circle-info"></i> 了解更多功能{' '}
 </Link>
 </div>
 </div>
 </section>
 </div>
 <SiteFooter />
 </div>
 );
}
