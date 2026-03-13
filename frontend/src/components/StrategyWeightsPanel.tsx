import React, { useEffect, useState } from 'react';
import { fetchStrategyWeights } from '../api/apiClient';

const POLL_INTERVAL = 4000;

const StrategyWeightsPanel: React.FC = () => {
  const [weights, setWeights] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    let mounted = true;
    const load = (isInitial = false) => {
      if (isInitial) setLoading(true);
      setError(null);
      fetchStrategyWeights()
        .then(res => { if(mounted) setWeights(res); })
        .catch(() => mounted && setError('Failed to fetch weights'))
        .finally(() => { if(mounted && isInitial) setLoading(false); });
    };
    load(true);
    const t = setInterval(() => load(false), POLL_INTERVAL);
    return () => { mounted = false; clearInterval(t); };
  }, []);

  if (loading) return <div style={{padding:14}}>Loading weights…</div>;
  if (error && Object.keys(weights).length === 0) return <div style={{color:'#f97',padding:10}}>Error: {error}</div>;

  return (
    <div style={{padding:16,background:'#232944',borderRadius:13,marginBottom:14,boxShadow:'0 1px 8px #142a3a16',minWidth:220}}>
      <div style={{fontWeight:800,fontSize:'1.16rem',color:'#a7f4b8',marginBottom:10}}>Current Strategy Weights</div>
      {error && <div style={{color:'#f97',marginBottom:7}}>Refresh error: {error}</div>}
      <ul style={{paddingLeft:0,listStyle:'none',color:'#c9edea',fontSize:15}}>
        {Object.entries(weights).map(([sid, w] : [string, any]) => (
          <li key={sid} style={{margin:'5px 0',display:'flex',alignItems:'center'}}>
            <span style={{fontWeight:600,color:'#f7faad',marginRight:7}}>{sid}:</span>
            <span style={{fontWeight:700,color:w>=1?'#b6f5b8':'#fca6a6'}}>{w.toFixed(3)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StrategyWeightsPanel;
