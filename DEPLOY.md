# Sukha Vihara — 部署指南

## 方法一：GitHub + Vercel（推荐，5分钟）

1. 去 github.com，新建一个 repository，名字叫 `sukha-vihara`
2. 把这个文件夹里的所有文件上传到 GitHub（拖拽上传即可）
3. 去 vercel.com，用 GitHub 账号登录
4. 点 "Add New Project" → 选择 `sukha-vihara` 仓库
5. Vercel 自动识别 Next.js，直接点 Deploy
6. 部署完成后，进入 Settings → Domains → 输入 `www.sukhavihara.com`
7. Vercel 会给你两条 DNS 记录，去 Namecheap 的 Advanced DNS 添加即可

## 方法二：本地运行测试

```bash
cd sukha-vihara
npm install
npm run dev
# 打开 http://localhost:3000
```

## Namecheap DNS 设置（Vercel 部署后）

在 Namecheap → Advanced DNS 添加：

| 类型 | Host | Value |
|------|------|-------|
| CNAME | www | cname.vercel-dns.com |
| A Record | @ | 76.76.21.21 |

## 文件结构

```
sukha-vihara/
├── src/
│   ├── app/
│   │   ├── layout.tsx     # HTML结构 + 字体
│   │   ├── page.tsx       # 主页面
│   │   └── globals.css    # 全局样式
│   └── components/
│       ├── Navigation.tsx    # 顶部导航栏
│       ├── HeroSection.tsx   # 主视觉区
│       ├── PhilosophySection.tsx  # 品牌理念
│       ├── ProductSection.tsx     # 产品展示
│       └── FooterSection.tsx      # 页脚
├── package.json
├── tsconfig.json
├── next.config.js
└── vercel.json
```
