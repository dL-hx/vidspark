'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@workspace/ui/components/ui/dialog';

interface ContactModalProps {
 open: boolean;
 onClose: () => void;
}

/** 联系我们弹窗（shadcn Dialog） */
export function ContactModal({ open, onClose }: ContactModalProps) {
 return (
 <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
 <DialogContent className="max-w-md rounded-2xl">
 <DialogHeader>
 <DialogTitle className="text-xl font-bold text-slate-900">联系我们</DialogTitle>
 </DialogHeader>
 <div className="space-y-4">
 <div className="p-4 bg-green-50 rounded-xl">
 <div className="flex items-center gap-3 mb-3">
 <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-lg">
 <i className="fa-brands fa-weixin"></i>
 </div>
 <div>
 <p className="text-sm text-slate-500">添加客服微信</p>
 </div>
 </div>
 <div className="flex justify-center">
 <img
 src="https://www.vidspark.cn/%E5%AE%A2%E6%9C%8D%E5%BE%AE%E4%BF%A1.jpg"
 alt="客服微信二维码"
 className="w-48 object-contain rounded-lg"
 />
 </div>
 </div>
 <div className="p-4 bg-brand-50 rounded-xl flex items-center gap-4">
 <div className="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 text-xl">
 <i className="fa-solid fa-envelope"></i>
 </div>
 <div>
 <p className="text-sm text-slate-500 mb-1">发送邮件至</p>
 <p className="text-lg font-bold text-slate-900">xxxxxx@gmail.com</p>
 </div>
 </div>
 <p className="text-slate-500 text-sm text-center pt-2">
 欢迎交流：网站建议 · AI 工作流定制 · 商业合作 <br />
 <span className="text-xs text-slate-400 mt-1 block">我们将尽快回复您的消息</span>
 </p>
 </div>
 </DialogContent>
 </Dialog>
 );
}
