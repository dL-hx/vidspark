import { toast } from 'sonner';

/**
 * 全局 Toast（基于 shadcn/ui 的 sonner Toaster，根布局统一挂载）
 * @param msg 文案
 * @param ok true=成功绿 / false=错误红 / 不传=默认深灰
 */
export function vsToast(msg: string, ok?: boolean): void {
 if (ok === true) {
 toast.success(msg);
 } else if (ok === false) {
 toast.error(msg);
 } else {
 toast(msg);
 }
}
