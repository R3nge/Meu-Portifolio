"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (

        <div className='w-full h-auto flex flex-col items-center justify-center'>
            <h1 className="Welcome-text text-[40px]">

                IFSEMG Campus Rio Pomba (Pesquisa / Exntensão)
            </h1>

            <span className="text-transparent text-[30px] bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">

                Comunicação e Divulgação Científica da Informática e Computação em Meios Digitais (2021 -  2022)

            </span>

        </div>


    )
}

export default SkillText