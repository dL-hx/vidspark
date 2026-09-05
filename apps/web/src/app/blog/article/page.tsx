import type { Metadata } from 'next';
import { Suspense } from 'react';

import { ArticleViewer } from '@/components/blog/article-viewer';

export const metadata: Metadata = {
 title: 'VidSpark 分镜成片工作流：从一句创意到视频分镜创作，一条链路走完 | VidSpark 博客',
};

export default function BlogArticlePage() {
 return (
 <Suspense fallback={null}>
 <ArticleViewer />
 </Suspense>
 );
}
