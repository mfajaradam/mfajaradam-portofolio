import clsx from "clsx";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cardVariants, listVariant } from "@/constants/motion";

type Skills = {
  data: {
    color?: string;
    topTitle: string;
    title: string;
    subtitle?: string | ReactNode;
  }[];
  className?: string;
  w?: string;
  containerCard?: string;
};

// const cardVariant = {
//   hidden: { opacity: 0, y: 30, scale: 0.97 },
//   show: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       duration: 0.5,
//       ease: [0.42, 0, 0.58, 1] as Easing,
//     },
//   },
// };


const SkillExperience = ({ data, className, w, containerCard }: Skills) => {
  return (
    <motion.div className={clsx("flex flex-col items-start gap-5", className, w)} variants={listVariant}>
      {Array.isArray(data) &&
        data.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              scale: 1.03,
              y: -4,
              boxShadow: `
                0 0 12px rgba(0, 255, 255, 0.25),
                0 0 24px rgba(0, 255, 255, 0.15),
                0 0 48px rgba(0, 255, 255, 0.08)
            `,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className={clsx(
              `
                w-full
                relative bg-gray-800  space-y-6 py-3 px-6 rounded-xl transition-all duration-300
                before:absolute before:inset-0 before:rounded-xl
                before:bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.18),transparent_70%)]
                before:blur-[40px] before:-z-10
            `,
              containerCard
            )}
          >
            <div className="mb-4">
              <span className={clsx(item.color ?? "text-red-400")}>{item.topTitle}</span>
              <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
            </div>
            <span className="text-lg">{item.subtitle}</span>
          </motion.div>
        ))}
    </motion.div>
  );
};

export default SkillExperience;
