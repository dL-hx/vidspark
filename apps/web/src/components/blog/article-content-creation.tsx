'use client';

import { useRouter } from 'next/navigation';

type ArticleProps = {
 hidden: boolean;
};

/** 文章：VidSpark 内容创作（art-content-creation） */
export function ArticleContentCreation({ hidden }: ArticleProps) {
 const router = useRouter();
 return (
 <section id="art-content-creation" className={hidden ? 'article hidden' : 'article'}>
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
 <span className="text-slate-500 text-sm">2026年3月2日 · 7分钟阅读</span>
 </div>
 <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
 {' '}
 VidSpark 内容创作：
 <span className="text-brand-400">不是 AI 写作，是懂平台算法的创作系统</span>
 </h1>
 </div>
 <div className="text-lg leading-relaxed space-y-6">
 <p className="text-xl text-slate-200 font-medium pb-2 border-l-4 border-brand-500 pl-4 bg-slate-800/30 rounded-r-lg p-4">
 {' '}
 🔥 你花了 3 小时写的小红书笔记，小眼睛只有 200。你精心剪辑的抖音视频，完播率不到 10%。{' '}
 </p>
 <p>
 <strong className="text-white">问题可能不在内容本身，而在你不了解平台算法。</strong>
 </p>
 <p> 每个平台都有自己的"隐形规则"： </p>
 <ul className="space-y-2 mb-6 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-brands fa-tiktok"></i>
 </span>
 <span>
 <strong className="text-white">小红书</strong>靠搜索 SEO 和收藏率推荐
 </span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-brands fa-youtube"></i>
 </span>
 <span>
 <strong className="text-white">抖音</strong>靠 3 秒完播率和互动率上热门
 </span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-brands fa-bilibili"></i>
 </span>
 <span>
 <strong className="text-white">B 站</strong>靠信息密度和完播率进推荐流
 </span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-red-400 mt-1">
 <i className="fa-brands fa-weixin"></i>
 </span>
 <span>
 <strong className="text-white">公众号</strong>靠打开率和阅读深度传播
 </span>
 </li>
 </ul>
 <p>
 {' '}
 普通 AI 写作工具只能帮你"写出来"，
 <strong className="text-white">VidSpark 的内容创作系统帮你"写对"</strong>
 ——基于视频素材，按平台规则重新创作。{' '}
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-lightbulb text-yellow-500"></i> 核心优势：平台化再创作系统
 </h3>
 <p className="text-cyan-400 font-bold text-lg mt-6 mb-2">第一步：深度理解素材</p>
 <p>VidSpark 的内容创作建立在音视频总结能力之上：</p>
 <ul className="space-y-3 mb-6 pl-4">
 <li className="flex items-start gap-3">
 <span className="text-cyan-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <span>
 <strong className="text-white">已有视频总结：</strong>基于转录和摘要，提取核心观点
 </span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-cyan-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <span>
 <strong className="text-white">视频链接输入：</strong>自动提取内容，无需手动整理
 </span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-cyan-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <span>
 <strong className="text-white">文本/话题输入：</strong>直接输入想法，AI 扩展创作
 </span>
 </li>
 </ul>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-chess-knight text-purple-500"></i> 第二步：平台策略引擎，内置爆款规则
 </h3>
 <p className="text-purple-400 font-bold text-lg mb-4">这是 VidSpark 与通用 AI 写作工具的本质区别</p>
 <p className="text-slate-300 font-bold mb-3">六大平台策略库</p>
 <div className="overflow-x-auto mb-8">
 <table className="w-full text-sm text-left text-slate-400">
 <thead className="text-xs text-slate-300 uppercase bg-slate-800">
 <tr>
 <th className="px-4 py-3 rounded-l-lg">平台</th>
 <th className="px-4 py-3">核心机制</th>
 <th className="px-4 py-3 rounded-r-lg">AI 自动适配</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-slate-700">
 <td className="px-4 py-3 font-bold text-red-400">小红书</td>
 <td className="px-4 py-3">搜索 + 收藏率</td>
 <td className="px-4 py-3">痛点共鸣开头、清单化结构、SEO 关键词</td>
 </tr>
 <tr className="border-b border-slate-700">
 <td className="px-4 py-3 font-bold text-white">抖音</td>
 <td className="px-4 py-3">完播率 + 互动率</td>
 <td className="px-4 py-3">3 秒强钩子、倒金字塔结构、口语化表达</td>
 </tr>
 <tr className="border-b border-slate-700">
 <td className="px-4 py-3 font-bold text-pink-400">B 站</td>
 <td className="px-4 py-3">信息密度 + 完播率</td>
 <td className="px-4 py-3">章节化叙事、时间戳、专业但接地气</td>
 </tr>
 <tr className="border-b border-slate-700">
 <td className="px-4 py-3 font-bold text-green-400">公众号</td>
 <td className="px-4 py-3">打开率 + 阅读深度</td>
 <td className="px-4 py-3">标题优化、结构化长文、权威可信</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-bold text-blue-400">YouTube</td>
 <td className="px-4 py-3">Watch Time + SEO</td>
 <td className="px-4 py-3">Chapters 结构、英文 SEO、Description 模板</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="text-slate-300 font-bold mb-3">同一个素材，不同平台的创作差异</p>
 <p className="text-slate-400 mb-4">以「胖东来商业模式」视频为例：</p>
 <div className="space-y-4 mb-8">
 <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
 <p className="text-red-400 font-bold mb-2">
 <i className="fa-brands fa-tiktok mr-2"></i>小红书版
 </p>
 <p className="text-slate-300 text-sm">
 「听我一句劝，普通人如何学胖东来的经营思维」→ 清单化干货 + #商业洞察 标签 + 收藏引导
 </p>
 </div>
 <div className="bg-white/5 border border-white/20 p-4 rounded-xl">
 <p className="text-white font-bold mb-2">
 <i className="fa-brands fa-youtube mr-2"></i>抖音版
 </p>
 <p className="text-slate-300 text-sm">
 「99% 的人不知道，胖东来为什么从不开分店」→ 3 秒悬念 + 60 秒倒金字塔 + 互动引导
 </p>
 </div>
 <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-xl">
 <p className="text-pink-400 font-bold mb-2">
 <i className="fa-brands fa-bilibili mr-2"></i>B 站版
 </p>
 <p className="text-slate-300 text-sm">「深度拆解胖东来商业模式：区域超市的生存法则」→ 章节化 + 数据论证 + 时间戳</p>
 </div>
 </div>
 <p className="text-brand-400 font-bold text-center text-lg">
 <i className="fa-solid fa-quote-left mr-2"></i>不是换个格式，是真正按平台规则重新创作
 <i className="fa-solid fa-quote-right ml-2"></i>
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-layer-group text-green-500"></i> 第三步：5 步 AI Chain，质量远超单次 Prompt
 </h3>
 <p className="mb-6">
 普通 AI 写作是一条 Prompt 生成全部内容，质量不可控。VidSpark 采用{' '}
 <strong className="text-white">5 步流水线</strong>：
 </p>
 <div className="space-y-4 mb-8">
 <div className="flex items-start gap-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700">
 <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 font-bold shrink-0">
 1
 </div>
 <div>
 <p className="text-white font-bold">内容理解</p>
 <p className="text-slate-400 text-sm">提取核心主题、关键观点、情绪基调、信息密度</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700">
 <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 font-bold shrink-0">
 2
 </div>
 <div>
 <p className="text-white font-bold">内容重组</p>
 <p className="text-slate-400 text-sm">规划叙事顺序、筛选废信息、生成 Hook 建议</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700">
 <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 font-bold shrink-0">
 3
 </div>
 <div>
 <p className="text-white font-bold">策略注入</p>
 <p className="text-slate-400 text-sm">应用目标平台的推荐规则、语调、结构模板</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700">
 <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 font-bold shrink-0">
 4
 </div>
 <div>
 <p className="text-white font-bold">脚本生成</p>
 <p className="text-slate-400 text-sm">按模板输出完整脚本（图文/分镜/章节/口播）</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-slate-800/30 p-4 rounded-xl border border-slate-700">
 <div className="w-8 h-8 bg-brand-500/20 rounded-full flex items-center justify-center text-brand-400 font-bold shrink-0">
 5
 </div>
 <div>
 <p className="text-white font-bold">优化校验</p>
 <p className="text-slate-400 text-sm">检查跑题、留存分析、SEO 建议、生成评论预测</p>
 </div>
 </div>
 </div>
 <p className="text-slate-400 text-center">
 <i className="fa-solid fa-check-double text-green-400 mr-2"></i>每一步都有专门的 AI 模型负责，分工明确，质量更高{' '}
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-pen-to-square text-orange-500"></i> 三大创作类型 × 八种模板
 </h3>
 <div className="grid grid-cols-1 gap-6 mb-8">
 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">
 <i className="fa-solid fa-images"></i>
 </div>
 <p className="text-white font-bold text-lg">图文创作</p>
 </div>
 <p className="text-slate-400 text-sm mb-3">适合小红书笔记、公众号文章、知乎回答</p>
 <div className="flex flex-wrap gap-2">
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">知识总结型</span>
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">爆款拆解型</span>
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">观点输出型</span>
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">清单方法论</span>
 </div>
 </div>
 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">
 <i className="fa-solid fa-microphone"></i>
 </div>
 <p className="text-white font-bold text-lg">口播文案</p>
 </div>
 <p className="text-slate-400 text-sm mb-3">适合短视频口播、数字人视频</p>
 <div className="flex flex-wrap gap-2">
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">带 [pause] 停顿标记</span>
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">带 [emphasis] 重点标记</span>
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">自动计算预计时长</span>
 </div>
 </div>
 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
 <div className="flex items-center gap-3 mb-4">
 <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">
 <i className="fa-solid fa-film"></i>
 </div>
 <p className="text-white font-bold text-lg">视频脚本</p>
 </div>
 <p className="text-slate-400 text-sm mb-3">适合短视频拍摄、长视频制作</p>
 <div className="flex flex-wrap gap-2">
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">短视频分镜</span>
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">长视频章节</span>
 <span className="px-2 py-1 bg-slate-700 rounded-sm text-xs text-slate-300">精确到秒的画面+台词</span>
 </div>
 </div>
 </div>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-star text-yellow-500"></i> 真实案例对比
 </h3>
 <p className="text-slate-300 font-bold mb-3">案例：知识类视频转小红书</p>
 <p className="text-slate-400 text-sm mb-4">原始视频：《深度工作》读书分享（30 分钟）</p>
 <div className="space-y-4 mb-8">
 <div className="bg-slate-700/30 border border-slate-600 p-4 rounded-xl">
 <p className="text-slate-400 font-bold mb-2 text-sm">通用 AI 写作输出：</p>
 <p className="text-slate-500 text-sm italic">
 "今天分享一本书《深度工作》，作者是卡尔·纽波特。这本书主要讲了如何在碎片化时代保持专注..."
 </p>
 </div>
 <div className="bg-red-500/10 border border-red-500/30 p-4 rounded-xl">
 <p className="text-red-400 font-bold mb-2 text-sm">VidSpark 输出：</p>
 <p className="text-slate-300 text-sm">
 🔥 <strong>工作总被打断？3 个方法找回专注力（亲测有效）</strong>
 </p>
 <p className="text-slate-400 text-sm mt-2">
 你是不是也这样：
 <br />
 • 刚想专心工作，微信就响了
 <br />
 • 一天忙到晚，却感觉啥也没做
 <br />
 <br />
 最近读了《深度工作》，终于找到问题所在。分享 3 个我实践后超有效的方法：
 <br />
 <br />
 ❶ 时间块工作法...
 </p>
 </div>
 </div>
 <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 mb-8">
 <p className="text-white font-bold mb-3">
 <i className="fa-solid fa-check-double text-green-400 mr-2"></i>VidSpark 的差异点：
 </p>
 <ul className="space-y-2 text-slate-400 text-sm">
 <li className="flex items-start gap-2">
 <span className="text-green-400">✓</span>痛点共鸣开头（小红书用户更爱看）
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-400">✓</span>清单化结构（提升收藏率）
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-400">✓</span>表情符号 + 数字标签（符合平台风格）
 </li>
 <li className="flex items-start gap-2">
 <span className="text-green-400">✓</span>个人化表达（"亲测有效"增加可信度）
 </li>
 </ul>
 </div>
 <div className="mt-20 px-8 py-10 bg-gradient-to-br from-brand-900 via-slate-800 to-slate-800 rounded-3xl border border-brand-500/30 text-center relative overflow-hidden group">
 <div className="absolute inset-0 bg-brand-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-1/2 group-hover:translate-y-0"></div>
 <div className="relative z-10">
 <div className="w-20 h-20 bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-400 rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-inner">
 <i className="fa-solid fa-rocket text-4xl"></i>
 </div>
 <h4 className="text-3xl font-extrabold text-white mb-4">
 准备好让你的内容不仅"写出来"，更能"火起来"了吗？
 </h4>
 <p className="text-slate-400 mb-8 font-medium max-w-xl mx-auto text-lg leading-relaxed">
 {' '}
 新用户注册即赠送免费额度，立即体验懂平台算法的内容创作系统！{' '}
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
