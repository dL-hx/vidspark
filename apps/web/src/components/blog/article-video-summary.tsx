'use client';

import { useRouter } from 'next/navigation';

type ArticleProps = {
 hidden: boolean;
};

/** 文章：VidSpark 音视频总结（art-video-summary） */
export function ArticleVideoSummary({ hidden }: ArticleProps) {
 const router = useRouter();
 return (
 <section id="art-video-summary" className={hidden ? 'article hidden' : 'article'}>
 <div className="min-h-screen bg-slate-900 flex flex-col">
 <div className="h-16 border-b border-slate-700/50 bg-slate-800/80 px-4 md:px-8 flex items-center justify-between shrink-0 relative z-20">
 <div className="flex items-center gap-3 text-slate-300">
 <i className="fa-solid fa-book-open text-brand-400"></i>
 <span className="text-sm font-bold tracking-wider uppercase opacity-80">VidSpark Blog</span>
 </div>
 <button
 className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-brand-500 hover:text-white flex items-center justify-center text-slate-300 transition-colors shadow-lg z-50 relative cursor-pointer"
 onClick={() => router.push('/blog')}
 >
 <i className="fa-solid fa-xmark text-lg"></i>
 </button>
 </div>
 <div
 className="flex-1 overflow-y-auto relative z-10"
 style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgb(59, 130, 246) transparent' }}
 >
 <div className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-20 text-slate-300">
 <div className="mb-12 text-center fade-in-up">
 <div className="flex items-center justify-center gap-3 mb-6">
 <span className="px-3 py-1 bg-brand-500/20 text-brand-400 text-sm font-medium rounded-full border border-brand-500/30">
 功能深度解析
 </span>
 <span className="text-slate-500 text-sm">2026年3月2日 · 6分钟阅读</span>
 </div>
 <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
 {' '}
 VidSpark 音视频总结：
 <span className="text-brand-400">不只是转文字，是知识的结构化重构</span>
 </h1>
 </div>
 <div className="text-lg leading-relaxed space-y-6">
 <p className="text-xl text-slate-200 font-medium pb-2 border-l-4 border-brand-500 pl-4 bg-slate-800/30 rounded-r-lg p-4">
 {' '}
 📊 每天有超过 7 亿小时的视频内容被观看。但问题是：看完不等于学会。{' '}
 </p>
 <p>
 {' '}
 从 YouTube 的英文课程到 B
 站的深度科普，从播客访谈到在线会议——视频已成为知识传递的主要载体。但传统的视频学习方式效率低下：{' '}
 </p>
 <ul className="space-y-2 mb-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-solid fa-circle-xmark"></i>
 </span>
 <span>1 小时的课程，做笔记需要 2-3 小时</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-solid fa-circle-xmark"></i>
 </span>
 <span>想回顾某个知识点，只能拖动进度条反复寻找</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-solid fa-circle-xmark"></i>
 </span>
 <span>多语言内容理解困难，专业术语容易遗漏</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-solid fa-circle-xmark"></i>
 </span>
 <span>看完后脑子里只剩碎片，无法形成体系</span>
 </li>
 </ul>
 <p>
 <strong className="text-white">
 VidSpark 的音视频总结功能，不是简单的"语音转文字"，而是一套基于 AI 的知识结构化系统
 </strong>
 ——让视频内容变成可检索、可复习、可分享的知识资产。{' '}
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-microphone-lines text-brand-500"></i> 第一步：精准转录，不只是"听见"
 </h3>
 <p> 传统转录工具只能做到"语音转文字"，VidSpark 的转录系统实现了三层优化： </p>
 <p className="text-cyan-400 font-bold text-lg mt-6 mb-2">1. 多模型自适应转录</p>
 <ul className="space-y-3 mb-6 pl-4">
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <span>
 <strong className="text-white">短视频（≤45分钟）：</strong>使用 Whisper Base 模型，平衡速度与精度
 </span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <span>
 <strong className="text-white">长视频（&gt;45分钟）：</strong>自动切换至 Tiny 模型 + 分片转录，避免内存溢出
 </span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <span>
 <strong className="text-white">智能 VAD 语音活动检测：</strong>过滤静音片段，提升转录效率
 </span>
 </li>
 </ul>
 <p className="text-cyan-400 font-bold text-lg mt-6 mb-2">2. AI 转录优化</p>
 <p>转录完成后，AI 会自动：</p>
 <ul className="space-y-3 mb-6 pl-4">
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 </span>
 <span>修正同音字、专有名词错误</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 </span>
 <span>按语义智能分段，添加标点</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 </span>
 <span>保留并合并时间戳，方便定位回看</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-wand-magic-sparkles"></i>
 </span>
 <span>保持口语化表达，不丢失语气信息</span>
 </li>
 </ul>
 <p className="text-cyan-400 font-bold text-lg mt-6 mb-2">3. 多语言原生支持</p>
 <p>
 支持中英日韩法等 <strong className="text-white">11 种语言</strong>自动识别，无需手动选择。
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-brain text-purple-500"></i> 第二步：智能总结，提取知识骨架
 </h3>
 <p> 不同于简单的"摘要"，VidSpark 的总结引擎会： </p>
 <ul className="space-y-4 mb-8 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
 <li className="flex items-start gap-3">
 <span className="text-purple-400 mt-1">
 <i className="fa-solid fa-bullseye"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">识别内容类型：</strong>{' '}
 <p className="text-slate-400 text-base">自动区分课程讲解、访谈对话、新闻播报等不同体裁</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-purple-400 mt-1">
 <i className="fa-solid fa-bullseye"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">提取核心观点：</strong>{' '}
 <p className="text-slate-400 text-base">不仅罗列要点，更梳理逻辑关系</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-purple-400 mt-1">
 <i className="fa-solid fa-bullseye"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">生成结构化摘要：</strong>{' '}
 <p className="text-slate-400 text-base">使用 Markdown 格式，层次清晰</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-purple-400 mt-1">
 <i className="fa-solid fa-bullseye"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">输出多层级总结：</strong>{' '}
 <p className="text-slate-400 text-base">从一句话概览到详细要点，满足不同场景需求</p>
 </div>
 </li>
 </ul>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-diagram-project text-green-500"></i> 第三步：思维导图，可视化知识体系
 </h3>
 <p>
 {' '}
 这是 VidSpark 区别于普通转录工具的<strong className="text-white">关键能力</strong>：{' '}
 </p>
 <p className="text-green-400 font-bold text-lg mt-6 mb-2">自动思维导图生成</p>
 <ul className="space-y-3 mb-6 pl-4">
 <li className="flex items-start gap-3">
 <span className="text-green-400 mt-1">
 <i className="fa-solid fa-sitemap"></i>
 </span>
 <span>基于内容自动构建知识图谱</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-400 mt-1">
 <i className="fa-solid fa-sitemap"></i>
 </span>
 <span>识别主题、子主题、关键概念之间的关系</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-400 mt-1">
 <i className="fa-solid fa-sitemap"></i>
 </span>
 <span>生成高清图片，支持放大查看细节</span>
 </li>
 </ul>
 <p className="text-green-400 font-bold text-lg mt-6 mb-2">导图优化技术</p>
 <ul className="space-y-3 mb-6 pl-4">
 <li className="flex items-start gap-3">
 <span className="text-green-400 mt-1">
 <i className="fa-solid fa-wand-magic"></i>
 </span>
 <span>精确边界计算，消除空白浪费</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-400 mt-1">
 <i className="fa-solid fa-wand-magic"></i>
 </span>
 <span>动态视口尺寸，适配内容大小</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-400 mt-1">
 <i className="fa-solid fa-wand-magic"></i>
 </span>
 <span>2 倍分辨率截图，文字清晰可读</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-green-400 mt-1">
 <i className="fa-solid fa-wand-magic"></i>
 </span>
 <span>支持导出 PNG/SVG 多种格式</span>
 </li>
 </ul>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-layer-group text-orange-500"></i> 六大应用场景
 </h3>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
 <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
 <div className="text-brand-400 font-bold mb-2">
 <i className="fa-solid fa-graduation-cap mr-2"></i>在线课程学习
 </div>
 <p className="text-slate-400 text-sm">转录+总结+导图，30分钟掌握核心，复习效率提升5倍</p>
 </div>
 <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
 <div className="text-purple-400 font-bold mb-2">
 <i className="fa-solid fa-podcast mr-2"></i>播客/访谈整理
 </div>
 <p className="text-slate-400 text-sm">自动转录，AI优化分段，省80%整理时间</p>
 </div>
 <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
 <div className="text-green-400 font-bold mb-2">
 <i className="fa-solid fa-users mr-2"></i>会议记录
 </div>
 <p className="text-slate-400 text-sm">录音上传，自动生成纪要和待办</p>
 </div>
 <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
 <div className="text-cyan-400 font-bold mb-2">
 <i className="fa-solid fa-language mr-2"></i>多语言内容
 </div>
 <p className="text-slate-400 text-sm">转录+翻译，母语阅读速度提升3倍</p>
 </div>
 <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
 <div className="text-pink-400 font-bold mb-2">
 <i className="fa-solid fa-pen-nib mr-2"></i>内容二次创作
 </div>
 <p className="text-slate-400 text-sm">结构化输出，直接用于脚本创作</p>
 </div>
 <div className="bg-slate-800/50 p-5 rounded-xl border border-slate-700">
 <div className="text-yellow-400 font-bold mb-2">
 <i className="fa-solid fa-database mr-2"></i>知识管理
 </div>
 <p className="text-slate-400 text-sm">文字化存储，支持搜索和标签管理</p>
 </div>
 </div>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-microchip text-red-500"></i> 技术亮点：为什么 VidSpark 更准确？
 </h3>
 <div className="space-y-5 mb-8">
 <div className="pl-4 border-l-4 border-red-500">
 <p className="text-red-400 font-bold text-lg mb-1">长视频分片处理技术</p>
 <p className="text-slate-400 text-base">
 超过 45 分钟的视频自动分片转录，每片完成后立即释放内存，避免 OOM，时间戳自动对齐
 </p>
 </div>
 <div className="pl-4 border-l-4 border-orange-500">
 <p className="text-orange-400 font-bold text-lg mb-1">上下文感知优化</p>
 <p className="text-slate-400 text-base">
 转录优化时保留前后文语境，专有名词自动纠错（如将"马四克"修正为"马斯克"）
 </p>
 </div>
 <div className="pl-4 border-l-4 border-yellow-500">
 <p className="text-yellow-400 font-bold text-lg mb-1">多模型策略</p>
 <p className="text-slate-400 text-base">转录任务使用轻量级模型保速度，总结任务使用强能力模型保质量</p>
 </div>
 </div>
 <div className="mt-20 px-8 py-10 bg-gradient-to-br from-brand-900 via-slate-800 to-slate-800 rounded-3xl border border-brand-500/30 text-center relative overflow-hidden group">
 <div className="absolute inset-0 bg-brand-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-1/2 group-hover:translate-y-0"></div>
 <div className="relative z-10">
 <div className="w-20 h-20 bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-400 rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-inner">
 <i className="fa-solid fa-rocket text-4xl"></i>
 </div>
 <h4 className="text-3xl font-extrabold text-white mb-4">准备好让每一分钟视频学习都有价值了吗？</h4>
 <p className="text-slate-400 mb-8 font-medium max-w-xl mx-auto text-lg leading-relaxed">
 {' '}
 新用户注册即赠送免费额度，立即体验 AI 音视频总结的强大能力！{' '}
 </p>
 <button
 className="inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-500 hover:to-blue-500 text-white font-bold px-12 py-5 rounded-full shadow-lg transition-all hover:scale-105 active:scale-95 text-lg"
 onClick={() => router.push('/dashboard')}
 >
 {' '}
 关闭窗口，去工作台体验 <i className="fa-solid fa-arrow-right-long ml-1"></i>
 </button>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
