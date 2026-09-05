'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@workspace/ui/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@workspace/ui/components/ui/form';
import { Input } from '@workspace/ui/components/ui/input';

import { vsToast } from '@/lib/toast';

const INPUT_CLS =
 'h-auto px-4 py-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent';

const registerSchema = z
 .object({
 name: z.string().min(1, '请输入用户名'),
 email: z.string().min(1, '请输入邮箱').pipe(z.email('请输入正确的邮箱')),
 verificationCode: z.string().length(6, '请输入6位验证码'),
 password: z.string().min(8, '密码需为 8-20 位字符').max(20, '密码需为 8-20 位字符'),
 confirmPassword: z.string().min(1, '请确认密码').max(20, '密码需为 8-20 位字符'),
 })
 .refine((d) => d.password === d.confirmPassword, {
 message: '两次输入的密码不一致',
 path: ['confirmPassword'],
 });

type RegisterFormValues = z.infer<typeof registerSchema>;

/** 注册表单：demo 站点阻止真实提交，按原站逻辑弹「注册成功！已自动登录」Toast */
export function RegisterForm() {
 const form = useForm<RegisterFormValues>({
 resolver: zodResolver(registerSchema),
 defaultValues: { name: '', email: '', verificationCode: '', password: '', confirmPassword: '' },
 });

 const onSubmit = () => {
 vsToast('注册成功！已自动登录', true);
 };

 return (
 <Form {...form}>
 <form onSubmit={form.handleSubmit(onSubmit)}>
 <FormField
 control={form.control}
 name="name"
 render={({ field }) => (
 <FormItem className="mb-4">
 <FormLabel className="block text-sm font-medium text-gray-700 mb-1">用户名</FormLabel>
 <FormControl>
 <Input type="text" placeholder="请输入用户名" className={INPUT_CLS} {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="email"
 render={({ field }) => (
 <FormItem className="mb-4">
 <FormLabel className="block text-sm font-medium text-gray-700 mb-1">邮箱</FormLabel>
 <FormControl>
 <Input type="email" placeholder="请输入邮箱" className={INPUT_CLS} {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="verificationCode"
 render={({ field }) => (
 <FormItem className="mb-4">
 <FormLabel className="block text-sm font-medium text-gray-700 mb-1">邮箱验证码</FormLabel>
 <FormControl>
 <div className="flex gap-3">
 <Input
 type="text"
 maxLength={6}
 placeholder="请输入6位验证码"
 className={`${INPUT_CLS} flex-1`}
 {...field}
 />
 <Button
 type="button"
 className="h-auto px-4 py-3 bg-indigo-500 text-white font-medium rounded-lg hover:bg-indigo-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap"
 >
 {' '}
 获取验证码{' '}
 </Button>
 </div>
 </FormControl>
 <p className="mt-1 text-xs text-gray-500">验证码5分钟内有效</p>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="password"
 render={({ field }) => (
 <FormItem className="mb-4">
 <FormLabel className="block text-sm font-medium text-gray-700 mb-1">密码</FormLabel>
 <FormControl>
 <Input type="password" maxLength={20} placeholder="请输入密码 (8-20位字符)" className={INPUT_CLS} {...field} />
 </FormControl>
 <div className="mt-1 text-xs text-gray-500"> 推荐：使用大小写字母、数字和特殊字符的组合 </div>
 <FormMessage />
 </FormItem>
 )}
 />
 <FormField
 control={form.control}
 name="confirmPassword"
 render={({ field }) => (
 <FormItem className="mb-6">
 <FormLabel className="block text-sm font-medium text-gray-700 mb-1">确认密码</FormLabel>
 <FormControl>
 <Input type="password" maxLength={20} placeholder="请确认密码" className={INPUT_CLS} {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <div className="mb-6">
 <Button
 type="submit"
 className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
 >
 <i className="fa-solid fa-user-plus mr-2"></i>注册{' '}
 </Button>
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
 </Form>
 );
}
