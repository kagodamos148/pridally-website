"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Tabs } from "../../components/ui/tabs";
import { Brain, Moon, Heart, History, Settings, MessageSquare, ChevronRight, ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link'

// Wrapper for equal tab panel height and scrollable content
const QuestionBox = ({ children, onNext, onPrevious, isLastTab, isFirstTab, currentTabIndex, totalTabs }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }}
  >
    <div className="w-full min-h-fit rounded-2xl p-8 text-white bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 backdrop-blur-sm border border-white/10 shadow-2xl hover:shadow-indigo-500/20 transition-all duration-500 relative z-10">
      <div className="flex flex-col">
        <div className="space-y-6 mb-8">
          {children}
        </div>
        <div className="flex justify-between items-center pt-6 border-t border-white/20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="text-sm font-medium text-white/80">
                Step {currentTabIndex + 1} of {totalTabs}
              </div>
              <div className="flex gap-1">
                {Array.from({ length: totalTabs }, (_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i <= currentTabIndex ? 'bg-white' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {!isFirstTab && (
              <button 
                onClick={onPrevious}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold hover:from-gray-700 hover:to-gray-800 hover:shadow-lg hover:shadow-gray-500/25 transition-all duration-300 flex items-center gap-2 group"
              >
                <motion.div
                  whileHover={{ x: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ChevronLeft size={18} />
                </motion.div>
                Previous
              </button>
            )}
            {isLastTab ? (
              <Link href="../mainPage">
                <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold hover:from-emerald-600 hover:to-teal-700 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center gap-2 group">
                  Submit Form
                  <motion.div
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    ✓
                  </motion.div>
                </button>
              </Link>
            ) : (
              <button 
                onClick={onNext}
                className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 group"
              >
                Next 
                <motion.div
                  whileHover={{ x: 2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ChevronRight size={18} />
                </motion.div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

const RangeInput = ({ label, value, onChange }) => (
  <div className="space-y-3 mb-6">
    <label className="block mb-2 text-lg font-semibold text-white">{label}</label>
    <div className="relative">
      <input 
        type="range" 
        min="1" 
        max="5"
        onChange={onChange}
        className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
        style={{
          background: 'linear-gradient(to right, #8b5cf6 0%, #a855f7 50%, #c084fc 100%)'
        }}
      />
      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff, #f1f5f9);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
          border: 2px solid #8b5cf6;
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(135deg, #ffffff, #f1f5f9);
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.4);
          border: 2px solid #8b5cf6;
        }
      `}</style>
    </div>
    <div className="flex justify-between text-xs text-white/80 font-medium">
      <span className="px-2 py-1 bg-white/10 rounded-full">Very Low</span>
      <span className="px-2 py-1 bg-white/10 rounded-full">Low</span>
      <span className="px-2 py-1 bg-white/10 rounded-full">Neutral</span>
      <span className="px-2 py-1 bg-white/10 rounded-full">Good</span>
      <span className="px-2 py-1 bg-white/10 rounded-full">Excellent</span>
    </div>
  </div>
);

const tabContents = [
  // Mood Check-In
  (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300">
          💭
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Mood Check-In</h3>
        <p className="text-white/70 text-sm">Let's explore how you're feeling today</p>
      </div>

      <RangeInput 
          label="How are you feeling today? 💭" 
          onChange={() => {}}
      />

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">Can you describe your mood in a few words?</label>
        <input type="text" placeholder="e.g. Anxious, Hopeful" className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/50 appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400" />
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">What emotion stayed with you most today?</label>
        <select className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="" className="bg-gray-800">Select emotion</option>
          <option value="anxious" className="bg-gray-800">Anxious</option>
          <option value="angry" className="bg-gray-800">Angry</option>
          <option value="sad" className="bg-gray-800">Sad</option>
          <option value="neutral" className="bg-gray-800">Neutral</option>
          <option value="hopeful" className="bg-gray-800">Hopeful</option>
          <option value="other" className="bg-gray-800">Other</option>
        </select>
      </div>
    </div>
  ),
  // Stress & Sleep
  (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300">
          😴
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Stress & Sleep</h3>
        <p className="text-white/70 text-sm">How well are you managing stress and rest?</p>
      </div>

      <RangeInput 
          label="How well did you sleep last night?" 
          onChange={() => {}}
      />
      
      <RangeInput 
          label="How would you rate your current stress level?" 
          onChange={() => {}}
      />
    </div>
  ),
  // Support & Panic
  (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-green-500/25 hover:shadow-xl hover:shadow-green-500/40 transition-all duration-300">
          🤝
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Support & Wellness</h3>
        <p className="text-white/70 text-sm">Let's check your support system and anxiety levels</p>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">Have you had any panic symptoms recently?</label>
        <select className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="" className="bg-gray-800">Select option</option>
          <option value="yes" className="bg-gray-800">Yes</option>
          <option value="no" className="bg-gray-800">No</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">Do you feel emotionally supported today?</label>
        <select className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="" className="bg-gray-800">Select feeling</option>
          <option value="yes" className="bg-gray-800">Yes</option>
          <option value="no" className="bg-gray-800">No</option>
        </select>
      </div>
    </div>
  ),
  // Mental Health History
  (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300">
          🧠
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Mental Health History</h3>
        <p className="text-white/70 text-sm">Your mental health care and treatment background</p>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">Are you currently on any mental health medications?</label>
        <select className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="" className="bg-gray-800">Select option</option>
          <option value="yes" className="bg-gray-800">Yes</option>
          <option value="no" className="bg-gray-800">No</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">Have you ever worked with a therapist or counselor?</label>
        <select className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="" className="bg-gray-800">Select experience</option>
          <option value="yes" className="bg-gray-800">Yes</option>
          <option value="no" className="bg-gray-800">No</option>
        </select>
      </div>
    </div>
  ),
  // Tool Preferences
  (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center text-2xl shadow-lg shadow-violet-500/25 hover:shadow-xl hover:shadow-violet-500/40 transition-all duration-300">
          🛠️
        </div>
        <h3 className="text-xl font-bold text-white mb-2">Wellness Tools</h3>
        <p className="text-white/70 text-sm">Customize your mental health support preferences</p>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">Would you like access to calming tools?</label>
        <select className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="" className="bg-gray-800">Select preference</option>
          <option value="yes" className="bg-gray-800">Yes</option>
          <option value="no" className="bg-gray-800">No</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-lg font-semibold text-white">Would you like reminders for daily check-ins?</label>
        <select className="w-full p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white appearance-none cursor-pointer hover:bg-white/15 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400">
          <option value="" className="bg-gray-800">Select frequency</option>
          <option value="yes" className="bg-gray-800">Yes</option>
          <option value="no" className="bg-gray-800">No</option>
        </select>
      </div>
    </div>
  )
];

const tabs = [
  {
    title: "Mood Check-In",
    value: "mood"
  },
  {
    title: "Stress & Sleep", 
    value: "stress"
  },
  {
    title: "Support & Panic",
    value: "support"
  },
  {
    title: "Mental Health History",
    value: "history"
  },
  {
    title: "Tool Preferences",
    value: "tools"
  }
];



export default function page() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleNextTab = () => {
    if (currentTabIndex < tabs.length - 1) {
      setCurrentTabIndex(currentTabIndex + 1);
    }
  };

  const handlePreviousTab = () => {
    if (currentTabIndex > 0) {
      setCurrentTabIndex(currentTabIndex - 1);
    }
  };

  // Create tabs with navigation content
  const tabsWithNavigation = tabs.map((tab, index) => ({
    ...tab,
    content: (
      <QuestionBox 
        onNext={handleNextTab}
        onPrevious={handlePreviousTab}
        isLastTab={index === tabs.length - 1}
        isFirstTab={index === 0}
        currentTabIndex={index}
        totalTabs={tabs.length}
      >
        {tabContents[index]}
      </QuestionBox>
    )
  }));

  return (
    <div>
      {/* Header */}
      <div className="text-center pt-12 pb-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl flex items-center justify-center text-3xl shadow-lg">
            🧠
          </div>
          <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 mb-4">
            Mental Health Check-In
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Take a moment to reflect on your mental well-being and emotional health
          </p>
        </motion.div>
      </div>
      
      <div className="px-4">
        <div
          className="h-[10rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-6xl mx-auto w-full justify-start filter drop-shadow-lg">
          <Tabs 
            tabs={tabsWithNavigation} 
            currentTabIndex={currentTabIndex}
            onTabChange={setCurrentTabIndex}
          />
        </div>
      </div>
    </div>
  );
}
