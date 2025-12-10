import React from "react";
import { motion } from "framer-motion";
import { cardVariants, parentVariant, containerVariants } from "@/constants/motion";
import SkillExperience from "@/components/Contents/Skill";
import { experience, skill } from "@/datas/experience_skill";

const ExperienceSkill = () => {
  return (
    <motion.div id="experience" className="w-full mx-auto max-w-7xl flex flex-col items-center gap-24" initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }} variants={containerVariants}>
      <motion.div variants={cardVariants} className="max-w-2xl text-center text-white space-y-4">
        <h2 className="text-4xl font-bold uppercase">Keahlian dan Pengalaman</h2>
        <p className="text-lg">Perjalanan saya dalam membangun keahlian dan menerapkannya melalui pengalaman nyata.</p>
      </motion.div>

      <motion.div className="w-full flex flex-col lg:flex-row gap-10" variants={parentVariant} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.2 }}>
        {/* Skill */}
        <SkillExperience data={skill} w="w-full lg:w-xl" containerCard="lg:w-[26rem]" />

        {/* Experience */}
        <SkillExperience data={experience} w="w-full" />
      </motion.div>
    </motion.div>
  );
};

export default ExperienceSkill;
