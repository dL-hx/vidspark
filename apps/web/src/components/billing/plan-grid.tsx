'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

interface PaidPlan {
 key: 'plus' | 'pro' | 'ultra';
 monthly: string;
 orig: string;
 yearly: string;
 save: string;
 /** 主价格文字颜色 */
 color: string;
}

/** 与原脚本 plans 数组一致：月付价 / 划线原价 / 年付折扣价 / 年付立省 */
const PAID_PLANS: PaidPlan[] = [
 { key: 'plus', monthly: '15.9', orig: '19.9', yearly: '12.72', save: '38.16', color: 'text-cyan-400' },
 { key: 'pro', monthly: '39.9', orig: '59.9', yearly: '31.92', save: '95.76', color: 'text-blue-400' },
 { key: 'ultra', monthly: '89.9', orig: '199', yearly: '71.92', save: '215.76', color: 'text-amber-400' },
];

const FREE_FEATURES = [
 '每月 10 积分',
 '分镜成片工作流',
 '智能总结',
 '精准转录',
 '思维导图',
 '内容创作',
 '电影级视频分镜语言',
 '单视频最长 30 分钟',
 '基础 AI 模型',
];

const PLUS_FEATURES = [
 '每月 200 积分',
 '分镜成片工作流',
 '智能总结',
 '精准转录',
 '思维导图',
 '内容创作',
 '电影级视频分镜语言',
 '单视频最长 120 分钟',
 '高级 AI 模型',
];

const PRO_FEATURES = [
 '每月 600 积分',
 '分镜成片工作流',
 '智能总结',
 '精准转录',
 '思维导图',
 '内容创作',
 '电影级视频分镜语言',
 '单视频最长 300 分钟',
 '高级 AI 模型',
 '视频生成高峰免排队',
];

const ULTRA_FEATURES = [
 '每月 2000 积分',
 '分镜成片工作流',
 '智能总结',
 '精准转录',
 '思维导图',
 '内容创作',
 '电影级视频分镜语言',
 '单视频时长不限',
 '高级 AI 模型',
 '视频生成高峰免排队',
];

