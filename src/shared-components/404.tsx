"use client"

import React from "react";
import Link from "next/link";
import { motion } from 'framer-motion';

const PageNotFound = () => {
    return (
        <motion.section
            className="dark:bg-gray-900 w-full h-screen flex items-center justify-center"
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
        >
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="mx-auto max-w-screen-sm text-center">
                    <motion.h1
                        className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600 dark:text-purple-500"
                        initial={{ opacity: 0.9, scale: .8 }}
                        whileInView={{ opacity: 1, scale: 1.2 }}
                        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "mirror", }}
                    >
                        404
                    </motion.h1>
                    <p className="mb-4 text-3xl tracking-tight font-bold text-gray-500 md:text-4xl dark:text-white">Something&apos;s missing.</p>
                    <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the home page. </p>
                    <Link href="/" className="inline-flex text-white bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900 my-4">Back to Homepage</Link>
                </div>
            </div>
        </motion.section>

    )
};

export default PageNotFound;
