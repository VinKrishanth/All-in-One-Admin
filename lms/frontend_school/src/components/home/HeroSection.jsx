import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-pink-50 py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

const HeroContent = () => {
  return (
    <motion.div 
      className="text-center md:text-left"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 md:mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Join Our Learning Community Today
      </motion.h2>

      <motion.p
        className="text-gray-600 mb-6 md:mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Access your tutorials and resources with just a click. Sign up or log in now!
      </motion.p>

      <motion.div
        className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.button
          className="px-6 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
          whileHover={{ scale: 1.05 }}
        >
          Sign Up
        </motion.button>

        <motion.button
          className="px-6 py-3 border-2 border-gray-800 text-gray-800 rounded-full hover:bg-gray-800 hover:text-white transition"
          whileHover={{ scale: 1.05 }}
        >
          Log In
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <img
        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
        alt="People learning together"
        className="rounded-lg shadow-lg w-full"
      />
    </motion.div>
  );
};
