import { Router } from 'express';
import { getRecentMarketPrices } from '../market/marketPriceBuffer';
const router = Router();

// GET /api/market/price-history
router.get('/market/price-history', (_req, res) => {
  const prices = getRecentMarketPrices();
  res.json(prices);
});

export default router;
