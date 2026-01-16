import { useState, useEffect } from 'react';
import { getRoleConfig } from './utils/dashboard.config';
import { fetchDashboardData } from './services/dashboard.service';

export const useDashboardData = (role) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // 1. Get Config based on Role
      const currentConfig = getRoleConfig(role);
      setConfig(currentConfig);

      try {
        // 2. Fetch Data based on Config Scope
        const stats = await fetchDashboardData({ 
          scope: currentConfig.canSeeLeadsOf,
          role: role
        });
        setData(stats);
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [role]);

  return { data, config, loading };
};