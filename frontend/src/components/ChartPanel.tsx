import React from 'react';

const ChartPanel: React.FC = () => {
  return (
    <div className="chart-panel" style={{ flex: 1, background: '#181f2a', borderRadius: 8, minHeight: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <span style={{ color: '#6bc1ff', fontSize: 18 }}>
        [Chart Panel Placeholder]
      </span>
    </div>
  );
};

export default ChartPanel;
