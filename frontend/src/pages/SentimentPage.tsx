import React from "react";
const SentimentPage: React.FC = () => (
  <div style={{padding:'38px 0 0 12px',maxWidth:700,margin:'0 auto'}}>
    <h2 style={{fontSize:'2.14rem', color:'#99fae6', fontWeight:800,marginBottom:12}}>Market Sentiment</h2>
    <div style={{display:'flex',gap:22}}>
      <div style={{background:'#161d29',borderRadius:11,padding:'20px 27px',marginBottom:18,boxShadow:'0 1px 14px #13347916',minWidth:246,minHeight:123}}>
        <div style={{color:'#ffe077',fontWeight:800,fontSize:15.7,marginBottom:4}}>Fear & Greed Index</div>
        <div style={{fontSize:30,fontWeight:800,color:'#ffe47c',margin:'10px 0'}}>65 (Greed)</div>
        <div style={{fontSize:15.7,color:'#bacaee',fontWeight:600}}>Mood: <span style={{fontWeight:800,color:'#7affae'}}>Greedy</span></div>
      </div>
      <div style={{background:'#162433',borderRadius:11,padding:'20px 23px',boxShadow:'0 1px 12px #15344a12',minWidth:210}}>
        <div style={{fontWeight:800,color:'#92eeeb',fontSize:15.6,marginBottom:5}}>Social & Media</div>
        <div style={{fontSize:15.1,color:'#a2d7ff'}}>Social Buzz: <b style={{color:'#91edcb'}}>Bullish</b></div>
        <div style={{fontSize:15.1,color:'#c2e2f6'}}>Crypto Twitter: <b style={{color:'#ffe37c'}}>Upbeat</b></div>
        <div style={{fontSize:14.9,color:'#99eaff'}}>Media Headlines: <b style={{color:'#8affb0'}}>Lean Bullish</b></div>
      </div>
    </div>
    <div style={{marginTop:21,background:'#1a2438',borderRadius:9,padding:'14px 22px',color:'#acefff',fontWeight:600}}>
      <span>Overall Sentiment: <b style={{color:'#88ffd3'}}>Bullish</b></span><br/>
      <span>Dominant Narrative: <b style={{color:'#9bcaff'}}>ETF Inflows, Retail FOMO</b></span>
    </div>
  </div>
);
export default SentimentPage;
