import React from "react";
const TechnicalAnalysisPage: React.FC = () => (
  <div style={{padding:'38px 0 0 12px',maxWidth:770,margin:'0 auto'}}>
    <h2 style={{fontSize:'2.14rem', color:'#adaaff', fontWeight:800,marginBottom:12}}>Technical Analysis</h2>
    <div style={{display:'flex',gap:22,flexWrap:'wrap'}}>
      <div style={{background:'#181e31',borderRadius:12,padding:'20px 20px',marginBottom:18,boxShadow:'0 1px 14px #13347918',minWidth:190,minHeight:120}}>
        <div style={{color:'#adfbff',fontWeight:800,fontSize:15.9,marginBottom:4}}>RSI (14)</div>
        <div style={{fontSize:28,fontWeight:800,color:'#90ffdc',margin:'6px 0'}}>63.2</div>
        <div style={{fontSize:15.7,color:'#c9e2ee',fontWeight:600}}>Trend: <span style={{fontWeight:700,color:'#7affae'}}>Bullish</span></div>
      </div>
      <div style={{background:'#232957',borderRadius:12,padding:'20px 25px',marginBottom:18,boxShadow:'0 1px 14px #2d358a13',minWidth:190}}>
        <div style={{color:'#eede83',fontWeight:800,fontSize:15.6,marginBottom:3}}>Volatility</div>
        <div style={{fontSize:19.1,color:'#ffffa8',fontWeight:700,margin:'7px 0'}}>Low-Moderate</div>
        <div style={{fontSize:15.3,color:'#b7c9ff',fontWeight:600}}>24h Std Dev: 3.18%</div>
      </div>
      <div style={{background:'#283860',borderRadius:12,padding:'22px 24px',marginBottom:18,boxShadow:'0 1px 14px #0009',minWidth:190}}>
        <div style={{color:'#c1ffb0',fontWeight:800,fontSize:15.6,marginBottom:6}}>Moving Averages</div>
        <div style={{fontSize:17.5,color:'#ffffff',fontWeight:600}}>50MA: <b style={{marginLeft:5,color:'#99ffa8'}}>67080</b></div>
        <div style={{fontSize:17.5,color:'#baffb6',fontWeight:600}}>200MA: <b style={{marginLeft:5,color:'#dafcd2'}}>66210</b></div>
      </div>
      <div style={{background:'#191d2b',borderRadius:12,padding:'20px 17px',marginBottom:18,boxShadow:'0 1px 14px #13347916',minWidth:160}}>
        <div style={{color:'#90cfff',fontWeight:800,fontSize:15.8,marginBottom:5}}>Momentum</div>
        <div style={{fontSize:19.2,fontWeight:600,color:'#e8e58b',margin:'6px 0'}}>Uptrend</div>
        <div style={{fontSize:14.8,color:'#9ed7ff',fontWeight:600}}>Score: +13.7</div>
      </div>
    </div>
    <div style={{marginTop:21,background:'#181e27',borderRadius:9,padding:'13px 20px',color:'#eaffc3',fontWeight:600}}>
      <span>Overall Structure: <b style={{color:'#92fae3'}}>Bullish, higher high/low</b></span><br/>
      <span>Notes: Strong confluence on higher timeframe MAs.</span>
    </div>
  </div>
);
export default TechnicalAnalysisPage;
