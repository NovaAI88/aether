// Publishes RiskDecision to event bus (risk.decision topic)
import { EventBus } from '../../events/eventBus';
import { RiskDecision } from '../../models/RiskDecision';
import { EVENT_TOPICS } from '../../events/topics';
import { EventEnvelope } from '../../events/eventEnvelope';

export function publishRiskDecision(bus: EventBus, decision: RiskDecision, producer='risk', correlationId?: string): void {
  const envelope: EventEnvelope<RiskDecision> = {
    id: (Math.random() * 1e17).toString(36),
    topic: EVENT_TOPICS.RISK_DECISION,
    timestamp: new Date().toISOString(),
    producer,
    version: '1.0.0',
    correlationId,
    payload: decision
  };
  bus.publish(EVENT_TOPICS.RISK_DECISION, envelope);
}
