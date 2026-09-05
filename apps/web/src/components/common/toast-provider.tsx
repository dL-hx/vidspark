'use client';

import { useEffect, useState } from 'react';

import { VS_SUBMIT_TOAST_EVENT, VS_TOAST_EVENT } from '@/lib/toast';

interface ToastState {
 msg: string;
 ok?: boolean;
 show: boolean;
}

/** 顶部全局 Toast（样式对应原站 .vs-toast） */
function VsToast() {
 const [state, setState] = useState<ToastState>({ msg: '', show: false });

 useEffect(() => {
 let timer: ReturnType<typeof setTimeout> | undefined;
 const handler = (e: Event) => {
 const { msg, ok } = (e as CustomEvent<{ msg: string; ok?: boolean }>).detail;
 setState({ msg, ok, show: true });
 clearTimeout(timer);
 timer = setTimeout(() => {
 setState((s) => ({ ...s, show: false }));
 }, 2400);
 };
 window.addEventListener(VS_TOAST_EVENT, handler);
 return () => {
 window.removeEventListener(VS_TOAST_EVENT, handler);
 clearTimeout(timer);
 };
 }, []);

 const cls = ['vs-toast'];
 if (state.show) cls.push('show');
 if (state.ok === true) cls.push('ok');
 if (state.ok === false) cls.push('err');

 return <div className={cls.join(' ')}>{state.msg}</div>;
}

/** 右下角「提交成功」卡片（样式由内联 style 复刻原站 submit-toast.js） */
function VsSubmitToast() {
 const [desc, setDesc] = useState('系统正在分析您的视频内容...');
 const [show, setShow] = useState(false);

 useEffect(() => {
 let timer: ReturnType<typeof setTimeout> | undefined;
 const handler = (e: Event) => {
 const detail = (e as CustomEvent<{ desc?: string }>).detail;
 if (detail?.desc) setDesc(detail.desc);
 setShow(true);
 clearTimeout(timer);
 timer = setTimeout(() => setShow(false), 3200);
 };
 window.addEventListener(VS_SUBMIT_TOAST_EVENT, handler);
 return () => {
 window.removeEventListener(VS_SUBMIT_TOAST_EVENT, handler);
 clearTimeout(timer);
 };
 }, []);

 return (
 <div
 className={`vs-submit-toast${show ? ' show' : ''}`}
 role="status"
 style={{
 position: 'fixed',
 bottom: 32,
 right: 32,
 zIndex: 50,
 transform: show ? 'translateY(0)' : 'translateY(80px)',
 opacity: show ? 1 : 0,
 pointerEvents: 'none',
 transition: 'all .5s',
 }}
 >
 <div
 style={{
 display: 'flex',
 alignItems: 'center',
 gap: 16,
 background: '#1e293b',
 border: '1px solid rgba(59,130,246,.3)',
 color: '#fff',
 padding: '16px 24px',
 borderRadius: 12,
 boxShadow: '0 25px 50px -12px rgba(0,0,0,.5)',
 }}
 >
 <div
 style={{
 width: 32,
 height: 32,
 borderRadius: 9999,
 background: 'rgba(34,197,94,.2)',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 color: '#4ade80',
 flex: '0 0 auto',
 }}
 >
 <svg
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth={3}
 strokeLinecap="round"
 strokeLinejoin="round"
 style={{ width: 16, height: 16 }}
 >
 <path d="M20 6 9 17l-5-5" />
 </svg>
 </div>
 <div>
 <h4 style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.4, margin: 0 }}>提交成功</h4>
 <p style={{ fontSize: 12, color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>{desc}</p>
 </div>
 </div>
 </div>
 );
}

/** Toast 挂载点（根布局引入一次） */
export function ToastProvider() {
 return (
 <>
 <VsToast />
 <VsSubmitToast />
 </>
 );
}
