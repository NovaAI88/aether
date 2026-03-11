import React from 'react';

const TickerTape: React.FC = () => {
  return (
    <div className="ticker-tape" style={{ background: '#12213a', padding: '8px 16px', color: '#6bc1ff', fontWeight: 500, borderRadius: 4, fontSize: 16 }}>
      [BTC/USD] 67000.25 ▲ &nbsp; [ETH/USD] 3550.76 ▼ &nbsp; [SOL/USD] 178.30 ▲
    </div>
  );
};

export default TickerTape;
