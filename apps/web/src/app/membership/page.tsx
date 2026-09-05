import type { Metadata } from 'next';
import Link from 'next/link';

import { BackButton } from '@/components/billing/back-button';
import { PlanGrid } from '@/components/billing/plan-grid';

export const metadata: Metadata = {
 title: '会员与定价 | 智能AI视频创作与内容生成',
};

const CHECK_ROWS = [
 '智能总结',
 '精准转录',
 '思维导图',
 '内容创作',
 '分镜成片工作流',
 '电影级视频分镜语言',
 '镜头级参数编辑',
 '参考图 / 首尾帧绑定',
 '失败镜头单独重做',
];

export default function MembershipPage() {
 return (
 <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
 <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg">
 <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
 <Link href="/dashboard" className="flex items-center gap-3 group">
 <div className="w-10 h-10 bg-gradient-to-br from-brand-600 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="w-6 h-6 text-white"
 >
 <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"></rect>
 <path d="M8 9.5l5 3-5 3v-6z" fill="currentColor" stroke="none"></path>
 <path d="M15 10h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M15 14h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M21 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="none"></path>
 </svg>
 </div>
 <span className="text-xl font-bold tracking-tight">
 {' '}
 Vid<span className="text-brand-500">Spark</span>
 </span>
 </Link>
 <BackButton
 href="/"
 className="flex items-center gap-2 px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors"
 >
 <i className="fa-solid fa-arrow-left"></i> 返回{' '}
 </BackButton>
 </div>
 </header>
 <main className="pt-32 pb-20 px-6">
 <div className="max-w-6xl mx-auto">
 <div className="text-center mb-16">
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-medium mb-6">
 <i className="fa-solid fa-crown"></i> 解锁更多高级功能{' '}
 </div>
 <h1 className="text-4xl md:text-5xl font-bold mb-6">
 {' '}
 选择适合您的<span className="text-gradient">会员方案</span>
 </h1>
 <p className="text-lg text-slate-400 max-w-2xl mx-auto">
 {' '}
 升级会员，享受更快的处理速度、更好的创作质量和更多高级功能{' '}
 </p>
 </div>
 <PlanGrid />
 <div className="mt-20">
 <h2 className="text-2xl font-bold text-center mb-10">功能对比</h2>
 <div className="overflow-x-auto">
 <table className="w-full">
 <thead>
 <tr className="border-b border-slate-700">
 <th className="text-left py-4 px-4 text-slate-400 font-medium">功能</th>
 <th className="text-center py-4 px-4 text-slate-400 font-medium">免费版</th>
 <th className="text-center py-4 px-4 text-cyan-400 font-medium">增强版</th>
 <th className="text-center py-4 px-4 text-blue-400 font-medium">专业版</th>
 <th className="text-center py-4 px-4 text-amber-400 font-medium">旗舰版</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-slate-800">
 <td className="py-4 px-4 text-slate-300">每月积分</td>
 <td className="py-4 px-4 text-center text-slate-400">10 积分</td>
 <td className="py-4 px-4 text-center text-slate-300">200 积分</td>
 <td className="py-4 px-4 text-center text-slate-300">600 积分</td>
 <td className="py-4 px-4 text-center text-amber-400">2000 积分</td>
 </tr>
 {CHECK_ROWS.map((row) => (
 <tr key={row} className="border-b border-slate-800">
 <td className="py-4 px-4 text-slate-300">{row}</td>
 <td className="py-4 px-4 text-center">
 <i className="fa-solid fa-check text-green-500"></i>
 </td>
 <td className="py-4 px-4 text-center">
 <i className="fa-solid fa-check text-green-500"></i>
 </td>
 <td className="py-4 px-4 text-center">
 <i className="fa-solid fa-check text-green-500"></i>
 </td>
 <td className="py-4 px-4 text-center">
 <i className="fa-solid fa-check text-green-500"></i>
 </td>
 </tr>
 ))}
 <tr className="border-b border-slate-800">
 <td className="py-4 px-4 text-slate-300">单视频时长</td>
 <td className="py-4 px-4 text-center text-slate-400">30 分钟</td>
 <td className="py-4 px-4 text-center text-slate-300">120 分钟</td>
 <td className="py-4 px-4 text-center text-slate-300">300 分钟</td>
 <td className="py-4 px-4 text-center text-amber-400">不限时长</td>
 </tr>
 <tr className="border-b border-slate-800">
 <td className="py-4 px-4 text-slate-300">AI 模型</td>
 <td className="py-4 px-4 text-center text-slate-400">基础</td>
 <td className="py-4 px-4 text-center text-slate-300">高级</td>
 <td className="py-4 px-4 text-center text-slate-300">高级</td>
 <td className="py-4 px-4 text-center text-amber-400">高级</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 <div className="mt-20 max-w-3xl mx-auto">
 <h2 className="text-3xl font-bold text-center mb-4">常见问题</h2>
 <p className="text-center text-slate-400 mb-10">获取常见问题的答案，了解我们的订阅套餐</p>
 <div className="divide-y divide-slate-800">
 <div className="border-t border-slate-800 first:border-t-0">
 <button className="w-full py-6 flex items-center justify-between text-left group">
 <h3 className="font-bold text-white text-lg group-hover:text-brand-400 transition-colors">
 为什么要升级会员？
 </h3>
 <i className="fa-solid fa-chevron-up text-slate-400 transition-transform duration-300"></i>
 </button>
 <div className="overflow-hidden transition-all duration-300 max-h-96 pb-6">
 <p className="text-slate-400 leading-relaxed">解锁海量积分，尊享优先特权，体验极致创作</p>
 <ul className="mt-3 space-y-2">
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 极速优先通道：享有生成任务最高优先级，告别排队等待，创作快人一步。{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 隐私安全保障：您的数据与创作内容严格加密，完全私有，安全无忧。{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 沉浸纯净体验：全站零广告打扰，为您打造专注、流畅的极致创作环境。{' '}
 </li>
 </ul>
 </div>
 </div>
 <div className="border-t border-slate-800 first:border-t-0">
 <button className="w-full py-6 flex items-center justify-between text-left group">
 <h3 className="font-bold text-white text-lg group-hover:text-brand-400 transition-colors">
 分镜成片工作流适合什么场景？
 </h3>
 <i className="fa-solid fa-chevron-up text-slate-400 transition-transform duration-300"></i>
 </button>
 <div className="overflow-hidden transition-all duration-300 max-h-96 pb-6">
 <p className="text-slate-400 leading-relaxed">
 如果你不是只想拿一句分镜文案，而是希望把创意真正推进到可生成、可重做、可交付的视频生产流程，它会比普通文生视频更合适：
 </p>
 <ul className="mt-3 space-y-2">
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 适合产品宣传片、剧情短片、口播包装、知识视频和角色一致性要求更高的项目。{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 支持先出两套分镜方案，再逐镜头修改 prompt、镜头时长、视觉方向和生成参数。{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 支持绑定参考图、首尾帧，控制镜头连续性，减少角色漂移和画面跳变。{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 支持失败镜头单独重做，避免整条工作流全部返工。{' '}
 </li>
 </ul>
 </div>
 </div>
 <div className="border-t border-slate-800 first:border-t-0">
 <button className="w-full py-6 flex items-center justify-between text-left group">
 <h3 className="font-bold text-white text-lg group-hover:text-brand-400 transition-colors">
 积分消耗问题？
 </h3>
 <i className="fa-solid fa-chevron-up text-slate-400 transition-transform duration-300"></i>
 </button>
 <div className="overflow-hidden transition-all duration-300 max-h-96 pb-6">
 <p className="text-slate-400 leading-relaxed"></p>
 <ul className="mt-3 space-y-2">
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 请以下单前展示、任务发起页提示和结果页实际扣减信息为准。{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 会员中心可查看最新积分明细和实际消耗记录。{' '}
 </li>
 </ul>
 </div>
 </div>
 <div className="border-t border-slate-800 first:border-t-0">
 <button className="w-full py-6 flex items-center justify-between text-left group">
 <h3 className="font-bold text-white text-lg group-hover:text-brand-400 transition-colors">
 续费/升级后积分如何计算？
 </h3>
 <i className="fa-solid fa-chevron-up text-slate-400 transition-transform duration-300"></i>
 </button>
 <div className="overflow-hidden transition-all duration-300 max-h-96 pb-6">
 <p className="text-slate-400 leading-relaxed">
 我们采用积分累加机制，让您的每一分权益都不浪费：
 </p>
 <ul className="mt-3 space-y-2">
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 续费（未过期）：剩余积分 + 新套餐积分，时长顺延叠加{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 升级（未过期）：剩余积分 + 新等级积分，时长从升级当日开始计算{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 续费/升级（已过期）：积分重置为新套餐配额，时长从购买当日开始{' '}
 </li>
 <li className="text-slate-400 flex items-start gap-2">
 <span className="text-slate-500">•</span>
 会员期内不支持降级，到期后自动恢复为免费版{' '}
 </li>
 </ul>
 </div>
 </div>
 <div className="border-t border-slate-800 first:border-t-0">
 <button className="w-full py-6 flex items-center justify-between text-left group">
 <h3 className="font-bold text-white text-lg group-hover:text-brand-400 transition-colors">
 我可以升级或取消吗？
 </h3>
 <i className="fa-solid fa-chevron-up text-slate-400 transition-transform duration-300"></i>
 </button>
 <div className="overflow-hidden transition-all duration-300 max-h-96 pb-6">
 <p className="text-slate-400 leading-relaxed">
 随时可以。我们采用非自动扣费模式，订阅到期后需手动续费，无隐形扣费，请放心订阅。
 </p>
 </div>
 </div>
 <div className="border-t border-slate-800 first:border-t-0">
 <button className="w-full py-6 flex items-center justify-between text-left group">
 <h3 className="font-bold text-white text-lg group-hover:text-brand-400 transition-colors">
 我可以退款吗？
 </h3>
 <i className="fa-solid fa-chevron-up text-slate-400 transition-transform duration-300"></i>
 </button>
 <div className="overflow-hidden transition-all duration-300 max-h-96 pb-6">
 <p className="text-slate-400 leading-relaxed">
 由于数字服务的特殊性，会员权益一旦开通无法退款，请您理解。
 </p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </main>
 <footer className="border-t border-slate-800 py-8">
 <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
 <p>© 2025 VidSpark. All rights reserved.</p>
 </div>
 </footer>
 </div>
 );
}
