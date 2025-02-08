import { motion } from "framer-motion";

export default function TutorialAccessSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Experience seamless access to tutorials on any device, anytime, anywhere.
            </motion.h2>

            <motion.p
              className="text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Our platform is designed to provide a smooth and engaging user experience. Whether you're on a phone, tablet, or desktop, you can easily navigate through our extensive tutorial library.
            </motion.p>

            {/* Feature Cards */}
            <motion.div
              className="grid sm:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <FeatureCard
                title="Device Compatibility"
                description="Access tutorials effortlessly, regardless of the device you prefer to use."
              />
              <FeatureCard
                title="User Experience"
                description="Enjoy a responsive design that adapts to your learning style and device."
              />
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
              alt="Person using laptop"
              className="rounded-lg shadow-lg w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Reusable FeatureCard Component with Animation
const FeatureCard = ({ title, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};