/** 会员定价区：月付/年付开关 + 4 档套餐卡片（年付时隐藏免费版、三卡居中） */
export function PlanGrid() {
 const router = useRouter();
 const [yearly, setYearly] = useState(false);

 const subscribe = (key: PaidPlan['key']) => {
 router.push(`/payment?plan=${key}&cycle=${yearly ? 'yearly' : 'monthly'}`);
 };

 const plus = PAID_PLANS[0];
 const pro = PAID_PLANS[1];
 const ultra = PAID_PLANS[2];

 return (
 <>
 <div className="flex items-center justify-center gap-4 mb-12">
 <span
 className={
 yearly ? 'text-sm transition-colors text-slate-400' : 'text-sm transition-colors text-white font-medium'
 }
 >
 月付
 </span>
 <button
 className="relative w-16 h-8 rounded-full bg-slate-700 transition-colors"
 style={yearly ? { background: 'linear-gradient(to right, #f59e0b, #f97316)' } : undefined}
 onClick={() => setYearly(!yearly)}
 >
 <div
 className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 left-1"
 style={yearly ? { left: '36px' } : undefined}
 ></div>
 </button>
 <span
 className={
 yearly ? 'text-sm transition-colors text-white font-medium' : 'text-sm transition-colors text-slate-400'
 }
 >
 {' '}
 年付{' '}
 <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">省20%</span>
 </span>
 </div>
 <div className={`grid gap-5 md:grid-cols-2 lg:grid-cols-4 plan-grid${yearly ? ' yearly-mode' : ''}`}>
 {/* 免费版 */}
 <div
 className="relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 backdrop-blur-xs hover:border-slate-600 transition-all duration-300"
 style={yearly ? { display: 'none' } : undefined}
 >
 <div className="mb-5">
 <h3 className="text-lg font-bold text-slate-300 mb-1">免费版 Free</h3>
 <p className="text-xs text-slate-500">体验基础功能</p>
 </div>
 <div className="mb-6">
 <div className="flex items-baseline gap-1">
 <span className="text-3xl font-bold">¥0</span>
 <span className="text-slate-500 text-sm">/月</span>
 </div>
 </div>
 <button
 disabled
 className="w-full py-2.5 px-4 text-sm font-medium rounded-xl transition-all duration-300 bg-slate-700 text-white cursor-not-allowed"
 >
 {' '}
 当前方案{' '}
 </button>
 <div className="mt-6 space-y-3">
 {FREE_FEATURES.map((f) => (
 <div key={f} className="flex items-center gap-2 text-sm text-slate-400">
 <i className="fa-solid fa-check text-slate-500 text-xs"></i> {f}{' '}
 </div>
 ))}
 </div>
 </div>
 {/* 增强版 Plus */}
 <div className="relative bg-slate-800/50 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-xs hover:border-cyan-500/50 transition-all duration-300">
 <div className="mb-5">
 <h3 className="text-lg font-bold text-cyan-400 mb-1">增强版 Plus</h3>
 <p className="text-xs text-slate-400">适合轻度创作者</p>
 </div>
 <div className="mb-6">
 <div className="flex items-baseline gap-2">
 {yearly ? (
 <>
 <span className="text-sm font-medium text-slate-500 line-through whitespace-nowrap">
 ¥{plus.monthly}
 </span>
 <span className={`text-3xl font-bold ${plus.color}`}>¥{plus.yearly}</span>
 <span className="text-slate-500 text-sm">/月</span>
 </>
 ) : (
 <>
 <span className={`text-3xl font-bold ${plus.color}`}>¥{plus.monthly}</span>
 <span className="text-slate-500 text-sm">/月</span>
 <span className="text-xs font-medium text-slate-500 line-through whitespace-nowrap">
 原价 ¥{plus.orig}
 </span>
 </>
 )}
 </div>
 {yearly && (
 <div className="save-row mt-2 flex items-center gap-2 text-xs font-medium text-green-400">
 <i className="fa-solid fa-tag"></i>
 <span>年付立省 ¥{plus.save}</span>
 </div>
 )}
 </div>
 <button
 className="w-full py-2.5 px-4 text-white text-sm font-medium rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 hover:-translate-y-0.5"
 onClick={() => subscribe('plus')}
 >
 {' '}
 立即订阅{' '}
 </button>
 <div className="mt-6 space-y-3">
 {PLUS_FEATURES.map((f) => (
 <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
 <i className="fa-solid fa-check text-cyan-400 text-xs"></i> {f}{' '}
 </div>
 ))}
 </div>
 </div>
 {/* 专业版 Pro */}
 <div className="relative bg-slate-800/50 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-xs hover:border-blue-500/50 transition-all duration-300">
 <div className="absolute -top-px -right-px">
 <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
 {' '}
 推荐{' '}
 </div>
 </div>
 <div className="mb-5">
 <h3 className="text-lg font-bold text-blue-400 mb-1">专业版 Pro</h3>
 <p className="text-xs text-slate-400">适合日常创作者</p>
 </div>
 <div className="mb-6">
 <div className="flex items-baseline gap-2">
 {yearly ? (
 <>
 <span className="text-sm font-medium text-slate-500 line-through whitespace-nowrap">
 ¥{pro.monthly}
 </span>
 <span className={`text-3xl font-bold ${pro.color}`}>¥{pro.yearly}</span>
 <span className="text-slate-500 text-sm">/月</span>
 </>
 ) : (
 <>
 <span className={`text-3xl font-bold ${pro.color}`}>¥{pro.monthly}</span>
 <span className="text-slate-500 text-sm">/月</span>
 <span className="text-xs font-medium text-slate-500 line-through whitespace-nowrap">
 原价 ¥{pro.orig}
 </span>
 </>
 )}
 </div>
 {yearly && (
 <div className="save-row mt-2 flex items-center gap-2 text-xs font-medium text-green-400">
 <i className="fa-solid fa-tag"></i>
 <span>年付立省 ¥{pro.save}</span>
 </div>
 )}
 </div>
 <button
 className="w-full py-2.5 px-4 text-white text-sm font-medium rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 hover:-translate-y-0.5"
 onClick={() => subscribe('pro')}
 >
 {' '}
 立即订阅{' '}
 </button>
 <div className="mt-6 space-y-3">
 {PRO_FEATURES.map((f) => (
 <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
 <i className="fa-solid fa-check text-blue-400 text-xs"></i> {f}{' '}
 </div>
 ))}
 </div>
 </div>
 {/* 旗舰版 Ultra */}
 <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl p-6 backdrop-blur-xs hover:border-amber-500/50 transition-all duration-300 overflow-hidden">
 <div className="absolute -top-px -right-px">
 <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">
 {' '}
 最超值{' '}
 </div>
 </div>
 <div className="mb-5">
 <h3 className="text-lg font-bold text-amber-400 mb-1 flex items-center gap-2">
 <i className="fa-solid fa-crown text-sm"></i> 旗舰版 Ultra{' '}
 </h3>
 <p className="text-xs text-slate-400">适合专业创作者</p>
 </div>
 <div className="mb-6">
 <div className="flex items-baseline gap-2">
 {yearly ? (
 <>
 <span className="text-sm font-medium text-slate-500 line-through whitespace-nowrap">
 ¥{ultra.monthly}
 </span>
 <span className={`text-3xl font-bold ${ultra.color}`}>¥{ultra.yearly}</span>
 <span className="text-slate-500 text-sm">/月</span>
 </>
 ) : (
 <>
 <span className={`text-3xl font-bold ${ultra.color}`}>¥{ultra.monthly}</span>
 <span className="text-slate-500 text-sm">/月</span>
 <span className="text-xs font-medium text-slate-500 line-through whitespace-nowrap">
 原价 ¥{ultra.orig}
 </span>
 </>
 )}
 </div>
 {yearly && (
 <div className="save-row mt-2 flex items-center gap-2 text-xs font-medium text-green-400">
 <i className="fa-solid fa-tag"></i>
 <span>年付立省 ¥{ultra.save}</span>
 </div>
 )}
 </div>
 <button
 className="w-full py-2.5 px-4 text-white text-sm font-bold rounded-xl shadow-lg transition-all duration-300 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 hover:-translate-y-0.5"
 onClick={() => subscribe('ultra')}
 >
 {' '}
 立即订阅{' '}
 </button>
 <div className="mt-6 space-y-3">
 {ULTRA_FEATURES.map((f) => (
 <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
 <i className="fa-solid fa-check text-amber-400 text-xs"></i> {f}{' '}
 </div>
 ))}
 </div>
 </div>
 </div>
 </>
 );
}
