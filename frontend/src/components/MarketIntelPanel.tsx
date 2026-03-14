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
        decisions.filter(Boolean).slice(0,3).map((d,i) => (
          <div key={i} style={{marginBottom:8,lineHeight:1.25,color:'#53b4f6',fontWeight:600,fontSize:15.1}}>
            <div>
              <span style={{color: '#36e1d3'}}>{d.strategy || 'Unnamed strategy'}</span>&nbsp;
              <span style={{color:'#7ee9b8',fontWeight:700}}>{d.variantId ? `(${d.variantId})` : ''}</span>&nbsp;
              <span style={{color:'#b2e1ff'}}>{d.side ? d.side.toUpperCase() : ''}</span>
              <span style={{color:'#8ad6ff',marginLeft:10}}>{d.symbol || ''}</span>
              <span style={{color:'#d9bfea',marginLeft:14,fontWeight:400,fontSize:13}}>{(typeof d.timestamp === 'string' && !isNaN(Date.parse(d.timestamp))) ? new Date(d.timestamp).toLocaleTimeString() : '-'}</span>
            </div>
            <div style={{fontWeight:400,opacity:0.92,color:'#c0ecff'}}>{d.rationale || <span style={{color:'#949fc4'}}>No rationale.</span>}</div>
            <div style={{color:'#ccf', fontWeight:400, fontSize:13}}>Confidence: {typeof d.confidence === 'number' ? (d.confidence*100).toFixed(1) + '%' : '-'}</div>
          </div>
        ))
      )}
    </div>
  );
};
export default MarketIntelPanel;
