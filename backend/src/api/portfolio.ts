import { Router } from 'express';
const router = Router();

router.get('/portfolio/paper', (_req, res) => {
  try {
    const { getPortfolio } = require('../portfolio/state/portfolioLedger');
    // getPortfolio already includes capped trade history, realized/unrealized PnL, open positions, equity, balance
    res.json(getPortfolio());
  } catch (e) {
    res.status(500).json({ error: 'Paper portfolio unavailable' });
  }
});

export default router;
