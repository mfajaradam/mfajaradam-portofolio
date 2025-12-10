import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { containerVariants, item, float, cardVariants, container } from "@/constants/motion";

type Teknologis = {
  logos: {
    title: string;
    path: ReactNode;
    color: string;
  }[];
};

const Tecnology: React.FC<Teknologis> = ({ logos }) => {
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={containerVariants} id="teknologi" className="h-full flex flex-col items-center gap-14 pb-12 pt-3 shadow-[0 0 20px 5px rgba(0,0,0,0.1)]">
      <motion.div variants={cardVariants} className="max-w-xl text-center text-white space-y-4">
        <h2 className="text-4xl font-bold uppercase">Teknologi</h2>
        <p className="text-lg">Teknologi dan tools yang saya gunakan dalam membangun aplikasi web, mulai dari frontend, backend, hingga database.</p>
      </motion.div>
      <div className="h-[65%] sm:max-w-xl lg:max-h-1/2 lg:max-w-4xl bg-gray-800 px-10 py-14 rounded-4xl bg-[radial-gradient(circle_at_center,rgba(0,199,255,0.4),transparent_70%)] shadow-xl">
        {/* flex flex-wrap items-center justify-center */}
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} className="flex flex-wrap justify-center gap-20 px-4">
          {logos.map((logo, i) => (
            <motion.div
              variants={item}
              key={i}
              whileHover={{
                scale: 1.15,
                rotate: 3,
                filter: "drop-shadow(0px 0px 12px rgba(255,255,255,0.5))",
                transition: { type: "spring", stiffness: 200, damping: 10 },
              }}
              animate={float.animate} // floating animation
              className="h-20 w-20 flex flex-col items-center gap-2 cursor-pointer"
            >
              {logo.path}
              <span className={`text-xl font-semibold text-[${logo.color}]`}>{logo.title}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Tecnology;
