"use client";

import React from 'react';
import { motion } from "framer-motion";

export const HealthCard = ({ icon, title, percentage, timeAgo, description, increase }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white"
        style={{ backgroundColor: 
          title === "Mental Health" ? "#a78bfa" :
          title === "Physical Health" ? "#60a5fa" :
          title === "Social Health" ? "#4ade80" :
          title === "Sexual Health" ? "#ec4899" :
          "#f43f5e"
        }}>
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500">{timeAgo}</p>
      </div>
      <div className="text-right">
        <div className="text-2xl font-bold text-gray-800">{percentage}%</div>
        <span className="text-sm text-green-500">+{increase}%</span>
      </div>
    </div>
    <p className="text-gray-600 text-sm mb-4">{description}</p>
    <div className="bg-gray-50 rounded-xl p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-2">Ally Resources</h4>
      <p className="text-sm text-gray-600">
        Comprehensive guides, communication tools, and educational materials to support your loved ones in this dimension
      </p>
      <button className="mt-4 text-purple-600 text-sm font-medium hover:text-purple-700">
        Explore Resources →
      </button>
    </div>
  </motion.div>
);
