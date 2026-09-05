'use client';

import Link from 'next/link';

import { vsToast } from '@/lib/toast';

/** 登录表单：demo 站点阻止真实提交，按原站逻辑弹「登录成功，正在跳转...」Toast */
export function LoginForm() {
 return (
 <form
 onSubmit={(e) => {
 e.preventDefault();
 vsToast('登录成功，正在跳转...', true);
 }}
 >
 <div className="mb-4">
 <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
 邮箱
 </label>
 <input
 id="email"
 type="email"
 required
 placeholder="请输入邮箱"
 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
 />
 </div>
 <div className="mb-6">
 <div className="flex justify-between">
 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
 密码
 </label>
 <Link href="#" className="text-sm text-indigo-600 hover:underline">
 忘记密码？
 </Link>
 </div>
 <input
 id="password"
 type="password"
 required
 minLength={8}
 placeholder="请输入密码"
 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
 />
 </div>
 <div className="mb-6">
 <button
 type="submit"
 className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
 >
 <i className="fa-solid fa-sign-in-alt mr-2"></i>登录{' '}
 </button>
 </div>
 <div className="text-center">
 <p className="text-gray-600">
 还没有账号？{' '}
 <Link href="/register" className="text-indigo-600 font-semibold hover:underline">
 立即注册{' '}
 </Link>
 </p>
 </div>
 </form>
 );
}
