/** 深色站点页脚（首页 / 博客共用） */
export function SiteFooter() {
 return (
 <footer className="py-8 bg-slate-900 border-t border-slate-800">
 <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
 <div className="text-slate-400 text-sm">
 {' '}
 © 2025 SparkAI. All rights reserved. 沪ICP备2025113836号{' '}
 </div>
 <div className="flex gap-6 items-center">
 <button className="text-slate-400 hover:text-white transition-colors">
 <i className="fa-brands fa-weixin text-xl"></i>
 </button>
 <button className="bg-gradient-to-br from-brand-600 to-blue-500 hover:from-brand-700 hover:to-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-[0_0_10px_rgba(255,255,255,0.2)] hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]">
 {' '}
 联系我们{' '}
 </button>
 </div>
 </div>
 </footer>
 );
}
