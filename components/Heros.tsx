import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Heros = () => {
  return (
    <div className="min-h-[75vh] w-full relative isolate px-6 pt-14 lg:px-8">
      <div className="max-w-7xl flex flex-col-reverse lg:flex-row-reverse mx-auto items-center gap-20 sm:px-10 lg:pt-32">
        <div className="flex-1 mx-auto md:w-xl lg:w-2xl pt-0 ">
          <div className="text-start">
            <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              {/* <p className="text-xl font-medium text-pretty bg-linear-to-r from-green-400 to-blue-500 bg-clip-text text-transparent sm:text-2xl">Fullstack Developer</p> */}
              <h1 className="mt-2 font-semibold text-balance text-white text-center sm:text-start text-4xl sm:text-5xl lg:text-7xl">
                Hai, <span className="bg-clip-text bg-linear-to-r from-cyan-300 to-purple-400 text-transparent">Saya Adam</span>
              </h1>
            </motion.section>
            {/*  - React | NextJS | Laravel | NodejS */}
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
              <p className="mt-9 leading-relaxed text-gray-400 dark:text-gray-300 text-md sm:text-lg text-center sm:text-justify">
                Nama Lengkap saya <span className="text-white">Muhammad Fajar Adammullah</span>. Saya adalah seorang Fullstack Developer yang fokus pada React, NextJS, Laravel dan NodeJS dan memiliki pengalaman bekerja di bidang Fullstack
                Developer di Perusahaan Teknologi. Tujuan saya adalah meningkatkan kemampuan software engineering dan membuat solusi digital yang bermanfaat bagi banyak pengguna.
              </p>
            </motion.section>
          </div>
        </div>

        <div className="w-full min-h-[20rem] sm:min-h-[32rem] flex justify-center items-center sm:max-w-lg h-32 lg:flex-1 mt-16 sm:mt-0">
          <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
            <img src="/foto-hd.png" className="w-xs sm:w-md lg:w-2xl" />
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Heros;
