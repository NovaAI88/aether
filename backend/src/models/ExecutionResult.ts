// Canonical ExecutionResult model (operational outcome)
export interface ExecutionResult {
  id: string;
  executionRequestId: string;
  riskDecisionId: string;
  actionCandidateId: string;
  signalId: string;
  strategyId: string;
  price?: number; // Optional: propagated price of execution
  variantId?: string; // Optional: propagated variant identifier
  status: 'simulated' | 'rejected' | 'failed';
  reason: string;
  adapter: string;
  timestamp: string;
}
