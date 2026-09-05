'use client';

/** 事件名：全局顶部 Toast */
export const VS_TOAST_EVENT = 'vs-toast';
/** 事件名：右下角提交成功 Toast */
export const VS_SUBMIT_TOAST_EVENT = 'vs-submit-toast';

/**
 * 全局顶部 Toast（复刻原站 window.vsToast）
 * @param msg 文案
 * @param ok true=成功绿 / false=错误红 / 不传=深灰
 */
export function vsToast(msg: string, ok?: boolean): void {
 window.dispatchEvent(new CustomEvent(VS_TOAST_EVENT, { detail: { msg, ok } }));
}

/** 右下角「提交成功」通知（复刻原站 window.vsSubmitToast.show） */
export function vsSubmitToast(desc?: string): void {
 window.dispatchEvent(new CustomEvent(VS_SUBMIT_TOAST_EVENT, { detail: { desc } }));
}
