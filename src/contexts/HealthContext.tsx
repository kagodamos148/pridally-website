import React, { createContext, useContext, useState, useEffect } from 'react';

interface HealthMetric {
  id: string;
  name: string;
  icon: string;
  description: string;
  questions: Array<{
    id: string;
    question: string;
    type: 'scale' | 'text' | 'boolean';
    scale?: {
      min: number;
      max: number;
      labels: [string, string];
    };
  }>;
}

interface DailyEntry {
  date: string;
  responses: Record<string, any>;
  completed: boolean;
}

interface HealthContextType {
  metrics: HealthMetric[];
  dailyEntries: DailyEntry[];
  hasCompletedToday: boolean;
  submitDailyEntry: (responses: Record<string, any>) => void;
  getDailyEntry: (date: string) => DailyEntry | undefined;
}

const healthMetrics = [
  {
    id: 'mental',
    name: 'Mental Health',
    icon: '🧠',
    description: 'Track your emotional wellbeing and mental state',
    questions: [
      {
        id: 'mood',
        question: 'How would you rate your mood today?',
        type: 'scale',
        scale: {
          min: 1,
          max: 10,
          labels: ['Low', 'High']
        }
      },
      {
        id: 'stress',
        question: 'What was your stress level today?',
        type: 'scale',
        scale: {
          min: 1,
          max: 10,
          labels: ['Low', 'High']
        }
      }
    ]
  },
  {
    id: 'physical',
    name: 'Physical Health',
    icon: '💪',
    description: 'Monitor your physical health and activity',
    questions: [
      {
        id: 'energy',
        question: 'How is your energy level today?',
        type: 'scale',
        scale: {
          min: 1,
          max: 10,
          labels: ['Low', 'High']
        }
      },
      {
        id: 'exercise',
        question: 'Did you exercise today?',
        type: 'boolean'
      }
    ]
  },
  {
    id: 'social',
    name: 'Social Health',
    icon: '👥',
    description: 'Track your social connections and support',
    questions: [
      {
        id: 'social_interaction',
        question: 'How satisfied are you with your social interactions today?',
        type: 'scale',
        scale: {
          min: 1,
          max: 10,
          labels: ['Not at all', 'Very']
        }
      }
    ]
  }
];

export const HealthContext = createContext<HealthContextType | undefined>(undefined);

export const useHealth = () => {
  const context = useContext(HealthContext);
  if (!context) {
    throw new Error('useHealth must be used within HealthProvider');
  }
  return context;
};

export const HealthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dailyEntries, setDailyEntries] = useState<DailyEntry[]>([]);

  useEffect(() => {
    // Load saved entries from localStorage on component mount
    const stored = localStorage.getItem('health_data');
    if (stored) {
      setDailyEntries(JSON.parse(stored));
    }
  }, []);

  const today = new Date().toISOString().split('T')[0];
  const hasCompletedToday = dailyEntries.some(
    entry => entry.date === today && entry.completed
  );

  const submitDailyEntry = (responses: Record<string, any>) => {
    const newEntry = {
      date: today,
      responses,
      completed: true
    };

    const updated = [...dailyEntries.filter(e => e.date !== today), newEntry];
    setDailyEntries(updated);
    localStorage.setItem('health_data', JSON.stringify(updated));
  };

  const getDailyEntry = (date: string) => {
    return dailyEntries.find(entry => entry.date === date);
  };

  return (
    <HealthContext.Provider
      value={{
        metrics: healthMetrics,
        dailyEntries,
        hasCompletedToday,
        submitDailyEntry,
        getDailyEntry
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};
