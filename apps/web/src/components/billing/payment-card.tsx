'use client';

import { useEffect, useState } from 'react';

import { useSearchParams } from 'next/navigation';

interface PlanMeta {
 name: string;
 monthly: string;
 yearly: string;
}

/** 与原脚本 meta 表一致 */
const PLAN_META = {
 plus: { name: '增强版 Plus', monthly: '15.90', yearly: '152.64' },
 pro: { name: '专业版 Pro', monthly: '39.90', yearly: '383.04' },
 ultra: { name: '旗舰版 Ultra', monthly: '89.90', yearly: '863.04' },
} as const;

/** 支付卡片：按 ?plan=&cycle= 渲染套餐与价格，含 30 分钟订单倒计时 */
export function PaymentCard() {
 const searchParams = useSearchParams();
 const plan = searchParams.get('plan') || 'plus';
 const cycle = searchParams.get('cycle') || 'monthly';
 const info: PlanMeta =
 plan === 'pro' ? PLAN_META.pro : plan === 'ultra' ? PLAN_META.ultra : PLAN_META.plus;
 const yearly = cycle === 'yearly';

 const [left, setLeft] = useState(29 * 60 + 59);

 useEffect(() => {
 const timer = setInterval(() => {
 setLeft((prev) => (prev > 0 ? prev - 1 : prev));
 }, 1000);
 return () => clearInterval(timer);
 }, []);

 const mm = Math.floor(left / 60);
 const ss = left % 60;

 return (
 <div className="max-w-2xl mx-auto">
 <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 backdrop-blur-xs">
 <div className="text-center mb-8">
 <h2 className="text-2xl font-bold mb-2">{info.name} 会员订阅</h2>
 <p className="text-slate-400">{yearly ? '年付套餐' : '月付套餐'}</p>
 </div>
 <div className="flex gap-2 mb-8 bg-slate-700/50 rounded-xl p-1">
 <button className="flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2 bg-green-600 text-white">
 <i className="fa-brands fa-weixin text-lg"></i> 微信支付{' '}
 </button>
 </div>
 <div className="text-center mb-8">
 <div className="inline-block bg-white p-4 rounded-2xl">
 <img
 src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXIAAAFyAQAAAADAX2ykAAAClklEQVR4nO2bTW7cMAxGHysDWdpADjBHkW/Qs+YG9lHmAAGkZQAZXxey5idokqadOOOCXAws+y0+gCAlihwTn7H5x6dwcN5555133nnn3+JttQ4bWczGbMY8AOT2bdxQj/M35qMkKQGzPQgIshGwkSBJ0jX/1XqcvzGf1wiV0lJDV1M20wSYWbe1Hue/jA/SxGKcgvib9Tj/D3z3am2A1WQc0yMib6vH+a/he0kTQFSBmM77L0gqW+tx/qb8bGZmA0B+uM7KSz0+b6vH+RvxNT9fXVIu1t4V9Orb3el3/gNrxU+QJsL6VC2Fq5wtSdO96Xf+fWvxmweD/tk0jwB5AMCIaUBtuYEe52/LcxGrSkFEFTT1hfWpUkEev7vkV/9OgKZeqj9K1EN0e1cad2/6nX/fan62mAaIx64Y/dIRn0Ix+hcjHrtyyd+bfuc/MF1aAXqJmIKI6YQkz8875VvePd9vpCDoT0Hbr9cd7t9d8qf9t3lQunZor+pu3393ybf9VwB5QBDEfHgxwdKJ3BXNP4MsTlvocf62/Ln+RfNBGIRCPHZAHrCYBhP5dMi6N/3O/wlvNgRBNoP+xaAv2AjU49bFdnyf+p1/yy7uny1q6YjT6ca5L51mA8W0tD7ivel3/n1b918IReRHMQ/PHXEKMvKjDMDqchM9zt+Wv65/W+lbszLUrkKthL0+2i9/np9cL5yz2Voa5Q7mg8/X7ZRf+4OxNRkuYlXtqRXGHr/745t/ExcNhfVCI52g3v37P/FSm7+qnUJyh43fp8f5v+Z/Mz9pEJ8GNB9KBwRZnBafv9on3/zbC9ZZ2FCMXhCPD7K19A1+vtonf5q/AuqYRusftZ24NRm8Ptojb/7/buedd955553fnP8FB4DMm6i20sQAAAAASUVORK5CYII="
 alt="支付二维码"
 className="w-48 h-48"
 />
 </div>
 <p className="mt-4 text-sm text-slate-400"> 请使用微信扫描二维码完成支付 </p>
 </div>
 <div className="text-center mb-8">
 <div className="text-3xl font-bold text-amber-400"> ¥{yearly ? info.yearly : info.monthly} </div>
 </div>
 <div className="text-center text-sm text-slate-400">
 <i className="fa-regular fa-clock mr-1"></i> 订单将在 {mm}:{ss < 10 ? '0' : ''}
 {ss} 后过期{' '}
 </div>
 </div>
 </div>
 );
}
