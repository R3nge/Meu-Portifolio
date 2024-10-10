"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const descriptions = [
  "Desenvolvedor",
  "Empreendedor",
  "Estudante",
];

const HeroContent = () => {
  const [currentDescription, setCurrentDescription] = useState(descriptions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDescription(prev => {
        const currentIndex = descriptions.indexOf(prev);
        const nextIndex = (currentIndex + 1) % descriptions.length;
        return descriptions[nextIndex];
      });
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Typescript Developer Web/Mobile
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          Rodrigo Gomes

          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              {currentDescription}{" "}
            </span>
          </span>
        </motion.div>
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/1ZN8eI75SXibfa9Mtf1TGymf0bpW1Maxf/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Download CV
        </motion.a>

      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
