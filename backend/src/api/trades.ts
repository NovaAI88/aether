import { Router } from 'express';
const router = Router();

router.get('/trades', (_req, res) => {
  res.json([
    { side: "buy", price: "67085", size: "0.098", time: "13:47:59" },
    { side: "sell", price: "67086", size: "0.25", time: "13:47:52" },
    { side: "buy", price: "67087", size: "0.11", time: "13:47:45" }
  ]);
});

export default router;
