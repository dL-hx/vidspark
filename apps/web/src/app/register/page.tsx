import type { Metadata } from 'next';

import { RegisterForm } from '@/components/auth/register-form';

export const metadata: Metadata = {
 title: 'VidSpark - 音视频转录与智能总结',
};

export default function RegisterPage() {
 return (
 <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 min-h-screen flex items-center justify-center">
 <div className="container mx-auto px-4 py-12">
 <div className="max-w-md mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
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
 <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">创建账户</h2>
 <RegisterForm />
 </div>
 </div>
 </div>
 </div>
 );
}
