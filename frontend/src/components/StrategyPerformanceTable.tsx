import React, { useEffect, useState } from 'react';
import { fetchStrategyPerformance } from '../api/apiClient';

const POLL_INTERVAL = 4000;

const StrategyPerformanceTable: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    let mounted = true;
    const load = (isInitial = false) => {
      if (isInitial) setLoading(true);
      setError(null); // Clear error before each refresh
      fetchStrategyPerformance()
        .then(res => { if(mounted) setData(res); })
        .catch(() => mounted && setError('Failed to fetch performance'))
        .finally(() => { if(mounted && isInitial) setLoading(false); });
    };
    load(true);
    const t = setInterval(() => load(false), POLL_INTERVAL);
    return () => { mounted = false; clearInterval(t); };
  }, []);

  if (loading) return <div style={{padding:16}}>Loading strategy performance…</div>;
  if (error && !data.length) return <div style={{color:'#f97'}}>Error: {error}</div>;
  if (!data.length) return <div style={{padding:16}}>No strategy performance data yet.</div>;

  return (
    <div style={{background:'#192742',borderRadius:12,padding:18,boxShadow:'0 1px 8px #242a2c14',marginBottom:10,minWidth:300}}>
      <div style={{fontWeight:700,fontSize:'1.25rem',color:'#8ddcff',marginBottom:16}}>Strategy Variant Performance</div>
      {error && <div style={{color:'#f97',marginBottom:'7px'}}>Refresh error: {error}</div>}
      <table style={{width:'100%',fontSize:15,background:'none',color:'#e2f6ff'}}>
        <thead>
          <tr style={{background:'#243657'}}>
            <th style={{textAlign:'left',padding:'4px 8px'}}>Strategy</th>
            <th style={{textAlign:'left',padding:'4px 8px'}}>Variant</th>
            <th>Trades</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Win Rate</th>
            <th>PnL</th>
            <th>Drawdown</th>
            <th>Last Equity</th>
          </tr>
        </thead>
        <tbody>
        {data.map((d, idx) => (
          <tr key={d.strategyId + d.variantId + idx} style={{borderBottom:'1.1px solid #283c4c'}}>
            <td style={{padding:'2px 8px',fontWeight:600,color:'#8dfaff'}}>{d.strategyId}</td>
            <td style={{padding:'2px 8px',fontWeight:500,color:'#fff2a9'}}>{d.variantId}</td>
            <td>{d.trades}</td>
            <td style={{color:'#7affae'}}>{d.wins}</td>
            <td style={{color:'#ef9393'}}>{d.losses}</td>
            <td>{(d.winRate*100).toFixed(1)}%</td>
            <td style={{color:d.realizedPnL>=0?'#8af8b1':'#fdab8c'}}>{d.realizedPnL.toFixed(2)}</td>
            <td>{d.maxDrawdown.toFixed(2)}%</td>
            <td>{d.lastEquity.toFixed(2)}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default StrategyPerformanceTable;
