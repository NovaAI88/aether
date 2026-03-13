// Canonical ExecutionRequest for execution-layer intent, no price/venue/portfolio fields
export interface ExecutionRequest {
  id: string;
  riskDecisionId: string;
  actionCandidateId: string;
  signalId: string;
  strategyId: string;
  symbol: string;
  side: 'buy' | 'sell';
  price: number; // NEW FIELD: market or simulated price for execution
  producer: string;
  timestamp: string;
}
