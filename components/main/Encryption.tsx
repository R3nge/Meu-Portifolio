"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from '@heroicons/react/24/solid';

const Encryption = () => {
  return (
    <div id="Encryption" className="flex flex-col items-center justify-center min-h-screen w-full h-full ">
      <div className="relative flex flex-col items-center mb-10">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[16px] px-[14px] border border-[#7042f88b] opacity-[0.9] rounded-lg bg-[#1a1a1a] shadow-md"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-7 w-7" />
          <h1 className="Welcome-text text-[30px] font-semibold text-gray-200">
            Sobre
          </h1>
        </motion.div>
      </div>
      <div className="max-w-6x2 text-[20px] leading-relaxed text-gray-300 bg-[#1a1a1a] p-16 rounded-lg shadow-lg">
        <p className="text-[24px] font-bold mb-4">Muito prazer, sou Rodrigo Gomes.</p>
        <p>
          Moro em Rio Pomba, Minas Gerais, e sou formado em Técnico de Informática pelo IFSEMG. Atualmente, estou cursando Ciência da Computação no IFSEMG e trabalho como Desenvolvedor Full Stack em uma startup onde sou CTO e Desenvolvedor.
        </p>
        <p className="mt-4">
          Foco na área de Desenvolvimento Web e Mobile, utilizando tecnologias como React Native / Angular para o front-end e Node.js, TypeScript e PHP para o back-end, além de bancos de dados como PostgreSQL, MySQL e SQLite.
        </p>
        <p className="mt-4">
          Contudo também possuo conhecimento em deploy em plataformas como Vercel e Google Cloud.
        </p>
        <p className="mt-4">
          Este portifólio veio com o objetivo de documentar minha jornada e mostrar os projetos que venho desenvolvendo onde abaixo você poderá encontrar alguns.
        </p>
      </div>
    </div>
  );
};

export default Encryption;
