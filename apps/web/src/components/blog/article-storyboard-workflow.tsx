'use client';

import { useRouter } from 'next/navigation';

type ArticleProps = {
 hidden: boolean;
};

/** 文章：VidSpark 分镜成片工作流（art-storyboard-workflow） */
export function ArticleStoryboardWorkflow({ hidden }: ArticleProps) {
 const router = useRouter();
 return (
 <section id="art-storyboard-workflow" className={hidden ? 'article hidden' : 'article'}>
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
 工作流全景解析
 </span>
 <span className="text-slate-500 text-sm">2026年3月31日 · 6分钟阅读</span>
 </div>
 <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
 {' '}
 VidSpark 分镜成片工作流：
 <span className="text-brand-400">从一句创意到视频分镜创作，一条链路走完</span>
 </h1>
 </div>
 <div className="text-lg leading-relaxed space-y-6">
 <p className="text-xl text-slate-200 font-medium pb-2 border-l-4 border-brand-500 pl-4 bg-slate-800/30 rounded-r-lg p-4">
 {' '}
 🎬 过去很多 AI
 分镜工具只解决“写提示词”，真正到了出片阶段，用户还得在结果页、工作流页、版本页之间来回跳。{' '}
 </p>
 <p>
 {' '}
 VidSpark 这次重新设计的，不是一个新的“分镜生成器”，而是一条完整的短视频创作路径：{' '}
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
 <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
 <div className="text-brand-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">Stage 01</div>
 <h3 className="text-2xl font-bold text-white mb-3">分镜方案</h3>
 <p className="text-slate-400 text-base">输入剧情和配置，生成 1-2 套分镜方案，完成创意结构化。</p>
 </div>
 <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
 <div className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase mb-3">Stage 02</div>
 <h3 className="text-2xl font-bold text-white mb-3">分镜成片</h3>
 <p className="text-slate-400 text-base">选定方案后直接进入唯一工作流，继续生成镜头、素材与视频。</p>
 </div>
 </div>
 <p>
 {' '}
 这意味着，
 <strong className="text-white">从一句想法到后续出片，不再是三个孤立工具，而是一个连续项目对象。</strong>
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-lightbulb text-yellow-500"></i> 第一步：一句剧情输入，先把创意变成可执行方案
 </h3>
 <p> 在新的分镜新任务页里，用户只需要给出一个大致剧情或核心画面记忆点，例如： </p>
 <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-5">
 <p className="text-brand-300 italic">“一个戴着面罩的旅行者走过霓虹街头，最后站在天台俯瞰整座城市。”</p>
 </div>
 <p>
 {' '}
 然后通过面板快速补充创作参数，例如总时长、画幅比例、整体风格、镜头效果、光影氛围、运镜偏好、声音策略等。你可以精细指定，也可以把大多数细节交给系统自动推演。{' '}
 </p>
 <ul className="space-y-4 mb-8 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">适合专业用户：</strong>
 <p className="text-slate-400 text-base">可以明确指定镜头语言、节奏策略、对白和旁白等参数。</p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-solid fa-check"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">也适合非专业用户：</strong>
 <p className="text-slate-400 text-base">不知道怎么选时，直接用默认值，AI 会自动补全视听细节与叙事节奏。</p>
 </div>
 </li>
 </ul>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-layer-group text-purple-500"></i>{' '}
 第二步：不是只给一条提示词，而是生成完整方案结构
 </h3>
 <p>
 {' '}
 VidSpark 的输出不是“给你一段大 Prompt 就结束”，而是先生成一个分镜项目，里面可以包含 1 套或 2
 套方案。{' '}
 </p>
 <p>
 {' '}
 这两套方案不是简单改几个形容词，而是可能在节奏、镜头推进、情绪组织上采用不同打法。例如一套偏快节奏冲击，一套偏情绪递进叙事。{' '}
 </p>
 <div className="space-y-4 mb-8">
 <div className="pl-4 border-l-4 border-brand-500">
 <p className="text-brand-400 font-bold text-lg mb-1">方案一：快节奏高密度</p>
 <p className="text-slate-400 text-base">更适合抖音、Reels 这类强调前 3 秒抓力和信息密度的平台。</p>
 </div>
 <div className="pl-4 border-l-4 border-purple-500">
 <p className="text-purple-400 font-bold text-lg mb-1">方案二：慢节奏情绪推进</p>
 <p className="text-slate-400 text-base">更适合品牌短片、世界观展示、MV 感叙事等需要气氛铺垫的内容。</p>
 </div>
 </div>
 <p>
 <strong className="text-white">用户不用在“再来一版”和“另开一个项目”之间反复折腾。</strong>{' '}
 方案天然属于同一个项目，便于对比、选择和后续承接。{' '}
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-diagram-project text-cyan-500"></i>{' '}
 第三步：项目阶段页统一承接，不再先看结果再跳工作台
 </h3>
 <p> 这是这次工作流改造里最关键的一层变化。 </p>
 <p>
 {' '}
 以前很多产品的体验是：先生成分镜结果页，用户看完后再点“生成视频”，然后跳到另一个完全不同的工作台。视觉断裂、上下文丢失、历史也容易混乱。{' '}
 </p>
 <p> VidSpark 把它改成了一个清晰的两阶段页面： </p>
 <div className="grid grid-cols-1 gap-4 mb-8">
 <div className="flex items-start gap-4 bg-slate-800/30 p-5 rounded-2xl border border-slate-700">
 <div className="w-10 h-10 rounded-full bg-brand-500/20 text-brand-400 flex items-center justify-center font-bold shrink-0">
 1
 </div>
 <div>
 <p className="text-white font-bold mb-1">分镜方案阶段</p>
 <p className="text-slate-400 text-base">查看生成进度、阅读方案内容、切换 1-2 套方案、决定采用哪一套。</p>
 </div>
 </div>
 <div className="flex items-start gap-4 bg-slate-800/30 p-5 rounded-2xl border border-slate-700">
 <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold shrink-0">
 2
 </div>
 <div>
 <p className="text-white font-bold mb-1">分镜成片阶段</p>
 <p className="text-slate-400 text-base">基于所选方案进入出片概览和独立工作流，继续完成视频生成。</p>
 </div>
 </div>
 </div>
 <p>
 {' '}
 阶段条、项目状态、方案关系都在一个项目壳里完成表达。用户感知到的是“我正在推进一个创作项目”，而不是在几个零散工具里切页。{' '}
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-film text-emerald-500"></i> 第四步：每套方案只绑定一个工作流，出片关系更干净
 </h3>
 <p>
 {' '}
 这次链路还有一个非常重要的规则升级：
 <strong className="text-white">同一个项目里的每一套方案，只对应一个且仅一个视频工作流。</strong>
 </p>
 <p>
 {' '}
 这个设计解决了很多 AI
 创作工具常见的问题：同一套分镜反复创建多个版本，最后用户根本分不清哪个视频属于哪套方案。{' '}
 </p>
 <div className="overflow-x-auto mb-8">
 <table className="w-full text-sm text-left text-slate-400">
 <thead className="text-xs text-slate-300 uppercase bg-slate-800">
 <tr>
 <th className="px-4 py-3 rounded-l-lg">对象</th>
 <th className="px-4 py-3">新规则</th>
 <th className="px-4 py-3 rounded-r-lg">用户收益</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-slate-700">
 <td className="px-4 py-3 font-bold text-white">分镜项目</td>
 <td className="px-4 py-3">承载创意、参数、方案与阶段状态</td>
 <td className="px-4 py-3">项目视角统一，不会丢上下文</td>
 </tr>
 <tr className="border-b border-slate-700">
 <td className="px-4 py-3 font-bold text-brand-400">方案</td>
 <td className="px-4 py-3">可生成 1 套或 2 套</td>
 <td className="px-4 py-3">支持差异化对比与选型</td>
 </tr>
 <tr>
 <td className="px-4 py-3 font-bold text-emerald-400">工作流</td>
 <td className="px-4 py-3">每个方案唯一绑定一个工作流</td>
 <td className="px-4 py-3">历史关系清晰，避免版本混乱</td>
 </tr>
 </tbody>
 </table>
 </div>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-wand-magic-sparkles text-orange-500"></i>{' '}
 最终结果：从“写提示词”升级为“推进创作项目”
 </h3>
 <p> 对创作者来说，真正有价值的并不是“我得到了一段提示词”，而是： </p>
 <ul className="space-y-3 mb-8 pl-4">
 <li className="flex items-start gap-3">
 <span className="text-orange-400 mt-1">
 <i className="fa-solid fa-check-double"></i>
 </span>
 <span>我能快速把一个模糊创意整理成可执行的分镜方案</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-orange-400 mt-1">
 <i className="fa-solid fa-check-double"></i>
 </span>
 <span>我能在两套结构打法里做选择，而不是一次性赌对</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-orange-400 mt-1">
 <i className="fa-solid fa-check-double"></i>
 </span>
 <span>我能顺滑进入后续成片阶段，而不是在多个页面里断线</span>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-orange-400 mt-1">
 <i className="fa-solid fa-check-double"></i>
 </span>
 <span>我能让方案与视频结果始终保持一一对应，方便复盘和复用</span>
 </li>
 </ul>
 <p>
 <strong className="text-white">这就是 VidSpark 想做的事情：</strong>
 把“提示词工具”升级成真正可持续推进的 AI 视频分镜创作工作流。{' '}
 </p>
 <div className="mt-20 px-8 py-10 bg-gradient-to-br from-brand-900 via-slate-800 to-slate-800 rounded-3xl border border-brand-500/30 text-center relative overflow-hidden group">
 <div className="absolute inset-0 bg-brand-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-1/2 group-hover:translate-y-0"></div>
 <div className="relative z-10">
 <div className="w-20 h-20 bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-400 rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-inner">
 <i className="fa-solid fa-clapperboard text-4xl"></i>
 </div>
 <h4 className="text-3xl font-extrabold text-white mb-4">准备好把一句创意推进成完整分镜项目了吗？</h4>
 <p className="text-slate-400 mb-8 font-medium max-w-xl mx-auto text-lg leading-relaxed">
 {' '}
 直接进入 VidSpark 分镜新任务页，从创意简报开始，生成方案并继续进入分镜成片工作流。{' '}
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
