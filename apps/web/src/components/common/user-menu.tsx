'use client';

import type { ReactElement } from 'react';
import Link from 'next/link';

import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuTrigger,
} from '@workspace/ui/components/ui/dropdown-menu';

interface UserMenuProps {
 /** 触发元素（头像按钮），原样渲染 */
 trigger: ReactElement;
 onOpenFeedback: () => void;
 onOpenContact: () => void;
 /** 菜单开合变化（用于联动关闭其它弹层） */
 onOpenChange?: (open: boolean) => void;
}

/** 公共用户菜单（shadcn DropdownMenu）：头像触发，向上弹出，自管开合与点击外部关闭 */
export function UserMenu({ trigger, onOpenFeedback, onOpenContact, onOpenChange }: UserMenuProps) {
 return (
 <DropdownMenu onOpenChange={onOpenChange}>
 <DropdownMenuTrigger asChild>{trigger}</DropdownMenuTrigger>
 <DropdownMenuContent
 side="top"
 align="start"
 sideOffset={8}
 className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-[200px] rounded-xl py-2"
 >
 <DropdownMenuLabel className="px-4 py-2 mb-1 border-b border-gray-100 font-normal">
 <p className="text-sm font-bold text-slate-900 truncate">异维A酸</p>
 <p className="text-xs text-slate-500 truncate mt-1">Free</p>
 </DropdownMenuLabel>
 <DropdownMenuItem
 asChild
 className="px-4 py-2.5 text-sm text-amber-600 hover:bg-amber-50 focus:bg-amber-50 focus:text-amber-600 font-medium cursor-pointer"
 >
 <Link href="/membership">
 <i className="fa-solid fa-crown w-5 text-center"></i> 升级会员{' '}
 </Link>
 </DropdownMenuItem>
 <DropdownMenuItem
 asChild
 className="px-4 py-2.5 text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 focus:bg-gray-50 focus:text-slate-900 cursor-pointer"
 >
 <Link href="/member-center">
 <i className="fa-solid fa-user-gear w-5 text-center"></i> 会员中心{' '}
 </Link>
 </DropdownMenuItem>
 <DropdownMenuItem
 onSelect={onOpenFeedback}
 className="px-4 py-2.5 text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 focus:bg-gray-50 focus:text-slate-900 cursor-pointer"
 >
 <i className="fa-regular fa-comment-dots w-5 text-center"></i> 意见反馈
 </DropdownMenuItem>
 <DropdownMenuItem
 onSelect={onOpenContact}
 className="px-4 py-2.5 text-sm text-slate-600 hover:bg-gray-50 hover:text-slate-900 focus:bg-gray-50 focus:text-slate-900 cursor-pointer"
 >
 <i className="fa-regular fa-envelope w-5 text-center"></i> 联系我们
 </DropdownMenuItem>
 <DropdownMenuItem className="px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 focus:bg-red-50 focus:text-red-500 cursor-pointer">
 <i className="fa-solid fa-arrow-right-from-bracket w-5 text-center"></i> 退出登录
 </DropdownMenuItem>
 </DropdownMenuContent>
 </DropdownMenu>
 );
}
