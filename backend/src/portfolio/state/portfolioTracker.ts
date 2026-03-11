// In-memory portfolio tracker
import { ExecutionResult } from '../../models/ExecutionResult';
import { PortfolioSnapshot } from '../../models/PortfolioSnapshot';

let equity = 100000; // fixed mock equity
let lastExecutionResultId = '';
let openPositions: string[] = [];
let lastSnapshot: PortfolioSnapshot|null = null;

export function updatePortfolio(executionResult: ExecutionResult): PortfolioSnapshot {
  lastExecutionResultId = executionResult.id;
  if (!openPositions.includes(executionResult.symbol)) openPositions.push(executionResult.symbol);
  lastSnapshot = {
    id: (Math.random() * 1e17).toString(36),
    equity,
    openPositions,
    lastExecutionResultId,
    timestamp: new Date().toISOString(),
  };
  return lastSnapshot;
}

export function getLatestPortfolioSnapshot(): PortfolioSnapshot|null {
  return lastSnapshot;
}
