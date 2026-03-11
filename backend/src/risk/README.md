# Risk Layer

Responsibilities:
- Consumes ActionCandidate events (intent only)
- Coordinates deterministic policy/idempotency checks
- Maintains veto authority for downstream execution
- Emits RiskDecision (approval, reject, with rationale) to risk.decision topic

Strictly prohibited:
- No order placement, execution, or persistence logic
- No portfolio, ML, optimization, or broker/routing calls
- Communicates only via the event bus

Idempotency: No duplicate ActionCandidate.id may be processed/approved within one run.