'use client';

import { HealthProvider } from '../../contexts/HealthContext';
import HealthDashboard from '../../components/health/HealthDashboard';

export default function HealthTrackingPage() {
  return (
    <HealthProvider>
      <HealthDashboard />
    </HealthProvider>
  );
}
