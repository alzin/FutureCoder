"use client";

import React from 'react';
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { motion } from 'framer-motion';

interface Feature {
    id: string;
    title: string;
    description: string;
    image: string;
}

interface FeaturesProps {
    data: {
        title: string;
        description: string;
        features: Feature[];
    };
}

const FeatureCard: React.FC<Feature> = ({ title, description, image }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
    >
        <Card shadow="sm" className="border-2 border-purple-200 hover:border-purple-400 transition-colors duration-300">
            <CardBody className="overflow-visible p-0">
                <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={title}
                    className="w-full object-cover h-[200px]"
                    src={image}
                />
            </CardBody>
            <CardFooter className="flex-col items-start">
                <h3 className="font-bold text-xl text-purple-700 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </CardFooter>
        </Card>
    </motion.div>
);

const Features: React.FC<FeaturesProps> = ({ data }) => {
    return (
        <section id="Features" className="mt-20 w-full max-w-7xl mx-auto px-4">
            <motion.h2 
                className="text-4xl font-black text-center text-purple-800 max-w-xl leading-[50px] mx-auto mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {data.title}
            </motion.h2>
            <motion.p 
                className="text-lg text-center mx-auto py-5 max-w-2xl leading-7 text-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                {data.description}
            </motion.p>
            <motion.div 
                className="gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                {data.features.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * (index + 1) }}
                    >
                        <FeatureCard {...item} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Features;