// Computes win %/loss %, trade count, PnL, max drawdown, equity curve, for backtest trades
export function calculateMetrics(trades: any[], equityCurve: number[]) {
  const tradesCount = trades.length;
  const wins = trades.filter(t => t.profit > 0).length;
  const losses = trades.filter(t => t.profit <= 0).length;
  const pnl = trades.reduce((sum, t) => sum + t.profit, 0);

  let maxDrawdown = 0;
  let peak = equityCurve.length ? equityCurve[0] : 0;
  for (const equity of equityCurve) {
    if (equity > peak) peak = equity;
    const dd = peak - equity;
    if (dd > maxDrawdown) maxDrawdown = dd;
  }

  return {
    trades: tradesCount,
    wins,
    losses,
    pnl,
    maxDrawdown,
    equityCurve
  };
}
