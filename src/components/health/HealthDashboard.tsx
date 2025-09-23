'use client';

import React, { useState } from 'react';
import { useHealth } from '../../contexts/HealthContext';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  MessageCircle,
  LineChart,
  CheckCircle2
} from 'lucide-react';
import DailyCheckIn from './DailyCheckIn';

type ActiveView = 'overview' | 'checkin' | 'calendar' | 'chat' | 'stats';

const HealthDashboard: React.FC = () => {
  const { metrics, hasCompletedToday, dailyEntries } = useHealth();
  const [activeView, setActiveView] = useState<ActiveView>('overview');

  const completionRate = dailyEntries.length > 0
    ? Math.round((dailyEntries.filter(entry => entry.completed).length / dailyEntries.length) * 100)
    : 0;

  const renderContent = () => {
    switch (activeView) {
      case 'checkin':
        return <DailyCheckIn />;
      // Add other view components here
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Stats */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Completion Rate</span>
                  <span className="font-semibold">{completionRate}%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Streak</span>
                  <span className="font-semibold">{calculateStreak()} days</span>
                </div>
              </div>
            </Card>

            {/* Today's Status */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Today's Status</h3>
              {hasCompletedToday ? (
                <div className="flex items-center text-green-600">
                  <CheckCircle2 className="mr-2" />
                  <span>Check-in completed</span>
                </div>
              ) : (
                <Button onClick={() => setActiveView('checkin')}>
                  Start Daily Check-in
                </Button>
              )}
            </Card>
          </div>
        );
    }
  };

  const calculateStreak = () => {
    let streak = 0;
    const today = new Date();
    let currentDate = new Date();

    while (true) {
      const dateString = currentDate.toISOString().split('T')[0];
      const entry = dailyEntries.find(e => e.date === dateString);

      if (!entry?.completed) break;
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    }

    return streak;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar Navigation */}
        <motion.div
          className="md:w-64 flex md:flex-col gap-4 overflow-x-auto md:overflow-visible"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Button
            variant={activeView === 'overview' ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => setActiveView('overview')}
          >
            <LineChart className="mr-2 h-4 w-4" />
            Overview
          </Button>
          <Button
            variant={activeView === 'checkin' ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => setActiveView('checkin')}
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Daily Check-in
          </Button>
          <Button
            variant={activeView === 'calendar' ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => setActiveView('calendar')}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar
          </Button>
          <Button
            variant={activeView === 'chat' ? 'default' : 'outline'}
            className="w-full justify-start"
            onClick={() => setActiveView('chat')}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Health Chat
          </Button>
        </motion.div>

        {/* Main Content */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
};

export default HealthDashboard;
