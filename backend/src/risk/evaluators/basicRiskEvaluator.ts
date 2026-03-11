// Deterministic basic risk evaluator: idempotency and structure checks only
import { ActionCandidate } from '../../models/ActionCandidate';
import { RiskDecision } from '../../models/RiskDecision';

export function basicRiskEvaluator(candidate: ActionCandidate, duplicate: boolean): RiskDecision {
  if (duplicate) {
    return {
      id: (Math.random() * 1e17).toString(36),
      actionCandidateId: candidate.id,
      signalId: candidate.signalId,
      approved: false,
      reason: 'Duplicate ActionCandidate.id - already evaluated',
      producer: 'risk',
      timestamp: new Date().toISOString(),
      policyName: 'idempotency_check'
    };
  }
  if (!candidate.id || !candidate.signalId || !candidate.symbol || !candidate.side) {
    return {
      id: (Math.random() * 1e17).toString(36),
      actionCandidateId: candidate.id,
      signalId: candidate.signalId,
      approved: false,
      reason: 'Missing required ActionCandidate field(s)',
      producer: 'risk',
      timestamp: new Date().toISOString(),
      policyName: 'structure_check'
    };
  }
  if (candidate.side !== 'buy' && candidate.side !== 'sell') {
    return {
      id: (Math.random() * 1e17).toString(36),
      actionCandidateId: candidate.id,
      signalId: candidate.signalId,
      approved: false,
      reason: 'Unsupported side value, must be buy/sell',
      producer: 'risk',
      timestamp: new Date().toISOString(),
      policyName: 'side_support_check'
    };
  }
  return {
    id: (Math.random() * 1e17).toString(36),
    actionCandidateId: candidate.id,
    signalId: candidate.signalId,
    approved: true,
    reason: 'Pass: deterministic safe action',
    producer: 'risk',
    timestamp: new Date().toISOString(),
    policyName: 'basic_policy'
  };
}
