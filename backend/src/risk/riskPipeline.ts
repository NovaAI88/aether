// Risk Layer orchestration: consumes ActionCandidate events, checks idempotency, publishes RiskDecision
import { EventBus } from '../events/eventBus';
import { EVENT_TOPICS } from '../events/topics';
import { basicRiskEvaluator } from './evaluators/basicRiskEvaluator';
import { publishRiskDecision } from './publishers/riskDecisionPublisher';

const processedIds = new Set<string>();

export function startRiskPipeline(bus: EventBus): void {
  bus.subscribe(EVENT_TOPICS.DECISION_CANDIDATE, envelope => {
    const candidate = envelope.payload;
    const duplicate = processedIds.has(candidate.id);
    // Global risk controls
    const { checkLimits } = require('./globalRiskController');
    const riskCheck = checkLimits();
    if (!riskCheck.allowed) {
      const riskBlockedDecision = { ...candidate, status: 'blocked_global_risk', blockedBy: riskCheck.blockedBy };
      try { require('./state/riskState').logRisk(riskBlockedDecision); } catch(e) {}
      publishRiskDecision(bus, riskBlockedDecision, 'risk', envelope.correlationId);
      return;
    }
    const decision = basicRiskEvaluator(candidate, duplicate);
    // Propagate strategyId
    if (candidate && decision) {
      decision.strategyId = candidate.strategyId;
    }
    // Bridge: log for API
    try { require('./state/riskState').logRisk(decision); } catch(e) {}
    publishRiskDecision(bus, decision, 'risk', envelope.correlationId);
    if (!duplicate) {
      processedIds.add(candidate.id);
    }
  });
}
