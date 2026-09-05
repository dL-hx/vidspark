<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 前端状态管理

- 前端状态管理统一使用 **zustand**，禁止引入 Redux、MobX、Recoil、Jotai 等其他状态管理库。
- 详细规范（目录结构、命名、选择器、Next.js 注意事项）见 `.trae/rules/state-management.md`。
