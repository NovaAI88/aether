import React, { useState } from 'react';
import { runBacktest, fetchBacktestResults } from '../api/backtestApi';

interface BacktestResult {
  variant: string;
  trades: number;
  wins: number;
  losses: number;
  pnl: number;
  maxDrawdown: number;
  equityCurve: number[];
}

export default function BacktestPage() {
  const [results, setResults] = useState<BacktestResult[]>([]);
  const [loading, setLoading] = useState(false);

  const handleRun = async () => {
    setLoading(true);
    try {
      await runBacktest(['v1','v2','v3']);
      const data = await fetchBacktestResults();
      setResults(data.results || []);
    } catch (e) {
      setResults([]);
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: 32 }}>
      <h2>Backtesting</h2>
      <button onClick={handleRun} disabled={loading}>
        {loading ? 'Running...' : 'Run Backtest'}
      </button>
      <table style={{ marginTop: 24, minWidth: 400 }}>
        <thead>
          <tr>
            <th>Variant</th>
            <th>Trades</th>
            <th>Win Rate</th>
            <th>PnL</th>
            <th>Drawdown</th>
          </tr>
        </thead>
        <tbody>
          {results.map((r) => (
            <tr key={r.variant}>
              <td>{r.variant}</td>
              <td>{r.trades}</td>
              <td>{r.wins && r.trades ? ((r.wins / r.trades) * 100).toFixed(1) + '%' : '-'}</td>
              <td>{r.pnl}</td>
              <td>{r.maxDrawdown}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
