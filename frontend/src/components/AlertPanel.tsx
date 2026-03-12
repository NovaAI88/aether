import React, { useEffect, useState } from 'react';
import { fetchRisks } from '../api/apiClient';

const AlertPanel: React.FC = () => {
  const [risks, setRisks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchRisks();
      setRisks(data || []);
    } catch (err: any) {
      setError('No backend connection');
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
    <div style={{ background:'#251e29',borderRadius:11,padding:'12px 16px 13px',color:'#fddb5b',boxShadow:'0 1px 10px #432e1a26',minHeight:38,border:'1.1px solid #51416b',fontSize:14.4,fontWeight:600,letterSpacing:'0.02em',fontFamily:'Inter,Roboto,Arial,sans-serif' }}>
      {loading ? <span style={{color:'#bbb'}}>Loading…</span> : error ? (
        <span style={{ color: '#f85d6c'}}>{error}</span>
      ) : risks.length === 0 ? (
        <span>⚠️ [Alerts]: No new risk events</span>
      ) : (
        <span>⚠️ [Alerts]: {risks.slice(0,2).map((r,i)=>(r.reason || r.approved || r.constraints || r.status || r.id || 'risk') ).join(', ')}</span>
      )}
    </div>
  );
};
export default AlertPanel;
