import React from 'react';
const OrderBookStub: React.FC = () => (
  <div style={{ background:'#191f34',borderRadius:12,padding:'16px 16px 13px',color:'#a8dfff',boxShadow:'0 1px 9px #09192d5c',minHeight:120,border:'1.1px solid #28426e',marginBottom:6,fontFamily:'Roboto Mono, monospace'}}>
    <div style={{fontWeight:700, fontSize:16.8, color:'#c0f3ff', marginBottom:4,letterSpacing:'0.01em'}}>Order Book</div>
    <div style={{fontSize:14.7,fontWeight:400,letterSpacing:'-0.04em',color:'#9bc1e8',marginTop:2}}>
      67085.00 | 0.80 BTC
      <span style={{margin:'0 9px'}}>-</span>
      67086.50 | 0.75 BTC
    </div>
    <div style={{fontSize:13.8,color:'#67dea7',marginTop:2,fontWeight:500}}>67,100.00 support, 67,300.00 resistance</div>
  </div>
);
export default OrderBookStub;
