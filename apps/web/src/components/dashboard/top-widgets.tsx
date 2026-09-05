'use client';

interface TopWidgetsProps {
 notifOpen: boolean;
 miniOpen: boolean;
 onToggleNotif: () => void;
 onToggleMini: () => void;
}

/** 主区右上角悬浮条：消息通知 + 小程序码 */
export function TopWidgets({ notifOpen, miniOpen, onToggleNotif, onToggleMini }: TopWidgetsProps) {
 return (
 <div data-pop-region className="absolute top-4 right-6 z-30 flex items-center bg-white border border-gray-200 shadow-xs rounded-xl p-1">
 <span className="relative">
 <div
 role="tooltip"
 id="el-popover-9603"
 aria-hidden={!notifOpen}
 className="el-popover el-popper !bg-white !border-gray-200 !rounded-xl !p-0 !shadow-xl !overflow-hidden absolute top-full right-0 mt-2 z-50"
 tabIndex={0}
 style={{ width: 320, display: notifOpen ? undefined : 'none' }}
 onClick={(e) => e.stopPropagation()}
 >
 <div className="flex flex-col">
 <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
 <span className="font-bold text-slate-800">消息通知</span>
 </div>
 <div className="max-h-[300px] overflow-y-auto custom-scrollbar">
 <div className="px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0 relative">
 <div className="flex gap-3">
 <div className="flex-1">
 <p className="text-sm font-bold text-slate-800 leading-tight">系统通知</p>
 <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
 【修复更新】YouTube 视频链接偶尔无法解析下载的问题现已完全修复，您可以正常使用了。
 </p>
 <p className="text-[10px] text-slate-400 mt-2">刚刚</p>
 </div>
 </div>
 </div>
 <div className="px-4 py-4 hover:bg-gray-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0 relative">
 <div className="flex gap-3">
 <div className="flex-1">
 <p className="text-sm font-bold text-slate-800 leading-tight">系统通知</p>
 <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
 音视频总结任务，如果遇到音视频转录成功，但是总结失败的情况，大概率是 qwen llm
 内容审核不通过导致的，请换 deepseek 或者 doubao 系列模型重试。
 </p>
 <p className="text-[10px] text-slate-400 mt-2">1 小时前</p>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 <span className="el-popover__reference-wrapper">
 <div
 onClick={(e) => {
 e.stopPropagation();
 onToggleNotif();
 }}
 className="w-8 h-8 rounded-lg bg-transparent flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors group relative border-none el-popover__reference"
 aria-describedby="el-popover-9603"
 tabIndex={0}
 >
 <i className="fa-regular fa-bell text-slate-500 group-hover:text-slate-800 transition-colors text-[16px]"></i>
 <div className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 border border-white shadow-[0_0_6px_rgba(239,68,68,0.6)]"></div>
 </div>
 </span>
 </span>
 <div className="h-4 w-px bg-gray-200 mx-1"></div>
 <span className="relative">
 <div
 role="tooltip"
 id="el-popover-2406"
 aria-hidden={!miniOpen}
 className="el-popover el-popper !bg-slate-800 !border-slate-800 !rounded-xl !p-4 !shadow-xl absolute top-full right-0 mt-2 z-50"
 tabIndex={0}
 style={{ width: 200, display: miniOpen ? undefined : 'none' }}
 onClick={(e) => e.stopPropagation()}
 >
 <div className="flex flex-col items-center justify-center">
 <div className="bg-white p-2 rounded-lg mb-2">
 <img
 src="https://www.vidspark.cn/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E7%A0%81.jpg"
 alt="WeChat Mini Program QR Code"
 className="w-32 h-32 rounded-sm object-cover"
 />
 </div>
 <div className="text-white text-sm font-medium">微信扫码体验小程序</div>
 </div>
 </div>
 <span className="el-popover__reference-wrapper">
 <div
 onClick={(e) => {
 e.stopPropagation();
 onToggleMini();
 }}
 className="bg-transparent h-8 rounded-lg px-2 flex items-center gap-1.5 cursor-pointer hover:bg-gray-100 transition-all group el-popover__reference"
 aria-describedby="el-popover-2406"
 tabIndex={0}
 >
 <i className="fa-brands fa-weixin text-green-600 text-[16px] group-hover:scale-110 transition-transform"></i>
 <span className="text-xs font-medium text-slate-500 group-hover:text-slate-900 pr-0.5">小程序</span>
 </div>
 </span>
 </span>
 </div>
 );
}
