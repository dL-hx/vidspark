import type { Metadata } from 'next';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@workspace/ui/global.css';

import { ToastProvider } from '@/components/common/toast-provider';

export const metadata: Metadata = {
 title: '首页 | 智能AI视频创作与内容生成',
 description:
 '从视频理解到内容创作，一站式完成多平台内容生产：音视频总结、多平台内容创作、分镜成片工作流。',
};

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 return (
 <html lang="zh-CN">
 <body>
 {children}
 <ToastProvider />
 </body>
 </html>
 );
}
