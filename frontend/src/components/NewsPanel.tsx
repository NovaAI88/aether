import React from 'react';
const news = [
  {
    title: 'BlackRock BTC ETF flows reach record $500M daily',
    source: 'Bloomberg',
    date: '2m ago'
  },
  {
    title: 'SEC crypto rule faces new appeals',
    source: 'Cointelegraph',
    date: '8m ago'
  },
  {
    title: 'ETH L2 migration surges',
    source: 'Decrypt',
    date: '18m ago'
  }
];

const NewsPanel: React.FC = () => (
  <div style={{
    background:'#161c2b',
    borderRadius:11,
    padding:'18px 17px 15px',
    color:'#cbe5ff',
    boxShadow:'0 1px 13px #0004',
    minWidth:188,
    minHeight:110,maxHeight:188,
    overflow:'auto',
    fontFamily:'Inter, sans-serif',
    border:'1.3px solid #26304d'}}>
    <div style={{fontWeight:800,fontSize:15.7,color:'#7fe3ff',letterSpacing:'-0.22px',marginBottom:4,marginLeft:1}}>Market News</div>
    {news.map((n,i) => (
      <div key={i} style={{marginBottom:6,lineHeight:1.22}}>
        <span style={{fontWeight:600,color:'#e5f7ff',marginRight:2,fontSize:15.2}}>{n.title}</span>
        <span style={{color:'#7dbfff',fontSize:'0.81em',fontWeight:400}}>- {n.source} · {n.date}</span>
      </div>
    ))}
  </div>
);

export default NewsPanel;
