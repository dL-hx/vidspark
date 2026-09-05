'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { ArticleContentCreation } from '@/components/blog/article-content-creation';
import { ArticleStoryboardPrompt } from '@/components/blog/article-storyboard';
import { ArticleStoryboardWorkflow } from '@/components/blog/article-storyboard-workflow';
import { ArticleVideoSummary } from '@/components/blog/article-video-summary';

const ARTICLE_IDS = ['storyboard-workflow', 'video-summary', 'content-creation', 'storyboard'] as const;

type ArticleId = (typeof ARTICLE_IDS)[number];

/** 原站脚本：按文章 h1 更新页面标题 */
const ARTICLE_TITLES: Record<ArticleId, string> = {
 'storyboard-workflow': 'VidSpark 分镜成片工作流：从一句创意到视频分镜创作，一条链路走完',
 'video-summary': 'VidSpark 音视频总结：不只是转文字，是知识的结构化重构',
 'content-creation': 'VidSpark 内容创作：不是 AI 写作，是懂平台算法的创作系统',
 storyboard: 'Seedance2.0 视频分镜提示词：一句话生成导演级分镜，驾驭视效大模型',
};

/** 博客文章详情：按 ?id= 显示对应文章（其余保持 hidden） */
export function ArticleViewer() {
 const searchParams = useSearchParams();
 const rawId = searchParams.get('id');
 const activeId: ArticleId = ARTICLE_IDS.includes(rawId as ArticleId)
 ? (rawId as ArticleId)
 : 'storyboard-workflow';

 useEffect(() => {
 document.title = `${ARTICLE_TITLES[activeId]} | VidSpark 博客`;
 }, [activeId]);

 return (
 <>
 <ArticleStoryboardWorkflow hidden={activeId !== 'storyboard-workflow'} />
 <ArticleVideoSummary hidden={activeId !== 'video-summary'} />
 <ArticleContentCreation hidden={activeId !== 'content-creation'} />
 <ArticleStoryboardPrompt hidden={activeId !== 'storyboard'} />
 </>
 );
}
