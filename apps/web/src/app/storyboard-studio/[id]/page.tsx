import type { Metadata } from 'next';

import '@workspace/ui/design-system.css';
import '@workspace/ui/inline-storyboard-studio.css';

import { StoryboardStudio } from '@/components/studio/storyboard-studio';

export const metadata: Metadata = {
 title: '分镜成片工作流 - AI智能分镜提示词与视频生成 | VidSpark | 智能AI视频创作与内容生成',
 description: 'VidSpark 分镜成片工作流，一键将创意想法转化为电影级 AI 分镜提示词。',
};

export default function StoryboardStudioProjectPage() {
 return <StoryboardStudio />;
}
