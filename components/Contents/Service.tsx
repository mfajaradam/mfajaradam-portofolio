import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "@/constants/motion";

type Services = {
  services: {
    title: string;
    icon: ReactNode;
    description: string;
  }[];
};

const Service: React.FC<Services> = ({ services }) => {
  return (
    <motion.div id="service" className="w-full max-w-7xl mx-auto flex flex-col gap-20" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={containerVariants}>
      {/* Title */}
      <motion.div className="max-w-xl mx-auto space-y-4 text-white text-center" variants={cardVariants}>
        <h2 className="text-4xl font-bold uppercase">Service</h2>
        <p className="text-md sm:text-lg">Layanan yang saya tawarkan dalam pengembangan aplikasi web, mulai dari desain antarmuka, pembuatan sistem backend yang fungsional dan efisien hingga integrasi database yang stabil.</p>
      </motion.div>

      {/* Cards */}
      <motion.div className="flex gap-6 flex-wrap justify-center" variants={containerVariants}>
        {Array.isArray(services) &&
          services.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.15, // efek stagger manual
              }}
              whileHover={{
                scale: 1.05,
                y: -6,
                boxShadow: "0 8px 28px rgba(255,255,255,0.15)",
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              whileTap={{ scale: 0.98 }}
              className="
                    bg-gray-800 p-6 rounded-4xl flex flex-col gap-5 items-center 
                    text-white text-center w-full md:w-2xl lg:w-96 min-h-52
                    transition-all duration-300
                  "
            >
              {item.icon}
              <h3 className="font-semibold text-2xl">{item.title}</h3>
              <p className="w-full text-lg">{item.description}</p>
            </motion.div>
          ))}
      </motion.div>
    </motion.div>
  );
};

export default Service;
