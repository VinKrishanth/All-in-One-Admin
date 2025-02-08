import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainHome from '../components/home/MainHome';
import SearchSection from '../components/home/SearchSection';
import Footer from '../components/home/Footer';
import TutorialAccessSection from '../components/home/TutorialAccessSection';
import HeroSection from '../components/home/HeroSection';

export default function Home() {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <MainHome />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <SearchSection />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <TutorialAccessSection />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
