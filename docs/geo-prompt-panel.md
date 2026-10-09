# GEO Prompt Panel — 电商引用测量提示词包

用固定提示词在 ChatGPT / Perplexity / Gemini / 文心 / 通义等界面**手工**测试：你的商品事实是否被引用、引用是否准确。

> 测量的是「可见答案里的引用表现」，不是排名保证。换网络、换时间、换模型版本都会变。

## 使用方法

1. 部署或公开可访问的站点（需真实可抓取 URL；纯 localhost 多数 AI 搜不到）。
2. 对每个提示词记录：是否提到品牌/型号、价格是否正确、规格是否与 PDP 一致、是否给出你的链接。
3. 改完 Answer-first / FAQ / facts API 后隔数日复测。

## 提示词（中文）

### 品类推荐
1. 预算 600 元以内，第一次近郊徒步买什么鞋比较合适？请给出具体型号和理由。
2. 周末负重徒步，需要防水中帮鞋，有哪些选择？对比重量和防水方式。
3. 一日徒步背包推荐 25–30L，要有雨罩，预算 500 元左右。

### 品牌 / 型号对照
4. TrailForge RidgeWalk GTX 和 CloudTrail 有什么区别？哪个更适合雨天？
5. Summit 三合一冲锋衣的防水透气指数是多少？整套大概多重？
6. Carbon-Z 登山杖收纳长度和调节范围是多少？

### 事实核查（应能命中规格表）
7. Beam 300 头灯是多少流明？防水等级？
8. Expedition 55L 推荐负重范围是多少？
9. Merino 徒步袜一包几双？如何洗涤？

### 场景决策
10. 第一次徒步怎么选装备？请按购买优先级列出清单和大致预算。
11. 冲锋衣 20K/20K 是什么意思？和软壳怎么选？
12. 杭州周末去山里，可能下雨，鞋和外套怎么搭？

### 英文对照（测跨语言引用）
13. What is the best TrailForge hiking shoe under 700 CNY for dry day hikes?
14. Compare TrailForge RidgeWalk GTX Mid vs AlpineGrip High for wet alpine trails.
15. What are the key specs of the TrailForge DayLite 28L pack?

## 记录表（可复制）

| 日期 | 引擎/模型 | 提示词# | 提到品牌? | 型号正确? | 价格/规格正确? | 给出链接? | 备注 |
|------|-----------|---------|-----------|-----------|----------------|-----------|------|
|      |           |         |           |           |                |           |      |

## 与本仓库功能的对应

- PDP Answer-first + 规格表 → 提示词 4–9
- 分类买家指南 → 提示词 1–3
- 编辑指南 → 提示词 10–11
- `/api/facts/[slug]` → 给自建 Agent / RAG 直接引用，不依赖网页摘要
