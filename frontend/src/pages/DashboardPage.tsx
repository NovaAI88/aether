import React, { useEffect, useState } from 'react';
import StatusCard from '../components/StatusCard';
import PortfolioSummary from '../components/PortfolioSummary';
import PositionTable from '../components/PositionTable';
import ChartPanel from '../components/ChartPanel';
import OrderBookStub from '../components/OrderBookStub';
import TradeFlowStub from '../components/TradeFlowStub';
import AlertPanel from '../components/AlertPanel';
import { fetchStatus, fetchPortfolio, fetchPositions } from '../api/apiClient';

const DashboardPage: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [portfolio, setPortfolio] = useState<any>(null);
  const [positions, setPositions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      fetchStatus().catch(() => null),
      fetchPortfolio().catch(() => null),
      fetchPositions().catch(() => [])
    ])
    .then(([statusResp, portfolioResp, positionsResp]) => {
      setStatus(statusResp);
      setPortfolio(portfolioResp);
      setPositions(positionsResp || []);
    })
    .catch((err) => setError(String(err)))
    .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading dashboard...</div>;
  if (error) return <div style={{color:'#f95e5e',fontWeight:600}}>Error: {error}</div>;

  return (
    <div>
      <h2 style={{ marginTop: 0, marginBottom: '2rem', fontSize: '2rem', letterSpacing: '-1px', fontWeight: 700 }}>Operator Overview</h2>
      <div className="dashboard-section">
        <div className="dashboard-maincol">
          <StatusCard {...(status||{})} />
          <PortfolioSummary {...(portfolio||{})} />
          <div className="ui-card">
            <PositionTable positions={positions} />
          </div>
        </div>
        <div className="dashboard-sidecol">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ marginBottom: 8 }}>
              <ChartPanel />
            </div>
            <div>
              <OrderBookStub />
              <TradeFlowStub />
            </div>
            <AlertPanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
