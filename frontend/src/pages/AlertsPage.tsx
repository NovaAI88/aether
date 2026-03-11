import React from "react";
const alerts = [
  { type: "Signal", msg: "AI: Long BTC/USDT @ 67000", time: "22:28" },
  { type: "Risk", msg: "Portfolio drawdown hit 5%", time: "21:11" },
  { type: "Market", msg: "BTC OI jumps 14% as price breaks $68K", time: "20:57" },
];
const AlertsPage: React.FC = () => (
  <div style={{padding:'38px 0 0 12px',maxWidth:740,margin:'0 auto'}}>
    <h2 style={{fontSize:'2rem',color:'#ffe079',fontWeight:800,marginBottom:13}}>Alerts</h2>
    <div>
      {alerts.map((a,i)=>(
        <div key={i} style={{background:'#201f37',borderRadius:10,padding:'17px 24px',marginBottom:13,boxShadow:'0 1px 8px #0002',color:'#ffc543',fontWeight:700}}>
          <span style={{color:'#ffeeb3',marginRight:18}}>[{a.type}]</span>
          <span style={{color:'#f9fbfe'}}>{a.msg}</span>
          <span style={{float:'right',color:'#837fff',fontWeight:600,fontSize:13}}>{a.time}</span>
        </div>
      ))}
    </div>
  </div>
);
export default AlertsPage;
