/** 品牌 Logo（VidSpark 视频播放器 + 火花） */
export function BrandMark({ className }: { className?: string }) {
 return (
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className={className}
 >
 <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"></rect>
 <path d="M8 9.5l5 3-5 3v-6z" fill="currentColor" stroke="none"></path>
 <path d="M15 10h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M15 14h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M21 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="none"></path>
 </svg>
 );
}
