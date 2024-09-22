"use client";

import React from 'react';
import { Button } from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface HeroProps {
    data: {
        title: string;
        paragraph: string;
        lessonBtn: string;
        hrefLesson: string;
        heroImage: string;
    };
}

const Hero: React.FC<HeroProps> = ({ data }) => {
    return (
        <section className='mt-20 xl:my-0 xl:min-h-[calc(100vh-4rem)] w-full max-w-7xl mx-auto px-4 flex items-start xl:items-center justify-between gap-20 xl:gap-1 flex-col xl:flex-row'>
            <motion.div 
                className='xl:w-[55%]'
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1 
                    className='text-4xl xl:text-6xl font-extrabold leading-snug text-purple-700'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {data.title}
                </motion.h1>
                <motion.p 
                    className='text-base xl:text-xl my-7 text-purple-600'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {data.paragraph}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Link href={data.hrefLesson}>
                        <Button
                            className="bg-green-500 text-white font-bold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
                            size="lg"
                        >
                            {data.lessonBtn}
                        </Button>
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div 
                className='xl:w-[43%] w-full h-auto aspect-square relative'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
            >
                <Image src={data.heroImage} alt='hero image' fill className='object-cover rounded-2xl shadow-lg' />
                <motion.div
                    className="absolute -top-5 -left-5 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-3xl">🚀</span>
                </motion.div>
                <motion.div
                    className="absolute -bottom-5 -right-5 bg-blue-400 rounded-full w-16 h-16 flex items-center justify-center"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <span className="text-3xl">💻</span>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;