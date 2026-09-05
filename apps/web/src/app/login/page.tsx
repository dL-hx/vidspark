import type { Metadata } from 'next';

import { LoginForm } from '@/components/auth/login-form';

export const metadata: Metadata = {
 title: 'VidSpark - 音视频转录与智能总结',
};

export default function LoginPage() {
 return (
 <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen flex items-center justify-center">
 <div className="container mx-auto px-4 py-12">
 <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
 <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 text-white">
 <div className="flex items-center justify-center mb-4">
 <svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 24 24"
 fill="none"
 stroke="currentColor"
 strokeWidth="2"
 strokeLinecap="round"
 strokeLinejoin="round"
 className="w-16 h-16 text-white"
 >
 <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="2"></rect>
 <path d="M8 9.5l5 3-5 3v-6z" fill="currentColor" stroke="none"></path>
 <path d="M15 10h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M15 14h3" strokeWidth="2" strokeLinecap="round"></path>
 <path d="M21 2l1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2z" fill="currentColor" stroke="none"></path>
 </svg>
 </div>
 <h1 className="text-3xl font-bold text-center">VidSpark</h1>
 <p className="text-center mt-2">视频转文字与AI智能总结</p>
 </div>
 <div className="p-8">
 <div className="flex flex-col md:flex-row gap-8">
 <div className="flex-1 wechat-login">
 <div className="text-center py-8">
 <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
 <i className="fa-brands fa-weixin text-4xl text-green-500"></i>
 </div>
 <p className="text-gray-500 text-sm mb-4">快速安全的微信登录</p>
 <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors">
 {' '}
 加载二维码{' '}
 </button>
 </div>
 </div>
 <div className="hidden md:flex flex-col items-center justify-center">
 <div className="w-px h-full bg-gray-200 relative">
 <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 text-gray-400 text-sm">
 或
 </span>
 </div>
 </div>
 <div className="md:hidden flex items-center justify-center my-4">
 <div className="flex-1 h-px bg-gray-200"></div>
 <span className="px-4 text-gray-400 text-sm">或</span>
 <div className="flex-1 h-px bg-gray-200"></div>
 </div>
 <div className="flex-1">
 <h3 className="text-lg font-medium text-gray-700 mb-4 text-center">
 <i className="fa-solid fa-envelope mr-2 text-indigo-500"></i>邮箱密码登录{' '}
 </h3>
 <LoginForm />
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
 );
}
