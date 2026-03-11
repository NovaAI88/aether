import React from 'react';

const AlertPanel: React.FC = () => {
  return (
    <div className="alert-panel" style={{ background: '#392e36', padding: 14, borderRadius: 6, color: '#fddb5b', fontWeight: 600, fontSize: 16, margin: '12px 0' }}>
      <span>
        ⚠️ [Alerts]: No new alerts (stub)
      </span>
    </div>
  );
};

export default AlertPanel;
