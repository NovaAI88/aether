// API route: /api/status - Status/health endpoint
import { Router } from 'express';
const router = Router();

router.get('/status', (req, res) => {
  res.json({status: 'ok', uptime: process.uptime(), build: process.env.BUILD_HASH || 'dev', timestamp: new Date().toISOString()});
});
export default router;
