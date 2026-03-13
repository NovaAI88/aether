// Manages running all variants in a test, holds in-memory results
import { runBacktest, BacktestResult } from './backtestEngine';

let lastResults: BacktestResult[] = [];

export async function backtestRun(dataset: any[], variants: string[]) {
  lastResults = await runBacktest(dataset, variants);
  return lastResults;
}

export function backtestResults() {
  return lastResults;
}
