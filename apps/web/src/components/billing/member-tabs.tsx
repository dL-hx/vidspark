'use client';

import { useState } from 'react';

type MemberTab = 'orders' | 'points';

/** 会员中心「订单记录 / 积分明细」Tab 切换 */
export function MemberTabs() {
 const [tab, setTab] = useState<MemberTab>('orders');
 const ordersActive = tab === 'orders';

 return (
 <div className="bg-slate-800/50 border border-slate-700 rounded-2xl backdrop-blur-xs overflow-hidden">
 <div className="flex border-b border-slate-700">
 <button
 className={`flex-1 py-4 px-6 text-sm font-medium transition-all relative ${
 ordersActive ? 'text-white' : 'text-slate-400 hover:text-slate-300'
 }`}
 onClick={() => setTab('orders')}
 >
 <i className="fa-solid fa-receipt mr-2"></i> 订单记录{' '}
 {ordersActive && (
 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-blue-500"></div>
 )}
 </button>
 <button
 className={`flex-1 py-4 px-6 text-sm font-medium transition-all relative ${
 ordersActive ? 'text-slate-400 hover:text-slate-300' : 'text-white'
 }`}
 onClick={() => setTab('points')}
 >
 <i className="fa-solid fa-coins mr-2"></i> 积分明细{' '}
 {!ordersActive && (
 <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500 to-blue-500"></div>
 )}
 </button>
 </div>
 <div className="p-6">
 <div style={ordersActive ? undefined : { display: 'none' }}>
 <div className="text-center py-12 text-slate-500">
 <i className="fa-solid fa-receipt text-4xl mb-4 opacity-30"></i>
 <p>暂无订单记录</p>
 </div>
 </div>
 <div style={ordersActive ? { display: 'none' } : undefined}>
 <div className="text-center py-12 text-slate-500">
 <i className="fa-solid fa-coins text-4xl mb-4 opacity-30"></i>
 <p>暂无积分使用记录</p>
 </div>
 </div>
 </div>
 </div>
 );
}
