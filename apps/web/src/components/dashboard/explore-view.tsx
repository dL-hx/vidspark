'use client';

import { BilibiliIcon, YoutubeIcon } from '@/components/icons/platform-icons';

interface ExploreItem {
 title: string;
 thumb: string;
 plays: string;
 author: string;
 platform: 'bilibili' | 'youtube';
}

const EXPLORE_ITEMS: ExploreItem[] = [
 {
 title: '咪师傅拉面摊，面还没吃到，架先看饱了… - 咪师傅拉面摊，面还没吃到，架先看饱了…',
 thumb: 'http://i0.hdslb.com/bfs/archive/4ce0ec6ef3e7eec1e66a48f712dc44b7851dc4c5.jpg',
 plays: '208.1万 次播放',
 author: 'Pro咪修斯',
 platform: 'bilibili',
 },
 {
 title: '人际关系的奥秘，都在这三个字里【武志红】 - 20211104 我与它 4_3',
 thumb: 'http://i1.hdslb.com/bfs/archive/c579697c5c8676059490b6816a90ecad919e1b93.jpg',
 plays: '21.8万 次播放',
 author: '武志红讲心理',
 platform: 'bilibili',
 },
 {
 title: '边庭流血成海水，武皇开边意未已《从初唐走向盛唐19》 - 边庭流血成海水，武皇开边意未已《从初唐走向盛唐19》',
 thumb: 'http://i2.hdslb.com/bfs/archive/a22dd22881211b0beca844d95b03e2b4d851606d.jpg',
 plays: '81.9万 次播放',
 author: '安州牧',
 platform: 'bilibili',
 },
 {
 title: '提取视频字幕教学（极简版本） - 提取视频字幕教学（极简版本）',
 thumb: 'http://i2.hdslb.com/bfs/archive/5b6d3c4ffe3ea3e71dd4e2cf7d736fc5146aa452.jpg',
 plays: '7.9万 次播放',
 author: '李小伊Lyee',
 platform: 'bilibili',
 },
 {
 title:
 '黑马程序员JavaWeb开发教程，实现javaweb企业开发全流程（涵盖Spring+MyBatis+SpringMVC+SpringBoot等） - Day07-04. MySQL-DQL-分组查询',
 thumb: 'http://i2.hdslb.com/bfs/archive/bc28656ba0e7f62925b8bedcfca006c1b7ad7100.jpg',
 plays: '881.7万 次播放',
 author: '黑马程序员',
 platform: 'bilibili',
 },
 {
 title: '17歲華裔少年，靠一款AI推文算命工具，24小時狂賺3萬美金',
 thumb: 'https://i.ytimg.com/vi/REziEUcsSt4/maxresdefault.jpg',
 plays: '5.2万 次播放',
 author: '七七行銷筆記',
 platform: 'youtube',
 },
 {
 title:
 '新能源动力电池解析 带你了解电池领域 ｜锂电 磷酸铁锂电池 氢燃料电池 钠离子电池 三元锂电池 4680电池 - 动力电池11.07周日',
 thumb: 'http://i0.hdslb.com/bfs/archive/6ad7d086ac98fc007f62815b89391f772eb345ce.jpg',
 plays: '35.9万 次播放',
 author: 'LINCAP',
 platform: 'bilibili',
 },
 {
 title: '近期热点：格陵兰、加拿大、日本、美日国债 - 近期热点：格陵兰、加拿大、日本、美日国债',
 thumb: 'http://i0.hdslb.com/bfs/archive/2ede7de80c41d5faa41a0ae2ae115255947e2952.jpg',
 plays: '28.1万 次播放',
 author: '战国时代_姜汁汽水',
 platform: 'bilibili',
 },
 {
 title: '百万医疗险 全部变成废纸 - 百万医疗险 全部变成废纸',
 thumb: 'http://i1.hdslb.com/bfs/archive/6bfa3b4f9a926727a3dc306377fd623ddb7edb65.jpg',
 plays: '12.9万 次播放',
 author: '卷叔保测评',
 platform: 'bilibili',
 },
 {
 title: 'VOL-29口渴堪比濒死体验？一站式科学补水方案，看完再也不瞎喝 - VOL-29口渴堪比濒死体验？一站式科学补水方案，看完再也不瞎喝',
 thumb: 'http://i1.hdslb.com/bfs/archive/235bcd3f6b5e20d30ba73a5903608d3242f38cfb.jpg',
 plays: '185.7万 次播放',
 author: '医疗三棱镜',
 platform: 'bilibili',
 },
 {
 title: '【长谈】边缘性行为，为什么是边缘的？ - 【长谈】边缘性行为，为什么是边缘的？',
 thumb: 'http://i2.hdslb.com/bfs/archive/b3a02a2d74bc7596f4067cf4ee26dbf0d4167c8f.jpg',
 plays: '139.7万 次播放',
 author: '六层楼先生',
 platform: 'bilibili',
 },
 {
 title: '如何减肥？偏口鱼博士:首先要少吃，保持饥饿，肥胖人的救星！ - 如何减肥？偏口鱼博士:首先要少吃，保持饥饿，肥胖人的救星！',
 thumb: 'http://i0.hdslb.com/bfs/archive/b0e7b1604ab16ed220c81a350003f28d51b1c2f2.jpg',
 plays: '11.4万 次播放',
 author: '偏口大白话',
 platform: 'bilibili',
 },
];

interface ExploreViewProps {
 hidden: boolean;
 rootRef?: (el: HTMLDivElement | null) => void;
}

/** 探索热门视图 */
export function ExploreView({ hidden, rootRef }: ExploreViewProps) {
 return (
 <div id="exploreView" ref={rootRef} hidden={hidden} className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
 <div className="max-w-6xl mx-auto h-full flex flex-col">
 <div className="flex-1 flex flex-col animate-fade-in">
 <div className="mb-6">
 <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 flex items-center">
 <div
 className="w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg"
 style={{ background: 'linear-gradient(135deg, rgb(249, 115, 22), rgb(239, 68, 68))' }}
 >
 <i className="fa-solid fa-fire text-white text-xl"></i>
 </div>
 探索热门
 </h1>
 <p className="text-slate-500">发现热门视频总结，一键查看精彩内容</p>
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
 {EXPLORE_ITEMS.map((item) => (
 <div
 key={item.thumb}
 className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden hover:shadow-md hover:border-brand-200 transition-all cursor-pointer group"
 >
 <div className="h-44 bg-gray-100 relative overflow-hidden">
 <img
 src={item.thumb}
 alt="Video Thumbnail"
 referrerPolicy="no-referrer"
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
 />
 <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
 <i className="fa-solid fa-fire text-amber-400"></i>
 <span>{item.plays}</span>
 </div>
 </div>
 <div className="p-4">
 <h3 className="font-bold text-slate-900 line-clamp-2 mb-2 group-hover:text-brand-600 transition-colors">
 {item.title}
 </h3>
 <div className="flex items-center gap-2 text-sm text-slate-500">
 {item.platform === 'bilibili' ? (
 <div title="Bilibili" className="platform-icon platform-bilibili sm">
 <BilibiliIcon />
 </div>
 ) : (
 <div title="YouTube" className="platform-icon platform-youtube sm">
 <YoutubeIcon />
 </div>
 )}
 <span className="truncate">{item.author}</span>
 </div>
 </div>
 </div>
 ))}
 </div>
 </div>
 </div>
 </div>
 );
}
