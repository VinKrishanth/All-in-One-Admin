import React from "react";
import { motion } from "framer-motion";
import { MdOutlineVerified } from "react-icons/md";

const AboutAs = () => {
  return (
    <section id="aboutAs" className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center my-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full lg:w-1/2 mb-8 lg:mb-0 "
        >
         
          <img
            alt="Group of students studying together"
            className="relative w-full h-[80vh] object-cover mt-8 cursor-pointer"
            src="https://storage.googleapis.com/a1aa/image/hROPksg_PgQGiHCg6ax005BB4E3SZ2Y37TWNFLTsu_8.jpg"
            width="600"
            height="300"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 lg:pl-12"
        >
          <h2 className="text-red-500 text-lg font-bold mb-2">ABOUT US</h2>
          <h1 className="text-4xl font-bold mb-4 uppercase">WELCOME TO Raavanaa</h1>
          <p className="text-gray-600 mb-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient to montes.
          </p>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.3 } },
            }}
          >
            {[
              "Trending Courses",
              "Certified Teachers",
              "Books & Libraries",
              "Online Course",
              "Students Portal",
              "Lab Facilities",
            ].map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex items-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <MdOutlineVerified className="text-red-500 mr-2" />
                <span>{feature}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <img
              alt="Vinyagamoorthi Krishanth"
              className="w-16 h-16 rounded-full mr-4"
              src="https://councils.forbes.com/profile/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcco-avatars%2F42d15a17-31b2-4c7b-a515-10a78fd49c87.png&w=384&q=75"
              width="100"
              height="100"
            />
            <div>
              <h3 className="text-xl font-bold">Vinyagamoorthi Krishanth</h3>
              <p className="text-gray-600">Chairman and Founder</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutAs;
