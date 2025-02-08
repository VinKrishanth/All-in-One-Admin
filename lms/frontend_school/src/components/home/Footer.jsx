import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1  md:grid-cols-4 gap-8"
        >
          <FooterNewsletter />
          <FooterLinks
            title="Quick Links"
            links={["About Us", "Contact Us", "Blog Posts", "Help Center", "Careers"]}
          />
          <FooterLinks
            title="Resources"
            links={["FAQs", "User Guide", "Community", "Support", "Feedback"]}
          />
          <FooterLinks
            title="Connect With Us"
            links={["Facebook", "Instagram", "X", "LinkedIn", "YouTube"]}
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400">© 2024 Ksoftinnovation. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
              <a key={item} href="#" className="text-gray-400 hover:text-white">
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

// Newsletter Section
const FooterNewsletter = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.2 }}
      className="md:col-span-1"
    >
      <div className="flex items-center mb-6">
        <GraduationCap className="w-8 h-8 animate-bounce" />
        <span className="ml-2 text-2xl font-cursive">Logo</span>
      </div>
      <p className="text-gray-400 mb-4">
        Subscribe to our newsletter for the latest features and updates.
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Your email here"
          className="px-4 py-2 bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-rose-500"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-6 py-2 bg-rose-500 rounded-full hover:bg-rose-600 transition-colors"
        >
          Join
        </motion.button>
      </div>
      <p className="text-gray-500 text-sm mt-2">
        By subscribing, you consent to our Privacy Policy and receive updates.
      </p>
    </motion.div>
  );
};

const FooterLinks = ({ title, links }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-gray-400 hover:text-white">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};