import React from "react";
import { motion } from "framer-motion";
import { Search, Box, TrendingUp, ChevronRight } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-6 rounded-xl shadow-md mb-4 inline-block">
        <Icon className="w-8 h-8 text-teal-800" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function SearchSection() {
  return (
    <section className="bg-pink-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="text-lg font-semibold mb-4">Search</h5>
          <h2 className="text-4xl font-bold mb-6">Find Your Perfect Tutorial with Ease</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our intuitive search bar and advanced filters empower you to locate the tutorials you need in seconds. No more endless scrolling—just quick access to the content that matters to you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          <FeatureCard 
            icon={Box} 
            title="Efficient Filtering for Tailored Results" 
            description="Customize your search to find exactly what you're looking for." 
          />
          <FeatureCard 
            icon={Search} 
            title="Quick Access to All Categories" 
            description="Easily browse through various tutorial categories to enhance your learning experience." 
          />
          <FeatureCard 
            icon={TrendingUp} 
            title="Stay Updated with Featured Tutorials" 
            description="Discover trending and newly added tutorials that keep you ahead." 
          />
        </div>

        <motion.div 
          className="flex justify-center mt-12 space-x-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <button className="px-8 py-3 bg-teal-800 text-white rounded-full hover:bg-teal-700 transition-colors flex items-center">
            Search
          </button>
          <button className="px-8 py-3 border-2 border-teal-800 text-teal-800 rounded-full hover:bg-teal-800 hover:text-white transition-colors flex items-center">
            Browse <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}