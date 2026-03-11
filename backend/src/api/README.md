# API Layer (Backend/API Expansion)

Responsibilities:
- Expose read-only, strictly observer endpoints to finalized state only
- Allow safe GETs to /api/status, /api/ping, /api/position, /api/portfolio
- All actual state references provided by public accessors in portfolio/state (read-only)

Prohibited:
- No writes/mutations
- No business, trading, risk, or execution logic
- No domain-layer or bus-coupled event emission in routes
- No state maintained by API routes (pure observer pattern)
