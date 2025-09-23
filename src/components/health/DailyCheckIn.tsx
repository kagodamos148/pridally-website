'use client';

import React, { useState } from 'react';
import { useHealth } from '../../contexts/HealthContext';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';
import { motion } from 'framer-motion';

const DailyCheckIn: React.FC = () => {
  const { metrics, submitDailyEntry, hasCompletedToday } = useHealth();
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, any>>({});

  const currentMetric = metrics[currentMetricIndex];

  const handleResponse = (questionId: string, value: any) => {
    setResponses(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentMetricIndex < metrics.length - 1) {
      setCurrentMetricIndex(prev => prev + 1);
    } else {
      submitDailyEntry(responses);
    }
  };

  if (hasCompletedToday) {
    return (
      <Card className="p-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">All Done for Today! 🎉</h3>
        <p className="text-gray-600">Come back tomorrow for your next check-in.</p>
      </Card>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold flex items-center gap-2">
            {currentMetric.icon} {currentMetric.name}
          </h3>
          <p className="text-gray-600 mt-2">{currentMetric.description}</p>
        </div>

        <div className="space-y-6">
          {currentMetric.questions.map(question => (
            <div key={question.id} className="space-y-4">
              <p className="font-medium">{question.question}</p>
              
              {question.type === 'scale' && (
                <div className="px-2">
                  <Slider
                    min={question.scale?.min || 1}
                    max={question.scale?.max || 10}
                    step={1}
                    value={[responses[question.id] || question.scale?.min || 1]}
                    onValueChange={([value]) => handleResponse(question.id, value)}
                    className="mt-2"
                  />
                  <div className="flex justify-between text-sm text-gray-600 mt-1">
                    <span>{question.scale?.labels[0]}</span>
                    <span>{question.scale?.labels[1]}</span>
                  </div>
                </div>
              )}

              {question.type === 'boolean' && (
                <Switch
                  checked={responses[question.id] || false}
                  onCheckedChange={value => handleResponse(question.id, value)}
                />
              )}

              {question.type === 'text' && (
                <textarea
                  className="w-full p-2 border rounded-md"
                  value={responses[question.id] || ''}
                  onChange={e => handleResponse(question.id, e.target.value)}
                  rows={3}
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleNext}>
            {currentMetricIndex < metrics.length - 1 ? 'Next' : 'Submit'}
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default DailyCheckIn;
