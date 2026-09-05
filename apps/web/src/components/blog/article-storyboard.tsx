'use client';

import { useRouter } from 'next/navigation';

type ArticleProps = {
 hidden: boolean;
};

/** 文章：Seedance2.0 视频分镜提示词（art-storyboard） */
export function ArticleStoryboardPrompt({ hidden }: ArticleProps) {
 const router = useRouter();
 return (
 <section id="art-storyboard" className={hidden ? 'article hidden' : 'article'}>
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
 核心功能深度解析
 </span>
 <span className="text-slate-500 text-sm">2026年3月1日 · 5分钟阅读</span>
 </div>
 <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight tracking-tight">
 {' '}
 Seedance2.0 视频分镜提示词：
 <span className="text-brand-400">一句话生成导演级分镜，驾驭视效大模型</span>
 </h1>
 </div>
 <div className="text-lg leading-relaxed space-y-6">
 <p className="text-xl text-slate-200 font-medium pb-2 border-l-4 border-brand-500 pl-4 bg-slate-800/30 rounded-r-lg p-4">
 {' '}
 💡 还在为写不出好用的提示词而发愁？其实，当前的视频生成技术效果已经足够惊艳，你只需要一个强大的“大脑”去驱动它们。{' '}
 </p>
 <p>
 {' '}
 不可否认，如今的 AI 视频生成大厂们已经交出了令人震撼的答卷。无论是刚刚宣布将 AI
 视频生成带入“导演级”时代的<strong>字节跳动 Seedance 2.0（即梦）</strong>，还是正在迅速迭代的{' '}
 <strong>PixVerse V5.6</strong>、震撼全球的 <strong>Sora</strong> 乃至国内的 <strong>可灵 (Kling)</strong>
 ，它们在物理规律遵循和画面张力上都取得了突破性的进展。{' '}
 </p>
 <p>
 {' '}
 大模型本身已经做好了准备，但内容创作者们却常常卡在“如何写出符合大模型胃口的专业分镜提示词”上。一段充满“机器干瘪感”的空洞描述，自然只能生成平庸的画面。{' '}
 </p>
 <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-book-journal-whills text-brand-500"></i> 1. 沉淀海量手册，建立工业级视听知识库
 </h3>
 <p>
 {' '}
 你可能看过官方发布的几万字《即梦 Seedance 2.0
 使用手册》，或是厚厚的“如何写好视频提示词”长文。现实是，这些手册太长了，创作者根本没有时间每次都去查阅“景别怎么写”、“运镜怎么调”。{' '}
 </p>
 <p>
 {' '}
 为了解决这个痛点，VidSpark 研发团队在底层深度融合了
 <strong>多个头部视频平台的官方使用手册与最佳实践</strong>
 ，将其固化并维护为一个极其专业、丰富的内部视听知识库。{' '}
 </p>
 <ul className="space-y-4 mb-8 bg-slate-800/30 p-6 rounded-2xl border border-slate-700/50">
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-regular fa-square-check"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">直出导演级大片描述：</strong>{' '}
 <p className="text-slate-400 text-base">
 系统深度理解了 Seedance 2.0
 等最新模型的高阶语法要求，自动为你铺陈精准的光影、机位和细节特征，甚至无需你了解任何影视专业术语。
 </p>
 </div>
 </li>
 <li className="flex items-start gap-3">
 <span className="text-brand-400 mt-1">
 <i className="fa-regular fa-square-check"></i>
 </span>
 <div>
 <strong className="text-white block mb-1">持续更新的专属智脑：</strong>{' '}
 <p className="text-slate-400 text-base">
 每次最新的平台能力升级和运镜技巧公开，都会被我们的技术团队迅速沉淀进知识网络中，时刻保持对模型的降维打击能力。
 </p>
 </div>
 </li>
 </ul>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-wand-magic-sparkles text-red-500"></i> 2. 一句话场景，裂变成电影级分镜剧本
 </h3>
 <p>
 {' '}
 现在，创作门槛被彻底砸碎。你不需要成为拥有十年经验的编导，
 **用户只需输入简单的一句话核心场景，我们的工具就可以扩展，自动生成极其专业的视频分镜提示词。**{' '}
 </p>
 <p>
 {' '}
 比如你输入：<em className="text-brand-300">“一个赛博朋克城市的女孩走在雨中。”</em>
 </p>
 <p>
 {' '}
 VidSpark
 的大模型会瞬间根据内部工业级知识库扩张它：从环境氛围的“霓虹灯倒影、淅淅沥沥的大雨”、到摄像机运镜的“跟拍、特写面部水珠”、再到光影调色的“冷暖色调对比碰撞”，直接一步到位输出给视频生成器！{' '}
 </p>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-sliders text-cyan-500"></i> 3. 如果想不到细节？把专业参数交给我们
 </h3>
 <p>
 {' '}
 绝大多数普通用户一时间是很难想到各种丰富的视频画面的。别担心，我们的工作台为你提供了**极其丰富的参数选择面板**。{' '}
 </p>
 <div className="space-y-5 my-8 pl-4 border-l-4 border-cyan-500">
 <p>
 <strong className="text-cyan-400 block mb-1 text-lg">💡 全息掌控你的画面维度：</strong>
 <br />
 <span className="text-slate-400 text-base">
 你可以轻松勾选指定画面的
 <span className="text-white font-medium">情绪基调、色彩定调、叙事节奏</span>；还可以细化
 <span className="text-white font-medium">
 特定的镜头景别流向、配乐音频侧写、甚至开启角色对白与旁白台词生成
 </span>
 。你想要多少控制权，就给你多少控制权。
 </span>
 </p>
 <p>
 <strong className="text-teal-400 block mb-1 text-lg">🎯 懒人福音：完美适配默认模式：</strong>
 <br />
 <span className="text-slate-400 text-base">
 如果你什么都不想选，直接使用默认参数，VidSpark 背后连接的地表最强逻辑大模型也会根据你的那“一句话想法”，
 **自动推演扩展出逻辑严密、视听饱满的优秀视频分镜提示词**。
 </span>
 </p>
 </div>
 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6 text-white">
 <i className="fa-solid fa-layer-group text-purple-500"></i> 4. 告别创意枯竭：同时生成两套方案供您选择
 </h3>
 <p>
 {' '}
 灵感不应该被局限在一种思路上。为了最大化利用当前的 AI 算力优势，VidSpark
 生成分镜时将**默认输出两套结构打法完全不同的剧本方案供用户选择**：{' '}
 </p>
 <p className="mb-4 text-slate-400">
 {' '}
 可能方案一是极致压缩节奏的
 <span className="text-brand-400">快速混剪冲击流</span>；方案二是情绪层层递进的
 <span className="text-purple-400">走心微观叙事流</span>
 。挑出你认为最契合账号定位的那一个，直接导出文本一键跑图跑视频，就是这么简单！{' '}
 </p>
 <div className="mt-20 px-8 py-10 bg-gradient-to-br from-brand-900 via-slate-800 to-slate-800 rounded-3xl border border-brand-500/30 text-center relative overflow-hidden group">
 <div className="absolute inset-0 bg-brand-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 translate-y-1/2 group-hover:translate-y-0"></div>
 <div className="relative z-10">
 <div className="w-20 h-20 bg-brand-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-400 rotate-12 group-hover:-rotate-6 transition-transform duration-500 shadow-inner">
 <i className="fa-solid fa-rocket text-4xl"></i>
 </div>
 <h4 className="text-3xl font-extrabold text-white mb-4">准备好让 Seedance 2.0 等大片级模型为你打工了吗？</h4>
 <p className="text-slate-400 mb-8 font-medium max-w-xl mx-auto text-lg leading-relaxed">
 {' '}
 再也不用翻看几万字的干涩使用手册，立刻进入分镜生成控制台，一句话开启你的导演盛宴！{' '}
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
 <div className="pb-16"></div>
 </div>
 </div>
 </div>
 </div>
 </section>
 );
}
