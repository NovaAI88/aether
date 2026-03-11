import React from 'react';

const OrderBookStub: React.FC = () => {
  return (
    <div className="order-book-stub" style={{ background: '#212946', minHeight: 180, borderRadius: 8, padding: 16, color: '#a0a0b0', marginBottom: 12 }}>
      <strong style={{ color: '#6bc1ff' }}>[Order Book]</strong>
      <div style={{ marginTop: 10 }}>
        <span>Level 1: --- | ---</span><br />
        <span>Level 2: --- | ---</span><br />
        <span>Level 3: --- | ---</span>
      </div>
    </div>
  );
};

export default OrderBookStub;
