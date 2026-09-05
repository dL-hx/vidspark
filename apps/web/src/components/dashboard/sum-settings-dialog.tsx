'use client';

import { useState } from 'react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@workspace/ui/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@workspace/ui/components/ui/select';
import { Switch } from '@workspace/ui/components/ui/switch';

/** 总结设置状态（与触发器上的芯片文案对应） */
export interface SumSettings {
 follow: boolean;
 lang: string;
 level: string;
 model: string;
}

const LANG_OPTIONS = ['中文', 'English', '日本語', '한국어', 'Français', 'Deutsch', 'Español', 'Русский'];

interface ModelItem {
 value: string;
 label: string;
 credit: string;
 disabled: boolean;
}

const MODEL_ITEMS: ModelItem[] = [
 { value: 'qwen-flash', label: 'qwen-flash (0.2x credit)', credit: '0.2x credit', disabled: false },
 { value: 'deepseek-v4-flash', label: 'deepseek-v4-flash (0.2x credit)', credit: '0.2x credit', disabled: true },
 { value: 'qwen3.5-flash', label: 'qwen3.5-flash (0.2x credit)', credit: '0.2x credit', disabled: true },
 { value: 'qwen3.5-plus', label: 'qwen3.5-plus (0.5x credit)', credit: '0.5x credit', disabled: true },
 { value: 'deepseek-v3.2-thinking', label: 'deepseek-v3.2-thinking (0.5x credit)', credit: '0.5x credit', disabled: true },
 { value: 'qwen3.6-plus', label: 'qwen3.6-plus (1.2x credit)', credit: '1.2x credit', disabled: true },
 { value: 'deepseek-v4-pro', label: 'deepseek-v4-pro (2x credit)', credit: '2x credit', disabled: true },
];

interface SumSettingsDialogProps {
 open: boolean;
 /** 已提交生效的设置 */
 settings: SumSettings;
 onCommit: (next: SumSettings) => void;
 onClose: () => void;
}

/** 总结设置弹窗（shadcn Dialog）：关闭时内容卸载，重新打开即重置草稿 */
export function SumSettingsDialog({ open, settings, onCommit, onClose }: SumSettingsDialogProps) {
 return (
 <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
 <DialogContent className="max-w-[400px] rounded-2xl">
 <DialogHeader>
 <DialogTitle>总结设置</DialogTitle>
 </DialogHeader>
 <SumSettingsDialogInner settings={settings} onCommit={onCommit} onClose={onClose} />
 </DialogContent>
 </Dialog>
 );
}

function SumSettingsDialogInner({ settings, onCommit, onClose }: Omit<SumSettingsDialogProps, 'open'>) {
 const [follow, setFollow] = useState(settings.follow);
 const [lang, setLang] = useState(settings.lang);
 const [level, setLevel] = useState(settings.level);
 const [model, setModel] = useState(settings.model);

 return (
 <>
 <div className="space-y-6 py-2">
 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
 <div>
 <span className="text-slate-900 font-bold block">跟随视频原声</span>
 <span className="text-slate-500 text-xs">自动检测视频语言并使用相同语言总结</span>
 </div>
 <Switch
 checked={follow}
 onCheckedChange={setFollow}
 className="data-[state=checked]:bg-indigo-600"
 aria-label="跟随视频原声"
 />
 </div>
 <div className="space-y-2" hidden={follow}>
 <label className="text-slate-700 font-bold block text-sm">目标语言</label>
 <Select value={lang} onValueChange={setLang}>
 <SelectTrigger className="w-full">
 <SelectValue placeholder="请选择语言" />
 </SelectTrigger>
 <SelectContent>
 {LANG_OPTIONS.map((l) => (
 <SelectItem key={l} value={l}>
 {l}
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 </div>
 <div className="space-y-2">
 <label className="text-slate-700 font-bold block text-sm">总结详细程度</label>
 <div className="grid grid-cols-2 gap-3">
 {(['标准', '详细'] as const).map((lv) => {
 const on = level === lv;
 return (
 <div
 key={lv}
 data-ss-level={lv}
 onClick={() => setLevel(lv)}
 className={`p-4 rounded-xl border-2 cursor-pointer transition-all hover:shadow-xs ${
 on ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300 bg-white'
 }`}
 >
 <div className="flex items-center gap-2 mb-1">
 <i
 className={`text-sm fa-solid ${lv === '标准' ? 'fa-bolt' : 'fa-list-check'}`}
 style={{ color: on ? 'rgb(59, 130, 246)' : 'rgb(148, 163, 184)' }}
 ></i>
 <span className={`font-bold text-sm ${on ? 'text-blue-600' : 'text-slate-700'}`}> {lv} </span>
 </div>
 <div className="text-xs text-slate-500 pl-5">{lv === '标准' ? '精炼总结，突出核心要点' : '更多细节，保留案例数据'}</div>
 </div>
 );
 })}
 </div>
 </div>
 <div className="space-y-2">
 <label className="text-slate-700 font-bold block text-sm">AI 模型</label>
 <Select value={model} onValueChange={setModel}>
 <SelectTrigger className="w-full">
 <SelectValue placeholder="选择模型" />
 </SelectTrigger>
 <SelectContent>
 {MODEL_ITEMS.map((m) => (
 <SelectItem key={m.value} value={m.value} disabled={m.disabled}>
 <span className="flex items-center gap-2">
 <span>{m.value}</span>
 <span className="text-xs text-gray-400">
 {m.credit} {m.disabled && <span className="ml-1 text-orange-500">Plus</span>}
 </span>
 </span>
 </SelectItem>
 ))}
 </SelectContent>
 </Select>
 <div className="text-xs text-slate-400">thinking 模型处理速度较慢</div>
 </div>
 </div>
 <div className="flex justify-end pt-2">
 <button
 data-ss-cancel
 onClick={onClose}
 className="px-5 py-2.5 bg-gray-100 text-slate-600 font-medium rounded-xl hover:bg-gray-200 transition-colors mr-3"
 >
 取消
 </button>
 <button
 data-ss-ok
 onClick={() => {
 onCommit({ follow, lang, level, model });
 onClose();
 }}
 className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg"
 >
 确定
 </button>
 </div>
 </>
 );
}
