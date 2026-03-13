import React, { useEffect, useState } from 'react';
import { fetchEngineStatus, fetchEngineRisk } from '../api/apiClient';

const POLL_INTERVAL = 4000;

const EngineStatusPanel: React.FC = () => {
  const [status, setStatus] = useState<any|null>(null);
  const [risk, setRisk] = useState<any|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    let mounted = true;
    const load = (isInitial = false) => {
      if (isInitial) setLoading(true);
      setError(null);
      Promise.all([
        fetchEngineStatus().catch(() => null),
        fetchEngineRisk().catch(() => null)
      ]).then(([statusRes, riskRes]) => {
        if(mounted) { setStatus(statusRes); setRisk(riskRes); }
      }).catch(() => mounted && setError("Failed to fetch engine status/risk"))
        .finally(() => { if(mounted && isInitial) setLoading(false); });
    };
    load(true);
    const t = setInterval(() => load(false), POLL_INTERVAL);
    return () => { mounted = false; clearInterval(t); };
  }, []);

  if (loading) return <div style={{padding:13}}>Loading engine status…</div>;
  if (error && !status && !risk) return <div style={{color:'#f97',padding:10}}>Error: {error}</div>;

  return (
    <div style={{padding:'16px 13px',background:'#202c46',borderRadius:13,marginBottom:14,boxShadow:'0 1px 8px #142a3a16',minWidth:220}}>
      <div style={{fontWeight:700,fontSize:'1.18rem',color:'#b2dafa',marginBottom:10}}>Engine Status & Risk</div>
      {error && <div style={{color:'#f97',marginBottom:7}}>Refresh error: {error}</div>}
      {!status ? <div style={{color:'#aaa'}}>No data</div> : (
        <>
          <div><b>Status:</b> <span style={{color:status.status==='ok'||status.status==='OK'?'#59e6be':'#ffeb8a'}}>{status.status||'—'}</span></div>
          <div><b>Uptime:</b> <span>{status.uptime? Number(status.uptime).toFixed(1)+'s':''}</span></div>
          <div><b>Time:</b> <span>{status.time||status.timestamp||'-'}</span></div>
        </>
      )}
      <div style={{marginTop:6,paddingTop:6,borderTop:'1px solid #344556'}}>
        <div style={{fontWeight:500,fontSize:'1.04rem',color:'#ffb8b0',marginBottom:4}}>Risk Controls</div>
        {!risk ? <div style={{color:'#aaa'}}>No risk data</div> : (
          <>
            <div><b>Kill Switch:</b> <span style={{color:risk.killSwitch?'#ff8383':'#aeffea'}}>{risk.killSwitch? 'ACTIVE':'off'}</span></div>
            <div><b>Trading Allowed:</b> <span style={{color:risk.tradingAllowed?'#bbf8d1':'#f88'}}>{risk.tradingAllowed? 'yes':'NO'}</span></div>
            <div><b>Peak Equity:</b> <span>{risk.peakEquity ?? '-'}</span></div>
            <div><b>Max Drawdown:</b> <span>{risk.maxDrawdownPercent}%</span></div>
            <div><b>Daily Loss Limit:</b> <span>{risk.dailyLossLimitPercent}%</span></div>
            <div><b>Max Position:</b> <span>{risk.maxPositionSizePercent}%</span></div>
          </>
        )}
      </div>
    </div>
  );
};

export default EngineStatusPanel;
