// Canonical ExecutionResult model (operational outcome)
export interface ExecutionResult {
  id: string;
  executionRequestId: string;
  riskDecisionId: string;
  actionCandidateId: string;
  signalId: string;
  strategyId: string;
  price: number; // NEW FIELD: propagated price of execution
  status: 'simulated' | 'rejected' | 'failed';
  reason: string;
  adapter: string;
  timestamp: string;
}
