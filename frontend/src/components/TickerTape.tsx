import React from 'react';
const coins = [
  { symbol: 'BTC/USD', price: '67,082.44', direction: '▲', color: '#ffe07f' },
  { symbol: 'ETH/USD', price: '3,584.11', direction: '▼', color: '#5ed6ff' },
  { symbol: 'SOL/USD', price: '177.70', direction: '▲', color: '#7fffd9' },
  { symbol: 'AVAX/USD', price: '53.22', direction: '▼', color: '#ff82ee' },
  { symbol: 'DOGE/USD', price: '0.172', direction: '▲', color: '#f5ff7b' },
];

const TickerTape: React.FC = () => {
  return (
    <div className="ticker-tape" style={{
      background: 'linear-gradient(90deg, #121829 75%, #182435 100%)',
      padding: '10px 0 10px 24px',
      color: '#cbeaff',
      fontWeight: 700,
      fontSize: '1.09rem',
      borderBottom: '1.6px solid #222d45',
      letterSpacing:'.04em',
      overflowX: 'auto',
      whiteSpace: 'nowrap',
      minHeight:34,
      fontFamily:'Roboto Mono, monospace',
      boxShadow:'0 2px 9px #0007'
    }}>
      {coins.map((c, i) => (
        <span key={c.symbol} style={{ marginRight: 36, color: c.color }}>
          {c.symbol}
          <span style={{marginLeft:9,marginRight:5,fontWeight:800,fontVariantNumeric:'tabular-nums',color:'#f9fbff',fontSize:'1.05em'}}>{c.price}</span>
          <span style={{color: (c.direction === '▲' ? '#56ffa4' : '#ff6666'), fontWeight: 600, letterSpacing:'-0.06em', fontSize:'1.09em'}}>
            {c.direction}
          </span>
        </span>
      ))}
    </div>
  );
};
export default TickerTape;
