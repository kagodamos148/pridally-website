"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Heart, Brain, Users, Activity, Baby, Bell, Settings, Calendar, BookOpen, MessageCircle } from 'lucide-react';
import { HealthCard } from '../../components/home_page/HealthCard';
import { ProgressCard } from '../../components/home_page/ProgressCard';

const BottomNav = () => (
  <div className="grid grid-cols-4 gap-4 mt-8 mb-4">
    {[
      { icon: <MessageCircle className="w-6 h-6" />, label: "Chat with LiLo", color: "bg-purple-400" },
      { icon: <Calendar className="w-6 h-6" />, label: "Schedule Check-in", color: "bg-blue-400" },
      { icon: <BookOpen className="w-6 h-6" />, label: "Browse Resources", color: "bg-green-400" },
      { icon: <Users className="w-6 h-6" />, label: "Community", color: "bg-orange-400" }
    ].map((item, index) => (
      <button
        key={index}
        className="flex flex-col items-center p-4 rounded-xl hover:bg-gray-50 transition-colors"
      >
        <div className={`${item.color} p-3 rounded-xl text-white mb-2`}>
          {item.icon}
        </div>
        <span className="text-sm text-gray-600">{item.label}</span>
      </button>
    ))}
  </div>
);

const CaterpillarStage = () => (
  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-8">
    <div className="flex justify-between items-center">
      <div>
        <h3 className="text-xl font-semibold text-gray-800">Caterpillar Stage</h3>
        <p className="text-gray-600">Growing stronger with you</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-600">75% to butterfly transformation</p>
        <div className="w-32 h-2 bg-gray-200 rounded-full mt-2">
          <div className="w-3/4 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
        </div>
      </div>
    </div>
  </div>
);

const PartnerWellness = () => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mt-8"
  >
    <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
      <Heart className="text-pink-500" />
      Partner's Wellness Journey
    </h2>
    
    <div className="text-center mb-6">
      <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center text-white mx-auto">
        <Users className="w-8 h-8" />
      </div>
      <p className="text-gray-600 mt-4">
        Your partner has shared their overall wellness progress with you. They're doing well and appreciate your support!
      </p>
    </div>

    <div className="grid grid-cols-5 gap-4 mb-8">
      {[62, 64, 38, 24, 58].map((value, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div 
              className={`h-2 rounded-full ${
                index === 0 ? 'bg-purple-500' :
                index === 1 ? 'bg-blue-500' :
                index === 2 ? 'bg-pink-500' :
                index === 3 ? 'bg-red-500' :
                'bg-green-500'
              }`}
              style={{ width: `${value}%` }}
            />
          </div>
          <span className="text-xs text-gray-600">{value}%</span>
        </div>
      ))}
    </div>

    <div>
      <h3 className="text-lg font-medium text-gray-800 mb-4">How You Can Help</h3>
      <ul className="space-y-3">
        {[
          { icon: <Brain />, text: "Send encouraging messages" },
          { icon: <Activity />, text: "Plan wellness activities together" },
          { icon: <Users />, text: "Learn about their journey" },
          { icon: <Heart />, text: "Practice active listening" }
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-gray-600">
            <span className="text-purple-500">{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function MainPage() {
  const [progress] = useState({
    mental: 65,
    physical: 80,
    social: 70,
    sexual: 45,
    reproductive: 30,
    overall: 58,
    milestones: 2,
    chats: 12,
    streak: 7
  });

  // useEffect(() => {
    // const checkAuth = async () => {
    //   try {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //       router.push('/signin');
    //       return;
    //     }

    //     const response = await axios.get('/api/user/profile', {
    //       headers: { Authorization: `Bearer ${token}` }
    //     });
    //     setUserData(response.data.user);

    //     const progressResponse = await axios.get('/api/user/progress', {
    //       headers: { Authorization: `Bearer ${token}` }
    //     });
    //     setProgress(progressResponse.data.progress);

    //   } catch (error) {
    //     console.error('Error fetching user data:', error);
    //     router.push('/signin');
    //   }
    // };

    // checkAuth();
  // }, [router]);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric'
  });

  const healthMetrics = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Mental Health",
      percentage: progress.mental,
      timeAgo: "2 hours ago",
      description: "Emotional well-being and mental health support",
      increase: 12
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Physical Health",
      percentage: progress.physical,
      timeAgo: "1 day ago", 
      description: "Body wellness and physical care",
      increase: 15
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Social Health",
      percentage: progress.social,
      timeAgo: "3 hours ago",
      description: "Community connection and relationships", 
      increase: 25
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Sexual Health",
      percentage: progress.sexual,
      timeAgo: "3 days ago",
      description: "Sexual wellness and intimate health",
      increase: 8
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Reproductive Health",
      percentage: progress.reproductive,
      timeAgo: "1 week ago",
      description: "Reproductive care and family planning",
      increase: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center m-18">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🦋</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Welcome to <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Pridally
                </span>
              </h1>
              <p className="text-gray-600">Your Wellness Journey • {currentDate} 🌈</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
              {progress.overall}% Complete
            </span>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full text-gray-600 transition-colors">
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>

        <ProgressCard 
          value={progress.overall} 
          achieved={progress.milestones} 
          chats={progress.chats} 
          streak={progress.streak} 
        />

        <h2 className="text-xl font-semibold text-gray-800 mt-8 mb-4">
          Support Resources
        </h2>
        
        <BottomNav />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {healthMetrics.map((metric, index) => (
            <HealthCard key={index} {...metric} />
          ))}
        </div>

        <CaterpillarStage />
        
        

        <PartnerWellness />
        
        <div className="flex justify-end mt-4">
          <button className="text-sm text-gray-600 hover:text-gray-800 flex items-center gap-2">
            This Week
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}