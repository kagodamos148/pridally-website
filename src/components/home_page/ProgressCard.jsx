"use client";

import React from 'react';
import { motion } from "framer-motion";

export const ProgressCard = ({ value, achieved, chats, streak }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-3xl"
  >
    <h2 className="text-2xl font-bold mb-2">Supporting with love and intention 💝</h2>
    <p className="text-white/90 mb-8">
      Explore resources to better support your loved ones and create inclusive spaces where healing flourishes
    </p>
    <div className="grid grid-cols-4 gap-4">
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <h3 className="text-sm font-medium mb-2">Overall Progress</h3>
        <p className="text-2xl font-bold">{value}%</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <h3 className="text-sm font-medium mb-2">Milestones</h3>
        <p className="text-2xl font-bold">{achieved} achieved</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <h3 className="text-sm font-medium mb-2">Chat Goals</h3>
        <p className="text-2xl font-bold">{chats} this week</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
        <h3 className="text-sm font-medium mb-2">Streak</h3>
        <p className="text-2xl font-bold">{streak} days</p>
      </div>
    </div>
  </motion.div>
);
