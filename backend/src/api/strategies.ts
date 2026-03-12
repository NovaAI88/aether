import { Router } from 'express';
const router = Router();

router.get('/strategies/performance', (_req, res) => {
  try {
    const { getStrategyPerformance } = require('../intelligence/performance/strategyPerformanceTracker');
    res.json(getStrategyPerformance());
  } catch (e) {
    res.status(500).json({ error: 'Strategy performance unavailable' });
  }
});

router.get('/strategies/weights', (_req, res) => {
  try {
    const { getAllWeights } = require('../intelligence/weighting/strategyWeightEngine');
    res.json(getAllWeights());
  } catch (e) {
    res.status(500).json({ error: 'Strategy weights unavailable' });
  }
});

export default router;
