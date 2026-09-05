/** 博客页页脚（与首页页脚不一致，以 blog.html 为准） */
export function BlogFooter() {
 return (
 <footer className="py-8 bg-slate-900 border-t border-slate-800">
 <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
 <div className="text-slate-400 text-sm">
 {' '}
 © 2026 SparkAI. All rights reserved. 沪ICP备2025113836号{' '}
 </div>
 </div>
 </footer>
 );
}
