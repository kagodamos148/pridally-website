import { motion } from "framer-motion";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { InfiniteMovingCards } from "../../components/ui/infinite-moving-cards";
import { ContainerTextFlip } from "../ui/container-text-flip";
import {
  FaHeartbeat,
  FaBrain,
  FaUsers,
  FaVenusMars,
  FaHeart,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import rainbowLogo from "../../../assets/Rainbow Minimalist Pride Month Logo.png";

const healthItems = [
  { title: "Physical", icon: <FaHeartbeat size={36} className="text-red-500" /> },
  { title: "Mental", icon: <FaBrain size={36} className="text-blue-500" /> },
  { title: "Social", icon: <FaUsers size={36} className="text-green-500" /> },
  { title: "Reproductive", icon: <FaVenusMars size={36} className="text-pink-500" /> },
  { title: "Sexual", icon: <FaHeart size={36} className="text-purple-500" /> },
];

const keyFeatures = [
  {
    quote: "Quick Assessment – Your mental health, in your words. Quick, private, and tailored.",
    name: "",
    title: "Assessment"
  },
  {
    quote: "Chat Companion – Our colorful caterpillar friend is always here to talk, listen, and guide.",
    name: "",
    title: "Chat Companion"
  },
  {
    quote: "Mood + Journal Log – Reflect, grow, and look back at how far you've come.",
    name: "",
    title: "Journal Log"
  },
  {
    quote: "Personal Insights – Get gentle nudges based on patterns in your journey.",
    name: "",
    title: "Insights"
  },
  {
    quote: "Research-Backed – Built in partnership with universities, clinicians, and queer folks like you.",
    name: "",
    title: "Research"
  },
  {
    quote: "Safety Scores – AI + human-reviewed interactions to keep it safe, helpful, and affirming.",
    name: "",
    title: "Safety"
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      <main className="w-full">
        {/* Hero Section */}
        <section className="flex relative pt-32 pb-40 overflow-hidden min-h-screen items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-50/80 to-pink-50/80" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="relative container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-6xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
                Care that meets you 
                <ContainerTextFlip 
                  words={["gently", "warmly", "safely", "wholly"]}
                  className="ml-4 text-white"
                />
              </h1>
              <p className="text-xl text-gray-800 mb-12 leading-relaxed">
                Whether you're navigating identity, health, or healing — PRIDaLLY offers warmth, wisdom, and safety at every step.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-12">
                <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-200 transform hover:-translate-y-1">
                  <Link href="../../daily_feedback">Start Now</Link>
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 rounded-xl font-medium border-2 border-gray-200 hover:border-purple-400 transition-all duration-200 transform hover:-translate-y-1">
                  Explore Features
                </button>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium hover:opacity-90 transition-all duration-200 transform hover:-translate-y-1">
                  Meet Our Companion
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-32 bg-white/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Holistic Care System</h2>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto">
                Your comprehensive health companion, designed with the LGBTQIA+ community in mind.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {healthItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="mb-6 flex justify-center">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Alternating Image/Text Sections */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {[
              {
                title: "Affirming care for LGBTQIA+ lives",
                body:
                  "Tools and resources designed with queer experiences at the center. Feel seen, supported, and celebrated while you build healthier habits.",
                image: rainbowLogo,
              },
              {
                title: "Mindfulness made approachable",
                body:
                  "Bite-sized meditations and gentle prompts to help reduce stress, improve sleep, and find calm—anytime you need a breather.",
                image: logo,
              },
              {
                title: "Grow with guided exercises",
                body:
                  "Structured check-ins and journaling to build self-awareness. Track your progress and discover insights that support real-life change.",
                image: rainbowLogo,
              },
            ].map((section, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={section.title}
                  className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-20 ${
                    index === 2 ? "mb-0" : ""
                  }`}
                >
                  <div className={`${isReversed ? "md:order-2" : ""}`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                  {section.image ? (
                    <div className={`${isReversed ? "md:order-1" : ""}`}>
                      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-purple-50 to-pink-50">
                        <Image
                          src={section.image}
                          alt={section.title}
                          fill
                          className="object-contain p-6"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index === 0}
                        />
                      </div>
                    </div>
                  ) : (
                    <div className={`${isReversed ? "md:order-1" : ""}`}>
                      <div className="h-64 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Moving Cards Section */}
        <section className="py-32 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Key Features</h2>
            <div className="rounded-xl bg-white/50 shadow-sm p-8">
              <InfiniteMovingCards items={keyFeatures} direction="right" speed="slow" />
            </div>
          </div>
        </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-700 mb-12">
              We're not here to "fix" you. We're here to empower you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-purple-100"
              >
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌟</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Identity First</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Affirm your identity</li>
                  <li>• Centre your voice</li>
                  <li>• Respect your privacy</li>
                </ul>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-pink-100"
              >
                <div className="h-12 w-12 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💖</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Comprehensive Care</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Holistic approach</li>
                  <li>• Personalized support</li>
                  <li>• Continuous growth</li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Real Stories */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-50/50 to-pink-50/50" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
              Voices of Pride
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-purple-100"
              >
                <div className="mb-6">
                  <span className="text-4xl">💭</span>
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "PRIDaLLY helped me track my transition and my mood swings in a way that didn't feel clinical or cold."
                </blockquote>
                <div className="text-sm text-gray-500">- Alex, They/Them</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="p-8 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-pink-100"
              >
                <div className="mb-6">
                  <span className="text-4xl">💝</span>
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-6">
                  "As a parent of a trans kid, I finally feel like I have tools to support them — and learn with them."
                </blockquote>
                <div className="text-sm text-gray-500">- Sarah, Parent</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Collaborators */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
            Collaborators
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center">
            {["Community Clinic","Queer Health Org","University Lab","LGBTQ+ NGO","Wellness Partner","Research Group"].map((name) => (
              <div key={name} className="h-24 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center text-gray-700 font-medium hover:shadow-md transition-shadow">
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Founders</h2>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-12">Built by LGBTQIA+ folks and allies to create a stigma-free, empowering health companion.</p>
          <div className="grid gap-8 md:grid-cols-3">
            {[{name:"Rakesh",role:"Founder & Product"},{name:"Alex",role:"Clinical Lead"},{name:"Sam",role:"Engineering"}].map((p)=> (
              <div key={p.name} className="p-8 rounded-2xl bg-white shadow-xl border border-purple-100 text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {p.name.charAt(0)}
                </div>
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="text-gray-600">{p.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-white via-purple-50/20 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-12">
              How It Works
            </h2>
            <div className="grid gap-8">
              {[
                { step: 1, title: "Choose Your Path", desc: "Select your journey as a User, Ally, or Provider" },
                { step: 2, title: "Set Your Goals", desc: "From mental wellness to medical needs" },
                { step: 3, title: "Use Our Tools", desc: "Access Assessments, Journals, Forums, and Insights" },
                { step: 4, title: "Grow & Transform", desc: "Watch your journey unfold with your caterpillar companion 🌈" }
              ].map((item) => (
                <motion.div
                  key={item.step}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-8 p-6 rounded-2xl bg-white shadow-xl backdrop-blur-sm border border-purple-100"
                >
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 relative">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Start Your Journey?</h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of others who've found their path to wellness with PRIDaLLY.
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-medium hover:bg-opacity-95 transition-all duration-200 transform hover:-translate-y-1">
            <Link href="../../daily_feedback">Get Started Now</Link>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
            <div className="text-center text-gray-400 text-sm">
              © 2025 PRIDaLLY. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
