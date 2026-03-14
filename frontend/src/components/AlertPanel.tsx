import React, { useEffect, useState } from 'react';
import { fetchAlerts } from '../api/apiClient';

const AlertPanel = () => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadAlerts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAlerts();
      setAlerts(data);
    } catch (err) {
      setError('Failed to load alerts');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAlerts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error} <button onClick={loadAlerts}>Retry</button></div>;

  return (
    <div>
      <h3>Alerts</h3>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{alert.message} - {alert.timestamp}</li>
        ))}
      </ul>
    </div>
  );
};

export default AlertPanel;
