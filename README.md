# Google Game Store 🎮

Premium game accounts marketplace. Pay with USDT (TRC20). Instant delivery.

## 支持平台
- Steam | EPIC | Riot | Ubisoft | Xbox | Blizzard | Nintendo | PlayStation

## 开始使用

### 本地预览
```bash
npm install
npm run dev
```
浏览器打开 http://localhost:3000

### 部署到 Vercel
1. 上传到 GitHub
2. 在 [vercel.com](https://vercel.com) 导入项目
3. 自动部署

### 需要修改
打开 `src/app/products/[id]/page.tsx`，替换：
- `你的USDT_TRC20钱包地址` → 你的 USDT TRC20 收款地址
- `https://t.me/你的用户名` → 你的 Telegram 链接

## 技术栈
Next.js 16 + TypeScript + Tailwind CSS + Lucide Icons
