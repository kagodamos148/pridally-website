"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LinkedinIcon, TwitterIcon, Mail } from "lucide-react";

export default function FounderPage() {
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
            className="max-w-6xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-64 h-64 mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
                >
                  <Image
                    src="/founder-placeholder.jpg"
                    alt="Meghana Nadella"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4"
                >
                  Meghana Nadella
                </motion.h1>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-xl text-gray-600 mb-6"
                >
                  Founder & CEO, PRIDaLLY
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="flex justify-center md:justify-start space-x-4"
                >
                  <a href="https://linkedin.com" className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-200">
                    <LinkedinIcon className="w-6 h-6 text-purple-600" />
                  </a>
                  <a href="https://twitter.com" className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-200">
                    <TwitterIcon className="w-6 h-6 text-purple-600" />
                  </a>
                  <a href="mailto:meghana@pridally.com" className="p-2 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About Meghana</h2>
            <div className="bg-white rounded-2xl p-8 shadow-xl backdrop-blur-sm border border-purple-100">
              <p className="text-gray-600 mb-6 leading-relaxed">
                Meghana Nadella is a visionary entrepreneur and advocate for LGBTQIA+ healthcare equality. With a background in technology and healthcare, she founded PRIDaLLY with the mission to revolutionize healthcare accessibility and support for the LGBTQIA+ community.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Her journey began when she identified significant gaps in healthcare services for LGBTQIA+ individuals. This inspired her to create a platform that combines cutting-edge technology with compassionate care, ensuring that everyone has access to inclusive and affirming healthcare resources.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Under her leadership, PRIDaLLY has grown from a simple idea to a comprehensive healthcare platform serving thousands of users worldwide, making a real difference in people's lives every day.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Values Section */}
      <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
              Vision & Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-purple-100"
              >
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Mission</h3>
                <p className="text-gray-600 text-center">
                  To create a world where healthcare is truly inclusive, accessible, and affirming for everyone in the LGBTQIA+ community.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-pink-100"
              >
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💫</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">Impact</h3>
                <p className="text-gray-600 text-center">
                  Leading the transformation of healthcare through technology, compassion, and unwavering commitment to equality.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Achievements</h2>
            <div className="space-y-6">
              {[
                { year: "2025", achievement: "Launched PRIDaLLY, revolutionizing LGBTQIA+ healthcare" },
                { year: "2024", achievement: "Named in Forbes 30 Under 30 - Healthcare" },
                { year: "2023", achievement: "Led major research initiative in LGBTQIA+ healthcare needs" },
                { year: "2022", achievement: "Awarded Innovation in Healthcare Technology Grant" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-200"
                >
                  <div className="w-20 text-center">
                    <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                      {item.year}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700">{item.achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
  