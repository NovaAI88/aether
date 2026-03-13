const API_BASE = 'http://localhost:3001';

export async function runBacktest(variants = ['v1','v2','v3']) {
  const params = variants.join(',');
  const resp = await fetch(`${API_BASE}/api/backtest/run?variants=${params}`);
  if (!resp.ok) throw new Error('Failed to run backtest');
  return resp.json();
}

export async function fetchBacktestResults() {
  const resp = await fetch(`${API_BASE}/api/backtest/results`);
  if (!resp.ok) throw new Error('Failed to fetch backtest results');
  return resp.json();
}
