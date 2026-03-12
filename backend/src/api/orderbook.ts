import { Router } from 'express';
const router = Router();

router.get('/orderbook', (_req, res) => {
  res.json({
    bids: [["67085.00", "0.80"], ["67080.50", "0.60"]],
    asks: [["67086.50", "0.75"], ["67090.00", "1.10"]],
    support: "67,100.00",
    resistance: "67,300.00"
  });
});

export default router;
