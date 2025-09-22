"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from 'lucide-react';

// Local imports
import Link from "next/link";

export default function DailyFeedbackPage() {
  const [selectedMood, setSelectedMood] = useState(null);

  const moods = [
    {
      name: "Amazing",
      emoji: "🌟",
      bgColor: "bg-amber-400",
      description: "Feeling fantastic and full of energy!"
    },
    {
      name: "Good",
      emoji: "😊",
      bgColor: "bg-emerald-400",
      description: "Things are going well today"
    },
    {
      name: "Okay",
      emoji: "😐",
      bgColor: "bg-blue-400",
      description: "Feeling neutral, just getting by"
    },
    {
      name: "Struggling",
      emoji: "😔",
      bgColor: "bg-purple-400",
      description: "Having a tough time right now"
    },
    {
      name: "Overwhelmed",
      emoji: "😫",
      bgColor: "bg-pink-400",
      description: "Feeling like it's too much to handle"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Main Container */}
        <div className="bg-white rounded-3xl shadow-xl p-8 space-y-8 mb-6">
          {/* Header Section */}
          <div className="text-center space-y-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
              <span className="text-white text-2xl">💝</span>
            </div>
            <h1 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
              How are you feeling today?
            </h1>
            <p className="text-gray-600">
              Your feelings are valid, whatever they are. This helps us understand how to best support you right now.
            </p>
          </div>

          {/* Mood Cards Container */}
          <div className="flex flex-wrap justify-center gap-4">
            {moods.map((mood) => (
              <motion.div
                key={mood.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedMood(mood.name)}
                className={`w-[150px] cursor-pointer p-4 rounded-xl transition-all duration-200 
                  ${selectedMood === mood.name 
                    ? 'ring-2 ring-purple-400 bg-purple-50' 
                    : 'hover:bg-gray-50'}`}
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className={`w-12 h-12 ${mood.bgColor} rounded-full flex items-center justify-center text-2xl`}>
                    {mood.emoji}
                  </div>
                  <h3 className="font-medium text-gray-800">{mood.name}</h3>
                  <p className="text-xs text-gray-500">{mood.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Thank You Message */}
          <AnimatePresence>
            {selectedMood && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="bg-pink-50 rounded-xl p-4 text-center space-y-2"
              >
                <h3 className="text-lg font-medium text-purple-600">
                  ✨ Thank you for sharing
                </h3>
                <p className="text-sm text-gray-600">
                  That's perfectly valid. Let's explore ways to support you through this.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dashboard Button */}
        <AnimatePresence>
          {selectedMood && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="flex justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium flex items-center space-x-2"
              >
                <span>
                  <Link href="../../mainPage">Enter Your Dashboard</Link>
                </span>
                <ChevronRight size={20} />
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Remember Section */}
        <div className="mt-6 bg-white rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-pink-600">💭</span>
            <span className="font-medium text-gray-800">Remember</span>
          </div>
          <p className="text-sm text-gray-600">
            Your mood can change throughout the day, and that's completely normal. You can always update how you're feeling in your dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}