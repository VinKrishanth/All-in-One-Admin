import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainHome from '../components/home/MainHome';
import SearchSection from '../components/home/SearchSection';
import Footer from '../components/home/Footer';
import TutorialAccessSection from '../components/home/TutorialAccessSection';
import HeroSection from '../components/home/HeroSection';
import ContactForm from '../components/home/ContactForm';

export default function Home() {
  const navigate = useNavigate();
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className='overflow-x-hidden'
    >
      <MainHome />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <SearchSection />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <TutorialAccessSection />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <HeroSection />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
         <ContactForm />
      </motion.div>
      <Footer />
    </motion.div>
  );
}
