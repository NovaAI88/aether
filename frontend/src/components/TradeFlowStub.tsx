import React from 'react';

const TradeFlowStub: React.FC = () => {
  return (
    <div className="trade-flow-stub" style={{ background: '#212946', minHeight: 130, borderRadius: 8, padding: 16, color: '#a0a0b0', marginBottom: 12 }}>
      <strong style={{ color: '#71e572' }}>[Trade Flow]</strong>
      <div style={{ marginTop: 10 }}>
        <span>Recent: -- | -- | --</span>
      </div>
    </div>
  );
};

export default TradeFlowStub;
