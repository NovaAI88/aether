// Canonical RiskDecision model (approval/rejection only, audit-friendly)
export interface RiskDecision {
  id: string;
  actionCandidateId: string;
  signalId: string;
  approved: boolean;
  reason: string;
  producer: string;
  timestamp: string;
  policyName?: string;
}
