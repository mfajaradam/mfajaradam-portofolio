// /* eslint-disable react-hooks/purity */
// "use client";

// import { motion } from "framer-motion";
// import React from "react";

// interface FloatingOrbsProps {
//   count?: number; // jumlah orb
// }

// const FloatingOrbs: React.FC<FloatingOrbsProps> = ({ count = 6 }) => {
//   const orbs = Array.from({ length: count });

//   return (
//     <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
//       {orbs.map((_, i) => {
//         const size = Math.floor(Math.random() * 250) + 180; // 180–430px
//         const top = Math.random() * 80; // %
//         const left = Math.random() * 80; // %
//         const delay = Math.random() * 4;
//         const duration = Math.random() * 6 + 6;

//         return (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0 }}
//             animate={{
//               opacity: [0.15, 0.35, 0.15],
//               y: [-20, 20, -20],
//               x: [-10, 10, -10],
//             }}
//             transition={{
//               duration,
//               repeat: Infinity,
//               repeatType: "mirror",
//               ease: "easeInOut",
//               delay,
//             }}
//             className="
//               absolute rounded-full blur-[110px]
//               bg-gradient-to-br from-[#6EE7FF] via-[#A855F7] to-[#FF80B5]
//             "
//             style={{
//               width: `${size}px`,
//               height: `${size}px`,
//               top: `${top}%`,
//               left: `${left}%`,
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default FloatingOrbs;
