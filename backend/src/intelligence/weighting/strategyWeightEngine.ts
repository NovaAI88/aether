// Adaptive strategy weighting engine
const MIN_WEIGHT = 0.25;
const MAX_WEIGHT = 2.0;
const weights: Record<string, number> = {};

export function getWeight(strategyId: string): number {
  return weights[strategyId] ?? 1.0;
}

export function updateWeights(perf: Record<string, any>) {
  Object.entries(perf).forEach(([id, metrics]) => {
    let w = weights[id] ?? 1.0;
    if (!metrics || typeof metrics !== 'object') return;
    const { realizedPnL = 0, winRate = 0.5, maxDrawdown = 0 } = metrics;
    // Simplest rule:
    if (realizedPnL > 0 && winRate >= 0.55 && maxDrawdown < 0.10) {
      w += 0.15;
    } else if (realizedPnL < 0 || winRate < 0.45 || maxDrawdown > 0.20) {
      w -= 0.20;
    }
    w = Math.max(MIN_WEIGHT, Math.min(MAX_WEIGHT, w));
    weights[id] = w;
  });
}

export function getAllWeights() {
  return { ...weights };
}
