/**
 * Answer-first helpers for GEO (Generative Engine Optimization).
 * Keep the first visible paragraph factual, self-contained, and aligned with JSON-LD.
 */

export function isAnswerFirstQuality(text: string): {
  ok: boolean;
  reasons: string[];
} {
  const reasons: string[] = [];
  const trimmed = text.trim();
  if (trimmed.length < 60) reasons.push("过短：建议至少 60 字，包含可引用事实");
  if (trimmed.length > 400) reasons.push("过长：建议首段控制在 400 字内，便于模型摘引");
  if (!/[。．.！？]/.test(trimmed)) reasons.push("缺少完整句号：应用完整句子作答");
  const marketingOnly =
    /^(欢迎|最|第一|爆款|必买)/.test(trimmed) && !/\d/.test(trimmed);
  if (marketingOnly) reasons.push("偏营销口号：应包含规格、价格或场景等事实");
  return { ok: reasons.length === 0, reasons };
}

export function answerFirstExcerpt(text: string, max = 160): string {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max - 1)}…`;
}
