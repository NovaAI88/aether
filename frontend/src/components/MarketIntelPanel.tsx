import React from 'react';
const intel = [
  { msg: "AI Risk: Neutral", color: '#38e382' },
  { msg: "Signal: BTC uptrend", color: '#53b4f6' },
  { msg: "Liquidations up 8% (24h)", color: '#ffe77b' }
];

const MarketIntelPanel: React.FC = () => (
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
    {intel.map((x,i) => (
      <div key={i} style={{marginBottom:6,lineHeight:1.25,color:x.color,fontWeight:600,fontSize:15.1}}>
        {x.msg}
      </div>
    ))}
  </div>
);

export default MarketIntelPanel;
