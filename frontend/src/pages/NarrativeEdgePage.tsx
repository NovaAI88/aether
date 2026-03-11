import React from "react";
const NarrativeEdgePage: React.FC = () => (
  <div style={{padding:'35px 0 0 12px',maxWidth:700,margin:'0 auto'}}>
    <h2 style={{fontSize:'2rem', color:'#fcf191', fontWeight:800,marginBottom:14}}>Narrative Edge</h2>
    <div style={{display:'flex',gap:20}}>
      <div style={{background:'#23264c',borderRadius:11,padding:'21px 19px',boxShadow:'0 1px 13px #99830026',minWidth:210}}>
        <div style={{color:'#fdf3a7',fontWeight:800,fontSize:15.9,marginBottom:4}}>Moon Phase</div>
        <div style={{fontSize:23,color:'#f9ffa6',fontWeight:700,margin:'8px 0'}}>Waxing Gibbous</div>
      </div>
      <div style={{background:'#37284a',borderRadius:11,padding:'21px 23px',boxShadow:'0 1px 14px #8572d532',minWidth:190}}>
        <div style={{fontWeight:800,color:'#fc91e0',fontSize:15.7,marginBottom:5}}>Seasonality</div>
        <div style={{fontSize:17.1,color:'#f7eeff',fontWeight:700}}>Spring Bounce</div>
      </div>
      <div style={{background:'#272337',borderRadius:11,padding:'21px 21px',boxShadow:'0 1px 14px #83d6fa22',minWidth:185}}>
        <div style={{fontWeight:800,color:'#8ad5f9',fontSize:15.8,marginBottom:7}}>Volatility Cycle</div>
        <div style={{fontSize:18.2,fontWeight:600,color:'#88d7ae',margin:'6px 0'}}>Mid/Descending</div>
      </div>
    </div>
    <div style={{marginTop:21,background:'#262b3c',borderRadius:8,padding:'14px 22px',fontWeight:600,color:'#fef3b1'}}>
      <span>Unconventional Market Context: <b style={{color:'#91ecfc'}}>VIX improvement, macro calm, lunar advantage period.</b></span>
    </div>
  </div>
);
export default NarrativeEdgePage;
