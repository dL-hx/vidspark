# 前端状态管理规则：统一使用 zustand

## 总则

- 本项目前端状态管理统一使用 **zustand**。禁止引入或混用 Redux / React-Redux、MobX、Recoil、Jotai、Valtio 等其他状态管理库。
- React 自带的 `useState` / `useReducer` 仅用于组件内部、不与他人共享的局部状态；凡需要跨组件、跨页面共享的状态（如用户信息、登录态、主题、全局业务数据等），必须放入 zustand store。

## 目录与命名

- Store 统一放在 `apps/web/src/stores/` 目录下，一个 store 一个文件。
- 文件命名：`<name>-store.ts`（如 `user-store.ts`、`studio-store.ts`）。
- Hook 命名：`use<Name>Store`（如 `useUserStore`）。

## 编码规范

- 使用 `zustand` 的 `create` API 创建 store，并为 State + Actions 显式定义 TypeScript 接口：

```ts
import { create } from 'zustand';

interface UserState {
 name: string;
 setName: (name: string) => void;
}

export const useUserStore = create<UserState>()((set) => ({
 name: '',
 setName: (name) => set({ name }),
}));
```

- 组件中必须通过选择器订阅状态：`useUserStore((s) => s.name)`；一次选择多个字段时使用 `useShallow`（来自 `zustand/react/shallow`），避免不必要的重渲染。
- 修改状态只能通过 store 内定义的 action 完成，禁止在组件中直接拼装或篡改 store 内部结构。
- 派生/计算数据不要存入 store，在使用处通过选择器计算。
- 需要持久化时，统一使用 zustand 官方 `persist` 中间件，并显式指定 `name` 与需要持久化的字段（`partialize`）。

## Next.js 注意事项

- zustand store 只能在客户端组件（`'use client'`）中使用，禁止在 Server Component、`metadata`、Server Action 中读取 store。
- 模块级单例 store 会在 SSR 请求间共享；若某状态必须按请求隔离，采用「`createStore` + Context Provider」模式，而非模块级 `create`。

## 依赖

- `zustand` 作为 `apps/web` 的依赖安装（`dependencies`），不放入 `packages/ui`。
