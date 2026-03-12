import React, { useEffect, useState } from 'react';
import { fetchDecisions } from '../api/apiClient';

const MarketIntelPanel: React.FC = () => {
  const [decisions, setDecisions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchDecisions();
      setDecisions(data || []);
    } catch (err: any) {
      setError('No connection to backend');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{
      background:'#192331',
      borderRadius:11,
      padding:'18px 17px 14px',
      color:'#f9fbfd',
      boxShadow:'0 1px 13px #0a254a23',
      minWidth:180,
      minHeight:78,
      maxHeight:156,
      border:'1.3px solid #263a53',
      marginRight:2
    }}>
      <div style={{fontWeight:800,fontSize:15.6,color:'#62e9c4',marginBottom:5,letterSpacing:'-0.13px'}}>Intelligence</div>
      {loading ? <div style={{color:'#abc'}}>Loading…</div> : error ? (
        <div style={{color:'#f85d6c'}}>{error}</div>
      ) : decisions.length === 0 ? (
        <div style={{color:'#ffeeb3'}}>No recent decisions</div>
      ) : (
        decisions.slice(0,3).map((d,i) => (
          <div key={i} style={{marginBottom:6,lineHeight:1.25,color:'#53b4f6',fontWeight:600,fontSize:15.1}}>
            {d.strategy || d.action || d.msg || d.symbol || 'Decision'}
          </div>
        ))
      )}
    </div>
  );
};
export default MarketIntelPanel;
