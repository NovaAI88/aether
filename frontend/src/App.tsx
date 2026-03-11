import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageLayout from './components/PageLayout';
import DashboardPage from './pages/DashboardPage';
import MarketTerminalPage from './pages/MarketTerminalPage';
import AiAnalysisPage from './pages/AiAnalysisPage';
import NewsIntelligencePage from './pages/NewsIntelligencePage';
import SentimentPage from './pages/SentimentPage';
import TechnicalAnalysisPage from './pages/TechnicalAnalysisPage';
import NarrativeEdgePage from './pages/NarrativeEdgePage';
import PortfolioPage from './pages/PortfolioPage';
import AlertsPage from './pages/AlertsPage';

function App() {
  return (
    <Router>
      <PageLayout>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/market" element={<MarketTerminalPage />} />
          <Route path="/ai" element={<AiAnalysisPage />} />
          <Route path="/news" element={<NewsIntelligencePage />} />
          <Route path="/sentiment" element={<SentimentPage />} />
          <Route path="/ta" element={<TechnicalAnalysisPage />} />
          <Route path="/narrative" element={<NarrativeEdgePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/alerts" element={<AlertsPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PageLayout>
    </Router>
  );
}

export default App;
