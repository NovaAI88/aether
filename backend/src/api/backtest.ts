import express from 'express';
import { backtestRun, backtestResults } from '../backtest/backtestRunner';

// Mock sample: minimal valid ProcessedMarketState[]
const mockCandles = [
  { exchange: 'TEST', symbol: 'A', eventType: 'trade', price: 100, volume: 5, timestamp: new Date().toISOString(), movingAvg: 98, enriched: true, baseEvent: {} },
  { exchange: 'TEST', symbol: 'A', eventType: 'trade', price: 104, volume: 7, timestamp: new Date().toISOString(), movingAvg: 99, enriched: true, baseEvent: {} },
  { exchange: 'TEST', symbol: 'A', eventType: 'trade', price: 110, volume: 8, timestamp: new Date().toISOString(), movingAvg: 100, enriched: true, baseEvent: {} },
  { exchange: 'TEST', symbol: 'A', eventType: 'trade', price: 92, volume: 4, timestamp: new Date().toISOString(), movingAvg: 97, enriched: true, baseEvent: {} },
];

const router = express.Router();

// GET /api/backtest/run?variants=v1,v2,v3
router.get('/run', async (req, res) => {
  const variants = (req.query.variants as string || '').split(',').filter(Boolean);
  if (!variants.length) return res.status(400).json({ error: 'No variants specified' });
  // Minimal: run on mock data
  const results = await backtestRun(mockCandles, variants);
  res.json({ results });
});

// GET /api/backtest/results
router.get('/results', (req, res) => {
  res.json({ results: backtestResults() });
});

export default router;
