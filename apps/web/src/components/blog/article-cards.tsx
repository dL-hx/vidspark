import Link from 'next/link';

/** 博客列表：4 篇文章卡片（点击跳 /blog/article?id=...） */
export function ArticleCards() {
 return (
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
 {/* 分镜成片工作流 */}
 <Link
 href="/blog/article?id=storyboard-workflow"
 className="block group cursor-pointer bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-amber-400/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
 >
 <div className="h-48 relative overflow-hidden bg-slate-900">
 <div
 className="absolute -top-10 -right-10 w-48 h-48 bg-amber-500 rounded-full opacity-25 group-hover:opacity-40 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute -bottom-10 -left-10 w-48 h-48 bg-cyan-500 rounded-full opacity-20 group-hover:opacity-35 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute inset-0 opacity-15 transition-transform duration-1000 group-hover:scale-105"
 style={{
 backgroundImage:
 'linear-gradient(rgba(255, 255, 255, 0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.18) 1px, transparent 1px)',
 backgroundSize: '24px 24px',
 }}
 ></div>
 <div className="absolute inset-x-6 bottom-7 flex items-center justify-between z-0 opacity-60 group-hover:opacity-80 transition-opacity duration-500">
 <div className="flex items-center gap-2">
 <div className="h-2 w-16 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.45)]"></div>
 <div className="h-px w-8 bg-slate-500"></div>
 <div className="h-2 w-10 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.35)]"></div>
 </div>
 <div className="h-10 w-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center text-slate-200">
 <i className="fa-solid fa-film"></i>
 </div>
 </div>
 <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10 w-full h-full">
 <div className="relative w-14 h-14 flex items-center justify-center mb-3">
 <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl opacity-20 rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl opacity-20 -rotate-45 group-hover:-rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <i className="fa-solid fa-clapperboard text-xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></i>
 </div>
 <h4 className="text-white font-black tracking-widest text-lg drop-shadow-md">
 Storyboard<span className="text-amber-300">Flow</span>
 </h4>
 <p className="text-[9px] text-slate-300 tracking-[0.2em] uppercase mt-0.5 font-bold bg-slate-800/40 px-2 py-0.5 rounded-full backdrop-blur-xs border border-slate-700/50">
 Prompt To Production
 </p>
 </div>
 <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent z-0 pointer-events-none"></div>
 </div>
 <div className="p-6">
 <div className="flex items-center gap-3 mb-4">
 <span className="px-2.5 py-1 bg-amber-500/10 text-amber-300 text-xs font-medium rounded-md border border-amber-400/20">
 工作流全景解析
 </span>
 <span className="text-slate-500 text-xs">2026-03-31</span>
 </div>
 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors line-clamp-2">
 VidSpark 分镜成片工作流：从一句创意到视频分镜创作，一条链路走完
 </h3>
 <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
 {' '}
 这不是一个单点提示词工具，而是一条完整的两阶段创作流程。输入剧情与配置，先生成 1-2
 套分镜方案，再无缝进入分镜成片工作流，让方案、项目与视频结果始终保持清晰对应。{' '}
 </p>
 <div className="mt-6 flex items-center text-amber-300 text-sm font-medium group-hover:translate-x-1 transition-transform">
 {' '}
 阅读全文 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
 </div>
 </div>
 </Link>
 {/* 音视频总结 */}
 <Link
 href="/blog/article?id=video-summary"
 className="block group cursor-pointer bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-green-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
 >
 <div className="h-48 relative overflow-hidden bg-slate-900">
 <div
 className="absolute -top-10 -right-10 w-48 h-48 bg-green-600 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute -bottom-10 -left-10 w-48 h-48 bg-blue-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-105"
 style={{
 backgroundImage:
 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
 backgroundSize: '20px 20px',
 }}
 ></div>
 <div className="absolute bottom-8 left-6 right-6 flex items-end justify-center gap-1 opacity-60 group-hover:opacity-80 transition-opacity">
 <div className="w-1 bg-green-500 rounded-full h-4 group-hover:h-8 transition-all duration-500"></div>
 <div className="w-1 bg-green-400 rounded-full h-8 group-hover:h-12 transition-all duration-500 delay-75"></div>
 <div className="w-1 bg-green-500 rounded-full h-6 group-hover:h-10 transition-all duration-500 delay-100"></div>
 <div className="w-1 bg-green-400 rounded-full h-10 group-hover:h-14 transition-all duration-500 delay-150"></div>
 <div className="w-1 bg-green-500 rounded-full h-5 group-hover:h-9 transition-all duration-500 delay-200"></div>
 <div className="w-1 bg-green-400 rounded-full h-12 group-hover:h-16 transition-all duration-500 delay-300"></div>
 <div className="w-1 bg-green-500 rounded-full h-6 group-hover:h-10 transition-all duration-500 delay-150"></div>
 <div className="w-1 bg-green-400 rounded-full h-8 group-hover:h-12 transition-all duration-500 delay-100"></div>
 <div className="w-1 bg-green-500 rounded-full h-4 group-hover:h-8 transition-all duration-500 delay-75"></div>
 </div>
 <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10 w-full h-full">
 <div className="relative w-14 h-14 flex items-center justify-center mb-3">
 <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-xl opacity-20 rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl opacity-20 -rotate-45 group-hover:-rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <i className="fa-solid fa-wave-square text-xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></i>
 </div>
 <h4 className="text-white font-black tracking-widest text-lg drop-shadow-md">
 AI<span className="text-green-400">Transcribe</span>
 </h4>
 <p className="text-[9px] text-slate-300 tracking-[0.2em] uppercase mt-0.5 font-bold bg-slate-800/40 px-2 py-0.5 rounded-full backdrop-blur-xs border border-slate-700/50">
 Smart Knowledge Engine
 </p>
 </div>
 <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent z-0 pointer-events-none"></div>
 </div>
 <div className="p-6">
 <div className="flex items-center gap-3 mb-4">
 <span className="px-2.5 py-1 bg-green-500/10 text-green-400 text-xs font-medium rounded-md border border-green-500/20">
 功能深度解析
 </span>
 <span className="text-slate-500 text-xs">2026-03-01</span>
 </div>
 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
 VidSpark 音视频总结：不只是转文字，是知识的结构化重构
 </h3>
 <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
 {' '}
 当信息过载成为常态，如何高效吸收视频知识？VidSpark
 的音视频总结功能，不是简单的"语音转文字"，而是一套基于 AI
 的知识结构化系统——让视频内容变成可检索、可复习、可分享的知识资产。{' '}
 </p>
 <div className="mt-6 flex items-center text-green-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
 {' '}
 阅读全文 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
 </div>
 </div>
 </Link>
 {/* 内容创作 */}
 <Link
 href="/blog/article?id=content-creation"
 className="block group cursor-pointer bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
 >
 <div className="h-48 relative overflow-hidden bg-slate-900">
 <div
 className="absolute -top-10 -right-10 w-48 h-48 bg-purple-600 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute -bottom-10 -left-10 w-48 h-48 bg-pink-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-105"
 style={{
 backgroundImage:
 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
 backgroundSize: '20px 20px',
 }}
 ></div>
 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-3 opacity-40 group-hover:opacity-70 transition-opacity">
 <div className="w-10 h-10 bg-red-500/30 rounded-lg flex items-center justify-center text-red-400 text-lg group-hover:scale-110 transition-transform">
 <i className="fa-brands fa-tiktok"></i>
 </div>
 <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-white text-lg group-hover:scale-110 transition-transform delay-75">
 <i className="fa-brands fa-youtube"></i>
 </div>
 <div className="w-10 h-10 bg-pink-500/30 rounded-lg flex items-center justify-center text-pink-400 text-lg group-hover:scale-110 transition-transform delay-150">
 <i className="fa-brands fa-bilibili"></i>
 </div>
 </div>
 <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10 w-full h-full">
 <div className="relative w-14 h-14 flex items-center justify-center mb-3">
 <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-20 rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl opacity-20 -rotate-45 group-hover:-rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <i className="fa-solid fa-pen-nib text-xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></i>
 </div>
 <h4 className="text-white font-black tracking-widest text-lg drop-shadow-md">
 AI<span className="text-purple-400">Writer</span>
 </h4>
 <p className="text-[9px] text-slate-300 tracking-[0.2em] uppercase mt-0.5 font-bold bg-slate-800/40 px-2 py-0.5 rounded-full backdrop-blur-xs border border-slate-700/50">
 Platform Strategy Engine
 </p>
 </div>
 <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent z-0 pointer-events-none"></div>
 </div>
 <div className="p-6">
 <div className="flex items-center gap-3 mb-4">
 <span className="px-2.5 py-1 bg-purple-500/10 text-purple-400 text-xs font-medium rounded-md border border-purple-500/20">
 功能深度解析
 </span>
 <span className="text-slate-500 text-xs">2026-03-01</span>
 </div>
 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors line-clamp-2">
 VidSpark 内容创作：不是 AI 写作，是懂平台算法的创作系统
 </h3>
 <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
 {' '}
 为什么你的内容总是不火？问题可能不在内容本身，而在你不了解平台算法。VidSpark
 的内容创作系统，基于视频素材，按平台规则重新创作——帮你&quot;写对&quot;而不是仅仅&quot;写出来&quot;。{' '}
 </p>
 <div className="mt-6 flex items-center text-purple-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
 {' '}
 阅读全文 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
 </div>
 </div>
 </Link>
 {/* Seedance2.0 视频分镜提示词 */}
 <Link
 href="/blog/article?id=storyboard"
 className="block group cursor-pointer bg-slate-800/50 rounded-2xl overflow-hidden border border-slate-700 hover:border-brand-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl"
 >
 <div className="h-48 relative overflow-hidden bg-slate-900">
 <div
 className="absolute -top-10 -right-10 w-48 h-48 bg-purple-600 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute -bottom-10 -left-10 w-48 h-48 bg-brand-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-700"
 style={{ filter: 'blur(50px)' }}
 ></div>
 <div
 className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-105"
 style={{
 backgroundImage:
 'linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)',
 backgroundSize: '20px 20px',
 }}
 ></div>
 <div className="absolute bottom-5 left-6 right-6 flex gap-2 opacity-50 group-hover:translate-y-[-4px] transition-transform duration-500 delay-100 z-0">
 <div className="h-1.5 flex-[2] bg-brand-500 rounded-full overflow-hidden flex shadow-[0_0_10px_rgba(59,130,246,0.5)]">
 <div className="w-1/3 h-full bg-white/60 relative">
 <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-900"></div>
 </div>
 <div className="w-1/4 h-full bg-white/30 relative">
 <div className="absolute right-0 top-0 bottom-0 w-px bg-slate-900"></div>
 </div>
 </div>
 <div className="h-1.5 w-6 bg-purple-400 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
 <div className="h-1.5 flex-1 bg-slate-600 rounded-full"></div>
 </div>
 <div className="absolute inset-0 flex flex-col items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10 w-full h-full">
 <div className="relative w-14 h-14 flex items-center justify-center mb-3">
 <div className="absolute inset-0 bg-gradient-to-br from-brand-400 to-brand-600 rounded-xl opacity-20 rotate-45 group-hover:rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl opacity-20 -rotate-45 group-hover:-rotate-90 group-hover:scale-110 transition-all duration-700 shadow-xl"></div>
 <i className="fa-solid fa-wand-magic-sparkles text-xl text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"></i>
 </div>
 <h4 className="text-white font-black tracking-widest text-lg drop-shadow-md">
 Seedance<span className="text-brand-400">2.0</span>
 </h4>
 <p className="text-[9px] text-slate-300 tracking-[0.2em] uppercase mt-0.5 font-bold bg-slate-800/40 px-2 py-0.5 rounded-full backdrop-blur-xs border border-slate-700/50">
 Cinematic AI Engine
 </p>
 </div>
 <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-800 to-transparent z-0 pointer-events-none"></div>
 </div>
 <div className="p-6">
 <div className="flex items-center gap-3 mb-4">
 <span className="px-2.5 py-1 bg-brand-500/10 text-brand-400 text-xs font-medium rounded-md border border-brand-500/20">
 功能深度解析
 </span>
 <span className="text-slate-500 text-xs">2026-03-01</span>
 </div>
 <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors line-clamp-2">
 Seedance2.0 视频分镜提示词工具：一句话生成导演级分镜，驾驭视效大模型
 </h3>
 <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
 {' '}
 当视频生成跨入“导演级”时代，如何写出契合的提示词？VidSpark
 独家内置影视级视听知识库，只需一句话场景，即刻智能裂变为饱含光影与运镜的绝佳剧本，更有一键输出两套方案助您零门槛产出大片。{' '}
 </p>
 <div className="mt-6 flex items-center text-brand-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
 {' '}
 阅读全文 <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
 </div>
 </div>
 </Link>
 </div>
 );
}
