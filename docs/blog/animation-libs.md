# 可商用动效库接入手册（Effects Lab）

> 对应站内路由：[`/effects`](../../src/app/effects) · 每个子页 **路由级懒加载**，默认商店页不引入重库。

## 为什么按路由拆？

| 页面 | 是否加载动效库 |
|------|----------------|
| `/` · `/products` · PDP · 分类 · 指南 | ❌ 不加载 |
| `/effects/*` | ✅ 仅当前页对应的库 |

实现：`next/dynamic(..., { ssr: false })` + 独立 `Lazy*.tsx` Client 边界。SEO 正文页保持 Server Component 干净。

## 库与许可证

| 库 | npm | 许可证 | Demo 路由 | 备注 |
|----|-----|--------|-----------|------|
| Motion（原 Framer Motion） | `motion` | **MIT** | `/effects/motion` | `import { motion } from "motion/react"` |
| GSAP | `gsap` | 核心免费可商用* | `/effects/gsap` | *Club 插件（ScrollTrigger 等部分）需查官网授权；本 Demo **只用 core** |
| Lottie | `lottie-react` | **MIT** | `/effects/lottie` | 小 JSON；大动画注意体积 |
| Auto-Animate | `@formkit/auto-animate` | **MIT** | `/effects/auto-animate` | 列表/购物车最省事 |
| React Spring | `@react-spring/web` | **MIT** | `/effects/spring` | 弹簧物理手感 |
| Animate.css | `animate.css` | **MIT** | `/effects/animate-css` | **仅该页** `import "animate.css"` |
| Tailwind `@keyframes` | （已有） | **MIT** | `/effects/tailwind` | `globals.css` 中 `.fx-*` |
| Three.js + R3F + drei | `three` `@react-three/fiber` `@react-three/drei` | **MIT** | `/effects/r3f` | 勿堵 LCP；仅实验室页 |

上线前请自行复核各库当前 LICENSE（尤其 GSAP 插件组合）。

## 推荐落地组合（电商）

1. **默认微动效**：Tailwind keyframes + Auto-Animate（加购列表）
2. **营销区块**：Motion 入场 / 手势
3. **空状态插画**：Lottie（压缩 JSON）
4. **品牌秀场**：R3F 单独落地页，绝不塞进 PDP 首屏
5. **复杂时间轴**：GSAP core；用到付费插件再走采购流程

## 文件地图

```text
src/app/effects/           # hub + 8 子路由
src/components/effects/    # Demo + Lazy* 加载器 + catalog
public/lottie/             # 静态 Lottie 副本
docs/blog/animation-libs.md
```

## 与 SEO/GEO 的边界

- Answer-first / JSON-LD / Facts API **不受影响**
- 动效放在交互后（加购、筛选、实验室），不替代可见文本事实
- 3D / 大 Lottie 不进关键抓取模板的首屏关键路径

