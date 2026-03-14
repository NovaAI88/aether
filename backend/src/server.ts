import express from 'express';

const app = express();
const port = 3000;

// CORS setup
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.get("/", (_req, res) => {
  res.send("AETHER backend is running.");
});

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "AETHER backend" });
});

app.get("/status", (_req, res) => {
  res.json({
    service: "AETHER backend",
    status: "running",
    time: new Date().toISOString()
  });
});

// Dynamic state for paper trading
let trades: any[] = [];
let performance: any[] = [
  { strategy: "Momentum", pnl: 0, trades: 0 },
  { strategy: "MeanReversion", pnl: 0, trades: 0 }
];
let alerts: string[] = [];

// Mock market data generator
function getMockMarketData() {
  return {
    price: 67000 + Math.random() * 200,
    support: 67100,
    resistance: 67300
  };
}

// Simple strategy signal generation
function generateSignal(data: {price: number}) {
  if (data.price > data.resistance - 50) return 'sell';
  if (data.price < data.support + 50) return 'buy';
  return null;
}

// Simple risk check
function checkRisk(currentExposure: number) {
  return currentExposure < 0.5; // Allow if exposure below 50%
}

// Mock portfolio exposure (simplified)
let currentExposure = 0;

// Execution for paper trade
function executePaperTrade(signal: string, price: number) {
  if (!signal) return;
  const size = 0.1 + Math.random() * 0.1;
  const trade = { side: signal, price: price.toFixed(2), size: size.toFixed(2), time: new Date().toISOString() };
  trades.push(trade);
  
  // Update performance (simplified PNL calculation)
  const pnlChange = signal === 'buy' ? Math.random() * 50 : Math.random() * -30;
  performance[0].pnl += pnlChange;
  performance[0].trades += 1;
  
  // Update exposure
  currentExposure += size * 0.1; // Simplified
  
  alerts.push(`Paper trade executed: ${signal.toUpperCase()} ${size.toFixed(2)} at $${price.toFixed(2)}`);
}

// Autonomous paper trading loop (every 10 seconds)
setInterval(() => {
  const data = getMockMarketData();
  const signal = generateSignal(data);
  if (signal && checkRisk(currentExposure)) {
    executePaperTrade(signal, data.price);
  }
}, 10000);

// --- Mock Order Book Endpoint (unchanged) ---
app.get("/api/orderbook", (_req, res) => {
  res.json({
    bids: [["67085.00", "0.80"], ["67080.50", "0.60"]],
    asks: [["67086.50", "0.75"], ["67090.00", "1.10"]],
    support: "67,100.00",
    resistance: "67,300.00"
  });
});

// --- Dynamic Trades Endpoint ---
app.get("/api/trades", (_req, res) => {
  res.json(trades.slice(-20)); // Last 20 trades
});

// --- Dynamic Strategies Performance Endpoint ---
app.get("/api/strategies/performance", (_req, res) => {
  res.json(performance);
});

// --- Strategies Weights Endpoint (unchanged) ---
app.get("/api/strategies/weights", (_req, res) => {
  res.json({ Momentum: 0.6, MeanReversion: 0.4 });
});

// --- Engine Status Endpoint (updated with mode) ---
app.get("/api/engine/status", (_req, res) => {
  res.json({
    status: "running",
    mode: "paper",
    timestamp: new Date().toISOString(),
    tradeCount: trades.length
  });
});

// --- Engine Risk Endpoint (dynamic) ---
app.get("/api/engine/risk", (_req, res) => {
  res.json({
    riskLevel: currentExposure > 0.4 ? "high" : "low",
    exposure: currentExposure.toFixed(2)
  });
});

// --- New Alerts Endpoint ---
app.get("/api/alerts", (_req, res) => {
  res.json(alerts.slice(-10)); // Last 10 alerts
});

app.listen(port, () => {
  console.log(`AETHER backend running on port ${port} with autonomous paper trading loop`);
});
