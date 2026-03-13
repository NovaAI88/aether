import React, { useEffect, useState } from 'react';
import { fetchSignals } from '../api/apiClient';

const AiPredictionPanel: React.FC = () => {
  const [signals, setSignals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchSignals();
      setSignals(data || []);
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
    <div style={{background:'#18212e',borderRadius:13,padding:'22px 28px',marginBottom:23,boxShadow:'0 1px 13px #27394a12',color:'#e4f1fd',maxWidth:510,minWidth:286}}>
      <div style={{fontWeight:700,fontSize:20,letterSpacing:'-0.3px',color:'#8fd9fe',marginBottom:7}}>AI Trade Analysis</div>
      {loading ? <div style={{color:'#abc'}}>Loading…</div> : error ? (
        <div style={{color:'#f85d6c'}}>{error}</div>
      ) : signals.length === 0 ? (
        <div style={{color:'#ffeeb3'}}>No signals</div>
      ) : (
        <div>
          {signals.slice(0,1).map((sig,i) =>
            <div key={i}>
              <div style={{display:'flex',alignItems:'center',gap:18}}>
                <div style={{fontWeight:700,fontSize:18,color:'#77fbbe',minWidth:90}}>{sig.signalType ? sig.signalType.toUpperCase() : '-'}</div>
                <div style={{fontSize:15,color:'#54caef',fontWeight:700,padding:'0 12px'}}>{sig.strategyId || sig.source || ''} <span style={{color:'#74e0fe',fontWeight:600}}>{sig.variantId ? `(${sig.variantId})` : ''}</span></div>
                <div style={{fontWeight:600,fontSize:15.1,background:'#161b29',padding:'5.5px 15px',borderRadius:9, color:'#9ffbfa'}}>Confidence: {typeof sig.confidence === 'number' ? (sig.confidence*100).toFixed(1) + '%' : '-'}</div>
              </div>
              <div style={{marginTop:9, fontSize:14.9, color:'#d1cbfa', fontWeight:700}}>
                Symbol: <span style={{color:'#9df',fontWeight:800}}>{sig.symbol || '-'}</span>&nbsp; <span style={{color:'#7ee9b8', marginLeft:20}}>Time: <span style={{fontWeight:400}}>{sig.timestamp ? new Date(sig.timestamp).toLocaleTimeString() : '-'}</span></span>
              </div>
              <div style={{marginTop:14,fontSize:15.5,fontWeight:600}}>
                Entry: <span style={{color:'#99ffe3',fontWeight:800}}>-</span>&nbsp;&nbsp;
                | Stop: <span style={{color:'#ff7870',fontWeight:700}}>-</span>&nbsp;&nbsp;
                | Take Profit: <span style={{color:'#90dbff',fontWeight:700}}>-</span>
              </div>
              <div style={{marginTop:13,color:'#dbefff',fontSize:15.2,fontWeight:500,maxWidth:380,opacity:0.93}}>{sig.rationale || <span style={{color:'#5ee9c4'}}>No explanation provided.</span>}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AiPredictionPanel;
