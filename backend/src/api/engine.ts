import { Router } from 'express';
const router = Router();

router.get('/engine/status', (_req, res) => {
  res.json({
    time: new Date().toISOString(),
    status: 'ok',
    uptime: process.uptime(),
    pid: process.pid,
    memory: process.memoryUsage()
  });
});

// [STAGE 7] Execution mode
router.get('/engine/mode', (_req, res) => {
  try {
    const { getEngineMode } = require('../execution/mode/executionMode');
    res.json({ mode: getEngineMode() });
  } catch {
    res.status(500).json({ error: 'Engine mode unavailable' });
  }
});

export default router;
