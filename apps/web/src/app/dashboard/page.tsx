import type { Metadata } from 'next';

import '@workspace/ui/inline-dashboard.css';

import { DashboardShell } from '@/components/dashboard/dashboard-shell';

export const metadata: Metadata = {
 title: 'VidSpark 控制台 - 一站式 AI 音视频总结与分镜成片工作流 | 智能AI视频创作与内容生成',
};

export default function DashboardPage() {
 return <DashboardShell />;
}
