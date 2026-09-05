'use client';

import Link from 'next/link';

interface UserMenuProps {
 open: boolean;
 onOpenFeedback: () => void;
 onOpenContact: () => void;
}

/** 公共用户菜单：dashboard 与分镜工作室侧栏共用（头像触发，向上弹出） */
export function UserMenu({ open, onOpenFeedback, onOpenContact }: UserMenuProps) {
 return (
 <div
 hidden={!open}
 onClick={(e) => e.stopPropagation()}
 className="absolute bottom-full left-0 w-full mb-2 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50 min-w-[200px]"
 >
 <div className="px-4 py-2 border-b border-gray-100 mb-1">
 <p className="text-sm font-bold text-slate-900 truncate">异维A酸</p>
 <p className="text-xs text-slate-500 truncate mt-1">Free</p>
 </div>
 <Link
 href="/membership"
 className="block w-full text-left px-4 py-2.5 text-sm text-amber-600 hover:bg-amber-50 flex items-center gap-2 font-medium"
 >
 <i className="fa-solid fa-crown w-5 text-center"></i> 升级会员{' '}
 </Link>
 <Link
 href="/member-center"
 className="block w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 flex items-center gap-2"
 >
 <i className="fa-solid fa-user-gear w-5 text-center"></i> 会员中心{' '}
 </Link>
 <button
 onClick={onOpenFeedback}
 className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 flex items-center gap-2"
 >
 <i className="fa-regular fa-comment-dots w-5 text-center"></i> 意见反馈
 </button>
 <button
 onClick={onOpenContact}
 className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 flex items-center gap-2"
 >
 <i className="fa-regular fa-envelope w-5 text-center"></i> 联系我们
 </button>
 <button className="w-full text-left px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 flex items-center gap-2">
 <i className="fa-solid fa-arrow-right-from-bracket w-5 text-center"></i> 退出登录
 </button>
 </div>
 );
}
