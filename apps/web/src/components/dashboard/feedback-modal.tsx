'use client';

import { useState } from 'react';

import { Button } from '@workspace/ui/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@workspace/ui/components/ui/dialog';
import { Input } from '@workspace/ui/components/ui/input';
import { Label } from '@workspace/ui/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/ui/select';
import { Textarea } from '@workspace/ui/components/ui/textarea';

import { vsToast } from '@/lib/toast';

interface FeedbackModalProps {
 open: boolean;
 onClose: () => void;
}

const FIELD_CLS =
 'h-auto px-4 py-3 bg-gray-50 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500';

/** 意见反馈弹窗（shadcn Dialog + Select/Input/Textarea） */
export function FeedbackModal({ open, onClose }: FeedbackModalProps) {
 const [type, setType] = useState('1');
 const [content, setContent] = useState('');
 const disabled = content.trim() === '';

 return (
 <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
 <DialogContent className="max-w-md rounded-2xl">
 <DialogHeader>
 <DialogTitle className="text-xl font-bold text-slate-900">意见反馈</DialogTitle>
 </DialogHeader>
 <div className="space-y-4">
 <div className="space-y-2">
 <Label className="text-sm font-medium text-slate-700">反馈类型</Label>
 <Select value={type} onValueChange={setType}>
 <SelectTrigger className={FIELD_CLS}>
 <SelectValue />
 </SelectTrigger>
 <SelectContent>
 <SelectItem value="1">功能建议</SelectItem>
 <SelectItem value="2">Bug反馈</SelectItem>
 <SelectItem value="3">产品咨询</SelectItem>
 <SelectItem value="4">其他</SelectItem>
 </SelectContent>
 </Select>
 </div>
 <div className="space-y-2">
 <Label className="text-sm font-medium text-slate-700">
 反馈内容 <span className="text-red-500">*</span>
 </Label>
 <Textarea
 rows={4}
 placeholder="请详细描述您的建议或问题..."
 value={content}
 onChange={(e) => setContent(e.target.value)}
 className={`${FIELD_CLS} placeholder-slate-400 resize-none`}
 />
 </div>
 <div className="space-y-2">
 <Label className="text-sm font-medium text-slate-700">
 联系方式 <span className="text-slate-400 font-normal">(可选)</span>
 </Label>
 <Input type="text" placeholder="邮箱或微信，方便我们联系您" className={`${FIELD_CLS} placeholder-slate-400`} />
 </div>
 <Button
 disabled={disabled}
 onClick={() => {
 vsToast('反馈已提交，感谢您的支持！');
 onClose();
 setContent('');
 }}
 className="w-full bg-gradient-to-r from-brand-600 to-blue-600 hover:from-brand-700 hover:to-blue-700 text-white font-bold py-3 rounded-xl shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
 >
 <i className="fa-solid fa-paper-plane"></i> 提交反馈
 </Button>
 </div>
 </DialogContent>
 </Dialog>
 );
}
