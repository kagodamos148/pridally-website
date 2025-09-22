"use client";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { ChevronRight } from 'lucide-react';

export default function IntroPage() {
  const [formData, setFormData] = useState({
    preferredName: '',
    pronouns: '',
    ageRange: ''
  });

  const pronounOptions = [
    { value: 'she/her', label: 'she/her' },
    { value: 'he/him', label: 'he/him' },
    { value: 'they/them', label: 'they/them' },
    { value: 'ze/zir', label: 'ze/zir' },
    { value: 'xe/xem', label: 'xe/xem' },
    { value: 'other', label: 'other/ask me' }
  ];

  const ageRanges = [
    '13-17',
    '18-24',
    '25-34',
    '35-44',
    '45-54',
    '55+'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 space-y-8"
      >
        {/* Name Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            What would you like us to call you? ⭐
          </h2>
          <input
            type="text"
            placeholder="Your preferred name (this can be anything you'd like!)"
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
            value={formData.preferredName}
            onChange={(e) => setFormData({ ...formData, preferredName: e.target.value })}
          />
          <p className="text-sm text-gray-600">
            This is how we'll address you throughout your journey. Choose whatever feels right for you.
          </p>
        </div>

        {/* Pronouns Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            What are your pronouns? 🌈
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {pronounOptions.map((option) => (
              <button
                key={option.value}
                className={`p-3 rounded-xl border-2 transition-all duration-200 ${
                  formData.pronouns === option.value
                    ? 'border-purple-400 bg-purple-50 text-purple-600'
                    : 'border-gray-200 hover:border-purple-200'
                }`}
                onClick={() => setFormData({ ...formData, pronouns: option.value })}
              >
                {option.label}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600">
            Your pronouns help us communicate with you respectfully. You can update these anytime.
          </p>
        </div>

        {/* Age Range Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            What's your age range? 🌟
          </h2>
          <select
            className="w-full p-4 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
            value={formData.ageRange}
            onChange={(e) => setFormData({ ...formData, ageRange: e.target.value })}
          >
            <option value="">Select your age range</option>
            {ageRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-600">
            This helps us provide age-appropriate resources and tools for guidance.
          </p>
        </div>

        {/* Continue Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium flex items-center justify-center space-x-2 hover:opacity-90 transition-all duration-200"
          onClick={() => console.log('Continue clicked', formData)}
        >
          <span>
            Continue to Mood Check
          </span>
          <ChevronRight size={20} />
        </motion.button>

        {/* Progress Indicator */}
        <div className="text-center text-pink-600">
          <span role="img" aria-label="heart">💖</span> You're doing great!
        </div>
      </motion.div>
    </div>
  );
}