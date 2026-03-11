import React from "react";
const PortfolioPage: React.FC = () => (
  <div style={{padding:'36px 0 0 12px',maxWidth:820,margin:'0 auto'}}>
    <h2 style={{fontSize:'2.04rem', color:'#a7ffef', fontWeight:800,marginBottom:12}}>Portfolio</h2>
    <div style={{display:'flex',gap:22,flexWrap:'wrap'}}>
      <div style={{background:'#1a2936',borderRadius:12,padding:'20px 25px',marginBottom:18,boxShadow:'0 1px 14px #13347918',minWidth:175,minHeight:86}}>
        <div style={{color:'#9fffd2',fontWeight:800,fontSize:15.9,marginBottom:3}}>Balance</div>
        <div style={{fontSize:29,fontWeight:900,color:'#d7ffdb',margin:'6px 0'}}>$186,037.12</div>
      </div>
      <div style={{background:'#1f2342',borderRadius:12,padding:'20px 21px',marginBottom:18,boxShadow:'0 1px 14px #aed79811',minWidth:178}}>
        <div style={{color:'#ffe783',fontWeight:800,fontSize:15.5,marginBottom:3}}>Open PnL</div>
        <div style={{fontSize:24.2,fontWeight:800,color:'#ffe59b',margin:'7px 0'}}>$13,421.03</div>
      </div>
    </div>
    <div style={{background:'#1d2638',borderRadius:11,padding:'21px 27px',boxShadow:'0 1px 13px #85ec4a15',minWidth:250,marginBottom:13}}>
      <div style={{color:'#83dafc',fontWeight:800,fontSize:15.8,marginBottom:6}}>Open Positions</div>
      <table style={{width:'100%',fontSize:16,color:'#b8fcff',margin:'8px 0 0 0',borderCollapse:'collapse'}}>
        <thead>
          <tr style={{color:'#badafd',fontWeight:700,background:'#121e3c'}}>
            <th align="left">Symbol</th>
            <th align="left">Size</th>
            <th align="left">Entry</th>
            <th align="left">PnL</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom:'1.2px solid #373e4e'}}>
            <td>BTCUSDT</td>
            <td>0.75</td>
            <td>66,408.10</td>
            <td style={{color:'#7affae'}}>+$2,018.33</td>
          </tr>
          <tr style={{borderBottom:'1.2px solid #373e4e'}}>
            <td>ETHUSDT</td>
            <td>10</td>
            <td>3,240.00</td>
            <td style={{color:'#ffe37c'}}>+$956.19</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
export default PortfolioPage;
