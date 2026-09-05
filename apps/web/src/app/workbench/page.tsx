import type { Metadata } from 'next';

import { WorkbenchView } from '@/components/studio/workbench-view';

export const metadata: Metadata = {
 title: '我的创作 - VidSpark 控制台 | 智能AI视频创作与内容生成',
 description: 'AI 视频生成工作台，分镜转视频工作流。',
};

export default function WorkbenchPage() {
 return <WorkbenchView />;
}
