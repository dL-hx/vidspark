'use client';

import Link from 'next/link';

import { vsToast } from '@/lib/toast';

/** 注册表单：demo 站点阻止真实提交，按原站逻辑弹「注册成功！已自动登录」Toast */
export function RegisterForm() {
 return (
 <form
 onSubmit={(e) => {
 e.preventDefault();
 vsToast('注册成功！已自动登录', true);
 }}
 >
 <div className="mb-4">
 <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
 用户名
 </label>
 <input
 id="name"
 type="text"
 required
 placeholder="请输入用户名"
 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
 />
 </div>
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
 <div className="mb-4">
 <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700 mb-1">
 邮箱验证码
 </label>
 <div className="flex gap-3">
 <input
 id="verificationCode"
 type="text"
 required
 maxLength={6}
 placeholder="请输入6位验证码"
 className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
 />
 <button
 type="button"
 className="px-4 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
 >
 {' '}
 获取验证码{' '}
 </button>
 </div>
 <p className="mt-1 text-xs text-gray-500">验证码5分钟内有效</p>
 </div>
 <div className="mb-4">
 <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
 密码
 </label>
 <input
 id="password"
 type="password"
 required
 maxLength={20}
 placeholder="请输入密码 (8-20位字符)"
 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
 />
 <div className="mt-1 text-xs text-gray-500"> 推荐：使用大小写字母、数字和特殊字符的组合 </div>
 </div>
 <div className="mb-6">
 <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
 确认密码
 </label>
 <input
 id="confirmPassword"
 type="password"
 required
 maxLength={20}
 placeholder="请确认密码"
 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
 />
 </div>
 <div className="mb-6">
 <button
 type="submit"
 className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
 >
 <i className="fa-solid fa-user-plus mr-2"></i>注册{' '}
 </button>
 </div>
 <div className="text-center">
 <p className="text-gray-600">
 已有账号？{' '}
 <Link href="/login" className="text-indigo-600 font-semibold hover:underline">
 立即登录
 </Link>
 </p>
 </div>
 </form>
 );
}
