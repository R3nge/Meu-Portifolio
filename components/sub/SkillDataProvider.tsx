"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
  src: string;
  width: number;
  height: number;
  index: number;
  skill_name: string;
}

const SkillDataProvider = ({ src, width, height, index, skill_name }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const hoverEffect = {
    rest: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, opacity: 1 },
  };

  const nameVariants = {
    hidden: { opacity: 0 },
    hover: { opacity: 1 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={imageVariants}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <motion.div
        variants={hoverEffect}
        initial="rest"
        whileHover="hover"
        className="relative"
      >
        <Image
          src={src}
          width={width}
          height={height}
          alt={`skill image - ${skill_name}`}
          className="rounded-lg"
        />
      </motion.div>

      {/* Exibir o nome da skill ao passar o mouse */}
      <motion.span
        className="text-center mt-2 text-white"
        variants={nameVariants}
        initial="hidden"
        whileHover="hover"
        transition={{ duration: 0.3 }}
      >
        {skill_name}
      </motion.span>
    </motion.div>
  );
};

export default SkillDataProvider;
