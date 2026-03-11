import React from 'react';
const FlowRows = [
  { price: '67085', size: '0.098', side: 'buy', time: '21:04:03' },
  { price: '67086', size: '0.25', side: 'sell', time: '21:03:58' },
  { price: '67087', size: '0.11', side: 'buy', time: '21:03:52' },
];
const clr = (side: string) => side === 'buy' ? '#78f5bd' : '#ff8989';
const TradeFlowStub: React.FC = () => (
  <div style={{ background:'#191e30',borderRadius:12,padding:'11px 16px 13px',color:'#dbefff',boxShadow:'0 1px 9px #09192d36',border:'1.15px solid #2a3564',fontFamily:'Roboto Mono, monospace',marginBottom:6 }}>
    <div style={{fontWeight:700, fontSize:16.2, color:'#62f2c2', marginBottom:5,letterSpacing:'0.01em'}}>Trade Flow</div>
    <div>
      {FlowRows.map((row, i) => (
        <div key={i} style={{fontSize:14.2, fontWeight:600, color: clr(row.side), display:'flex', gap:18}}>
          <span>{row.side.toUpperCase()}</span>
          <span>{row.price}</span>
          <span style={{color:'#c7e8e0'}}>{row.size} BTC</span>
          <span style={{marginLeft:'auto', opacity:0.61, fontWeight:400}}>{row.time}</span>
        </div>
      ))}
    </div>
  </div>
);
export default TradeFlowStub;
