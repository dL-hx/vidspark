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

const loginSchema = z.object({
 email: z.string().min(1, '请输入邮箱').pipe(z.email('请输入正确的邮箱')),
 password: z.string().min(8, '密码至少 8 位'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

/** 登录表单：demo 站点阻止真实提交，按原站逻辑弹「登录成功，正在跳转...」Toast */
export function LoginForm() {
 const form = useForm<LoginFormValues>({
 resolver: zodResolver(loginSchema),
 defaultValues: { email: '', password: '' },
 });

 const onSubmit = () => {
 vsToast('登录成功，正在跳转...', true);
 };

 return (
 <Form {...form}>
 <form onSubmit={form.handleSubmit(onSubmit)}>
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
 name="password"
 render={({ field }) => (
 <FormItem className="mb-6">
 <div className="flex justify-between">
 <FormLabel className="block text-sm font-medium text-gray-700 mb-1">密码</FormLabel>
 <Link href="#" className="text-sm text-indigo-600 hover:underline">
 忘记密码？
 </Link>
 </div>
 <FormControl>
 <Input type="password" placeholder="请输入密码" className={INPUT_CLS} {...field} />
 </FormControl>
 <FormMessage />
 </FormItem>
 )}
 />
 <div className="mb-6">
 <Button
 type="submit"
 className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
 >
 <i className="fa-solid fa-sign-in-alt mr-2"></i>登录{' '}
 </Button>
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
 </Form>
 );
}
