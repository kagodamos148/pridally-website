"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, Heart, Users, Shield, Target, Zap } from "lucide-react";

export default function AboutCompany() {
  const stats = [
    { number: "10k+", label: "Active Users" },
    { number: "95%", label: "User Satisfaction" },
    { number: "24/7", label: "Support" },
    { number: "50+", label: "Healthcare Partners" },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      title: "Inclusive Care",
      description: "Healthcare that embraces and understands every identity",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-500" />,
      title: "Privacy First",
      description: "Your data is protected with the highest security standards",
    },
    {
      icon: <Users className="w-6 h-6 text-blue-500" />,
      title: "Community Driven",
      description: "Built with and for the LGBTQIA+ community",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
      title: "Innovation",
      description: "Cutting-edge technology meets compassionate care",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-purple-50/20 to-white pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/80 to-pink-50/80" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
              About PRIDaLLY
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Revolutionizing healthcare for the LGBTQIA+ community through technology, compassion, and understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-purple-100">
              <p className="text-gray-600 mb-6 leading-relaxed">
                At PRIDaLLY, we're on a mission to transform healthcare accessibility for the LGBTQIA+ community. We believe that everyone deserves healthcare that understands, respects, and celebrates their identity.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform combines innovative technology with compassionate care to create a safe, affirming space where individuals can access the healthcare resources they need, connect with understanding providers, and be part of a supportive community.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-purple-100"
                >
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-12">Our Impact</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-purple-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Community Impact</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Target className="w-5 h-5 text-purple-500" />
                      Connecting LGBTQIA+ individuals with affirming healthcare
                    </li>
                    <li className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-purple-500" />
                      Breaking down barriers to healthcare access
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-purple-500" />
                      Building a supportive community network
                    </li>
                  </ul>
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold mb-4">Healthcare Innovation</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-purple-500" />
                      Pioneering inclusive healthcare technology
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-purple-500" />
                      Setting new standards for patient privacy
                    </li>
                    <li className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-purple-500" />
                      Creating personalized care experiences
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
  