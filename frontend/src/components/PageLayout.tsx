import React from 'react';
import BrandHeader from './BrandHeader';
import SidebarNav from './SidebarNav';
import TickerTape from './TickerTape';
import CommandPaletteStub from './CommandPaletteStub';

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div>
    <BrandHeader />
    <TickerTape />
    <div className="app-shell">
      <aside className="sidebar">
        <SidebarNav />
      </aside>
      <div className="main-container">
        {children}
      </div>
    </div>
    <CommandPaletteStub />
  </div>
);

export default PageLayout;
