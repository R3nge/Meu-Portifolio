"use client"
import React from 'react'
import { motion } from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/24/solid'

const SkillText = () => {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center'>


            <h1 className="Welcome-text text-[30px]">
                Cursando Ciência da Computação (2024)
            </h1>
            <SparklesIcon className="text-[#b49bff] mr-[20px] h-5 w-5" />


        </div>


    )
}

export default SkillText