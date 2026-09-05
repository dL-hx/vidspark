'use client';

import { useEffect, useState, type ReactNode } from 'react';

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

type SelKey = 'lang' | 'model' | null;

interface SumSettingsDialogProps {
 open: boolean;
 /** 已提交生效的设置 */
 settings: SumSettings;
 onCommit: (next: SumSettings) => void;
 onClose: () => void;
}

/** element 风格下拉选择（总结设置弹窗内用） */
function SsSelect(props: {
 placeholder: string;
 minWidth?: number;
 open: boolean;
 onToggle: () => void;
 value: string;
 children: ReactNode;
}) {
 const { placeholder, minWidth, open, onToggle, value, children } = props;
 return (
 <div className="el-select w-full el-select--medium">
 <div
 className="el-input el-input--medium el-input--suffix"
 onClick={(e) => {
 e.stopPropagation();
 onToggle();
 }}
 >
 <input type="text" readOnly autoComplete="off" placeholder={placeholder} value={value} className="el-input__inner" />
 <span className="el-input__suffix">
 <span className="el-input__suffix-inner">
 <i className={`el-select__caret el-input__icon el-icon-arrow-up ${open ? 'is-reverse' : ''}`}></i>
 </span>
 </span>
 </div>
 <div
 className="el-select-dropdown el-popper"
 style={{ display: open ? undefined : 'none', minWidth: minWidth ?? undefined }}
 >
 <div className="el-scrollbar">
 <div className="el-select-dropdown__wrap el-scrollbar__wrap" style={{ marginBottom: -15, marginRight: -15 }}>
 <ul className="el-scrollbar__view el-select-dropdown__list">{children}</ul>
 </div>
 <div className="el-scrollbar__bar is-horizontal">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateX(0%)' }}></div>
 </div>
 <div className="el-scrollbar__bar is-vertical">
 <div className="el-scrollbar__thumb" style={{ transform: 'translateY(0%)' }}></div>
 </div>
 </div>
 </div>
 </div>
 );
}

/** 总结设置弹窗（el-dialog）：打开时重新挂载内部表单以重置草稿（同原站 ssOpen -> ssRender） */
export function SumSettingsDialog({ open, settings, onCommit, onClose }: SumSettingsDialogProps) {
 return (
 <div
 id="sumSettingsDialog"
 className="el-dialog__wrapper"
 style={{ display: open ? undefined : 'none', zIndex: open ? 2003 : undefined }}
 onClick={(e) => {
 if (e.target === e.currentTarget) onClose();
 }}
 >
 {open && <SumSettingsDialogInner settings={settings} onCommit={onCommit} onClose={onClose} />}
 </div>
 );
}

function SumSettingsDialogInner({
 settings,
 onCommit,
 onClose,
}: Omit<SumSettingsDialogProps, 'open'>) {
 const [follow, setFollow] = useState(settings.follow);
 const [lang, setLang] = useState(settings.lang);
 const [level, setLevel] = useState(settings.level);
 const [model, setModel] = useState(settings.model);
 const [openSel, setOpenSel] = useState<SelKey>(null);

 useEffect(() => {
 const close = () => setOpenSel(null);
 document.addEventListener('click', close);
 return () => document.removeEventListener('click', close);
 }, []);

 const langLabel = lang;
 const modelItem = MODEL_ITEMS.find((m) => m.value === model) ?? { value: 'qwen-flash', label: 'qwen-flash (0.2x credit)', credit: '0.2x credit', disabled: false };

 return (
 <div role="dialog" aria-modal="true" aria-label="总结设置" className="el-dialog rounded-2xl" style={{ marginTop: '15vh', width: 400 }}>
 <div className="el-dialog__header">
 <span className="el-dialog__title">总结设置</span>
 <button type="button" aria-label="Close" className="el-dialog__headerbtn" onClick={onClose}>
 <i className="el-dialog__close el-icon el-icon-close"></i>
 </button>
 </div>
 <div className="el-dialog__body">
 <div className="space-y-6 py-2">
 <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
 <div>
 <span className="text-slate-900 font-bold block">跟随视频原声</span>
 <span className="text-slate-500 text-xs">自动检测视频语言并使用相同语言总结</span>
 </div>
 <div
 id="ssFollowSwitch"
 role="switch"
 aria-checked={follow}
 className={`el-switch ${follow ? 'is-checked' : ''}`}
 onClick={() => setFollow((v) => !v)}
 >
 <input type="checkbox" checked={follow} onChange={() => {}} className="el-switch__input" />
 <span
 className="el-switch__core"
 style={{
 width: 40,
 borderColor: follow ? 'rgb(79, 70, 229)' : '',
 backgroundColor: follow ? 'rgb(79, 70, 229)' : '',
 }}
 ></span>
 </div>
 </div>
 <div id="ssLangSection" className="space-y-2" hidden={follow}>
 <label className="text-slate-700 font-bold block text-sm">目标语言</label>
 <SsSelect
 placeholder="请选择语言"
 minWidth={360}
 open={openSel === 'lang'}
 onToggle={() => setOpenSel(openSel === 'lang' ? null : 'lang')}
 value={langLabel}
 >
 {LANG_OPTIONS.map((l) => (
 <li
 key={l}
 data-value={l}
 data-label={l}
 className={`el-select-dropdown__item ${lang === l ? 'selected' : ''}`}
 onClick={() => {
 setLang(l);
 setOpenSel(null);
 }}
 >
 <span>{l}</span>
 </li>
 ))}
 </SsSelect>
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
 <SsSelect
 placeholder="选择模型"
 minWidth={360}
 open={openSel === 'model'}
 onToggle={() => setOpenSel(openSel === 'model' ? null : 'model')}
 value={modelItem.label}
 >
 {MODEL_ITEMS.map((m) => (
 <li
 key={m.value}
 data-value={m.value}
 data-label={m.label}
 className={`el-select-dropdown__item ${model === m.value ? 'selected' : ''} ${m.disabled ? 'is-disabled' : ''}`}
 onClick={() => {
 if (m.disabled) return;
 setModel(m.value);
 setOpenSel(null);
 }}
 >
 <div className="flex items-center justify-between w-full">
 <span>{m.value}</span>
 <span className="text-xs text-gray-400">
 {m.credit} {m.disabled && <span className="ml-1 text-orange-500">Plus</span>}
 </span>
 </div>
 </li>
 ))}
 </SsSelect>
 <div className="text-xs text-slate-400">thinking 模型处理速度较慢</div>
 </div>
 </div>
 </div>
 <div className="el-dialog__footer">
 <div className="dialog-footer">
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
 </div>
 </div>
 );
}
