'use client';

import type { ReactNode } from 'react';

import { useRouter } from 'next/navigation';

interface BackButtonProps {
 /** 点击返回的目标路由（复刻原站 location.href 跳转） */
 href: string;
 className: string;
 children: ReactNode;
}

/** 深色计费/会员页顶栏的返回按钮 */
export function BackButton({ href, className, children }: BackButtonProps) {
 const router = useRouter();
 return (
 <button className={className} onClick={() => router.push(href)}>
 {children}
 </button>
 );
}
