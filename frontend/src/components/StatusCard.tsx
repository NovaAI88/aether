import React, { useEffect, useState } from 'react';
import { fetchEngineStatus } from '../api/apiClient';

const StatusCard: React.FC = () => {
  const [data, setData] = useState<any|null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchEngineStatus();
        setData(result);
      } catch (e) {
        setError('Cannot reach backend');
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    load();
    const interval = setInterval(load, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{background:'#212c3b',borderRadius:12,padding:'16px',boxShadow:'0 1px 8px #13204026',minWidth:220,maxWidth:330}}>
      <div style={{fontSize:'1.09rem',color:'#b2bdd7',fontWeight:600,marginBottom:5}}>Status Summary</div>
      {loading ? (<div style={{color:'#abc'}}>Loading…</div>) : error ? (
        <div style={{color:'#f85d6c'}}>{error}</div>
      ) : data ? (
        <>
        <div style={{fontWeight:700,color:data.status==='ok'||data.status==='OK'? '#30e094':'#f9ad1a',fontSize:'1.35rem',marginBottom:'.92rem'}}>{data.status||'Unknown'}</div>
        <div style={{fontSize:'0.98rem',color:'#a7b0bb'}}>Service: <b style={{color:'#7f93f8'}}>{data.service||'-'}</b></div>
        <div style={{fontSize:'0.94rem',color:'#a7b0bb'}}>Timestamp: <span style={{color:'#97a0b8'}}>{data.time||data.timestamp}</span></div>
        <div style={{fontSize:'.93rem',color:'#a7b0bb'}}>Uptime: {data.uptime? Number(data.uptime).toFixed(1)+'s':''}</div>
        </>
      ) : (
        <div style={{color:'#ffeeb3'}}>No engine status</div>
      )}
    </div>
  );
};
export default StatusCard;
