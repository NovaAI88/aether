import React from 'react';
const news = [
  { headline: 'BTC breaks $68k as ETFs set new inflow record', summary: 'Spot BTC ETFs drive fresh institutional buying. Volatility rising as retail FOMO returns.', asset: 'BTC', bias: 'Bullish', time: '4 min ago' },
  { headline: 'ETH gas spikes 150% amid meme run', summary: 'NFT and meme asset surge causes short-term congestion on Ethereum.', asset: 'ETH', bias: 'Mixed', time: '13 min ago' },
  { headline: 'SOL lead dev: Protocol upgrade on track', summary: 'Solana devs claim new upgrade delivers 2x+ speed, slashing outages.', asset: 'SOL', bias: 'Bullish', time: '34 min ago' }
];
const NewsIntelligencePage: React.FC = () => (
  <div style={{padding:'40px 0 0 12px',maxWidth:760,margin:'0 auto'}}>
    <h2 style={{fontSize:'2.14rem', color:'#83d8ff', fontWeight:800,marginBottom:9}}>News & Market Intelligence</h2>
    <div style={{marginTop:10}}>
      {news.map((n,i)=>(
        <div key={i} style={{background:'#161d29',borderRadius:10,padding:'15px 22px',marginBottom:14,boxShadow:'0 1px 8px #0003'}}>
          <div style={{fontWeight:800, fontSize:16.8, color:'#90efcb', marginBottom:2}}>{n.headline}</div>
          <div style={{color:'#b2e8ff', fontWeight:600, fontSize:14.7, marginBottom:3}}>{n.summary}</div>
          <div style={{display:'flex', color:'#87a7c4', fontWeight:600, fontSize:13.9}}>
            <span style={{marginRight:20}}>Asset: <b>{n.asset}</b></span>
            <span style={{marginRight:20}}><b>{n.bias}</b></span>
            <span>{n.time}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default NewsIntelligencePage;
