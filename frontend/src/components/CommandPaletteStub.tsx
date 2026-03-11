import React from 'react';

const CommandPaletteStub: React.FC = () => {
  return (
    <div className="command-palette-stub" style={{
      display: 'none', // Not visible until triggered/needed
      position: 'fixed', top: 140, left: '50%',
      transform: 'translateX(-50%)', minWidth: 400, background: '#212946',
      color: '#fff', borderRadius: 8, padding: 24, boxShadow: '0 2px 18px #0006',
      zIndex: 2000
    }}>
      <span style={{ color: '#8eb1ff', fontWeight: 700 }}>[Command Palette Stub]</span>
    </div>
  );
};

export default CommandPaletteStub;
