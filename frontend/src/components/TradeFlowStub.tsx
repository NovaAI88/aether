import React, { useEffect, useRef, useState } from 'react';
import { fetchTrades as apiFetchTrades } from '../api/apiClient';

const TradeFlowStub = () => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stale, setStale] = useState(false);
  const inFlight = useRef(false);

  const pollTrades = async () => {
    if (inFlight.current) return;
    inFlight.current = true;
    setLoading(true);
    setError(null);
    setStale(false);
    try {
      const data = await apiFetchTrades();
      setTrades(Array.isArray(data) ? data : []);
    } catch (err) {
      setError('Failed to load trades');
      setStale(true);
    } finally {
      setLoading(false);
      inFlight.current = false;
    }
  };

  useEffect(() => {
    pollTrades();
    const interval = setInterval(pollTrades, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div>Loading trades...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h3>Recent Trades {stale && '(stale)'}</h3>
      <ul>
        {trades.map((trade, index) => (
          <li key={index}>
            {trade.timestamp ?? '—'} - {trade.symbol ?? '—'} {(trade.side ?? '—').toUpperCase()} {trade.qty ?? ''} at {trade.price ?? '—'} ({trade.status ?? 'unknown'}{trade.reason ? `: ${trade.reason}` : ''})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TradeFlowStub;
