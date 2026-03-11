// Test Risk Layer: idempotency and deterministic approval
import { EventBus } from '../../../src/events/eventBus';
import { EVENT_TOPICS } from '../../../src/events/topics';
import { getMockRawPayload } from '../../../src/ingestion/connectors/mockConnector';
import { adaptMockPayloadToMarketEvent } from '../../../src/ingestion/adapters/mockAdapter';
import { publishMarketEvent } from '../../../src/ingestion/publishers/marketEventPublisher';
import { startProcessingPipeline } from '../../../src/processing/processingPipeline';
import { startIntelligencePipeline } from '../../../src/intelligence/intelligencePipeline';
import { startDecisionPipeline } from '../../../src/decision/decisionPipeline';
import { startRiskPipeline } from '../../../src/risk/riskPipeline';

const TEST_ID = 'idempotency-test-id-123';

describe('Risk Pipeline', () => {
  it('should approve first unique ActionCandidate and reject duplicate', done => {
    const bus = new EventBus();
    startProcessingPipeline(bus);
    startIntelligencePipeline(bus);
    startDecisionPipeline(bus);
    startRiskPipeline(bus);

    let approvals = 0, rejections = 0;
    bus.subscribe(EVENT_TOPICS.RISK_DECISION, envelope => {
      const dec = envelope.payload;
      if (dec.approved) approvals++;
      else rejections++;
      if (approvals === 1 && rejections === 1) done();
    });
    // Simulate unique ActionCandidate
    const raw = getMockRawPayload();
    raw.price = 9000; raw.movingAvg = 9500; // strong BUY
    const evt = adaptMockPayloadToMarketEvent(raw);
    publishMarketEvent(bus, evt, "test-risk");
    // Duplicate ActionCandidate
    setTimeout(() => {
      // Re-publish the same candidate.id via synthetic means
      const actionCandidate = {
        id: TEST_ID,
        signalId: 'sig-abc',
        symbol: 'BTCUSDT',
        side: 'buy',
        confidence: 0.9,
        rationale: 'Test duplicate',
        strategy: 'test',
        timestamp: new Date().toISOString()
      };
      bus.subscribe(EVENT_TOPICS.DECISION_CANDIDATE, envelope => {
        bus.publish(EVENT_TOPICS.DECISION_CANDIDATE, { ...envelope, payload: actionCandidate });
      })
      bus.publish(EVENT_TOPICS.DECISION_CANDIDATE, { id: 'env-1', payload: actionCandidate });
    }, 50);
  });
});
